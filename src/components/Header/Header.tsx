import { IonHeader, IonTitle } from '@ionic/react';

import './Header.css'

interface Header{
    pageTitle : string
}
const Header: React.FC<Header> = (props) => {
  if(props.pageTitle == 'Explore'){
    return (
      <IonHeader className='explore-ion-header'>
          <IonTitle size="large">{props.pageTitle}</IonTitle>
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