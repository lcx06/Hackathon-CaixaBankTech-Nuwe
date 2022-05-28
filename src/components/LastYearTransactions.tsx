import './LastYearTransactions.css'

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSegment,
    IonSegmentButton,
    IonToolbar
} from "@ionic/react";
import {Transaction} from "../api/transactions";
import {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";

interface ContainerProps {
    transactions: Transaction[];
}

function getChartOptions(min: number, max: number): ApexOptions {
    return {
        chart: {
            height: 80,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#6979F8'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yaxis: {
            min,
            max,
            tickAmount: 5
        }
    }
}

const LastYearTransactions: React.FC<ContainerProps> = ({ transactions }) => {
    const [type, setType] = useState('monthly');

    const [series, setSeries] = useState<Array<number>>([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        const now = new Date();
        const monthly: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (const transaction of transactions) {
            const date = new Date(transaction.date);
            if (date.getFullYear() === now.getFullYear() - 1) {
                const month = date.getMonth();
                if (!monthly[month]) {
                    monthly[month] = 1;
                } else monthly[month]++;
            }
        }
        setSeries(monthly);
        setMin(Math.max(Math.min(...monthly) - 5, 0));
        setMax(Math.max(...monthly) + 10);
    }, [transactions]);

    return (
        <IonCard>
            <IonCardHeader className={"lty-header"}>
                <IonCardTitle>Transactions Last Year</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className={"lty-content"}>
                <IonToolbar>
                    <IonSegment value={type} className={"lyt-parent"}>
                        <IonSegmentButton value={"monthly"} onClick={() => setType("monthly")}>
                            Monthly
                        </IonSegmentButton>
                        <IonSegmentButton value={"daily"} onClick={() => setType("daily")}>
                            Daily
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
                <ReactApexChart options={getChartOptions(min, max)} series={[{
                    name: "Transactions",
                    data: series
                }]} height={200}/>
            </IonCardContent>
        </IonCard>
    );
};

export default LastYearTransactions;