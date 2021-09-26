import { IonRow, IonCol } from '@ionic/react';
import { useRef, useState } from "react"

import Trips from '../../components/Plan/Trips/Trips'
import Saves from '../../components/Plan/Saves/Saves'
import Bookings from '../../components/Plan/Bookings/Bookings'

import './Plan.css'

interface PlanRouter{
    page: string
}
const PlanRouter: React.FC<PlanRouter> = (props) => {
    if(props.page == 'trips'){
        return <Trips/>
    }
    else if(props.page == 'saves'){
        return <Saves/>
    }
    else{
        return <Bookings/>
    }
}
const Plan: React.FC = () => {
    const [ page, setPage ] = useState<string>('trips');
    const planButtonTrip = useRef<HTMLDivElement>(null);
    const planButtonSaves = useRef<HTMLDivElement>(null);
    const planButtonBookings = useRef<HTMLDivElement>(null);
    const changePage = (selected: string) => {
        document.getElementById('plan-button-title-' + page)?.classList.remove('plan-button-title-active')
        setPage(selected)
        document.getElementById('plan-button-title-' + selected)?.classList.add('plan-button-title-active')
    }
    return (
        <IonRow className='plan-container'>
            <IonCol size='12' className='plan-header-container'>
                <button className='plan-button' onClick={() => changePage('trips')}>
                    <div ref={planButtonTrip} className="plan-button-title plan-button-title-active" id="plan-button-title-trips">
                        Trips
                    </div>
                </button>
                <button className='plan-button' onClick={() => changePage('saves')}>
                    <div ref={planButtonSaves} className="plan-button-title" id="plan-button-title-saves">
                        Saves
                    </div>
                </button>
                <button className='plan-button' onClick={() => changePage('bookings')}>
                    <div ref={planButtonBookings} className="plan-button-title plan-button-bookings" id="plan-button-title-bookings">
                        Bookings
                    </div>
                </button>
            </IonCol>
            <IonCol size='12' className='plan-content-container'>
                <PlanRouter page={page}/>
            </IonCol>
        </IonRow>
    );
};

export default Plan;