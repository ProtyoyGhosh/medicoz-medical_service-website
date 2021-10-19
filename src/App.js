import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import Signup from './Components/Signup/Signup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/header'>
              <Header></Header>
            </Route>
            <Route path='/banner'>
              <Banner></Banner>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/footer'>
              <Footer></Footer>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
