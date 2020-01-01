import React from 'react';

class PropertyPrediction extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
    <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-content">
            <div class="row">
                <div class="col-lg-6">
                    {/*begin::Portlet*/}
                    
                    {/*end::Portlet*/}
                    {/*begin::Portlet*/}
                    <div class="m-portlet">
                        <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                                <div class="m-portlet__head-title">
                                    <span class="m-portlet__head-icon m--hide">
                                        <i class="la la-gear"></i>
                                    </span>
                                    <h3 class="m-portlet__head-text">
                                        Property Shares
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*begin::Form*/}
                        <form class="m-form">
                            <div class="m-portlet__body">
                                <div class="m-form__section m-form__section--first">
                                    <div class="form-group m-form__group row">
                                        <label class="col-form-label col-lg-3 col-sm-12">
                                            Share Break Value	
                                        </label>
                                        <div class="col-lg-4 col-md-9 col-sm-12">
                                            <select class="form-control m-bootstrap-select m_selectpicker">
                                                <option>
                                                    0.1
                                                </option>
                                                <option>
                                                    0.2
                                                </option>
                                                <option>
                                                    0.3
                                                </option>
                                                <option>
                                                    0.4
                                                </option>
                                                <option>
                                                    0.5
                                                </option>
                                                
                                            </select>
                                        </div>
                            
                                </div>
                                    <div class="form-group m-form__group row">
                                        <label class="col-lg-3 col-form-label">
                                            Total Share
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="email" value="100" class="form-control m-input" placeholder="Enter email"/>
                                            <span class="m-form__help">
                                                Total share= 100/Sharebreak	
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
                                                Next
                                            </button>
                                            <button type="reset" class="btn btn-secondary">
                                                Back
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
                                        Property Prediction
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*begin::Form*/}
                        <form class="m-form m-form--fit">
                            <div class="m-portlet__body">
                                <div class="m-form__section m-form__section--first">
                                    
                                    <div class="form-group m-form__group">
                                        <label for="example_input_full_name">
                                            Current Value:
                                        </label>
                                        <input type="number" class="form-control m-input" placeholder="Enter current year value"/>
                                        <span class="m-form__help">
                                            Please enter current year value of property
                                        </span>
                                    </div>
                                    <div class="form-group m-form__group">
                                        <label for="example_input_full_name">
                                            Prediction Year:
                                        </label>
                                        <input type="number" class="form-control m-input" placeholder="Enteryear for prediction"/>
                                        <span class="m-form__help">
                                            Please enter year to enter prediction value of property
                                        </span>
                                    </div>
                                    <div class="form-group m-form__group">
                                        <label for="example_input_full_name">
                                            Predicted Value:
                                        </label>
                                        <input type="number" class="form-control m-input" placeholder="Enteryear for prediction"/>
                                        <span class="m-form__help">
                                            Please enter predicted value of property
                                        </span>
                                    </div>
                                    <div class="form-group m-form__group">
                                        <label for="example_input_full_name">
                                            Evaluated Value:
                                        </label>
                                        <input type="number" class="form-control m-input" placeholder="Enteryear for prediction"/>
                                        <span class="m-form__help">
                                            Please enter evaluated value of property
                                        </span>
                                    </div>
                                    
                                    
                                    
                                    
                                </div>
                                <div class="m-form__seperator m-form__seperator--dashed"></div>
                                
                            </div>
                            <div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit">
                            <div class="m-form__actions m-form__actions--solid">
                                    <button type="reset" class="btn btn-success">
                                        Add More
                                    </button>
                                  
                                </div>
                                <div class="m-form__actions m-form__actions--solid">
                                    <button type="reset" class="btn btn-success">
                                        Submit
                                    </button>
                                    <button type="reset" class="btn btn-secondary">
                                        Cancel
                                    </button>
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

export default PropertyPrediction;