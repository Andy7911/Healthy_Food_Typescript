import React,{useContext,useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import {AuthProvider,AuthContext} from '../context/AuthProvider'
import { AppRouteContainer } from './AppRoute';
import { LoginRoute, LoginRouteContainer } from './LoginRoute';


export default function ALLRoute(){
    const [initializing, setInitializing] = useState(true);
    const { user, setUser, logout } = useContext(AuthContext);
    function onAuthStateChanged(user:any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (!user) {
        return (


            < LoginRouteContainer/>

        );
    };
    return (

        <AppRouteContainer>

        </AppRouteContainer>


    );


}