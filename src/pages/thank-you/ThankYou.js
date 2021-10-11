import React from 'react';
import { useHistory } from "react-router-dom";
import Title from "../../app/title/Title";
import { Button } from 'react-bootstrap';

import "./ThankYou.css";


export default function ThankYouPage() {

  const history = useHistory();
    
  function handleSubmit(e) {
    e.preventDefault(); 
    history.push('/');
    window.location.reload('/');
  }
    
    return (
      <>
      <Title title="Thank You!" />
        <h1 className="thank-you">Thank You!</h1>
        <div>
          <h2 className="block">
            Thank you for you business! You will recieve and email of you order information,
            along with shipping details. Feel free to reach out with any questions!
          </h2>
        </div>

        <div className="thank-exit">
        <Button className="btn-thank" onClick={handleSubmit}>Submit</Button>
        </div>
        
      </>
    );
    }