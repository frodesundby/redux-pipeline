import React from 'react'
import {connect} from 'react-redux'

const App = React.createClass({
    render(){
        console.log("in app.js")
        return (
            <div>Hallo igjen</div>
        )
    }
})
const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(App)