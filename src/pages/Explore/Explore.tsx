import { IonRow, IonCol } from '@ionic/react';

import ExploreHeader from '../../components/Explore/ExploreHeader/ExploreHeader'
import ExploreImagesContainer from '../../components/Explore/ExploreImagesContainer/ExploreImagesContainer'

import './Explore.css'

const Explore: React.FC = () => {
  const imagesTop = [
    {
      title: 'Amsterdam',
      class: 'amsterdam'
    },
    {
      title: 'Berlin',
      class: 'berlin'
    },
    {
      title: 'London',
      class: 'london'
    },
    {
      title: 'Zermatt',
      class: 'zermatt'
    }
  ]
  const imagesBottom = [
    {
      title: 'Antalya',
      class: 'antalya'
    },
    {
      title: 'Barcelona',
      class: 'barcelona'
    },
    {
      title: 'Bath',
      class: 'bath'
    },
    {
      title: 'Brighton',
      class: 'brighton'
    }
  ]
  return (
    <IonRow className='explore-container'>
        <ExploreHeader/>
        <IonCol size='12' className='explore-content'>
            <h2 className='explore-content-title'>Small batch stays</h2>
            <h6 className='explore-content-subtitle'>Cool cities, cooler boutique hotels</h6>
            <ExploreImagesContainer images={imagesTop}/>
            <h2 className='explore-content-title explore-content-title-margin'>Plan your next escape</h2>
            <h6 className='explore-content-subtitle'>Family-friendly spots to explore</h6>
            <ExploreImagesContainer images={imagesBottom}/>
        </IonCol>
    </IonRow>
  );
};

export default Explore;