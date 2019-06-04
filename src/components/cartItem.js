import React, { Component } from "react";

const CartItem = ({
  total,
  hotelName,
  hotelPrice,
  hotelTotalPrice,
  roomNumber,
  id,
  cartUpdatorHotelOne,
  ticketName,
  ticketPrice,
  ticketTime,
  activityName,
  activityPrice,
  activityDate,
  activityTime
}) => {
  console.log("YOU ARE NOW IN THE CART ITEM COMPONENT HERE ARE YOUR ITEMS ");
  console.log('THIS IS THE TOTAL IN THE CART ITEM COMPONENT', total);
  console.log("1", hotelName);
  console.log("2", hotelPrice);
  console.log("3", roomNumber);
  console.log("4", ticketName);
  console.log("5", ticketPrice);
  console.log("6", activityName);
  console.log("7", activityPrice);
  console.log("8", activityDate);
  console.log("9", activityTime);

  if (hotelName != undefined && hotelTotalPrice != undefined) {
    return (
      <div>
        <div>
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{hotelName}</strong>
          </li>
          <li className="cartHotelPrice">${hotelTotalPrice}</li>
          {/* <li className="cartRoomNumber"># Rooms:{roomNumber}</li> */}
        </div>
      </div>
    );
  }
  if (ticketName != undefined) {
    return (
      <div>
        <div>
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{ticketName}</strong>
          </li>
          <li className="cartHotelPrice">${ticketPrice}</li>
          <li className="cartRoomNumber">Time:{ticketTime}</li>
        </div>
      </div>
    );
  }
  if (activityName != undefined) {
    return (
      <div>
        <div>
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{activityName}</strong>
          </li>
          <li className="cartHotelPrice">${activityPrice}</li>
          {/* <li className="cartRoomNumber">Time:{activityTime}</li> */}
          <li className="cartRoomNumber">{activityDate}</li>
        </div>
      </div>
    );
  }

};

export default CartItem;
