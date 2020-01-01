import React from 'react';

class AddNewProperty extends React.Component {
	componentDidMount () {

	}
	_addDesc=()=>{
    console.log("ADD DESC");
    return (<input type="text" className="form-control m-input  m-stack__item--left" placeholder="Enter property description" />)
  }
  render() {
    return (
     
    <div className="m-grid__item m-grid__item--fluid m-wrapper">
      <div className="m-content">
      <div className="row">
        <div className="col-lg-12">
          {/*begin::Portlet*/}
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <span className="m-portlet__head-icon m--hide">
                    <i className="la la-gear"></i>
                  </span>
                  <h3 className="m-portlet__head-text">
                    Add Property Detail
                  </h3>
                </div>
              </div>
            </div>
            {/*begin::Form*/}
            <form className="m-form">
              <div className="m-portlet__body">
                <div className="m-form__section m-form__section--first">
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Property Name:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  name"/>
                    <span className="m-form__help">
                      Please enter property name
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Property Address:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  address"/>
                    <span className="m-form__help">
                      Please enter property address
                    </span>
                  </div>
                  <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                City:
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Karachi
                  </option>
                  <option>
                    Lahore
                  </option>
                  <option>
                    Islamabad
                  </option>
                </select>
              </div>
              
            </div>
                <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Country:
                    </label>
                    <input type="email" value="Pakistan"className="form-control m-input" placeholder="Enter country  name"/>
                    <span className="m-form__help">
                      Please enter country name
                    </span>
                  </div>
                  <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Property Type:
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Developmental
                  </option>
                  <option>
                    Rental
                  </option>
                  <option>
                    Land
                  </option>
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Property Size:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  size"/>
                    <span className="m-form__help">
                      Please enter property size
                    </span>
                  </div>
                  <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Size Units:
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Sq. Feet
                  </option>
                  <option>
                    Sq.Yards
                  </option>
                  
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Commercial or Residential?
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Commercial
                  </option>
                  <option>
                    Residential
                  </option>
                  
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Latitude:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  latitude"/>
                    <span className="m-form__help">
                      Please enter latitude
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Longitude:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  longitude"/>
                    <span className="m-form__help">
                      Please enter longitude
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Main Pic:
                    </label>
                    <input type="file" className="form-control m-input" placeholder="Enter property  longitude"/>
                    <span className="m-form__help">
                      Please Upload Property main picture
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Supporting Pic:
                    </label>
                    <input type="file" className="form-control m-input" placeholder="Enter property  longitude" multiple />
                    <span className="m-form__help">
                      Please upload supporting pictures
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Documents:
                    </label>
                    <input type="file" className="form-control m-input" placeholder="Enter property  longitude" multiple />
                    <span className="m-form__help">
                      Please upload property documents
                    </span>
                  </div>
            
                  <div className="form-group m-form__group ">
                    <label>
                      Property Description:
                    </label>
                    <div className="m-demo__preview"> 
                    <input type="text" className="form-control m-input  m-stack__item--left" placeholder="Enter property description" />
                    <button type="button" onClick={this._addDesc} className="btn btn-outline-warning active  m-stack__item--right">
                        +
                    </button>
                    </div>
                    <span className="m-form__help">
                      Click '+'  to add description
                    </span>
                  </div>
                  
                  
                  
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Property Price:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  price"/>
                    <span className="m-form__help">
                      Please enter property price
                    </span>
                  </div>
                  <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Currency
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Rupee
                  </option>
                  <option>
                    Riyal
                  </option>
                  
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Property Status
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    On Hold
                  </option>
                  <option>
                    Open
                  </option>
                  <option>
                    Closed
                  </option>
                  
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Display Property 
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Yes
                  </option>
                  <option>
                    No
                  </option>
                  
                  
                </select>
              </div>
              
            </div>
            <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Minimum Investment Amount: 
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter minimum investment amount"/>
                    <span className="m-form__help">
                      Please enter minimum investment amount
                    </span>
                  </div>
                  <div className="form-group m-form__group">
                    <label htmlFor="example_input_full_name">
                      Minimum Investment Period:
                    </label>
                    <input type="email" className="form-control m-input" placeholder="Enter property  latitude"/>
                    <span className="m-form__help">
                      Please enter Minimum investment period
                    </span>
                  </div>
                  <div className="form-group m-form__group row">
              <label className="col-form-label col-lg-3 col-sm-12">
                Minimum Investment periond unit 
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select className="form-control m-bootstrap-select m_selectpicker">
                  <option>
                    Years
                  </option>
                  <option>
                    Months
                  </option>
                  
                  
                </select>
              </div>
              
            </div>
            
                  
                </div>
              </div>
              <div className="m-portlet__foot m-portlet__foot--fit">
                <div className="m-form__actions m-form__actions">
                  <button type="reset" className="btn btn-primary">
                    Next
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Portlet*/}
          
          {/*end::Portlet*/}
        </div>
        
      </div>
      
        </div>
      </div>
    
		);
	}
}

export default AddNewProperty;
