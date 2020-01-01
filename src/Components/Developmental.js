import React from 'react';

class Developmental extends React.Component {
	componentDidMount () {

	}
	
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
													Developmental Property 
												</h3>
											</div>
										</div>
									</div>
									{/*begin::Form*/}
									<form class="m-form m-form--fit">
										<div class="m-portlet__body">
											<div class="m-form__section m-form__section--first">
												<div class="m-form__heading">
													<h3 class="m-form__heading-title">
														1. Development Duration
													</h3>
												</div>
												<div class="form-group m-form__group">
													<label for="example_input_full_name">
														Start Date:
													</label>
													<input type="email" class="form-control m-input" placeholder="Select Start Date"/>
													<span class="m-form__help">
														Please select start date of project
													</span>
												</div>
												<div class="form-group m-form__group">
													<label >
														End Date:
													</label>
													<input type="email" class="form-control m-input" placeholder="Select End Date"/>
													<span class="m-form__help">
														Please select end date of project 
													</span>
												</div>
												<div class="form-group m-form__group">
													<label >
														Value on Completion:
													</label>
													<div class="m-input-icon m-input-icon--left">
														<input type="text" class="form-control m-input" placeholder="Phone number"/>
														<span class="m-input-icon__icon m-input-icon__icon--left">
															<span>
																<i class="la la-bell"></i>
															</span>
														</span>
													</div>
													<span class="m-form__help">
														Enter value on completion
													</span>
												</div>
												
											</div>
											<div class="m-form__seperator m-form__seperator--dashed"></div>
											<div class="m-form__section m-form__section--last">
												<div class="m-form__heading">
													<h3 class="m-form__heading-title">
														2. Developmental Prediction:
													</h3>
												</div>
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
												
											</div>
										</div>
										<div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit">
										<div class="m-form__actions m-form__actions--solid">
												<button type="reset" class="btn btn-success">
													Add More Prediction
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

export default Developmental;