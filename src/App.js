import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import Main from './Components/Main';
import NotFound from './Components/NotFound';
import Login from './Components/Login';

const NormalRoutes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
	<Route exact path='/home' component={Main} />
	<Route exact path='/addnewproperty' component={Main} />
	<Route exact path='/developmental' component={Main} />
	<Route exact path='/prediction' component={Main} />
	<Route exact path='/rental' component={Main} />
	<Route exact path='/notfound' component={NotFound} />
	<Route exact path='/login' render={() => <Redirect to="/home" />} />
	<Route render={() => <Redirect to="/notfound" />} />
  </Switch>
)

const ForceAuthRoutes = () => (
  <Switch>
    <Route exact path='/' component={Login} />
	<Route exact path='/login' component={Login} />
	<Route render={() => <Redirect to="/login" />} />
  </Switch>
)

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			AdminToken : localStorage.getItem('AdminToken'),
			Admin : JSON.parse(localStorage.getItem('Admin'))
		};
	}
	
	componentDidMount(){
	
	}
	
	render() {
		return (
		<Router>
			
			{(!this.state.AdminToken)? <NormalRoutes /> : <ForceAuthRoutes />}
			
		</Router>
		);
	}
}

export default App;
