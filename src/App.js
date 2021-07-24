import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  const onClickHandler = async () => {
    setLoading(true);
    const data = await axios.get('https://reqres.in/api/users?page=1');
    if(data.status === 200) {
      setCardsData([...data.data.data]);
      setTimeout(() => setLoading(false), 500);
    }
  }

  return (
    <div className="App">
      <Header onClickHandler={onClickHandler}></Header>
      <Card
        loading={loading}
        cardsData={cardsData}
      ></Card>
    </div>
  );
}

export default App;
