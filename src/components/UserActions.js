import React from 'react'
import {Grid,Image,Container,Icon,Placeholder,Segment} from 'semantic-ui-react'
import DashBoard from './DashBoard'
import Navbar from './Navbar'
import Footer from './Footer'

class UserAction extends React.Component{
    
    render()
    {                
        return(
            <div>               
                <Navbar/>
                <DashBoard/>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default UserAction 