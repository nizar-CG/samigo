import { StyleSheet,Dimensions } from "react-native";
import { Colors } from "@/constants";

const stylesProfile = StyleSheet.create({

    title:{
        paddingLeft:5,
        paddingTop:50,
        paddingBottom:20,
        color:Colors.vert,
        fontSize: 26,
        fontFamily: 'Bahnschrift',
        letterSpacing:1
    },
    title1:{
        paddingTop:50,
        paddingBottom:10,
        color:Colors.vert,
        fontSize: 24,
        fontFamily: 'Bahnschrift',
        letterSpacing:1
    },
    title2:{
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:10,
        color:"#525252",
        fontSize: 21,
        fontFamily: 'Bahnschrift',
        letterSpacing:1
    },
    containerImage:{
        height:130,
        width:130,
        borderRadius:25
    },
    email:{
        fontSize: 18,
        color:Colors.grey,
        letterSpacing:1
    }
  
})

export default stylesProfile;
