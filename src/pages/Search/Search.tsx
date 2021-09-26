import { IonRow, IonCol } from '@ionic/react';
import { FaSearch } from "react-icons/fa";

import SearchImagesContainer from '../../components/Search/SearchImagesContainer/SearchImagesContainer'

import './Search.css'

const Search: React.FC = () => {
  const imagesTop = [
    {
      title: 'New York City',
      class: 'new-york-city'
    },
    {
      title: 'Singapore',
      class: 'singapore'
    }
  ]
  const imagesBottom = [
    {
      title: 'Rome',
      class: 'rome'
    },
    {
      title: 'Paris',
      class: 'paris'
    }
  ]
  return (
    <IonRow className="search-container">
      <IonCol size='12' className='search-header-container'>
        <div className="search-form">
          <FaSearch className='search-icons'/>
          Where to?
        </div>
        <div className="search-box-nearby">
          <div className="search-box-nearby-content">
            <h1>See what's good nearby.</h1>
            <div className="search-box-location-settings">
              Turn on location settings
            </div>
          </div>
        </div>
      </IonCol>
      <IonCol size='12' className='search-content-container'>
        <h2 className='search-content-title'>Destinations travellers love</h2>
        <SearchImagesContainer 
          imagesTop={imagesTop}
          imagesBottom={imagesBottom}  
        />
      </IonCol>
    </IonRow>
  );
};

export default Search;
