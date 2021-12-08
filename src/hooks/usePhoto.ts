import {useState} from "react";
// Capacitor Camera
import { Camera } from "@capacitor/camera"

export const usePhoto = () => {
    const [photo, setPhoto] = useState<Blob>();

    const convertPathToBlob = async (url: string) => {
        const response = await fetch(url);
        return await response.blob();
    }

    const takePhoto = async () =>{
        const camera = await Camera.pickImages({
            limit: 1,
            quality: 90
        });

        const pathToBlob = await convertPathToBlob(camera.photos[0].webPath);

        setPhoto(pathToBlob)
    }

    return {
        photo,
        takePhoto
    }
}