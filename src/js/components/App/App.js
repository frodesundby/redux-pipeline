import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log("in app.js")
        return (
            <div>Hallo igjen</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {counter: state.counter}

}

export default connect(mapStateToProps)(App)