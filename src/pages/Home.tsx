import {IonBreadcrumb, IonBreadcrumbs} from '@ionic/react';
import './Home.css';
import {Capacitor} from "@capacitor/core";
import {getRouterInfo} from "../router";

const Home: React.FC = () => {
    const route = getRouterInfo('/home');

    return (<>
        {!Capacitor.isNativePlatform() && <IonBreadcrumbs>
            {route.breadcrumbs && route.breadcrumbs.map(breadcrumb => (
                <IonBreadcrumb key={breadcrumb}>
                    {breadcrumb}
                </IonBreadcrumb>
            ))}
        </IonBreadcrumbs>}
        {Capacitor.isNativePlatform() && <div className={"component-header"}>
            <h4>{route.content_title}</h4>
            <span>{route.content_subtitle}</span>
        </div>}
    </>);
};

export default Home;