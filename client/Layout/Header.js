import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component  {
  render() {
    return (
      <header>
     <nav>
       <ul>
         <li><Link to='/'>Nyheder</Link></li>
         <li><Link to='/bestyrelse'>Bestyrelse</Link></li>
         <li><Link to='/om'>Om</Link></li>
       </ul>
     </nav>
   </header>
    );
  }
}
