import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Rental extends React.Component {
	componentDidMount () {

    }
    state={
        RentedOn : null,
        RentedTill : null  //new Date()
    }
    handleChangeRentedOn = date => {
        this.setState({
          RentedOn: date 
          

        });
      };
      handleChangeRentedTill = date => {
        this.setState({
          RentedTill: date 
          

        });
      };
	
  render() {
    return (
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-content">
        <div class="row">
            <div class="col-lg-6">
                
                {/*begin::Portlet*/}
                <div class="m-portlet">
                    <div class="m-portlet__head">
                        <div class="m-portlet__head-caption">
                            <div class="m-portlet__head-title">
                                <span class="m-portlet__head-icon m--hide">
                                    <i class="la la-gear"></i>
                                </span>
                                <h3 class="m-portlet__head-text">
                                    Rental Details
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/*begin::Form*/}
                    <form class="m-form">
                        <div class="m-portlet__body">
                            <div class="m-form__section m-form__section--first">
                                <div class="form-group m-form__group row">
                                    <label class="col-lg-3 col-form-label">
                                        Rented On :
                                    </label>
                                    <div class="col-lg-6">
                                    <DatePicker
                                            className="form-control m-input"
                                            placeholderText="Click to select a date"
                                            selected={this.state.RentedOn}
                                           onChange={this.handleChangeRentedOn}
                                     />
                                       {/* <input type="email" class="form-control m-input" placeholder="Select Date rented on"/> */}
                                        <span class="m-form__help">
                                            Please select date rented on 
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group m-form__group row">
                                    <label class="col-lg-3 col-form-label">
                                        Rented To :
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="email" class="form-control m-input" placeholder="Enter Rentee Name"/>
                                        <span class="m-form__help">
                                            Please enter rentee name
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group m-form__group row">
                                    <label class="col-lg-3 col-form-label">
                                        Rental Contract:
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="file" class="form-control m-input" placeholder="Submit rental contract"/>
                                        <span class="m-form__help">
                                            Please attach rental contract
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group m-form__group row">
                                    <label class="col-lg-3 col-form-label">
                                        Rent Per Month :
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="number" class="form-control m-input" placeholder="Enter Rent per month"/>
                                        <span class="m-form__help">
                                            Please enter rent per month
                                        </span>
                                    </div>
                                </div>
                               
                                
                                <div class="form-group m-form__group row">
                                    <label class="col-lg-3 col-form-label">
                                        Rented Till:
                                    </label>
                                    <div class="col-lg-6">
                                        {/*<input type="email" class="form-control m-input" placeholder="Enter Rented till date"/>*/}
                                        <DatePicker
                                            className="form-control m-input"

                                            selected={this.state.RentedTill}
                                           onChange={this.handleChangeRentedTill}
                                     />
                                        <span class="m-form__help">
                                            Please enter rented till date
                                        </span>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div class="m-portlet__foot m-portlet__foot--fit">
                            <div class="m-form__actions m-form__actions">
                                <div class="row">
                                    <div class="col-lg-3"></div>
                                    <div class="col-lg-6">
                                        <button type="reset" class="btn btn-success">
                                            Submit
                                        </button>
                                        <button type="reset" class="btn btn-secondary">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/*end::Form*/}
                </div>
                {/*end::Portlet*/}
            </div>
            </div>
        </div>
        </div>
    
    );
	}
}

export default Rental;