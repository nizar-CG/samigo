import { Colors } from "@/constants";
import { StyleSheet } from "react-native";


const stylesBooking =StyleSheet.create({
    title:{
        paddingLeft:30,
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:24,
    },
    iconBack:{
        paddingTop:50,
        paddingLeft:20
    },
    containerImage:{
        height:160,
        width:'100%',
        borderTopLeftRadius:80,
        borderBottomLeftRadius:80,
        marginLeft:15
    },
    containerDetails:{
        height:140,
        width:'100%',
        marginTop:10,
    },
    sousTitle:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:17,
        letterSpacing:1,
        paddingBottom:5
    },
    textWhite:{
        color:Colors.white,
        fontFamily: 'Ebrima',
        fontSize:15,
        paddingTop:5

    },
    textGrey:{

    },
    textGreyBold:{
        color:Colors.grey,
        fontFamily: 'EbrimaBold',
        paddingLeft:30
    },
    sousTitleGrey:{
        
    }

    }
)

export default stylesBooking