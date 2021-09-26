import { IonRow, IonCol } from '@ionic/react';

import { IoHeart } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { MdPersonAdd } from "react-icons/md"

import './TripsBox.css'

interface TripsBoxLogo{
    logo: string
}
const TripsBoxLogo: React.FC<TripsBoxLogo> = (props) => {
    if(props.logo == 'heart'){
        return <IoHeart className='plan-content-trips-box-icons'/>
    }
    else if(props.logo == 'location'){
        return <GoLocation className='plan-content-trips-box-icons'/>
    }
    else if(props.logo == 'notes'){
        return <CgNotes className='plan-content-trips-box-icons'/>
    }
    else if(props.logo == 'people'){
        return <MdPersonAdd className='plan-content-trips-box-icons'/>
    }
    else{
        return <IoHeart className='plan-content-trips-box-icons'/>
    }
}

interface TripsBox{
    logo: string
    title: string
}
const TripsBox: React.FC<TripsBox> = (props) => {
  return (
    <IonRow className="plan-content-trips-box">
        <IonCol size-md='1' size='2' className="plan-content-trips-box-logo">
            <div className="plan-content-trips-box-icons-circle">
                <TripsBoxLogo logo={props.logo}/>
            </div>
        </IonCol>
        <IonCol size-md='11' size='10' className="plan-content-trips-box-title">
            <span>{props.title}</span>
        </IonCol>
    </IonRow>
  );
};

export default TripsBox;