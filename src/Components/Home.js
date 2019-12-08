import React from 'react';

class Home extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
		<div className="m-grid__item m-grid__item--fluid m-wrapper">
              <div className="m-subheader ">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h3 className="m-subheader__title ">
                      Home - Dashboard
                    </h3>
                  </div>
                </div>
              </div>
              <div className="m-content">
                <div className="m-portlet">
                  <div className="m-portlet__body  m-portlet__body--no-padding">
                    <div className="row m-row--no-padding m-row--col-separator-xl">
                    </div>  
                  </div>
                </div>
              </div>
            </div>
		);
	}
}

export default Home;
