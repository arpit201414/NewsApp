import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const ListComponent = ({ image, name, price, onPress, button }) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.priceStyle}>
                <Text style={[styles.textStyle, { fontSize: 18 }]}>{name}</Text>
                <Text style={[styles.textStyle, { fontSize: 16 }]}>Rs {price}</Text>
                {button ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onPress}
                >
                    <Text style={styles.textStyle}>Add to Cart</Text>
                </TouchableOpacity> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    imageStyle: {
        height: screenHeight / 7,
        width: screenWidth / 4,
        borderRadius: 10
    },
    priceStyle: {
        marginLeft: 15
    },
    textStyle: {
        fontWeight: "bold"
    },
    buttonStyle: {
        backgroundColor: "#3498db",
        padding: 8,
        borderRadius: 15,
        marginTop: 5
    }
})

export default ListComponent;