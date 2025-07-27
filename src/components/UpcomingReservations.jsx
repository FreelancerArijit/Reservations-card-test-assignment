import React from 'react'
import { IoLocationSharp, IoPeopleOutline  } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

function UpcomingReservations({id, name, date, time, people, status }) {

    //function to cancel reserrvations
    function cancelReservation() {
        console.log(" Reservation cancelled " + id)

    }

    // change the color of status depending on it's value
    const statusStyle = {
        backgroundColor: status === "Confirmed" ? "green" : "red",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        width: "80px",
        textAlign: "center"
    }

    return (
        <>
        {/* Reservations cards */}
            <div className="cards">
                <div className="card-content">
                    <h2><span> <IoLocationSharp /></span> {name}</h2>
                    <p><span> <SlCalender /></span>{date}</p>
                    <p><span> <FaRegClock /> </span>{time}</p>
                    <p><span> <IoPeopleOutline /> </span>{people}</p>
                    <p style={statusStyle}>{status}</p>
                </div>
                <div className="card-btn">
                    <button className="btn" onClick={cancelReservation}>Cancel Reservations</button>
                </div>
            </div>

        </>
    )
}

export default UpcomingReservations
