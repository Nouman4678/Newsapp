import "./App.css";

import React from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News key="logo" pageSize={6} country="us" category="general" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={6} country="us" category="sports" />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={6}
                country="us"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country="us" category="health" />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/home"
            element={
              <News key="home" pageSize={6} country="us" category="general" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
