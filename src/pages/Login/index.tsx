import {IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

// formik
import { Formik, Field, ErrorMessage, Form, useFormik } from "formik"
// yup for validation
import * as yup from "yup"
// style file
import './index.css';
import Message from "../../components/Message/Message";

// creating validation schema
const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

// Login Page
const Login: React.FC = () => {


    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={() => validationSchema}
                onSubmit={(values, { setFieldError, setSubmitting }) => {

                    (async function () {
                        try {

                            // handling fetch errors
                            if(values.password != 'carlo1997') {
                                setFieldError('password', 'Password not equals to carlo1997');
                            }

                        } catch (err) {

                        } finally {
                            setSubmitting(false)
                        }
                    })();

                }}

            >

                {({errors, isValid, isSubmitting}) => (
                    <Form>
                        <IonItem>
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email"/>
                        </IonItem>
                        <ErrorMessage name="email" component={() => <Message message={errors.email!} color="danger" />} />

                        <IonItem>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password"/>
                        </IonItem>
                        <ErrorMessage name="password" component={() => <Message message={errors.password!} color="danger" />} />

                        <div className="ion-padding">
                            <IonButton type="submit" expand="full" disabled={!isValid || isSubmitting}>Submit</IonButton>
                        </div>
                    </Form>
                )}

            </Formik>
        </IonContent>
    </IonPage>
}

export default  Login;