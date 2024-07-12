import { StyleSheet,Dimensions } from "react-native";
import { Colors } from "@/constants";

const stylesStart = StyleSheet.create({
    
    containerImage:{
        height:Dimensions.get('window').height-280,
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
    }
    

})

export default stylesStart;