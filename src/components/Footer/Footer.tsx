import { IonFooter, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import { NavLink } from "react-router-dom";

import { BsHouseDoor, BsSearch, BsHeart, BsPencil } from "react-icons/bs";

import './Footer.css'

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonRow className="footer-container">
          <IonCol size="3" className="ion-text-center">
            <NavLink activeClassName="active" exact to="/home">
              <div className="footer-button">
                <BsHouseDoor className="footer-icons"/>
                <IonTitle size="small">Explore</IonTitle>
              </div>
            </NavLink>
          </IonCol>
          <IonCol size="3" className="ion-text-center">
            <NavLink activeClassName="active" to="/search">
              <div className="footer-button">
                <BsSearch className="footer-icons"/>
                <IonTitle size="small">Search</IonTitle>
              </div>
            </NavLink>
          </IonCol>
          <IonCol size="3" className="ion-text-center">
            <NavLink activeClassName="active" to="/plan">
              <div className="footer-button">
                <BsHeart className="footer-icons"/>
                <IonTitle size="small">Plan</IonTitle>
              </div>
            </NavLink>
          </IonCol>
          <IonCol size="3" className="ion-text-center">
            <NavLink activeClassName="active" to="/review">
              <div className="footer-button">
                <BsPencil className="footer-icons"/>
                <IonTitle size="small">Review</IonTitle>
              </div>
            </NavLink>
          </IonCol>
        </IonRow>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;