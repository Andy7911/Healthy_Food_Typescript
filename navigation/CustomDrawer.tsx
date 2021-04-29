import React,{useContext} from 'react'
import { View, Text, SafeAreaView, ScrollView, Image,Button } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer';
import { Icon, Item, Input } from 'native-base';
import {AuthContext} from '../context/AuthProvider'

export const customDrawer = (props:any) => {
    const{logout} = useContext(AuthContext)
    return(
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 80, width: 100 }}>
          
        </View>
        <View style={{ height: 100, width: 200, marginBottom: 20 }}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                <Image style={{ height: 100, width: 50 }} source={require('../assets/images/logo.png')} >
                </Image>
                <Text>HEALTHY FOOD</Text>
            </View>
            <View>
            <Text style={{marginTop:10}}>{`Welcome :`}</Text>
            </View>
        </View>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

        <Item>
                <Icon style={{ height: 20, width: 20 }} type="FontAwesome" name="sign-out" onPress={() => { logout() }} />
                <Text> Logout</Text>
            </Item>
    </SafeAreaView>

)};