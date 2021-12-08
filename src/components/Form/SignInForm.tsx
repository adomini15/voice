import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {IonButton, IonInput, IonItem, IonLabel, IonSpinner} from "@ionic/react";

import Message from "../Message/Message";
import {User} from "../../types/User";
import {authSignInRequested} from "../../actions/authActions";


// Form initial values
const initialValues: User = {
    email: '',
    password: ''
}

const SignInForm: React.FC<{
    history: any
}> = ({ history }) => {
    // maneging global store
    const dispatch = useDispatch();
    const signInError = useSelector((state:any) => state.auth.error );
    const loading = useSelector((state:any) => state.auth.loading);

    // handlers
    const onSubmit = (user: User) => {
        setSubmitting(true)
        dispatch(authSignInRequested(user));
    }

    // implementing Formik in hook
    const {
        values,
        errors,
        setFieldError,
        setSubmitting,
        isSubmitting,
        isValid,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues,
        onSubmit
    });

    // effect occurred when form is submitting
    useEffect(() => {
        if(signInError !== undefined) {
            try {
                // when occurred server error
                if (signInError) throw signInError;

                // when success
                history.push('/home')

            } catch (error) {

                // when FormatFirebaseError is involved
                if('field' in signInError && 'message' in signInError) {
                    setFieldError(signInError.field, signInError.message)
                } else {
                    // default treatment
                    console.log(error);
                }

            } finally {
                // restart isSubmitting to false
                setSubmitting(false);
            }
        }

    }, [signInError]);

    return <form onSubmit={handleSubmit}>
        <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text"
                      id="email"
                      name="email"
                      onIonChange={handleChange}
                      value={values.email}

            />
        </IonItem>
        {
            errors.email &&
            <Message message={errors.email!} color="danger" />
        }

        <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"
                      id="password"
                      name="password"
                      onIonChange={handleChange}
                      value={values.password}
            />

        </IonItem>
        {
            errors.password &&
            <Message message={errors.password!} color="danger" />
        }

        <div className="ion-padding">
            <IonButton type="submit" expand="full" disabled={!isValid || isSubmitting}>{ loading ? <IonSpinner name="crescent"/> : 'Submit'}</IonButton>
        </div>

    </form>
}

export default SignInForm;