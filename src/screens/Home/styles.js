import { StyleSheet, Dimensions } from "react-native";
 const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center'
    },
    title:{
         fontSize:80,
         fontWeight:'bold',
         color:'white',
         width:'70%',
         marginLeft:25
    },
    button:{
        backgroundColor:'#fff',
        width:200,
        marginLeft:25,
        marginTop:20,
        borderRadius:10,
        height:40,
        justifyContent:'center',//both these to make text at center or items at center
        alignItems:'center'//both these to make text at center or items at center
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    searchButton:{
        backgroundColor:'#fff',
        // width:'100%',
        width:Dimensions.get("screen").width-20,//subtract (left margin + rightmigin)
        marginHorizontal:10,//both left and right margin so we have to remove width as 100% and add dimensions and subtract (left margin + rightmigin)
        borderRadius:30,
        height:60,
        justifyContent:'center',//both these to make text at center or items at center
        alignItems:'center',//both these to make text at center or items at center
        flexDirection:'row',//search icon and text side by side
        position:'absolute',//this param is used to render the component on top of the background
        top:20,//this param is used to render the component on top of the background
        zIndex:100,//this param is used to render the component on top of the background(any postive number)
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    }

 });
 export default styles;