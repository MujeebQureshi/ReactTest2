import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import LeftNav from './LeftNav';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Home from './Home';
import AddNewProperty from './AddNewProperty';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';

class Main extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
	<Router>
		<div>
        {/* begin:: Page */}
        <div className="m-grid m-grid--hor m-grid--root m-page" style={{height:'-webkit-fill-available'}}>
          <Header />
		  <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
              <i className="la la-close" />
            </button>
            <LeftNav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/addnewproperty' component={AddNewProperty} />
			</Switch>
          </div>
          <Footer/>
        </div>
        {/* end:: Page */}
        {/*<Sidebar />*/}
        {/* begin::Scroll Top */}
        <div className="m-scroll-top m-scroll-top--skin-top">
          <i className="la la-arrow-up" />
        </div>
        {/* end::Scroll Top */}
      </div>
	</Router>
		);
	}
}

export default Main;
