import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment ,Icon,Checkbox} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         <Icon name="signup" /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment textAlign='left'>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />               
          {/* <Form.Field textAlign='left'>
             <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field> */}
           <Link to="/useractions">
           <Button color='teal' fluid size='large'>
            Login
           </Button>
           </Link>
        </Segment>          
      </Form>    
    </Grid.Column>
  </Grid>
)

export default LoginForm