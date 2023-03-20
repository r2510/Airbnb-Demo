import React, {useEffect, useState} from "react";
import { Text, View, FlatList } from "react-native";
import Post from "../../components/Posts";

const SearchResultScreen = (props) => {
    const {post} = props;

    
    // const route = useRoute();
    // console.log(props,"propsssss");
   

    return (
        <View>
            <FlatList
            data={post}
            renderItem={((item)=><Post post={item.item} />)}
            />

        </View>
    );
}
export default SearchResultScreen;