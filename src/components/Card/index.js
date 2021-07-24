import React from 'react';
import loader from './Assets/1488.gif';
import './Card.css';


const Card = () => {
  return <div className="card_stack">
    {/* <div className="loader">
      <img src={loader} alt="loading..." />
    </div> */}
    <div className="card">
      <div className="card_image">
        <img src="https://reqres.in/img/faces/7-image.jpg" alt="user" />
      </div>
      <div className="card_title">Jannet Winget</div>
      <div className="card_info">jannet.winget@gmail.com</div>
    </div>
  </div>
}

export default Card;