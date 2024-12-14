import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Side';
import AddButton from './components/AddBtn';

function App() {
  return (
 <>

 <AddButton></AddButton>
<div className='body'>
<header>
  
  <Header HeaderTxt="Dashboard" discription="discription"></Header>
  

  </header>
<Sidebar/>  

<footer> </footer>
</div>
 </>
  );
}

export default App;
