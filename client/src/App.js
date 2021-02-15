import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import { Routing } from './components/route/Routing'
import StartPage from './pages/startpage/StartPage'
import MapContainer from './components/map/MapContainer';
import LoginForm  from "./components/login/LoginForm";
import SignupForm  from "./components/signup/SignUp";

import ClinicsList from "./components/clinics/ClinicsList"
import ReviewForm  from "./components/survey/ReviewForm";


import { user } from "./components/reducers/user";

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });


export const App = () => {
  return (
   
    <Provider store={store}>
    
       <BrowserRouter>
       <main className='section'>
        <Switch>
   
            {/* <Routing /> */}
            <Route exact path="/" component={StartPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/review" component={ReviewForm} />
            <Route exact path="/map" component={MapContainer} />
            <Route exact path="/clinics" component={ClinicsList}/>
           <Route exact path="/register" component={SignupForm} />
  
        </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}
