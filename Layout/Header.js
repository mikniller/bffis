import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div id="hornav" className="bottom-border-shadow">
        <div className="container no-padding border-bottom">
          <div className="row">
            <div className="col-md-8 no-padding">
              <div className="visible-lg">
                <ul id="hornavmenu" className="nav navbar-nav">
                  <li>
                    <Link to='/' className="fa-home">Nyheder</Link>
                  </li>
                  <li>
                    <Link to='/bestyrelse'>Bestyrelse</Link>
                  </li>
                   <li>
                    <Link to='/vedtaegter'>Vedtægter</Link>
                  </li>
                  <li>
                    <Link to='/om'>Om</Link>
                  </li>
                  <li>
                    <Link to='/medlemslogin'>Medlems login</Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="social-icons pull-right">
              <li className="social-facebook">
                <a href="#" target="_blank" title="Facebook"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}