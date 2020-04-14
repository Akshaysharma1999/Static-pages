import React from 'react'
import {Segment,Container,Table,Icon,Image,Button,Dropdown} from 'semantic-ui-react'

class TableComp extends React.Component{
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
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
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
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>  
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>
                        <Dropdown text='Click' icon='dropdown' button options={[{ key: 1, text: 'One', value: 1 },{ key: 2, text: 'Two', value: 2 },{ key: 3, text: 'Three', value: 3 },]}/>
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Segment>
            </Container>
        )
    }
}

export default TableComp