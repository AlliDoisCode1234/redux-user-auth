import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from "./Components/Login"
import Header from './Components/Header'

import { auth, provider } from './firebase'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from './features/userSlice'

function App() {
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
        dispatch(setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
      })
      .catch((err) => alert(err.message))
  }

  const handleSignout = () => {
    auth
      .signOut()
      .then(()=>{
        dispatch(setUserLogOutState())
      })
      .catch((err) => alert(err.message))
  }


  return (

    // BEM naming convention
    <Router>
      <div className="App">
        {
          userName ? (
            
            <button onClick={handleSignout} >Sign out</button>
          ):(
            <button onClick={handleSignin}>Sign in</button>
          )
        }
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
