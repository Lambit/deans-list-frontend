import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import { Select ,CaretIcon, ModalCloseButton } from 'react-responsive-select';
import 'react-responsive-select/dist/react-responsive-select.css';

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
                  <label>State</label>
                  <Select
                      name="carType1"
                      className="form-control"
                      modalCloseButton={<ModalCloseButton />}
                      value={formData.state}
                    //   onChange={handleChange}
                  
                      options={[
                        { value:"AL", text:'Alabama' },
                        { value:"AK", text:'Alaska' },
                        { value:"AZ", text:'Arizona' },
                        { value:"AR", text:'Arkansas' },
                        { value:"CA", text:'California' },
                        { value:"CO", text:'Colorado' },
                        { value:"CT", text:'Connecticut' },
                        { value:"DE", text:'Delaware' },
                        { value:"DC", text:'District Of Columbia' },
                        { value:"FL", text:'Florida' },
                        { value:"GA", text:'Georgia' },
                        { value:"HI", text:'Hawaii' },
                        { value:"ID", text:'Idaho' },
                        { value:"IL", text:'Illinois' },
                        { value:"IN", text:'Indiana' },
                        { value:"IA", text:'Iowa' },
                        { value:"KS", text:'Kansas' },
                        { value:"KY", text:'Kentucky' },
                        { value:"LA", text:'Louisiana' },
                        { value:"ME", text:'Maine' },
                        { value:"MD", text:'Maryland' },
                        { value:"MA", text:'Massachusetts' },
                        { value:"MI", text:'Michigan' },
                        { value:"MN", text:'Minnesota' },
                        { value:"MS", text:'Mississippi' },
                        { value:"MO", text:'Missouri' },
                        { value:"MT", text:'Montana' },
                        { value:"NE", text:'Nebraska' },
                        { value:"NV", text:'Nevada' },
                        { value:"NH", text:'New Hampshire' },
                        { value:"NJ", text:'New Jersey' },
                        { value:"NM", text:'New Mexico' },
                        { value:"NY", text:'New York' },
                        { value:"NC", text:'North Carolina' },
                        { value:"ND", text:'North Dakota' },
                        { value:"OH", text:'Ohio' },
                        { value:"OK", text:'Oklahoma' },
                        { value:"OR", text:'Oregon' },
                        { value:"PA", text:'Pennsylvania' },
                        { value:"RI", text:'Rhode Island' },
                        { value:"SC", text:'South Carolina' },
                        { value:"SD", text:'South Dakota' },
                        { value:"TN", text:'Tennessee' },
                        { value:"TX", text:'Texas' },
                        { value:"UT", text:'Utah' },
                        { value:"VT", text:'Vermont' },
                        { value:"VA", text:'Virginia' },
                        { value:"WA", text:'Washington' },
                        { value:"WV", text:'West Virginia' },
                        { value:"WI", text:'Wisconsin' },
                        { value:"WY", text:'Wyoming' },
                      ]}

                      caretIcon={<CaretIcon />}
                      selectedValue="Alabama"
                      onChange={newValue => console.log('onChange', newValue)}
                      onSubmit={() => console.log('onSubmit')}

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