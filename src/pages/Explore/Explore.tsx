import { IonFooter, IonTitle, IonToolbar, IonRow, IonCol, useIonViewDidEnter } from '@ionic/react';
import { MdLocalHotel } from "react-icons/md";
import { GrTicket, GrChatOption } from "react-icons/gr";
import { GiKnifeFork } from "react-icons/gi";

import './Explore.css'

const Explore: React.FC = () => {
  return (
    <IonRow className='explore-container'>
        <div className="explore-header-button-container">
            <div className="explore-header-button">
                <MdLocalHotel className="explore-header-icons"/>
                Hotels
            </div>
            <div className="explore-header-button">
                <GrTicket className="explore-header-icons"/>
                Things to do
            </div>
            <div className="explore-header-button">
                <GiKnifeFork className="explore-header-icons"/>
                Restaurants
            </div>
            <div className="explore-header-button">
                <GrChatOption className="explore-header-icons"/>
                Forums
            </div>
        </div>
        <IonCol size='12' className='explore-header'>
            
        </IonCol>
        <IonCol size='12' className='explore-content'>
            <h1 className='explore-content-title'>Small batch stays</h1>
            <h6 className='explore-content-subtitle'>Cool cities, cooler boutique hotels</h6>
            <div className='explore-content-images-container'>
                <div className="location-images location-images-amsterdam">
                    <div className="location-images-title">
                        <h1>Amsterdam</h1>
                    </div>
                </div>
                <div className="location-images location-images-berlin">
                    <div className="location-images-title">
                        <h1>Berlin</h1>
                    </div>
                </div>
                <div className="location-images location-images-london">
                    <div className="location-images-title">
                        <h1>London</h1>
                    </div>
                </div>
                <div className="location-images location-images-zermatt">
                    <div className="location-images-title">
                        <h1>Zermatt</h1>
                    </div>
                </div>
            </div>
            <h1 className='explore-content-title explore-content-title-margin'>Plan your next escape</h1>
            <h6 className='explore-content-subtitle'>Family-friendly spots to explore</h6>
            <div className='explore-content-images-container'>
                <div className="location-images location-images-antalya">
                    <div className="location-images-title">
                        <h1>Antalya</h1>
                    </div>
                </div>
                <div className="location-images location-images-barcelona">
                    <div className="location-images-title">
                        <h1>Barcelona</h1>
                    </div>
                </div>
                <div className="location-images location-images-bath">
                    <div className="location-images-title">
                        <h1>Bath</h1>
                    </div>
                </div>
                <div className="location-images location-images-brighton">
                    <div className="location-images-title">
                        <h1>Brighton</h1>
                    </div>
                </div>
            </div>
        </IonCol>
    </IonRow>
  );
};

export default Explore;