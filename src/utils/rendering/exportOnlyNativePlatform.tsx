import {Capacitor} from "@capacitor/core";

export const exportOnlyNativePlatform: JSX.Element = (component: JSX.Element) => {
    if (Capacitor.isNativePlatform()) {

    }

    return <></>
}