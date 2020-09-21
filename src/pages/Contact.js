import React, { useRef, useEffect } from 'react';
import './contact.css';
import { gsap, TweenLite, TweenMax, Power3, Power1 } from 'gsap';

function Contact() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let para1 = useRef(null);
  let para2 = useRef(null);
  useEffect(() => {
    TweenMax.from([line2], 2.3, {
      delay: 2,
      ease: 'power3.out',
      x: 50,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line2]);
  useEffect(() => {
    TweenMax.from([line1], 1, {
      delay: 1,
      ease: 'power3.out',
      x: 50,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1]);

  useEffect(() => {
    gsap.from([para1, para2], 2, {
      delay: 2.5,
      ease: 'power2.out',
      y: 10,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
    });
  }, [para1, para2]);

  return (
    <div className='parent'>
      <div class='text'>
        <h1
          ref={(el) => {
            line1 = el;
          }}
        >
          Hello
        </h1>
        <p
          ref={(el) => {
            para1 = el;
          }}
          className='first-para'
        >
          I am a Junior web developer. I am proficient in CSS, HTML and
          Javascript. I can design a beautiful website for Your Needs! I believe
          I have the skills necesssary for making a great, interactive and
          resposive website. Please feel free to check out my projects from the
          project tab to see my Potential and judge if I am worthy to work with
          you. I believe trust is vital for a good work relationship.{' '}
        </p>
        <h1
          ref={(el) => {
            line2 = el;
          }}
          className='why'
        >
          Why Me?
        </h1>
        <p
          ref={(el) => {
            para2 = el;
          }}
        >
          I communicate well in English. I learned javascript from the best
          tutors At Udemy. I also am highly flexible and work very fast. I am
          somone you can trust. But Why take My word for it? Check out some of
          the websites I have built!{' '}
        </p>
        <div className='btn-container'>
          <div className='see'>
            <a href='/projects.html' class='btn btn-lg btn-secondary'>
              See My Projects
            </a>
          </div>

          <div class='contact'>
            <a
              href='https://www.fiverr.com/hrid321?public_mode=true'
              class='btn btn-lg btn-secondary'
            >
              Contact Me On Fiverr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
