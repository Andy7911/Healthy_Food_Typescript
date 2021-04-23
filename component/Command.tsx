import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DatabaseSource, IDatabase } from '../data/DatabaseSource';

export default class Command extends Component {
    private IDatabase: DatabaseSource;
    state = {
        dish: [],
    };
    constructor(props: {}, context: any, source?: IDatabase) {
        super(props, context);
        if (!source) {
            this.IDatabase = new DatabaseSource();
        } else {
            this.IDatabase = source;
        }
    }
    componentDidMount() {
        this.IDatabase.DishList().then(res => this.setState({ dish: res }));
    }

    render() {
        return (
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
