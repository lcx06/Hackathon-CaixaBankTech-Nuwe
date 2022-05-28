import {IonBreadcrumb, IonBreadcrumbs} from '@ionic/react';
import './Home.css';
import {Capacitor} from "@capacitor/core";
import {getRouterInfo} from "../router";
import LastYearTransactions from "../components/LastYearTransactions";
import {getTransactions} from "../api/transactions";
import {useEffect, useState} from "react";
import TransactionGroup from "../components/TransactionGroup";

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
        <TransactionGroup transactions={transactions} />
        <LastYearTransactions transactions={transactions} />
    </>);
};

export default Home;