import React from 'react'
import auth from '@react-native-firebase/auth';

export const authCtxt = React.createContext<any>(null)
export interface ICtxt {

    state: IState
    actions: IActions
}

interface IState {
    user:{},
    error: string

}
interface IActions {
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logOut: () => void;
    setUser: (user: {}) => void;

}
class AuthProvider2 extends React.Component<{}, IState>{

    state:IState = {
        user:{},
        error: ''
    }
    async login(email: string, password: string) {
        try {
            await auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            this.setState({ error: e })
        }
    }
    async register(email: string, password: string) {

        try {
            await auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {


        }

    }
    setUser(user:{}) {

    }
    render() {

        return (
            <authCtxt.Provider value={{
                state: this.state,
                actions: {
                    login: this.login,
                    register: this.register,
                    setUser:this.setUser

                }


            }}>

                {this.props.children}
            </authCtxt.Provider>)

    }


}

export { AuthProvider2 };
export const AuthConsumer = authCtxt.Consumer;