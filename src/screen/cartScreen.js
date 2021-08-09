import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ListComponent from '../component/listComponent';

const CartScreen = ({ route }) => {
    const receivedData = route.params.cartData
    console.log("receivedData-----", receivedData)
    const [data, setData] = useState(receivedData)

    const totalCost = () => {
        let newArr = [...data]
        const total = newArr.reduce((prev, next) => prev + Number(next.price), 0)
        return `${total}`
    }

    const totalItem = () => {
        let newArr = [...data]
        const totalL = newArr.length
        return `${totalL}`
    }

    return (
        <View style={styles.mainStyle}>
            <Text style={styles.text}>No. of Items = {totalItem()} </Text>
            <Text style={[styles.text, { marginBottom: 10 }]}>Total Cost = {totalCost()}</Text>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemCont}>
                            <ListComponent
                                image={{ uri: item.img }}
                                name={item.name}
                                price={item.price}
                            />
                        </View>

                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 15
    },
    itemCont: {
        marginBottom: 15
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default CartScreen;