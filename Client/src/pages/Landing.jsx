import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero';
import Benefits from '../components/benefits/Benefits';
import Testimonials from '../components/testemonials/Testimonials';
import Contact from '../components/contact/Contact';

const Landing = () => {
    

  return (
    <section className="md:h-full md:w-full" >
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Contact />
    </section>
  );
}

export default Landing