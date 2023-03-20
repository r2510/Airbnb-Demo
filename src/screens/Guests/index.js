import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";

const GuestScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfants] = useState(0);

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#fff', height:'100%', justifyContent:'space-between' }}>
            {/* Row 1 Adults */}
            {/* check style to seperate component in screen */}
            <View>
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Adults</Text>
                    <Text style={{ color: '#BdBdBd', fontSize: 17 }}>Age 13 or Above</Text>
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* + */}
                    <Pressable
                        onPress={() => { setAdults(adults - 1) }}
                        style={styles.button}
                        disabled={adults == 0 ? true : false}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{ marginHorizontal: 20 }}>{adults}</Text>
                    {/* - */}
                    <Pressable
                        onPress={() => { setAdults(adults + 1) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* End Row 1 Adults */}

            {/* Row children */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Childrens</Text>
                    <Text style={{ color: '#BdBdBd', fontSize: 17 }}>Ages 2-12 </Text>
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* + */}
                    <Pressable
                        onPress={() => { setChildren(children - 1) }}
                        style={styles.button}
                        disabled={children == 0 ? true : false}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{ marginHorizontal: 20 }}>{children}</Text>
                    {/* - */}
                    <Pressable
                        onPress={() => { setChildren(children + 1) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* End Row children */}

            {/* Row Infants */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Infants</Text>
                    <Text style={{ color: '#BdBdBd', fontSize: 17 }}>Under 2</Text>
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* + */}
                    <Pressable
                        onPress={() => { setInfants(infant - 1) }}
                        style={styles.button}
                        disabled={infant == 0 ? true : false}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{ marginHorizontal: 20 }}>{infant}</Text>
                    {/* - */}
                    <Pressable
                        onPress={() => { setInfants(infant + 1) }}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* End Row Infants */}
            </View>

           
                <Pressable style={{
                    marginBottom:20,
                    backgroundColor:'#f15454',
                    alignItems:'center',
                    justifyContent:'center',
                    height:50,
                    marginHorizontal:20,
                    borderRadius:10
                }}
                onPress={()=>{
                    navigation.navigate('Home',{
                        screen:'Explore',
                        params:{
                            screen:'SearchResults',
                            params:{
                                guests: adults+children
                            }
                        }
                    });
                }}
                >
                    <Text style={{
                        fontSize:18, 
                        color:'white',
                        fontWeight:'bold'
                        }}>Search</Text>
                </Pressable>

        </View>
    );
}

export default GuestScreen;