import {Capacitor} from "@capacitor/core";
import React from "react";

export default function exportOnlyNativePlatform (Component: any) {
    return (props:any) => {
        return (Capacitor.isNativePlatform() ? <Component {...props} /> : <></>)
    }

}
