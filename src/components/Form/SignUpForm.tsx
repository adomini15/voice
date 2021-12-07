import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {User} from "../../types/User";
import {authSignUpRequested} from "../../actions/authActions";
import * as yup from "yup";
import {IonButton, IonInput, IonItem, IonLabel} from "@ionic/react";
import Message from "../Message/Message";

// creating validation schema
const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

// Form initial values
const initialValues: User = {
    email: '',
    password: ''
}

const SignUpForm: React.FC = () => {
    // maneging global store
    const dispatch = useDispatch();
    const signUpError = useSelector((state:any) => state.auth.error );

    // handlers
    const onSubmit = (user: User) => {
        setSubmitting(true)
        dispatch(authSignUpRequested(user));
    }

    // implementing Formik in hook
    const {
        values,
        errors,
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

    useEffect(() => {
        if(signUpError && isSubmitting) {
            try {
                if('field' in signUpError && 'message' in signUpError) {
                    setFieldError(signUpError.field, signUpError.message)
                }
            } catch (error) {
                console.log(error);
            } finally {
               setSubmitting(false);
            }
        }

    }, [signUpError, isSubmitting]);

    return <form onSubmit={handleSubmit}>
        <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text"
                   id="email"
                   name="email"
                   onIonChange={handleChange}
                   onIonBlur={handleBlur}
                   value={values.email}

            />
        </IonItem>
        {
            errors.email && touched.email &&
            <Message message={errors.email!} color="danger" />
        }

        <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"
                      id="password"
                      name="password"
                      onIonChange={handleChange}
                      onIonBlur={handleBlur}
                      value={values.password}
            />

        </IonItem>
        {
            errors.password && touched.password &&
            <Message message={errors.password!} color="danger" />
        }

        <div className="ion-padding">
            <IonButton type="submit" expand="full" disabled={!isValid || isSubmitting}>Submit</IonButton>
        </div>

    </form>
}

export default SignUpForm;