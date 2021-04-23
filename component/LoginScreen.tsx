import React, { Component } from 'react'
import { Text, View } from 'react-native'
import{Container,Image,Form,Item,Label,Icon,Content,Input,Button}  from 'native-base'
import {AuthContext} from '../context/AuthProvider'
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationStackProp } from 'react-navigation-stack';

 
type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
  }
export default class LoginScreen extends Component<Props> {
 state = {
        password: 0,
        email:'',
        auth:false
      };
    static contextType = AuthContext;
    constructor(props:Props) {
     
      super(props);
     
    } 
    render() {
        const { navigation } = this.props;
        const{register,login}=this.context
        return (
               
    <Container >
     
    <Content style={{flex:6}} contentContainerStyle={{flex:6}} scrollEnabled={false}>
 
      <Form style={{marginTop:25}}>
        <Item rounded last floatingLabel>
          <Icon type="FontAwesome" name='envelope' style={{ color: 'black' }} />
          <Label>   Email</Label>
          <Input onChangeText={text=>this.setState({email:text})}  />
        </Item>

        <Item rounded last floatingLabel style={{marginBottom:10}}>
          <Icon type='FontAwesome5' name='key'></Icon>
          <Label>  Password</Label>
          <Input  onChangeText={password=>this.setState({password:password})} />
        </Item>
      </Form>
      
    </Content>
  </Container>
        )
    }
}
