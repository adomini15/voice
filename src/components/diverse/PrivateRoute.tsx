import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";


const PrivateRoute:React.FC<{
    path:any,
    component: any
}> = (props:any) => {
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

    return <>
        {isAuthenticated != undefined && (
            isAuthenticated ? <Route {...props} />
                : <Redirect to="/signin"/>
        )}

    </>
}

export  default PrivateRoute;