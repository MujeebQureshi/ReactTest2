import React from 'react';

class NotFound extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
		<div className="m-grid m-grid--hor m-grid--root m-page">
        <div className="m-grid__item m-grid__item--fluid m-grid  m-error-1" style={{backgroundImage: 'url(assets/app/media/img/error/bg1.jpg)'}}>
          <div className="m-error_container">
            <span className="m-error_number">
              <h1>
                404
              </h1>
            </span>
            <p className="m-error_desc">
              OOPS! Something went wrong here
            </p>
          </div>
        </div>
      </div>
		);
	}
}

export default NotFound;
