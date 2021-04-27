import React from 'react';

const ctxt = React.createContext<any>(null)

export interface ICtx {
    state: IState,
    action: IActions

}
export interface IActions {

    handlerDelete: (id: number) => void;
    addQuantite: (id: number, Dish: {}) => void;
}
export type Item = {
    id: number,
    quantite: number,

}
export interface IState {
    panier: {id?: number,quatité:number,sommePrix:number,prix:number}[],
    profil: {}

}
export type Ka = {id?: number,quatité?:number}[]

class CartProvider extends React.Component<{}, IState>{

    state: IState = {
        panier: [],
        profil: {}

    }

    handleDelete(id: number) {
        const items = this.state.panier.slice();
        const index = items.findIndex(function (item: any) {
            return item.id == id
        })
        items.splice(index, 1);
        this.setState({ panier: items })
    }
    addQuantite(id:number,Dish:{}){
        const items = this.state.panier.slice();
        const item = items.find(function(x:any){ x.id==id})
        if(item!= undefined){
            item.quatité++;
            const nbquatité =item.quatité;
            const nvprix = nbquatité * item.prix;
            item.sommePrix = nvprix;
        }
    }

    render() {

        return (<ctxt.Provider value={{

            state:this.state,
            actions:{
            handleDelete:this.handleDelete,
            addQuantite:this.addQuantite,
            }

        }}>

        {this.props.children}
        </ctxt.Provider>


        )



    }
}

export { CartProvider };
export const CartConsumer = ctxt.Consumer;