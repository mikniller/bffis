import React, { Component } from 'react';

class SlideShow extends Component {
    render() {
        return (
            <div>
          <div id="slideshow" className="bottom-border-shadow">
                <div className="container no-padding background-white bottom-border">
                    <div className="row">
                      
                        <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example" data-slide-to="1"></li>
                                <li data-target="#carousel-example" data-slide-to="2"></li>
                            </ol>
                            <div className="clearfix"></div>
                       
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src="assets/img/slideshow/slide1.jpg" width="1080" height="200"/>
                                </div>
                                <div className="item">
                                    <img src="assets/img/slideshow/slide2.jpg" width="1080" height="200"/>
                                </div>
                                <div className="item">
                                    <img src="assets/img/slideshow/slide3.jpg" width="1080" height="200"/>
                                </div>
                                <div className="item">
                                    <img src="assets/img/slideshow/slide4.jpg" width="1080" height="200"/>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                      
                                          </div>
                </div>
            </div>      
            </div>
        );
    }
}

export default SlideShow;