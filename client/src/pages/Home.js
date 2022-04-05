import React from 'react';
import Card from '../components/Card';
const Home = () => {
  const crafts = [
    {
      imgUrl:
        'https://previews.123rf.com/images/ufabizphoto/ufabizphoto2004/ufabizphoto200401682/145561726-portrait-of-hardworking-carpenter-man-in-uniform-making-wooden-chair-on-an-order-handicraft-concept-.jpg',
      craft: 'Carpenter',
    },
  ];
  const Cards = crafts.map((craft) => (
    <Card imgUrl={craft.imgUrl} craft={craft.craft} />
  ));
  return (
    <div>
      <img
        src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
        alt='app img'
        className='homeImg'
      />
      <h1 style={{ textAlign: 'center' }}>Fields: </h1>
      {Cards}
    </div>
  );
};

export default Home;
