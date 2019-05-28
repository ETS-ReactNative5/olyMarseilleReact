import React, { Component } from "react";

const CartItem = ({ hotelName, hotelPrice, roomNumber ,id, cartUpdatorHotelOne, }) => {

  
  
  return (
    <div>
      <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">✖</button>
      <li className="cartHotelName"><strong>{hotelName}</strong></li>
      <li className="cartHotelPrice">${hotelPrice} per/night</li>
      <li className="cartRoomNumber"># Rooms:{roomNumber}</li>
    </div>
  );
};

export default CartItem;
