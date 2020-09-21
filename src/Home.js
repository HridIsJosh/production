import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  return (
    <body className='inner'>
      <main role='main' className='inner cover'>
        <h1 className='cover-heading'>Front-End Web Development</h1>
        <p className='lead'>Help Me Make Your Dream Website</p>
        <p className='lead'>
          <a href='/contact' className='btn btn-lg btn-secondary'>
            Learn more
          </a>
        </p>
      </main>
    </body>
  );
}

export default Home;
