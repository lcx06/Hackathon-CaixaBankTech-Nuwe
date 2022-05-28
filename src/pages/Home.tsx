import {IonBreadcrumb, IonBreadcrumbs, IonCol, IonGrid, IonRow} from '@ionic/react';
import './Home.css';
import {Capacitor} from "@capacitor/core";
import {getRouterInfo} from "../router";
import LastYearTransactions from "../components/LastYearTransactions";
import {getTransactions} from "../api/transactions";
import {useEffect, useState} from "react";
import TransactionGroup from "../components/TransactionGroup";
import ConversionCard from "../components/ConversionCard";

const Home: React.FC = () => {
    const route = getRouterInfo('/home');

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // TODO Add catch
        getTransactions().then((res) => setTransactions(res.data));
    }, [])

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

        { /* Content native */}
        {Capacitor.isNativePlatform() && <>
            <TransactionGroup transactions={transactions}/>
            <LastYearTransactions transactions={transactions}/>
        </>}

        { /* Content web */}
        {!Capacitor.isNativePlatform() && <IonGrid>
            <IonRow>
                <IonCol>
                    <IonRow>
                        <TransactionGroup transactions={transactions}/>
                    </IonRow>
                    <IonRow>
                        <ConversionCard transactions={transactions}/>
                    </IonRow>

                </IonCol>
                <IonCol>

                </IonCol>
            </IonRow>
        </IonGrid>}

    </>);
};

export default Home;