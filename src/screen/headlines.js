import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from '../api/axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Headlines = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [search, setsearch] = useState("");


    const callApi = async () => {
        const response = await axios.get("/top-headlines", {
            params: {
                country: "us",
                apiKey: "7c94c4bf82af4e18a0ba534482945782"
            }
        })
        console.log(response.data.articles)
        setData(response.data.articles)
    };

    useEffect(() => { callApi() }, []);

    const searchFilter = (text) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf((textData) > -1);
            });
            setData(newData);
            setsearch(text);
        } else {
            setData(data);
            setsearch(text);
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.viewStyle}
                onPress={() => navigation.navigate("DetailsScreen", { "item": item })}
            >
                <Image style={styles.imageStyle} source={{ uri: item.urlToImage }} />
                <Text numberOfLines={3} style={styles.textStyles}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={search}
                onChangeText={(text) => searchFilter(text)}
            />
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 22,
        backgroundColor: "#ecf7fc",
        paddingBottom: 22
    },
    input: {
        borderWidth: 0.5,
        margin: 10,
        borderColor: "#5C5C5C",
        borderRadius: 10,
        paddingHorizontal: 10
    },
    viewStyle: {
        marginBottom: 11,
        marginLeft: 11
    },
    imageStyle: {
        height: windowHeight * 0.3,
        width: windowWidth * 0.46,
    },
    textStyles: {
        position: "absolute",
        bottom: 10,
        color: "#ffffff",
        left: 10,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left"
    }
});

export default Headlines;