import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import { DatabaseSource, IDatabase } from '../data/DatabaseSource';
import { Container, Content, Card, CardItem,Body,Button,Icon,Thumbnail,Left,Right } from 'native-base'
import { NavigationStackProp } from 'react-navigation-stack';
import { CartContext } from '../context/CartProvinder'


type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
  }
export default class Command extends Component<Props> {
    private IDatabase: DatabaseSource;
    state = {
        dishes: [],
    };
    constructor(props:Props, context: any, source?: IDatabase) {
        super(props, context);
        if (!source) {
            this.IDatabase = new DatabaseSource();
        } else {
            this.IDatabase = source;
        }
    }
    componentDidMount() {
        this.IDatabase.DishList().then(res => this.setState({ dishes: res }));
    }

    render() {
        const { navigation } = this.props;
        const { login, setPanier, addQuantite } = this.context
        const dishProduit = this.state.dishes.map((dish:any) => {
            return <Card key={dish.id} style={{flex: 0,marginTop:20}}>
   
            <CardItem key={dish.id}>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{dish.nom}</Text>
                  <Text>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button style={{justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('Detail',{id:dish.id})}>
              <Body>
                <Image source={{uri: dish.url}} style={{height: 200, width: 400, flex: 1}}/>
                <Text>
                 {dish.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B',}} >
                  <Icon style={{color:'#ffc107'}} name="star" />
                  <Text style={{fontSize:15}} >4.6</Text>
               
                </Button>
              </Left>
              <Right>
              <Button transparent textStyle={{color: '#87838B',}} >
                  <Text style={{fontSize:15}}> Prix: {dish.prix} $</Text>
              
                  <Text onPress={()=>{addQuantite(dish.id,dish)}} style={{fontSize:15,marginRight:11}}>Add to Cart</Text>
                </Button>
                
              </Right>
            </CardItem>
          </Card>
        
        })
            
        return (
            <Container>
        
            <Content style={{marginTop:25}}>
            
             {dishProduit} 
               
            </Content>
           <Button  ><Text>Afficher le panier </Text></Button>
          </Container>
            );
        }
}
