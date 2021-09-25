import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'

import Explore from './Explore/Explore';
import Search from './Search/Search'

import './PageRouter.css'

interface PageRouter{
  page: string
}
const PageContent: React.FC<PageRouter> = (props) => {
  if(props.page == 'Explore'){
    return <Explore/>
  }
  else if(props.page == 'Search'){
    return <Search/>
  }
  else{
    return <ExploreContainer/>
  }
}
const PageRouter: React.FC<PageRouter> = (props) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header pageTitle={props.page}/>
        <PageContent page={props.page}/>
      </IonContent>
      <Footer/>
    </IonPage>
  )
};

export default PageRouter;
