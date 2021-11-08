import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export default class Post extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Post</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center'
    }
})