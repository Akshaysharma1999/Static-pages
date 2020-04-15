import React from 'react'
import {List,Button,Image,Container,Segment,Input,Icon,Dropdown} from 'semantic-ui-react'

let arr = [{name:'Lena',img:'https://react.semantic-ui.com/images/avatar/small/lena.png'},
           {name:'Lindsay',img:'https://react.semantic-ui.com/images/avatar/small/lindsay.png'},
           {name:'Mark',img:'https://react.semantic-ui.com/images/avatar/small/mark.png'},
           {name:'Molly',img:'https://react.semantic-ui.com/images/avatar/small/molly.png'}]

class AddList extends React.Component{

    renderItem=()=>{
        return(
            arr.map((obj)=>{
                return(<List.Item>
                <List.Content floated='right'>
                      <Dropdown
                                text='Options'
                                icon='dropdown'                                                      
                                button     
                                options={[{ key: 1, text: 'One', value: 1 },
                                          { key: 2, text: 'Two', value: 2 },
                                          { key: 3, text: 'Three', value: 3 },]}                           
                         />                           
                </List.Content>
                <Image avatar src={obj.img} />
                <List.Content>{obj.name}</List.Content>
                </List.Item>)
            })           
        )
    }

    render()
    {
        return(
            <Container style={{ marginTop: '3em', padding: '2em' }}>
            <Segment raised>
                <Input action="Add" icon='users' iconPosition='left' placeholder='Add users...' />                
            </Segment>
             <Segment raised>
                <List selection divided verticalAlign='middle'>
                      {this.renderItem()}                 
                </List>
                </Segment>
            </Container>
        )
    }
}
export default AddList