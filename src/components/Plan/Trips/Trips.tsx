import TripsBox from './TripsBox/TripsBox'

import './Trips.css'

const Trips: React.FC = () => {
  return (
    <div className="plan-content-trips-container">
        <TripsBox logo={'heart'} title={"Save places you'd like to visit"}/>
        <TripsBox logo={'location'} title={"See your saves on a map"}/>
        <TripsBox logo={'notes'} title={"Keep track of notes, links, and more"}/>
        <TripsBox logo={'people'} title={"Share and collaborate on your plans"}/>
        
        <div className="plan-content-trips-footer">
            <div className="plan-content-trips-footer-title">
                Trip name
            </div>
            <div className="plan-content-trips-footer-form">
                Ex: Weekend in NYC
            </div>
            <div className="plan-content-trips-footer-button">
                Create a Trip
            </div>
            <div className="plan-content-trips-footer-href">
                Log in to access your Trips
            </div>
        </div>
    </div>
  );
};

export default Trips;
