import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#373B44","#4286f4"],
        title:"Thuderstorm in the house",
        subtitle:"Actually, outside of the house"
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"Still, take an umbrella with you"
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#00C6FB","#005BEA"],
        title:"Raining",
        subtitle:"Don't get extreme"
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"],
        title:"Snowy",
        subtitle:"Do you wanna build a snow man?"
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title:"Atmosphere",
        subtitle:"I don't even know what it is"
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FF7300","#FEF253"],
        title:"Sunny as hell",
        subtitle:"YAAAAAAAAAAAAAAS"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title:"Cloudy",
        subtitle:"Meh I don't like it"
    },
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"Don't go outside, girl"
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Mist",
        subtitle:"Listen to Misty covered by X$Y"
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Dust",
        subtitle:"I mean, seriously?"
    },
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        
        </LinearGradient>
    );
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles= StyleSheet.create({
    container :{
        flex:1
    },
    temp:{
        fontSize:42,
        color: "white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight:"300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle:{
        fontWeight:"600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer:{
        paddingHorizontal: 40,
        alignItems: "flex-start",
        flex:1,
        justifyContent: "center"
    }

});