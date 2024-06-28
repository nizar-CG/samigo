import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/constants";

const stylesOffre = StyleSheet.create({

    title:{
        paddingLeft:20,
        color:Colors.vert,
        fontSize: 26,
        fontFamily: 'Bahnschrift',
        letterSpacing:1,
    },
    containerOffre:{
        backgroundColor:Colors.vertdeauTran,
        flexDirection:'row',
        margin:10,
        borderRadius:50
    },
    containerImage:{
        height:160,
        width:170,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50
    },
    textOffre:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        letterSpacing:1
    },
    textPrice:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        letterSpacing:1,
        fontSize:20,
        position:'absolute',
        bottom:45,
        right:8
    },
    containerFiltre:{
        height:80,
        width:80,
        backgroundColor:Colors.vertdeauTran,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginRight:5,
        marginTop:15
    },
    containerFiltreSelect:{
        height:80,
        width:80,
        backgroundColor:Colors.vertdeauTran,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginRight:5,
        marginTop:15,
        
        ...Platform.select({
            ios: {
                shadowColor:Colors.vert,
                shadowOpacity:0.8,
                shadowRadius:8,
                shadowOffset:{width:0,height:1}
            },
            android: {
              elevation: 12,
            },
          }),
    },
    botton:{
        borderRadius:40 ,
        height:28,
        width:70,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        right:5,
        bottom:16,
        backgroundColor:Colors.jaune
    },
    defaultText:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:12,
        paddingRight:5
    },

})

export default stylesOffre;
