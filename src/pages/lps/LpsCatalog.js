import React from "react";
import CoralData from "../coral-layout/CoralLayout";
import "./LpsCatalog.css";



function LpsCatalog(props) {
  const { LPS } = props;
  return (
    <div className="homepage">
    <div className="container text-center">
      <h1 className="mb-4 font-weight-bold">Deans List Coral</h1>
      <p className="lead">LPS</p>
            <div className='container catalog'>
            { LPS.map((coral) => (
              <CoralData key={coral.id} coral={coral} ></CoralData>
            ))}
            </div>
        </div>
      </div>
  );
}

export default LpsCatalog;