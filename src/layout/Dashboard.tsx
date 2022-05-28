import './Dashboard.css';
import {IonContent, IonHeader, IonPage, IonToolbar} from "@ionic/react";
import {FunctionComponent} from "react";
import {Capacitor} from "@capacitor/core";

interface ContainerProps {
    component: FunctionComponent;
}

const Dashboard: React.FC<ContainerProps> = (props) => {

    return (
        <IonPage>
            <IonHeader className={"ion-no-border"}>
                <IonToolbar className={Capacitor.isNativePlatform() ? "logo-native" : ""}>
                    <img className={"logo-neo"} src={"/assets/icon/logo_first.png"} alt={"Logo"} />
                    <span className={"logo-banks " + (Capacitor.isNativePlatform() ? "logo-banks-native" : "")}>BANKS</span>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <props.component {...props} />
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;