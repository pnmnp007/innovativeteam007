import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const newsItemMain = props => {
    return(
        <View style = {styles.modalContainer}>
            <Image resizeMode="center" source = {props.image} style = {styles.newsImage}/>
            <Text style = {styles.newsDesc}> {props.desc} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    newsImage: {
        width: "100%",
        height: 200
    },
    newsDesc:{
        fontSize: 16
    }
});

export default newsItemMain;