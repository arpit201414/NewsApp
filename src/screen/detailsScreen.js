import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsScreen = ({ route }) => {
    const receivedData = route.params.item
    console.log("receivedData----", receivedData)
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: receivedData.urlToImage }} />
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{receivedData.title}</Text>
                <Text style={[styles.authorText, { marginVertical: 10, fontSize: 15 }]}>Author: {receivedData.author}</Text>
                <Text style={[styles.authorText, { fontSize: 16 }]}>{receivedData.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf7fc"
    },
    imageStyle: {
        width: windowWidth,
        height: windowHeight * 0.43
    },
    viewStyle: {
        padding: 20
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5C5C5C",
        marginBottom: 5,
    },
    authorText: {
        color: "#5C5C5C",
        fontWeight: "900",
    }
})

export default DetailsScreen;