import React, { Component } from 'react';

class Laws extends Component {
    render() {
         const data = this.props.lawText.lines.join("\n")
        console.log(data);
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html:  data }} />
               
            </div>
        );
    }
}

export default Laws;