import React from "react";
import { View, Text, Pressable } from "react-native";
import { Auth } from 'aws-amplify';

const ProfileScreen = (props) =>{
    return(
        <View>
            <Pressable style={{
                marginTop:'50%',
                width:'100%', 
                height:40, 
                backgroundColor:'#c3c3c3',
                justifyContent:'center',
                alignItems:'center',
                }} onPress={()=>{Auth.signOut()}}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    );
}
export default ProfileScreen;