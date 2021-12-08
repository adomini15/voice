import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {IonAvatar, IonButton, IonInput, IonItem, IonLabel, IonSpinner} from "@ionic/react";

import Message from "../Message/Message";
import {authUpdateProfileRequested} from "../../actions/authActions";
import ChooseImage from "../File/ChooseImage";
import {Profile} from "../../types/Profile";

const initialValues:Profile = {}

const ProfileForm: React.FC<{
    history: any
}> = ({ history }) => {
    const dispatch = useDispatch();

    // maneging global store
    const authUser = useSelector((state:any) => state.auth.user)
    const profileError = useSelector((state:any) => state.auth.error );
    const loading = useSelector((state:any) => state.auth.loading);

    // local state
    const [capturedPhoto, setCapturedPhoto] = useState<Blob>()

    // handlers
    const onSubmit = ({ displayName}:Profile) => {
        setSubmitting(true)
        dispatch(authUpdateProfileRequested({
            displayName,
            photo: capturedPhoto,
            filename: `${authUser.uid}_avatar.jpg`
        }));
    }

    const onCapturePhoto = (photo: Blob) => {
        setCapturedPhoto(photo);
    }

    // implementing Formik in hook
    const {
        values,
        errors,
        setFieldError,
        setFieldValue,
        setSubmitting,
        isSubmitting,
        isValid,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues,
        onSubmit
    });

    // when charge user
    useEffect(() => {
        if(authUser) {
            setFieldValue('displayName', authUser.displayName)
            setFieldValue('photoURL', authUser.photoURL)
        }
    }, [authUser]);

    // when form is submitting
    useEffect(() => {
        if(profileError !== undefined) {
            try {
                // when occurred server error
                if (profileError) throw profileError;

                // when success
                history.push('/home')

            } catch (error) {

                // when FormatFirebaseError is involved
                if('field' in profileError && 'message' in profileError) {
                    setFieldError(profileError.field, profileError.message)
                } else {
                    // default treatment
                    console.log(error);
                }

                console.log(error);

            } finally {
                // restart isSubmitting to false
                setSubmitting(false);
            }
        }

    }, [profileError]);


    return <form onSubmit={handleSubmit}>

        <IonItem>
            <IonAvatar slot="start">
                <img src={values.photoURL!} />
            </IonAvatar>
            <ChooseImage onChange={onCapturePhoto} />
        </IonItem>
        {
            errors.photoURL &&
            <Message message={errors.photoURL!} color="danger" />
        }

        <IonItem>
            <IonLabel position="floating">Display Name</IonLabel>
            <IonInput type="text"
                      id="displayName"
                      name="displayName"
                      onIonChange={handleChange}
                      value={values.displayName}
            />
        </IonItem>
        {
            errors.displayName  &&
            <Message message={errors.displayName!} color="danger" />
        }
        <div className="ion-padding">
            <IonButton type="submit" expand="full" disabled={!isValid || isSubmitting}>{ loading ? <IonSpinner name="crescent"/> : 'Submit'}</IonButton>
        </div>
    </form>

}

export default ProfileForm;