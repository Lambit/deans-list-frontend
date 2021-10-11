import React from "react";
import CoralData from "../coral-layout/CoralLayout";
import Title from "../../app/title/Title";

import "./LpsCatalog.css";



function LpsCatalog(props) {
  const { LPS } = props;
  return (
    <>
    <Title title="LPS" />
    
      <div className="homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Dean's List Coral</h1>
        <p className="lead">LPS</p>
              <div className='container catalog'>
              { LPS.map((coral) => (
                <CoralData key={coral.id} coral={coral} ></CoralData>
              ))}
              </div>
          </div>
        </div>
    </>  
  );
}

export default LpsCatalog;