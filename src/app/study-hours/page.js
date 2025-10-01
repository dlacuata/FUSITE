
"use client";

// Import single CSS file with all responsive styles
import './study-hours.css';
import { Karla, Inter } from 'next/font/google';
import { useEffect } from 'react';

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-karla',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export default function StudyHours() {
    
  /* carousel logic */
    useEffect(() => {
    /* gets all HTML elements with class carousel-slide/dot */
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let interval = null;
    let resumeTimeout = null;

    function showSlide(index) {
      // Remove active class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Add active class to current slide and dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function startAutoAdvance() {
      // Clear any existing intervals/timeouts
      if (interval) clearInterval(interval);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      
      // Start new interval
      interval = setInterval(nextSlide, 3000);
    }

    function stopAutoAdvance() {
      // Clear current interval
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      
      // Clear any pending resume timeout
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }
    }

    function pauseAndResumeAutoAdvance() {
      stopAutoAdvance();
      // Resume auto-advance after 3 seconds of user inactivity
      resumeTimeout = setTimeout(() => {
        startAutoAdvance();
      }, 3000);
    }

    // Start auto-advance
    startAutoAdvance();

    // Add click handlers to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        pauseAndResumeAutoAdvance();
      });
    });

    // Add click handlers to arrows
    const arrowLeft = document.querySelector('.carousel-arrow-left');
    const arrowRight = document.querySelector('.carousel-arrow-right');
    
    if (arrowLeft) {
      arrowLeft.addEventListener('click', () => {
        prevSlide();
        pauseAndResumeAutoAdvance();
      });
    }
    
    if (arrowRight) {
      arrowRight.addEventListener('click', () => {
        nextSlide();
        pauseAndResumeAutoAdvance();
      });
    }

    // Cleanup on component unmount
    return () => {
      stopAutoAdvance();
    };
  }, []);


  return (
    <div className="study-hours-container">
      <div className="study-hours-header">
        <div className="study-hours-image-container">
          <img src="/study-hours-header-image.jpg" alt="Study Hours Header" className="study-hours-image" />
          <div className="study-hours-image-overlay"></div>
          <h2 className={`programs-subtitle ${karla.variable}`}>Programs</h2>
          <h1 className={`study-hours-title ${karla.variable}`}>STUDY HOURS</h1>
        </div>
      </div>

        <div className="study-hours-content">
            <div className="study-hours-description">
                <h1 className={`study-hours-description-title ${karla.variable}`}>Empower your </h1>
                <p className={`study-hours-description-text ${inter.variable}`}>Join us for FUSION Study Hours, an ideal space for members to focus, collaborate, and make progress on their work or studies. Workshops are also held during Study Hours to enhance your skills and provide guidance on any struggles you may have. Whether you are aiming to finish an important project, prepare for an exam, or simply catch up on assignments, our supportive environment is designed to help you stay on track!</p> 
            </div>
            
            <div className="study-hours-carousel">
                <div className="carousel-container">
                    <div className="carousel-slides">
                        <div className="carousel-slide showing">
                            <img src="/study-hours-carousel-1.png" alt="Study Hours 1" />
                        </div>
                        <div className="carousel-slide">
                            <img src="/study-hours-carousel-2.png" alt="Study Hours 2" />
                        </div>
                        <div className="carousel-slide">
                            <img src="/study-hours-carousel-3.png" alt="Study Hours 3" />
                        </div>
                    </div>
                    <div className="carousel-arrow carousel-arrow-left">
                        <div className="arrow-shape arrow-left"></div>
                    </div>
                    <div className="carousel-arrow carousel-arrow-right">
                        <div className="arrow-shape arrow-right"></div>
                    </div>
                    <div className="carousel-dots">
                        <span className="dot active" data-slide="0"></span>
                        <span className="dot" data-slide="1"></span>
                        <span className="dot" data-slide="2"></span>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  );
}

