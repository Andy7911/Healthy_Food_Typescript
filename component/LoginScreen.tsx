import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import{Container,Form,Item,Label,Icon,Content,Input,Button}  from 'native-base'
import {AuthContext} from '../context/AuthProvider'
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationStackProp } from 'react-navigation-stack';
import{ authCtxt,AuthProvider2,ICtxt} from '../context/AuthProvider2'

 
type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
  }
export default class LoginScreen extends Component<Props> {
 state = {
        password:'',
        email:'',
        auth:false
      };
    static contextType = authCtxt;
    constructor(props:Props) {
     
      super(props);
     
    } 
    render() {
        const { navigation } = this.props;
        const authContext:ICtxt =this.context;
        const UrlImg:string = 'https://i.ibb.co/GHtvyKY/logo-health-food-eating-vector-fork-logo-46ef4e30c07292c0988b786f43ea8a52.png'
        return (
               
    <Container >
     
    <Content style={{flex:6}} contentContainerStyle={{flex:6}} scrollEnabled={false}>
    <View style={{ flexDirection: 'row', flex: 2, justifyContent: "center",marginTop:35 }}>
          <Image
            source={{
              uri:'https://i.ibb.co/GHtvyKY/logo-health-food-eating-vector-fork-logo-46ef4e30c07292c0988b786f43ea8a52.png',
            }}
            style={{ width: 125, height: 200 }}
          />

        </View>
        <View style={{flex:3 ,flexDirection:'column',justifyContent:'center'}}>
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
      </View>
      <View style={{ flex:2, flexDirection:'column',justifyContent:'center'}}>
        <Button rounded success onPress={()=>{authContext.actions.login(this.state.email,this.state.password)
          
        }} block ><Text >Connection</Text></Button>
        <Text onPress={()=>navigation.navigate('SubcribeScreen')} style={{textAlign:'center',marginTop:15}}>Subcribe here </Text>
        </View>
    </Content>
  </Container>
        )
    }
}
