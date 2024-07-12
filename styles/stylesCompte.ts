import { StyleSheet } from "react-native";
import { Colors } from "@/constants";

const stylesCompte = StyleSheet.create({
    textButtonStart:{
        fontFamily: 'calibriRegular',
        color:Colors.white,
        fontSize:26,
        letterSpacing:1,
        textAlign:'center'
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
        paddingLeft:15,
        paddingRight:15,
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
    backgroundImage:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    title:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:26,
        paddingLeft:20,
        paddingBottom:40,
        letterSpacing:1
    },
    titleField:{
        color:Colors.grey,
        fontSize:17
    },
    inputField:{
        borderTopColor:Colors.transparent,
        borderRightColor:Colors.transparent,
        borderLeftColor:Colors.transparent,
        borderWidth:1,
        borderBottomColor:Colors.grey,
        margin:5,
        marginBottom:20,
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:16
    },
    buttonCreate:{
        backgroundColor:Colors.vert,
        height:55,
        width:240,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderColor:Colors.vertdeau,
        borderWidth:1
    },
    buttonFacebook:{
        backgroundColor:Colors.vertdeauTran,
        height:55,
        width:240,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderColor:Colors.vertdeau,
        borderWidth:1

    },
    textButtonWhite:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        letterSpacing:0.5
    },
    textButtonVert:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        letterSpacing:0.5
    },
    inputPassword:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:16,
        width:'90%'

    },
    viewPassword:{
        borderTopColor:Colors.transparent,
        borderRightColor:Colors.transparent,
        borderLeftColor:Colors.transparent,
        borderWidth:1,
        borderBottomColor:Colors.grey,
        margin:5,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',

    }


})

export default stylesCompte;