import React from "react";
import CoralData from "../coral-layout/CoralLayout";
import "./SpsCatalog.css";



function SpsCatalog(props) {
  const { SPS, onAdd } = props;
  return (
    <div className="homepage">
    <div className="container text-center">
      <h1 className="mb-4 font-weight-bold">Deans List Coral</h1>
      <p className="lead">SPS</p>
            <div className='container catalog'>
            { SPS.map((coral) => (
              <CoralData key={coral.id} coral={coral} onAdd={onAdd}></CoralData>
            ))}
            </div>
        </div>
      </div>
  );
}

export default SpsCatalog;