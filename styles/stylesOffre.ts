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
    titleFilter:{
        fontFamily: 'EbrimaBold',
        color:Colors.vert,
        fontSize:23,
        letterSpacing:1

    },
    sousTitleFilter:{
        fontFamily: 'Ebrima',
        fontSize:16,
        marginTop:15
    },
    dividerFilter:{
        height:3,
        backgroundColor:Colors.vert,
        width:220,
        borderRadius:30,
        marginBottom:15
    },
    textPriceFilter:{
        fontSize:11,
        color:Colors.titleGrey,
        fontFamily: 'Ebrima',

    },
    containerPriceFilter:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:220,
        alignItems:'flex-end'
    },
    containerButton:{
        backgroundColor:Colors.vert,
        height:45,
        width:200,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    textButton:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        letterSpacing:1,
        fontSize:18
    },
    containerCheckbox:{ 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5
    },
    textChecbox:{
        fontFamily: 'Ebrima',
        paddingLeft:10,
        fontSize:14,
        color:Colors.grey
    },
    searchContainer:{
        borderTopColor:Colors.transparent,
        borderRightColor:Colors.transparent,
        borderLeftColor:Colors.transparent,
        borderBottomColor:Colors.vert,
        borderWidth:1,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }

})

export default stylesOffre;
