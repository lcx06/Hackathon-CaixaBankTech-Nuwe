import './TransactionGroup.css'

import {IonCard, IonCardContent} from "@ionic/react";
import {Transaction} from "../api/transactions";
import {useMemo} from "react";

interface ContainerProps {
    transactions: Transaction[];
}

const TransactionGroup: React.FC<ContainerProps> = ({transactions}) => {
    const monthTransactions = useMemo(() => {
        const now = new Date();
        let lastMonth = now.getMonth() - 1;
        if (lastMonth < 0) lastMonth = 11;

        let count = 0;
        transactions.forEach(transaction => {
            const date = new Date(transaction.date);
            if (date.getMonth() === lastMonth && date.getFullYear() === now.getFullYear()) count++;
        });
        return count;
    }, [transactions]);

    const todayTransactions = useMemo(() => {
        const now = new Date();

        let count = 0;
        transactions.forEach(transaction => {
            const date = new Date(transaction.date);
            if (date.getMonth() === now.getMonth() && date.getDate() === now.getDate() && date.getFullYear() === now.getFullYear()) count++;
        });
        return count;
    }, [transactions]);

    return <div className={"transaction-group"}>
        <IonCard className={"transaction-card"}>
            <IonCardContent className={"transaction-card-content"}>
                <span className={"transaction-card-title"}>Transactions</span>
                <span className={"transaction-card-number"}>{monthTransactions}</span>
                <span className={"transaction-card-time"}>Last Month</span>
            </IonCardContent>
        </IonCard>
        <IonCard className={"transaction-card"}>
            <IonCardContent className={"transaction-card-content"}>
                <span className={"transaction-card-title"}>Transactions</span>
                <span className={"transaction-card-number"}>{todayTransactions}</span>
                <span className={"transaction-card-time"}>Today</span>
            </IonCardContent>
        </IonCard>
    </div>
};

export default TransactionGroup;