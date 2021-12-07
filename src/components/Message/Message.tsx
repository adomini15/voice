import { warning, checkmarkCircle, closeCircle } from "ionicons/icons";
import {IonIcon, IonText} from "@ionic/react";

const icons = {
    success: checkmarkCircle,
    warning: warning,
    danger: closeCircle
}

const applyStyle = (color: string) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    gap: '0.5rem',
    color: `var(--ion-color-${color})`,
})

const Message: React.FC<{
    message: string,
    color: 'success' | 'warning' | 'danger'
}> = ({ message, color}) => {

    console.log(message)
    return <div style={applyStyle(color)}>
            <IonIcon icon={icons[color]} />
            <IonText>
                {message}
            </IonText>
        </div>

}

export default Message;