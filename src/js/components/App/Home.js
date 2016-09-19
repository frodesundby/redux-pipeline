import React from 'react'
import {connect} from 'react-redux'

const App = React.createClass({
    render(){
        console.log("in home.js")
        return (
            <div>Hallo fra Home</div>
        )
    }
})
const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(App)