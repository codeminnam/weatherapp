import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";

const API_KEY="da2cd998d9399a751bf1e9c2edc45b6e";

export default class App extends React.Component{
  state={
    isLoading: true,
  };

  getWeather = async(latitude, longitude) =>{
    const {
      data: {
        main:{temp},
        weather
      }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState(
      {isLoading:false, 
        condition: weather[0].main, 
        temp});
    console.log(data);
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //send to API and get weather!
      this.getWeather(latitude,longitude);
      this.setState({isLoading:false});
    } catch (error) {
      Alert.alert("can't find you", "too baaaad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading? <Loading/>:<Weather temp={Math.floor(temp)} condition={condition}/>
  };
}
