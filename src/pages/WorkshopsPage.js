import React from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../workshopspage_components/WorkshopsPage.css';

const workshops = [
  {
    id: 1,
    title: 'Pick Your Own Project Workshop',
    date: 'Any Day',
    time: 'Any time',
    price: '$35 - $45',
    img: '/image/Workshop/Pick_your_own_project.png',
  },
  {
    id: 2,
    title: 'Succulent & Sangria Workshop',
    date: 'Jun 01, 2024 - Oct 24, 2024',
    time: '2:00 PM - 4:00 PM',
    price: '$50',
    img: '/image/Workshop/Succulent_Sangria.png',
  },
  {
    id: 3,
    title: 'Air Plants Terrarium Workshop',
    date: 'Jun 01, 2024 - Oct 24, 2024',
    time: '5:00 PM - 6:00 PM',
    price: '$45',
    img: '/image/Workshop/Air_Plants_Terrarium.png',

  },
  {
    id: 4,
    title: 'Bring Your Own Bottle Workshop',
    date: 'Every Friday',
    time: 'Any time',
    price: '$35',
    img: '/image/Workshop/Bring_Your_Own_Bottle.png',
  }
];

const WorkshopsPage = () => {
  return (
    <div>
      <Header />
      <main className="workshops-page">
        <h1>Workshops</h1>
        <p>Join us for our upcoming workshops where you can learn to create beautiful and relaxing DIY projects.</p>
        <div className="workshops-list">
          {workshops.map(workshop => (
            <div key={workshop.id} className="workshop-card">
              <img src={workshop.img} alt={workshop.title} />
              <h2>{workshop.title}</h2>
              <p>{workshop.description}</p>
              <p><strong>Date:</strong> {workshop.date}</p>
              <p><strong>Time:</strong> {workshop.time}</p>
              <p><strong>Price:</strong> {workshop.price}</p>
              <button className="btn-primary">Register</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
