import React from 'react';
import {Stylesheet,View,Text} from 'react-native';

export default class ReadStory extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
<Text>Read story</Text>
            </View>
        );
    }
}
const styles= Stylesheet.create({
    container:{}
})