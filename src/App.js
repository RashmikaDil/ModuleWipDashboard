import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Side';
import AddButton from './components/AddBtn';

function App() {
  return (
 <>

 
<div className='body'>
<header>
  
  <Header HeaderTxt="Dashboard" discription="discription"></Header>
  

  </header>
<Sidebar/>  

<footer> </footer>
</div>
<AddButton></AddButton>
 </>
  );
}

export default App;
