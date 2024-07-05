import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/constants";

const stylesStart = StyleSheet.create({
    containerImage:{
        height:"65%",
        width:"100%",
        borderBottomRightRadius:130
    },
    titleStartBlack:{
        fontFamily: 'BellMT',
        fontSize:35,
        width:240,
        marginTop:20,
        marginLeft:30
    },
    titleStartVert:{
        fontFamily: 'BellMTBold',
        color:Colors.vert

    },
    textStart:{
        fontFamily: 'calibriRegular',
        marginTop:10,
        marginLeft:35,
        fontSize:18,
        marginBottom:25

    }, 
    textButtonStart:{
        fontFamily: 'calibriRegular',
        color:Colors.white,
        fontSize:26,
        letterSpacing:1,
        textAlign:'center'
    },
    containerButton:{
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        right:0,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30
    },
    logo:{
        height:50,
        width:200,
        marginBottom:10
    },
    field:{
        flexDirection:'row',
        borderColor:Colors.white,
        borderWidth:1,
        padding:10,
        paddingLeft:30,
        margin:15,
        width:'80%',
        borderRadius:30,
        height:55,
        backgroundColor:'#d2d2d2'

    },
    buttonLogin:{
        height:55,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:30,
        marginBottom:10

    },
    textWhite:{
        marginBottom:100,
        marginTop:10,
        color:Colors.white,
        fontFamily: 'calibriRegular',
        fontSize:22,

    },


})

export default stylesStart;