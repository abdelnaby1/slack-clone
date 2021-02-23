import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chat from './Chat/Chat';
import React ,{useState}from 'react'
import Login from './Login/Login'
import { useStateValue } from '../utility/StateProvider';

function App() {
  // const [user, setUser] = useState(null)
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
            <Login />
        ): (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>WELCOME</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
       
      </Router>
     
    </div>
  );
}

export default App;
