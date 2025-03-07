import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import Home from "./pages/home/Home.js";
import UserHome from "./pages/user/UserHome.js";
import AddExpensive from "./pages/Expensive/AddExpensive.js";
import Login from "./pages/Auth/Login.js";
import SignUp from "./pages/Auth/SignUp.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./Redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CurrentMonthStauts from './pages/Status/CurrentMonthStatus.js'
import Header from './pages/Header/Header.js'
import ExpendatureDetails from './pages/Expensive/ExpendatureDetails.js'
import Setting from './pages/Setting/Setting.js'
import SelecteMonthExpendature from './pages/Expensive/SelectedMonthExpendature/SelecteMonthExpendature.js'
import locationMap from './pages/Location/locationMap'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import { Provider } from "react-redux";
// import {store,persistor} from "./Redux/store";
// import { PersistGate } from 'redux-persist/integration/react'
// const routing = (
//   // <AuthProvider>
//   <Router>
//     <Route exact path="/" component={App} />
//     <Route exact path="/home" component={Home} />
//     <Route exact path="/login" component={Login} />
//     <Route exact path="/signup" component={SignUp} />
//     <Route exact path="/userhome" component={UserHome} />
//     <Route exact path="/addexpensive" component={AddExpensive} />
//   </Router>
// );

function Routing(){
 
    return (
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/addexpensive" component={AddExpensive} />
        <Route exact path="/user/monthStatus" component={CurrentMonthStauts} />
        <Route exact path="/user/expendaturedetail" component={ExpendatureDetails} />
        <Route exact path="/user/selectmonth" component={SelecteMonthExpendature} />
        <Route exact path="/user/setting" component={Setting} />
        
      </Router>
    );
  }

// ReactDOM.render(routing, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routing/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
