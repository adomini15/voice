import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {firebaseConfig} from "../../.firebaseConfig";

export class FirebaseStorageHelper {
     private constructor() {}

     static async uploadImage(image:Blob, filename:string) : Promise<string>  {
        try {
            const storage = getStorage(initializeApp(firebaseConfig));
            const storageRef = ref(storage, `images/${filename}`)
            await uploadBytes(storageRef, image, {
                contentType: "image/jpeg",
            });

            return await getDownloadURL(storageRef)
        } catch (error) {
            throw error;
        }
     }
}
