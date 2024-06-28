import { StyleSheet,Dimensions } from "react-native";
import { Colors } from "@/constants";

const stylesHome = StyleSheet.create({
    coverImage:{
        height:220,
        width:Dimensions.get('window').width,
        borderBottomLeftRadius:90
    },
    containerImage:{
        height:240,
        width:Dimensions.get('window').width,
    },
    searchView:{
        position: 'absolute',
        height:35,
        width:Dimensions.get('window').width - 90,
        backgroundColor:Colors.white,
        borderRadius:20,
        bottom:0,
        right:10,
        flexDirection:'row'
    },
    buttonSearch:{
        backgroundColor:Colors.vert,
        width:40,
        height:35,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    containerTitle:{
        flexDirection:'row',
        paddingLeft:40,
        paddingTop:25,
        paddingBottom:10
    },
    title:{
        paddingLeft:10,
        color:Colors.vert,
        fontSize: 20,
        fontFamily: 'Bahnschrift',
        letterSpacing:1
    },
    containerInspire:{
        borderRadius:30,
        height:130,
        width:130,
        marginRight:20
    },
    titleDistination:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        letterSpacing:1

    },
    textSeeAll:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        letterSpacing:1
    },
    containerOffre:{
        borderRadius:30,
        height:170,
        width:270,
        marginRight:20
    },
    defaultText:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:12,
        paddingRight:5
    },
    containerDeatils:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        marginBottom:15,
        paddingTop:12
    },
    containerDeal:{
        borderRadius:30,
        height:220,
        width:270,
        marginRight:20,
    }


   
    

})

export default stylesHome;
