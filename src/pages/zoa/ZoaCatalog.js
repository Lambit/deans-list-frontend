import React from "react";
import CoralData from "../coral-layout/CoralLayout";
import Title from "../../app/title/Title";

import "./ZoaCatalog.css";

function ZoaCatalog(props) {
  const { ZOA } = props;
  return (
    <>
    <Title title="ZOAS" />
    
      <div className="homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Dean's List Coral</h1>
        <p className="lead">ZOA'S</p>
              <div className='container catalog'>
              { ZOA.map((coral) => (
                <CoralData key={coral.id} coral={coral}></CoralData>
              ))}
              </div>
          </div>
        </div>

    </>  
  );
}

export default ZoaCatalog;