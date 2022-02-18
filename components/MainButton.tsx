import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Colours from "../constants/colours";

function MainButton(props: any) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colours.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText:{
        color: "white",
        fontFamily: "open-sans",
        fontSize: 18
    }
});

export default MainButton