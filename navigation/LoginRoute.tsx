import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import LoginScreen from '../component/LoginScreen';
import SignUpScreen from '../component/LoginScreen';


export const LoginRoute = createStackNavigator({

    Login: {

        screen: LoginScreen
    },
    SignUp: {
        screen:SignUpScreen
    }


})
export const LoginRouteContainer = createAppContainer(LoginRoute);
