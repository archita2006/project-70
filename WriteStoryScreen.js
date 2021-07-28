import React from 'react';
import {Stylesheet,View,Text} from 'react-native';
import { Header } from 'react-native';
import { TextInput } from 'react-native';

export default class WriteStory extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View>
<TextInput>Title</TextInput>
<TextInput>Author</TextInput>
<TextInput> Write a story</TextInput>
</View>
        );
    }
}