//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

// create a component
const Details = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});

//make this component available to the app
export default Details;
