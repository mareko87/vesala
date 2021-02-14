import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Igra from './components/Igra';
import Kreiraj from './components/Kreiraj';
import Navbar from './components/Navbar';

function App() {

  const [reci, setreci] = useState([])

  const kreiraj = (rec) => {
    setreci(prev => {
      return [...prev, rec]
    })
  }

  return (

    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path='/kreiraj'>
          <Kreiraj kreiraj={kreiraj} reci={reci} />
        </Route>
        <Route path='/'>
          <Igra kreiraj={kreiraj} reci={reci} />
        </Route>
        
      </Switch>
    </BrowserRouter>

  );

}

export default App;
