import {useSelector} from "react-redux";
import Dashboard from "../../pages/Dashboard";

const PrivateRoute:React.FC = () => {
    const authUser = useSelector((state:any) => state.auth.user);

    return <></>
}

export  default PrivateRoute;