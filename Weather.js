import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#373B44","#4286f4"],
        title:"",
        subtitle:""
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title:"",
        subtitle:""
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#00C6FB","#005BEA"],
        title:"",
        subtitle:""
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"],
        title:"",
        subtitle:""
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title:"",
        subtitle:""
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FF7300","#FEF253"],
        title:"",
        subtitle:""
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title:"",
        subtitle:""
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
        title:"",
        subtitle:""
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"",
        subtitle:""
    },
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient 
            colors={weatherOptions["Haze"].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions["Haze"].iconName}
                    color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions["Haze"].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions["Haze"].subtitle}
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
        flex:1,
        justifyContent:"center",
        alignItems:"center"
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
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color: "white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

});