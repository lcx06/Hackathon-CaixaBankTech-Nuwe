import './Dashboard.css';
import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar} from "@ionic/react";
import {FunctionComponent} from "react";
import {Capacitor} from "@capacitor/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartSimple, faCompass, faUser} from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
    component: FunctionComponent;
}

const Dashboard: React.FC<ContainerProps> = (props) => {

    return (
        <IonPage>
            <IonHeader className={"ion-no-border"}>
                <IonToolbar className={"logo-toolbar"}>
                    <img className={"logo-neo"} src={"/assets/icon/logo_first.png"} alt={"Logo"} width={69} height={24} />
                    <span className={"logo-banks " + (Capacitor.isNativePlatform() ? "logo-banks-native" : "")}>BANKS</span>
                    {!Capacitor.isNativePlatform() && <div className={"toolbar-right"}>
                        <object type="image/svg+xml" data={"/assets/svg/cog.svg"} className={"toolbar-right-icon"} />
                    </div>}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <props.component {...props} />
            </IonContent>
            {Capacitor.isNativePlatform() && <div className={"footer"}>
                <IonGrid>
                    <IonRow className={"footer-items"}>
                        <IonCol className={"selected"}>
                            <FontAwesomeIcon icon={faChartSimple} size={"lg"}/>
                        </IonCol>
                        <IonCol>
                            <FontAwesomeIcon icon={faCompass} size={"lg"}/>
                        </IonCol>
                        <IonCol>
                            <FontAwesomeIcon icon={faUser} size={"lg"}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>}
        </IonPage>
    );
};

export default Dashboard;