import React from 'react'
import {connect} from 'react-redux'

const App = React.createClass({
    render(){
        return (
            <div>Hallo</div>
        )
    }
})
const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(App)