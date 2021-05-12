import React from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {customDrawer} from '../navigation/CustomDrawer'
import Command from '../component/Command';


export const AppDrawerApp= createDrawerNavigator({
    Dish: {
        screen: Command
    },


},{
    contentComponent: customDrawer
})