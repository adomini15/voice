import {useEffect, useState} from "react";
// Capacitor Camera
import { Camera } from "@capacitor/camera"
import {convertPathToBlob} from "../utils/upload/convertPathToBlob";

export const usePhoto = () => {
    const [photo, setPhoto] = useState<Blob>();

    const takePhoto = async () =>{
        const camera = await Camera.pickImages({
            limit: 1,
            quality: 90
        });

        const imageBlob = await convertPathToBlob(camera.photos[0].webPath);
        setPhoto(imageBlob)
    }

    return {
        photo,
        takePhoto,
    }
}