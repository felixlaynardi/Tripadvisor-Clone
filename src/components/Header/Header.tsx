import { IonHeader, IonTitle } from '@ionic/react';

import { CgProfile } from "react-icons/cg";

import './Header.css'

interface Header{
    pageTitle : string
}
const Header: React.FC<Header> = (props) => {
  if(props.pageTitle == 'Explore'){
    return (
      <IonHeader className='explore-ion-header'>
          <IonTitle size="large">{props.pageTitle}</IonTitle>
          <CgProfile className='explore-ion-header-icons'/>
      </IonHeader>
    );
  }
  else{
    return (
      <IonHeader>
          <IonTitle size="large">{props.pageTitle}</IonTitle>
      </IonHeader>
    );
  }
};

export default Header;