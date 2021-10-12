import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";


/** Shipping form to send coral.
 */

export default function ShippingForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    state: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect 
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
      history.push("/thank-you");
    }
  
    
  

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="ShippingForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                      type="lastName"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                      name="address"
                      className="form-control"
                      value={formData.address}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Zip</label>
                  <input
                      type="text"
                      pattern="[0-9]{5}"
                      name="zipCode"
                      className="form-control"
                      value={formData.zipCode}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}