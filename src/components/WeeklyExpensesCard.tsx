import './WeeklyExpensesCard.css'

import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import {ApexOptions} from "apexcharts";
import ReactApexChart from "react-apexcharts";

import {faArrowUp} from '@fortawesome/free-solid-svg-icons/faArrowUp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

interface ContainerProps {
}

function getChartOptions(): ApexOptions {
    return {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0
        },
        fill: {
            type: 'gradient',
            colors: ['#260CBC', '#6756FF'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yaxis: {
            max: 40000,
            min: 0,
            labels: {
                formatter: function (val) {
                    return '$' + (val / 1000) + 'k';
                }
            }
        },
        series: [{
            name: 'Income',
            data: [12000, 10000, 5000, 15000, 10000, 20000, 15000]
        }],
        colors: ['#2D14C4'],
        stroke: {
            width: 1,
            curve: 'smooth'
        },
    }
}

const WeeklyExpensesCard: React.FC<ContainerProps> = () => {
    return (
        <IonCard>
            <IonCardHeader className={"we-header"}>
                <IonCardTitle>Weekly expenses</IonCardTitle>
                <div className={"we-time-picker"}>
                    Oct - Nov 2019 <FontAwesomeIcon icon={faCalendar} className={"we-time-picker-icon"} />
                </div>
            </IonCardHeader>
            <IonCardContent>
                <ReactApexChart options={getChartOptions()} series={getChartOptions().series} type="area" height={550} width={'100%'}/>
                <span className={"revenue-title"}>Total Revenue</span>
                <h2 className={"revenue-total"}>$76685.41</h2>
                <span className={"revenue-sub"}><FontAwesomeIcon icon={faArrowUp} /> 7.00%</span>
            </IonCardContent>
        </IonCard>
    );
};

export default WeeklyExpensesCard;