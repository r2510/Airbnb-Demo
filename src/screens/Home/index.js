import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) =>{ //functional component
    const navigation = useNavigation();
    return(
        <View>
             {/* where search button */}
             <Pressable style={styles.searchButton} onPress={()=>{navigation.navigate('Destination Search')}}>
                    <Fontisto name="search" size={25} color={"#f15454"} />
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground 
            source={require('../../../assets/images/wallpaper.jpg')} 
            style={styles.image}>

                {/* Go Near Text */}
                <Text style={styles.title}>
                    Go Near
                </Text>

                {/* Explore Button */}
                <Pressable style={styles.button} onPress={() => {console.warn('Explore buton presssed')}}>
                    <Text style={styles.buttonText}>Explore near by stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
};
export default HomeScreen;