/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { store,persistor } from "../store/store.js";
import App from "../InitialPage/App";
import "../assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/js/bootstrap.bundle.min.js";
import "../assets/css/line-awesome.min.css";
import "../assets/css/style.css";
import RightSideBar from "../components/rightSidebar";

const MainApp = () => {
  const config = '/template/react';
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate */}
        <Router basename={`${config}`}>
          <RightSideBar />
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default MainApp;
