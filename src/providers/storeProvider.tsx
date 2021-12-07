import {Provider} from "react-redux";
// store from redux
import {store} from "../context/redux/store";

// Global store provider
const StoreProvider: React.FC = ({children}) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

export default StoreProvider;