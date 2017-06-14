import React from 'react';
import {Switch, Route} from 'react-router'
import About from '../Components/About'
import News from '../Components/News'
import Board from '../Components/Board'
import Laws from '../Components/Laws'
import DataPage from '../Components/DataPage'
import lawtext from '../Source/lawtext'

export default class Main extends React.Component {
  render() {
    return (
      <div id="content" className="bottom-border-shadow ">
        <div className="container background-white bottom-border">
          <div className="row margin-vert-30">
          <Switch>
            <Route exact path='/' component={News}/>
            <Route path='/vedtaegter' component={() => <Laws lawText={lawtext}/>}/>
            <Route path='/bestyrelse' component={Board}/>
            <Route path='/om' component={About}/>
            <Route path='/medlemslogin' component={DataPage}/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}
