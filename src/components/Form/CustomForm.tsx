import { Formik, FormikProps, FormikValues} from "formik";
import PropTypes from "prop-types";

const CustomForm:React.FC<{
    validationSchema: any,
    onSubmit: any,
    initialValues: any,
    children: any
}> = ({ validationSchema, onSubmit, initialValues, children }) => {
    return <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchema}
        onSubmit={onSubmit} >

        {(props:FormikProps<FormikValues>) => (
            children(props)
        )}

    </Formik>
}

CustomForm.propTypes = {
    children: PropTypes.func.isRequired
}

export default CustomForm;