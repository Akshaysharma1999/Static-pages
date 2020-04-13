import React from 'react'
import { Container,Dropdown,Image,Menu, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (           
            <Menu fixed='top' inverted size="massive">                 
                <Container>
                    <Menu.Item header>
                      <Icon name="sidebar"/>
                   Project Name
                             </Menu.Item>
                    <Link to="/"><Menu.Item>Home</Menu.Item></Link> 

                   <Menu.Menu position="right">
                    <Dropdown  item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Link to="/profile"><Icon name='user' /></Link> 
                    </Menu.Item>

                   </Menu.Menu>

                 

                </Container>
            </Menu>            
        )
    }
}

export default Navbar