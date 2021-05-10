import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavbarTop from './components/NavbarTop/NavbarTop';
import NavbarMiddle from  './components/NavbarMiddle/NavbarMiddle';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
import Contact from './components/Contact/Contact'; 
import CleanWater from './components/CleanWater/CleanWater';
import NewMachineOfTheWeek from './components/Home/NewMachineOfTheWeek/NewMachineOfTheWeek';
import UsedMachineOfTheWeek from   './components/Home/UsedMachineOfTheWeek/UsedMachineOfTheWeek';
import CurrentStockList from  './components/CurrentStockList/CurrentStockList';
import NewEquipment from   './components/NewEquipment/NewEquipment';
import UsedEquipment from './components/UsedEquipment/UsedEquipment.js';
import ConcretingEquipment from './components/ConcretingEquipment/ConcretingEquipment';
import MaterialsHandlingEquipment from './components/MaterialsHandlingEquipment/MaterialsHandlingEquipment';
import Rentals from './components/Rentals/Rentals';
import SpareParts from './components/SpareParts/SpareParts';
import Services from './components/Services/Services';
import Partners from'./components/Partners/Partners';
import News from './components/News/News';






function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <div className='desktop-only-top-nav'>
         <NavbarTop />
        </div>
         <div className='desktop-only-top-nav'>
         <NavbarMiddle/>
        </div>
        <div className='mobile-only-top-nav'>
          <Navbar/>
        </div>
        
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
           <Route path='/about'>
            <About/>
          </Route>
           <Route path ='/contact'>
            <Contact/>
          </Route>
          <Route path ='/clean-water'>
            <CleanWater/>
          </Route>
          <Route path ='/new-machine-of-the-week'>
            <NewMachineOfTheWeek/>
          </Route>
          <Route path ='/used-machine-of-the-week'>
            <UsedMachineOfTheWeek/>
          </Route>
          <Route path ='/curr-stk'>
            <CurrentStockList/>
          </Route>
          <Route path ='/new-equip'>
            <NewEquipment/>
          </Route>
           <Route path ='/used-equip'>
            <UsedEquipment/>
          </Route>
          <Route path ='/conc-equip'>
            <ConcretingEquipment/>
          </Route>
          <Route path ='/materials-equip'>
            <MaterialsHandlingEquipment/>
          </Route>
          <Route path ='/rentals'>
            <Rentals/>
          </Route>
          <Route path ='/spares'>
            <SpareParts/>
          </Route>
           <Route path ='/services'>
            <Services/>
          </Route>
          <Route path ='/partners'>
            <Partners/>
          </Route>
          <Route path ='/news'>
            <News/>
          </Route>


        </Switch>
    </BrowserRouter>
  );
}

export default App;
