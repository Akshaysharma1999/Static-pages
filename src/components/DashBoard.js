import React from 'react'
import {Grid,Image,Container,Icon,Placeholder,Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class UserAction extends React.Component{
    
    render()
    {                
        return(
        <Container style={{ marginTop: '5em', padding: '5em' }}>
        <Segment raised>
              <Grid divided padded stackable >
                <Grid.Row>
                <Grid.Column textAlign="center" width={4}>
                  <Link to="/table"><Image src='team.png' size="tiny" centered/></Link>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                  <Link to="/"><Image src='graph.png' size="tiny" centered/></Link>
                </Grid.Column>
                 <Grid.Column textAlign="center" width={4}>
                   <Link to="/"><Image src='support-chat.png' size="tiny" centered/></Link>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                   <Link to="/"><Image src='cloud-computing.png' size="tiny" centered/></Link>
                </Grid.Column>                      
                </Grid.Row>
                
                  <Grid.Row>
                <Grid.Column textAlign="center" width={4}>
                  <Link to="/addlist"><Image src='team.png' size="tiny" centered/></Link>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                  <Link to="/"><Image src='graph.png' size="tiny" centered/></Link>
                </Grid.Column>
                 <Grid.Column textAlign="center" width={4}>
                   <Link to="/"><Image src='support-chat.png' size="tiny" centered/></Link>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                   <Link to="/"><Image src='cloud-computing.png' size="tiny" centered/></Link>
                </Grid.Column>                      
                </Grid.Row>                       
            </Grid>    
        </Segment>      
        </Container>
        )
    }
}

export default UserAction 