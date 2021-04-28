import React from 'react'
import auth from '@react-native-firebase/auth';

export const authCtxt = React.createContext<any>(null)
export interface ICtxt {

    State: IState
    Actions: IActions
}

interface IState {
    user: {},
    error:string

}
interface IActions {
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logOut: () => void;

}
class AuthProvider2 extends React.Component<{}, IState>{

    state: IState = {
        user: {},
        error:''
    }
    async login(email:string,password:string){ 
        try{
            await auth().signInWithEmailAndPassword(email,password)
        }catch(e)
        {
            this.setState({error:e})
        }
    }
    async register(email:string,password:string){

        try{
            await auth().createUserWithEmailAndPassword(email,password)
        }catch(e){


        }

    }
    render() {

        return (
            <authCtxt.Provider value={{
                state:this.state,
                actions:{
                    login:this.login,
                    register:this.register
                   
                }


            }}>


            </authCtxt.Provider>)

    }


}

export {AuthProvider2};
export const AuthConsumer= authCtxt.Consumer;