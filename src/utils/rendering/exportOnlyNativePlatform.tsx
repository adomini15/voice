import {Capacitor} from "@capacitor/core";
import React from "react";

// export default function exportOnlyNativePlatform (Component: any) {
//
//     return class extends React.Component<any, any> {
//         render() {
//             return (Capacitor.isNativePlatform() ? <Component {...this.props} /> : <></>)
//         }
//     }
//
// }

export default function exportOnlyNativePlatform (Component: any) {
    return (props:any) => {
        return (Capacitor.isNativePlatform() ? <Component {...props} /> : <></>)
    }

}
