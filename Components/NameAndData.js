import React, {Component} from 'react';

function renderAllMembers(members) {
    if (members.length > 0) {
        return members.map((m, index) => (<MemberName
            key={index}
            name={m.name}
            txt={m.txt}
            title={m.title}
            img={m.img}
            email={m.email}/>));
    } else 
        return [];
    }

class MemberName extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-3 col-xs-6 person-details margin-bottom-30">
                <figure>
                    <figcaption>
                        <h3 className="margin-bottom-10">{this.props.name}<br/>
                            <small>
                                {this.props.title} <br/> <a href='mailto:{this.props.email}'>{this.props.email}</a></small>
                        </h3>
                       
                    </figcaption>
                    <img src={this.props.img} alt="image1"/>
                </figure>
            </div>
        );
    }
};

export default class NameAndData extends Component {
    render() {
        const members = renderAllMembers(this.props.members);
        return (
            <div>
                {members}
            </div>
        );
    }
};
