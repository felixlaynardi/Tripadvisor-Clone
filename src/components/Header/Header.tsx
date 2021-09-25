import { IonHeader, IonTitle, IonToolbar, IonRow, IonCol, useIonRouter } from '@ionic/react';
import { BsHouseDoor, BsSearch, BsHeart, BsPencil } from "react-icons/bs";
import './Header.css'

interface Header{
    pageTitle : string
}
const Header: React.FC<Header> = (props) => {
  return (
    <IonHeader>
        <IonTitle size="large">{props.pageTitle}</IonTitle>
    </IonHeader>
  );
};

export default Header;