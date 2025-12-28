import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import WhyChoose from './components/WhyChoose';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Features />
        <Curriculum />
        <WhyChoose />
        <Instructor />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;