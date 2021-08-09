import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const CreateProfile = () => {
    const [image, setImage] = useState("https://images.unsplash.com/photo-1627773327674-309942d1552f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [showUser, setShowUser] = useState(false);

    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
        }).then(image => {
            console.log(image);
            setImage(image.path)
        });

    }

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonImage} onPress={() => uploadImage()}>
                <Image
                    source={{ uri: image }}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
            <TextInput
                style={styles.inputStyle}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setfirstName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Date of Birth"
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => setShowUser(true)}
            >
                {showUser ? <Text style={styles.textStyle}>Add More User</Text> : <Text style={styles.textStyle}>Create Profile</Text>}
            </TouchableOpacity>
            {showUser ? <View style={styles.userStyle}>
                <Image
                    style={styles.userImage}
                    source={{ uri: image }}
                />
                <View style={styles.container}>
                    <Text style={[styles.userText, { color: "#05445E" }]}>{`${firstName} ${lastName}`}</Text>
                    <Text style={[styles.userText, { color: "#5C5CFF" }]}>{`${birthDate}`}</Text>
                </View>
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 15
    },
    buttonImage: {
        alignSelf: "center"
    },
    imageStyle: {
        height: screenHeight / 7,
        width: screenWidth / 4,
        borderRadius: 50,
        marginBottom: 30
    },
    textStyle: {
        color: "#3498db",
        fontSize: 25,
        fontWeight: "bold"
    },
    buttonStyle: {
        alignItems: "center",
        marginTop: 50
    },
    inputStyle: {
        borderWidth: .5,
        borderRadius: 5,
        borderColor: "#ede4e3",
        marginTop: 20
    },
    userStyle: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#DCDCDC",
        height: 100,
        alignItems: "center",
        paddingHorizontal: 15,
        marginTop: 20,
        borderRadius: 10
    },
    userImage: {
        height: 70,
        width: 70,
        borderRadius: 15
    },
    container: {
        marginLeft: 15
    },
    userText: {
        fontSize: 20
    }
})

export default CreateProfile;