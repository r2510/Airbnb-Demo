import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20
    },
    image:{
        width:'100%',
        aspectRatio:3 / 2,//this is better than height because it will divide screens..
        resizeMode:'cover',//cover whole area
        borderRadius:10
    },
    bedroom:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:18,
        lineHeight:26,//space between lines
        fontWeight:'800'
    },
    prices:{
        fontSize:18,
        marginVertical:10
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
        fontWeight:'800'
    },
    newPrice:{
        fontWeight:'bold',
        color:'black'
    },
    nightText:{
      fontWeight:'800'  
    },
    totalPrice:{
        fontWeight:'800',
        color:'#5b5b5b',
        textDecorationLine:'underline',
        fontSize:16
    }
});

export default styles;