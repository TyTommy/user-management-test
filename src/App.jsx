import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import UserList from "./components/UserList";
import TerminatedUsers from "./components/TerminatedUsers";
import "./App.css";

function App() {
  const [terminatedUsers, setTerminatedUsers] = useState([]);

  const addTerminatedUser = (user) => {
    setTerminatedUsers([...terminatedUsers, user]);
  };

  return (
    <Router>
      <div style={{background: 'white'}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Management
            </Typography>
            <Link to="/" className="nav-link">
              Main page
            </Link>
            <Link to="/terminated" className="nav-link">
              Dismissed
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<UserList onTerminate={addTerminatedUser} />}
            />
            <Route
              path="/terminated"
              element={<TerminatedUsers users={terminatedUsers} />}
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;