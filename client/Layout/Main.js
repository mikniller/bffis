import React from 'react';
import { Switch,Route } from 'react-router'
import  About  from '../Components/About'
import  News  from '../Components/News'
import  Board  from '../Components/Board'


export default class Main extends React.Component  {
  render() {
    return (
      <div>
      hjhjjhjhjhhj

      <Switch>
  <Route exact path='/' component={News}/>
  <Route path='/bestyrelse' component={Board}/>
  <Route path='/om' component={About}/>
</Switch>

 </div>
    );
  }
}
