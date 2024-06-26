import axios from "axios";
import React, { useEffect, useState } from "react";
function MovieTicket() {
  useEffect(() => {getMovieTicket();}, []);
  const seatList = new Array(50).fill().map((i, index) => index + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const postMovieTicket = () => {
    axios
      .post("http://localhost:5002/api/ticket", { seatNo: selectedSeats })
      .then(() => {
        alert("Ticket Booked Successfully!");
      });
  };
  const updateMovieTicket = () => {
    axios
      .put("http://localhost:5002/api/ticket/" + bookedSeats[0]._id, {
        seatNo: [...bookedSeats[0].seatNo, ...selectedSeats],
      })
      .then(() => {
        alert("Ticket Booked Successfully!");
        getMovieTicket();
        setSelectedSeats([])
      });
  };
  const [bookedSeats, setBookedSeats] = useState([]);
  const getMovieTicket = () => {
    axios
      .get("http://localhost:5002/api/ticket")
      .then((res) => setBookedSeats(res.data.data));
  };
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {seatList.map((i) => (
          <div
            style={{
              borderColor: selectedSeats.includes(i)
                ? "blue"
                : bookedSeats[0]?.seatNo?.includes(i)
                ? "red"
                : "lightgray",
            }}
            onClick={() => {
              if (!bookedSeats[0]?.seatNo.includes(i)) {
                if (selectedSeats.includes(i)) {
                  setSelectedSeats(selectedSeats.filter((j) => j != i));
                } else {
                  setSelectedSeats([...selectedSeats, i]);
                }
              }
            }}
            className="h-16 w-16 border-2"
          >
            {i}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (bookedSeats.length > 0) {
            updateMovieTicket();
          } else {
            postMovieTicket();
          }
        }}
        className="border px-4 py-2"
      >
        Book
      </button>
    </div>
  );
}

export default MovieTicket;
