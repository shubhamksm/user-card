import React from 'react';
import loader from './Assets/1488.gif';
import './Card.css';


const Card = ({ loading, cardsData }) => {
  return <div className="card_stack">
    {loading ? 
      <div className="loader">
        <img src={loader} alt="loading..." />
      </div> : 
      cardsData.map(data => {
        return <div className="card" key={data.id}>
          <div className="card_image">
            <img src={data.avatar} alt="user" />
          </div>
          <div className="card_title">{`${data.first_name} ${data.last_name}`}</div>
          <div className="card_info">{data.email}</div>
        </div>
      })
    }
  </div>
}

export default Card;