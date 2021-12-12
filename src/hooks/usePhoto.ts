import {useState} from "react";
// Capacitor Camera
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera"
import {convertPathToBlob} from "../utils/upload/convertPathToBlob";

export const usePhoto = () => {
    const [photo, setPhoto] = useState<Blob>();
    const [loadingPhoto, setLoadingPhoto] = useState(false);

    const takePhoto = async () =>{
        try {
            setLoadingPhoto(true)
            const camera = await Camera.getPhoto({
                quality: 200,
                resultType: CameraResultType.Uri,
                source: CameraSource.Photos,
            });

            console.log('hey')

            if (camera.webPath) {
                const imageBlob = await convertPathToBlob(camera.webPath);
                setPhoto(imageBlob)
                return
            }

            throw 'Image Not Selected'
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingPhoto(false)
        }
    }

    return {
        photo,
        takePhoto,
        loadingPhoto
    }
}