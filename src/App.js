
import { Route, Routes } from 'react-router';
import './App.css';

import Home from './components/Home/Home'
import Colections from './components/Colections/Colections'
import Reviews from './components/Reviews/Reviews'
import Contacts from './components/Contacts/Contacts'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import HomeWrapper from './wrapper/HomeWrapper';
import Error from './components/Error/Error';
import Basket from './components/Basket/Basket';
import UniqItem from './components/UniqItem/UniqItem'




function App() {



  return (
    <Routes>
      <Route path='/' element={<HomeWrapper />}>

        <Route index element={<Home />} />

        <Route path='colections'>
          <Route index element={<Colections />} />
          <Route path=':id' element={<UniqItem />} />
        </Route>


        <Route path='reviews' element={<Reviews />} />

        <Route path='contacts' element={<Contacts />} />

        <Route path='basket' element={<Basket />} />

      </Route>

      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />

    </Routes>
  );
}

export default App;
