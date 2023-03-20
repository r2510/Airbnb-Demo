import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultScreen from "../screens/SearchResults";

import { useRoute } from "@react-navigation/native";

import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) =>{
    const route = useRoute();
    const {guests} = route.params;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () =>{
            try{
                const postResult = await API.graphql(
                    // apply filter to your api
                    graphqlOperation(listPosts, {
                        filter:{
                            myGuests:{
                                ge:guests
                            }   
                        }
                    })
                )
                // console.log(postResult);
                setPosts(postResult.data.listPosts.items)
            } catch(e){
                console.log(e);
            } 
        }
        fetchPost();
    },[])

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#f15454',
            tabBarIndicatorStyle:{
                backgroundColor:'#f15454'
            }
        }}
        >
            {/* we will Tab.Screen to open and close tab to pass route inside it. make sure you r caling component in a function as below */}
            <Tab.Screen
            name="lists"
            >
                {()=>(
                    <SearchResultScreen post={posts} />
    )}
            </Tab.Screen>
            <Tab.Screen
            name="map"
            >
                 {()=>(
                    <SearchResultScreen post={posts} />
    )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default SearchResultTabNavigator;