import {IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

// formik
import {Formik, Field, ErrorMessage, Form, FormikProps, FormikValues, FormikHelpers} from "formik"
// yup for validation
import * as yup from "yup"
// style file
import './index.css';
import Message from "../../components/Message/Message";
import CustomForm from "../../components/Form/CustomForm";
import {useDispatch, useSelector} from "react-redux";
import {authSignUpRequested} from "../../actions/authActions";
import {User} from "../../types/User";
import {useEffect} from "react";

// creating validation schema
const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

// Form initial values
const initialValues = {
    email: '',
    password: ''
}

// Login Page
const Signup: React.FC = () => {
    // maneging global store
    const dispatch = useDispatch();
    const signupErrorState = useSelector((state:any) => state.auth.error )

    useEffect(() => {
        if(signupErrorState) {
            Object.values(signupErrorState).forEach(([field, message]:any) => {
                setFieldError(field, message);
            });
        }
    }, [signupErrorState]);


    const handleOnSubmit = (values: any, formikHelpers: FormikHelpers<FormikValues>) => {
        const { setFieldError, setSubmitting } = formikHelpers;

        (async function () {
            try {
                const user:User = values as User;
                dispatch(authSignUpRequested(user))
            } catch (err) {

            } finally {
                setSubmitting(false)
            }
        })();

    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Sign Up</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <CustomForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}>

                {(props:any) => (
                    <Form>
                        <IonItem>
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email"/>
                        </IonItem>
                        <ErrorMessage name="email" component={() => <Message message={props.errors.email!} color="danger" />} />

                        <IonItem>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password"/>
                        </IonItem>
                        <ErrorMessage name="password" component={() => <Message message={props.errors.password!} color="danger" />} />

                        <div className="ion-padding">
                            <IonButton type="submit" expand="full" disabled={!props.isValid || props.isSubmitting}>Submit</IonButton>
                        </div>
                    </Form>
                )}

            </CustomForm>
        </IonContent>
    </IonPage>
}

export default  Signup;