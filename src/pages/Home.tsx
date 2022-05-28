import {IonBreadcrumb, IonBreadcrumbs} from '@ionic/react';
import './Home.css';
import {Capacitor} from "@capacitor/core";

const Home: React.FC = () => {
    return (<>
        {!Capacitor.isNativePlatform() && <IonBreadcrumbs>
            <IonBreadcrumb>
                Dashboard
            </IonBreadcrumb>
        </IonBreadcrumbs>}
    </>);
};

export default Home;