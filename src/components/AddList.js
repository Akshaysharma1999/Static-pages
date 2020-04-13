import React from 'react'
import {List,Button,Image,Container,Segment,Input,Icon} from 'semantic-ui-react'

class AddList extends React.Component{
    render()
    {
        return(
            <Container style={{ marginTop: '3em', padding: '2em' }}>
            <Segment raised>
                <Input action="Add" icon='users' iconPosition='left' placeholder='Add users...' />                
            </Segment>
             <Segment raised>
                <List selection divided verticalAlign='middle'>
                <List.Item>
                <List.Content floated='right'>
                    <Button>Options</Button>
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item>
                <List.Content floated='right'>                    
                    <Button>Options</Button>                    
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                <List.Content>Lindsay</List.Content>
                </List.Item>
                <List.Item>
                <List.Content floated='right'>
                    <Button>Options</Button>
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                <List.Content>Mark</List.Content>
                </List.Item>
                <List.Item>
                <List.Content floated='right'>
                    <Button>Options</Button>
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                <List.Content>Molly</List.Content>
                </List.Item>
                </List>
                </Segment>
            </Container>
        )
    }
}
export default AddList