import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import CommandScreen from '../component/Command'

 const AppRoute = createStackNavigator({

Dish:{

    screen:CommandScreen
}

})
export const AppRouteContainer = createAppContainer(AppRoute)