import './App.css'
//importing the component
import UpcomingReservations from './components/UpcomingReservations'
///importing the json data 
import ReservationsData from './Data/ReservationsData.json';



function App() {
  return (
    <main>    
     <h1>Upcoming Reservations</h1>
      <p>Manage your upcoming reservations </p>
    <div className='reservations-card'>
      {
        //Fetch all the values from the json file using map method
        ReservationsData.map((elm, idx) => (
          <UpcomingReservations
            key={elm.id || idx}
            id={elm.id}
            name={elm.venueName}
            date={elm.date}
            time={elm.time}
            people={elm.partySize}
            status={elm.status}
          />
        ))

      }
      </div>
    </main>
  )
}

export default App
