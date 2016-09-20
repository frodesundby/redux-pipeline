import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../../actions/counterActions'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(type){
        if (type === "increment") {
            this.props.dispatch(increment())
        } else {
            this.props.dispatch(decrement())
        }
    }
    render(){
        const { counter, dispatch }  = this.props
        return (
            <div>
                <h1 className="primary-color">Hallo igjen</h1>
                <div>{counter}</div>
                <button type="button" onClick={this.handleClick.bind(this, "increment")}>increment</button>
                <button type="button" onClick={this.handleClick.bind(this, "decrement")}>decrement</button>

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