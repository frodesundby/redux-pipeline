import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log("in app.js", this.props.counter)
        return (
            <div>
                <h1>Hallo igjen</h1>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {counter: state.counter}

}

App.propTypes = {
    counter: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(App)