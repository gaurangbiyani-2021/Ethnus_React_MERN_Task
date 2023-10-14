// Task6.js
import React,{useEffect} from 'react';

function Task6() {
    useEffect(() => {
      // Redirect to your deployed link when the component is mounted
      window.location.href = "https://gaurang-biyani-portfolio.netlify.app/";
    }, []);
  
    return (
      <div>
        {/* <h1>Redirecting...</h1> */}
      </div>
    );
  }

export default Task6;
