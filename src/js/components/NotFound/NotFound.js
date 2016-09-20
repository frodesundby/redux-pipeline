import React from 'react';

export default class NotFound extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container">
                <h1>Doh! 404!</h1>
                <p>These are <em>not</em> the droids you are looking for!</p>
            </div>
        );
    }
}
