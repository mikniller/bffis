import React, {Component} from 'react';
import postscribe from 'postscribe';

class DataPage extends Component {


    componentDidMount() {
        // var embedCode = '

        <script type="text/javascript" src="https://www.conventus.dk/dataudv/www/medlemslogin.php?foreningsid=9542&amp;layout=1&amp;boks=1&amp;popup=1"></script>
        // $('#scriptContainer').append(embedCode);
        // console.log(embedCode);
    }


    render() {
        return (
            <div>
                <h2 className="title">
                    <span>Medlems login</span>
                </h2>
                <div className="entry">
                    <span>
                        <p>Har man brug for at se og/eller redigere i sine tilmeldinger kan det gøres her
                        </p>
                    </span>
                    <span id="scriptContainer">
                        <iframe src="loginboks.html'"></iframe>
                    </span>
                </div>


            </div>
        );
    }
}

export default DataPage;