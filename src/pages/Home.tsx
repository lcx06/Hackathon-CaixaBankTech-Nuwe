import {IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
    return (<>
        <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
        </IonHeader>
        <ExploreContainer/>
    </>);
};

export default Home;