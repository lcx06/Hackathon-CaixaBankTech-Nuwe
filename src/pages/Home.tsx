import {IonBreadcrumb, IonBreadcrumbs, IonCol, IonGrid, IonRow, useIonToast} from '@ionic/react';
import './Home.css';
import {Capacitor} from "@capacitor/core";
import {getRouterInfo} from "../router";
import LastYearTransactions from "../components/LastYearTransactions";
import {getTransactions} from "../api/transactions";
import {useEffect, useState} from "react";
import TransactionGroup from "../components/TransactionGroup";
import ConversionCard from "../components/ConversionCard";
import WeeklyExpensesCard from "../components/WeeklyExpensesCard";

const Home: React.FC = () => {
    const route = getRouterInfo('/home');
    const [present] = useIonToast();

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions()
            .then((res) => setTransactions(res.data))
            .catch(() => present('There was an error loading the transactions', 3000));
    }, [present])

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
                <IonCol sizeMd={'4'}>
                    <IonRow>
                        <TransactionGroup transactions={transactions}/>
                    </IonRow>
                    <IonRow>
                        <ConversionCard transactions={transactions}/>
                    </IonRow>

                </IonCol>
                <IonCol sizeMd={'8'}>
                    <WeeklyExpensesCard />
                </IonCol>
            </IonRow>
        </IonGrid>}

    </>);
};

export default Home;