import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>               
                <Link to="/useractions">UserActions</Link>
                <br/>
                <Link to="/profile">Profile</Link>     
                <br/>
                <Link to="/addlist">AddList</Link>             
            </div>
        )
    }
}

export default Home