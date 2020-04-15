import React from 'react'
import {Segment,Container,Table,Icon,Image,Button,Dropdown} from 'semantic-ui-react'

let arr=[{name:'John Lilki',Date:'September 14, 2013',email:'jhlilk22@yahoo.com'},
        {name:'Jamie Harington',Date:'January 11, 2014',email:'jamieharingonton@yahoo.com'},
        {name:'Jill Lewis',Date:'May 11, 2014',email:'jhlilk22@yahoo.com'},
        {name:'John Lilki',Date:'September 14, 2013',email:'jilsewris22@yahoo.com'},
        {name:'Jamie Harington',Date:'January 11, 2014',email:'jhlilk22@yahoo.com'},
        {name:'John Lilki',Date:'September 14, 2013',email:'jhlilk22@yahoo.com'},
        {name:'Jamie Harington',Date:'January 11, 2014',email:'jamieharingonton@yahoo.com'},
        {name:'Jill Lewis',Date:'May 11, 2014',email:'jhlilk22@yahoo.com'},
        {name:'John Lilki',Date:'September 14, 2013',email:'jilsewris22@yahoo.com'},
        {name:'Jamie Harington',Date:'January 11, 2014',email:'jhlilk22@yahoo.com'},]

class TableComp extends React.Component{

    renderRow=()=>{
        return (
            arr.map((obj)=>{
                return(
                    <Table.Row>
                        <Table.Cell>{obj.name}</Table.Cell>
                        <Table.Cell>{obj.Date}</Table.Cell>
                        <Table.Cell>{obj.email}</Table.Cell>
                        <Table.Cell>
                          <Dropdown
                                text='Click'
                                icon='dropdown'                                                      
                                button     
                                options={[{ key: 1, text: 'One', value: 1 },
                                          { key: 2, text: 'Two', value: 2 },
                                          { key: 3, text: 'Three', value: 3 },]}                           
                            />
                        </Table.Cell>
                   </Table.Row>
                )
            })              
        )
    }

    render()
    {
        return(
            <Container style={{marginTop:"5em"}}>
                <Segment raised >
                <Table striped selectable >
                    <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell style={{backgroundColor:"#36304a",color:"white"}}><Icon name="user"/>Name</Table.HeaderCell>
                        <Table.HeaderCell style={{backgroundColor:"#36304a",color:"white"}}><Icon name="calendar alternate"/>Date Joined</Table.HeaderCell>
                        <Table.HeaderCell style={{backgroundColor:"#36304a",color:"white"}}><Icon name="mail"/>E-mail</Table.HeaderCell>
                        <Table.HeaderCell style={{backgroundColor:"#36304a",color:"white"}}><Icon name="settings"/>Options</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {this.renderRow()}                  
                   
                    </Table.Body>
                </Table>
                </Segment>
            </Container>
        )
    }
}

export default TableComp