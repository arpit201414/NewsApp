import React, { useState } from 'react';
import { View, Text, Image, StatusBar, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ListComponent from '../component/listComponent';

const ProductsScreen = ({ navigation }) => {
    const Data = [
        { id: "1", name: "Cake", price: "250", img: "https://images.all-free-download.com/images/graphicthumb/wedding_cake_192520.jpg" },
        { id: "2", name: "Pizza", price: "600", img: "https://images.all-free-download.com/images/graphicthumb/pizza_picture_4_167126.jpg" },
        { id: "3", name: "Burger", price: "100", img: "https://images.all-free-download.com/images/graphicthumb/california_burger_516525.jpg" },
        { id: "4", name: "Noodles", price: "70", img: "https://images.all-free-download.com/images/graphicthumb/pasta_picture_3_167103.jpg" },
        { id: "5", name: "Hotdog", price: "60", img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    ]

    const [data, setData] = useState(Data);
    const [cartData, setCartData] = useState([]);

    const addToCart = (food) => {
        let newArr = [...cartData]
        newArr.push(food)
        setCartData(newArr)
    }

    return (
        <View style={styles.mainStyle}>
            <StatusBar barStyle='dark-content' backgroundColor={"#3498db"} />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemCont}>
                            <ListComponent
                                button
                                image={{ uri: item.img }}
                                name={item.name}
                                price={item.price}
                                onPress={() => addToCart(item)}
                            />
                        </View>

                    )
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate("CartScreen", { cartData: cartData })}
            >
                <Text style={styles.buttonStyles}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10
    },
    itemCont: {
        marginBottom: 15
    },
    buttonStyles: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#3498db",
        alignSelf: "center"
    }
})

export default ProductsScreen;