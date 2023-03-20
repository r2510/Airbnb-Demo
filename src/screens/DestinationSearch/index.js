import React, { useState } from 'react';
import { FlatList, Pressable, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import styles from './style';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                {/* Input Component */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Where are you going?"
                    value={inputText}
                    onChangeText={newText => setInputText(newText)}
                />
                {/* List of destination */}
                <FlatList
                data={searchResults}
                renderItem={((item => 
                    //if you want you can create seperate component also..
                    <Pressable style={styles.row} onPress={()=>{navigation.navigate('Guests')}}>
                        <View style={styles.iconContainer}>
                            <Entypo
                                name={'location-pin'}
                                size={30}
                                color='black'
                            />
                        </View>
                        <Text style={styles.locationText}>{item.item.description}</Text>
                    </Pressable>
                ))}
                />
            </View>
        </View>
    );
}
export default DestinationSearch;