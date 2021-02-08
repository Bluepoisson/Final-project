import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { Routing } from './components/route/Routing'
import StartPage from './pages/startpage/StartPage'
import MapContainer from './components/map/MapContainer';
// import Search from './components/search/Search';
// import { ClinicsCard }from './components/clinics/ClinicsCard';
// import ClinicsList from './components/clinics/ClinicsList';





// import {GoogleReviews} from './components/survey/Map4';

import LoginForm  from "./components/login/LoginForm";
import SignupForm  from "./components/signup/SignUp";
// import { Header } from "./components/header/Header";
import ClinicsList from "./components/clinics/ClinicsList"
// import  Profile  from "./components/profile/Profile";

import ReviewForm  from "./components/survey/ReviewForm";


import { user } from "./components/reducers/user";

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });


export const App = () => {
  return (
   
    <Provider store={store}>
    
       <BrowserRouter>
       {/* <Header /> */}
       <main>
        <Switch>

          <Routing />
            {/* <Route exact path="/" component={StartPage} />
            <Route exact path="/login" component={LoginForm} />
     
            <Route exact path="/review" component={ReviewForm} />
            <Route exact path="/map" component={MapContainer} />
            <Route exact path="/clinics" component={ClinicsList}/>
           <Route exact path="/register" component={SignupForm} /> */}

           
            

        </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}
