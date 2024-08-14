import React from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../aboutpage_components/AboutPage.css';
import terrariumsgif from '../aboutpage_components/terrarium.gif';
import communitygif from '../aboutpage_components/community.gif';
import ecogif from '../aboutpage_components/eco.gif';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="about-page">
        <section className="about-intro">
          <h1>About Mossy Lab</h1>
          <p>At Mossy Lab, we invite you to step into a world where the natural beauty of moss meets the art of micro-landscape design. We believe in the calming power of nature, and bring that tranquility into your everyday spaces.</p>
        </section>
        <div className="vision-mission-container">
          <section className="vision">
            <h2>Our Vision</h2>
            <p>To become a leading provider of therapeutic and creative nature-inspired experiences, transforming how people interact with and appreciate the natural world.</p>
          </section>
          <section className="mission">
            <h2>Our Mission</h2>
            <p>We aim to cultivate a community that values emotional wellness and environmental sustainability. We offer innovative and personalized moss micro-landscape products and workshops to bring the calming and healing power of nature into every home and workspace, enhancing the quality of life for our customers.</p>
          </section>
        </div>
        <section className="why">
        <h2>Why Choose Mossy Lab?</h2>
            <p>
              <li>Nature's Elegance: Our handcrafted moss micro-landscapes are not just decor but living art pieces. Each creation is carefully designed to blend with your home or office, bringing a touch of green serenity into your life. </li>
              <li>Mindful Living: We promote a lifestyle that values mindfulness and the simple joys of life. Our products and workshops are designed to help you slow down, breathe, and appreciate the little things.</li>
              <li>Sustainable Design: We are committed to sustainability, using eco-friendly materials and practices to ensure that our impact on the planet is as gentle as the moss we cultivate.</li>
            </p>
        </section>

        <section className="beliefs-section">
          <h2>What We Believe In</h2>
          <div className="beliefs-cards">
            <div className="belief-card">
              <img src={terrariumsgif} alt="Belief 1" />
              <h3>Nurturing Creativity</h3>
              <p>Every individual has a creative spark. At Mossy Lab, we provide the tools and inspiration for you to design your own miniature landscapes, bringing your vision to life.</p>
            </div>
            <div className="belief-card">
              <img src={communitygif} alt="Belief 2" />
              <h3>Community Connection</h3>
              <p>We believe in the power of community. Through our workshops and events, we bring people together to share, learn, and grow.</p>
            </div>
            <div className="belief-card">
              <img src={ecogif} alt="Belief 3" />
              <h3>Eco-Conscious Choices</h3>
              <p>Our commitment to the environment guides everything we do. From our sourcing to our packaging, we strive to make choices that are kind to the Earth.</p>
            </div>
          </div>
        </section>


        <section className="why">
        <h2>Our Promise</h2>
            <p>
            At Mossy Lab, we promise more than just beautiful products. We promise an experience that nurtures your soul, sparks your creativity, and connects you to the calming essence of nature. Whether you're creating your own moss masterpiece or enjoying one of ours, Mossy Lab is here to bring a little peace into your world.
            </p>
        </section>
        {/* <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src='../image/han.jpg' alt="Team Member 1" />
              <h3>Han Xu</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src='../image/xy.jpg' alt="Team Member 2" />
              <h3>Xinyi Liu</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src='../image/zt.jpg' alt="Team Member 3" />
              <h3>Ming Zhu</h3>
              <p>Founder & CFO</p>
            </div>
            <div className="team-member">
              <img src='../image/jy.jpg' alt="Team Member 4" />
              <h3>Bryan Wang</h3>
              <p>Founder & CTO</p>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
