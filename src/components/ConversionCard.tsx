import './ConversionCard.css'

import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import {Transaction} from "../api/transactions";
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {useEffect, useState} from "react";

import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ContainerProps {
    transactions: Transaction[];
}

function getChartOptions(series: Array<number>, labels: Array<string>): ApexOptions {
    return {
        series,
        chart: {
            type: 'pie',
        },
        labels,
        colors: ['#9013FE', '#007AFF', '#FB8832', '#E6E5E6'],
        legend: {
            position: 'bottom',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                title: {
                    formatter(seriesName: string): string {
                        return '';
                    }
                },
                formatter: function (val) {
                    return '$' + val
                }
            }
        }
    }
}

const ConversionCard: React.FC<ContainerProps> = ({transactions}) => {
    const [series, setSeries] = useState<Array<number>>([]);
    const [labels, setLabels] = useState<Array<string>>([]);

    useEffect(() => {
        const tempSeries = new Array<number>();
        const tempLabels: { [key: string]: number } = {};

        let remaining = 0;
        let currentIndex = 0;

        transactions.forEach(({amount, type}) => {
            if (!type) {
                remaining += amount;
                return
            }
            if (!Object.keys(tempLabels).includes(type)) {
                tempLabels[type] = currentIndex;
                tempSeries[currentIndex] = 0;
                currentIndex++;
            }

            tempSeries[tempLabels[type]] += amount;
        })
        tempSeries[currentIndex] = remaining;
        tempLabels["Unknown"] = -1;
        setSeries(tempSeries);
        setLabels(Object.keys(tempLabels));
    }, [transactions]);

    return (
        <IonCard>
            <IonCardHeader className={"conversion-header"}>
                <IonCardTitle>Conversion</IonCardTitle>
                <div className={"conversion-right-util conversion-icon"}>
                    <FontAwesomeIcon icon={faEllipsis}/>
                </div>
            </IonCardHeader>
            <IonCardContent>
                <ReactApexChart options={getChartOptions(series, labels)} series={series} id={"conversion-card"} type={"pie"} width={300}/>
            </IonCardContent>
        </IonCard>
    );
};

export default ConversionCard;