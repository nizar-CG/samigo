import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

const stylesConfirm =StyleSheet.create({
    containerImage:{
        marginTop:100,
        height:400,
        width:400
    },
    title:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:32,
        paddingLeft:30,
        paddingRight:30,
        textAlign:'center',
        position:'absolute',
        top:450
    },
    text:{
        color:Colors.titleGrey,
        fontFamily: 'EbrimaBold',
        textAlign:'center',  
        fontSize:18,
        paddingTop:10
    },
    buttonRight:{
        backgroundColor:Colors.vert,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        width:140,
        borderTopRightRadius:30,
        borderBottomRightRadius:30
    },
    buttonLeft:{
        backgroundColor:Colors.vert,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        width:140,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30
    },
    textButton:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:16
    },
    divider:{
        height:50,
        width:1,
        backgroundColor:Colors.white

    }
})

export default stylesConfirm;