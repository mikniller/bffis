import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
             <div id="content" className="bottom-border-shadow">
            <div id="base">
                <div className="container bottom-border padding-vert-30">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <h3 className="class margin-bottom-10">Om</h3>Børnefritidsforeningen i Sydhavnen er en idrætsforening rettet mod børn fra Sydhavnen i skole- og institutionsalderen . </div>
                        
                        <div className="col-md-4 margin-bottom-20">
                            <h3 className="margin-bottom-10">Kontakt Detailjer</h3>
                            <p>
                                <span className="fa-envelope">Email:</span>
                                <a href="mailto:info@bffis.dk">info@bffis.dk</a>
                                <br/>
                                <span className="fa-link">Website:</span>
                                <a href="http://www.example.com">www.bffis.dk</a>
                            </p>
                        </div>
                        <div className="col-md-4 margin-bottom-20">
                            <h3 className="margin-bottom-10">Forsikring</h3>
                            <b>Husk ulykkesforsikring til dit barn.</b><br/> 
                                .. Så er barnet dækket i alle 24 timer i døgnet, indtil det fylder 18 år – altså både i skoletid og fritid.
                                Børnefritidsforeningen har IKKE en kollektiv forsikring!
                            <div className="clearfix"></div>
                        </div>
                       
                    </div>
                </div>
            </div>
           


            <div id="footer" className="background-grey">
                <div className="container">
                    <div className="row">
                        <div id="footermenu" className="col-md-8">
                            <ul className="list-unstyled list-inline">
                                <li>
                                    <a href="#" target="_blank">Sample Link</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">Sample Link</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">Sample Link</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">Sample Link</a>
                                </li>
                            </ul>
                        </div>
                        <div id="copyright" className="col-md-4">
                            <p className="pull-right">(c) 2017 Bffis</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
