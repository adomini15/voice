import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {TEvent} from "../../types/TEvent";
import {eventCreateRequested} from "../../actions/eventActions";
import * as yup from "yup";
import {useEffect, useState} from "react";
import {IonButton, IonDatetime, IonInput, IonItem, IonSpinner, IonTextarea} from "@ionic/react";
import Message from "../Message/Message";
import SpeechToTextRecorder from "../speaker/SpeechToTextRecorder";
import SelectText from "../diverse/SelectText";
import Map from "../Map/Map";
import {Coordinates} from "../../types/Coordinates";

// creating validation schema
const validationSchema = yup.object().shape({
    id: yup.string().nullable(),
    title: yup.string().max(45).min(15).required(),
    description: yup.string().max(95).min(25).required(),
})

const EventForm: React.FC<{
    history: any,
    initialValues: TEvent,
    eventDispatchAction: Function
}> = ({ history, initialValues, eventDispatchAction }) => {
    const dispatch = useDispatch();

    // maneging global store
    const eventError = useSelector((state:any) => state.event.error);
    const loading = useSelector((state:any) => state.event.loading);

    // local states
    const [titleHints, setTitleHints] = useState<string[]>([]);
    const [descriptionHints, setDescriptionHints] = useState<string[]>([]);

    // handlers
    const onSubmit = (event: TEvent) => {
        setSubmitting(true);

        dispatch(eventDispatchAction({ ...event}));
    }

    // implementing Formik in hook
    const {
        values,
        errors,
        setFieldValue,
        setFieldError,
        setSubmitting,
        isSubmitting,
        isValid,
        touched,
        handleSubmit,
        handleChange,
        handleBlur
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    // effect occurred when form is submitting
    useEffect(() => {

        if(eventError !== undefined) {
            try {
                // when occurred server error
                if (eventError) throw eventError;

                // when success
                // history.push('/')

            } catch (error) {

                // when FormatFirebaseError is involved
                if('field' in eventError && 'message' in eventError) {
                    setFieldError(eventError.field, eventError.message)
                } else {
                    // default treatment
                    console.log(error);
                }

            } finally {
                // restart isSubmitting to false
                setSubmitting(false);
            }
        }

    }, [eventError]);

    return <form onSubmit={handleSubmit}>
        <Map defaultCoordinates={ values.coordinates } onChange={(coordinates:Coordinates) => { setFieldValue('coordinates', coordinates) }}  />
        <IonItem>
            <IonInput type="text"
                      placeholder="Title"
                      id="title"
                      name="title"
                      onIonChange={handleChange}
                      onIonBlur={handleBlur}
                      value={values.title}
                      maxlength={45}
            />

            <div item-right>
                <SpeechToTextRecorder onChange={(results:any) => { setTitleHints(results)  }} ></SpeechToTextRecorder>
            </div>
        </IonItem>
        { errors.title && touched.title && <Message message={errors.title!} color="danger" /> }
        <SelectText onChange={(selectedText:any) => setFieldValue('title', selectedText)} elements={titleHints} />

        <IonItem>
            <IonInput type="text"
                      placeholder="Description"
                      id="description"
                      name="description"
                      onIonChange={handleChange}
                      onIonBlur={handleBlur}
                      value={values.description}
                      maxlength={95}
            />

            <div item-right>
                <SpeechToTextRecorder onChange={(results:any) => { setDescriptionHints(results)  }} ></SpeechToTextRecorder>
            </div>
        </IonItem>
        { errors.description && touched.description && <Message message={errors.description!} color="danger" /> }
        <SelectText onChange={(selectedText:any) => setFieldValue('description', selectedText)} elements={descriptionHints} />

        <IonItem>
            <IonDatetime placeholder="Arrival Time"
                         id="arrival_time"
                         name="arrival_time"
                         displayFormat="DD-MM-YYYY h:mm a"
                         onIonChange={handleChange}
                         onIonBlur={handleBlur}
                         value={ values.arrival_time }
            />
        </IonItem>
        <div className="ion-padding">
            <IonButton type="submit" expand="full" disabled={!isValid || isSubmitting}>{ loading ? <IonSpinner name="crescent"/> : 'Submit'}</IonButton>
        </div>

    </form>
}

export default EventForm;