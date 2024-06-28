import { StyleSheet,Dimensions } from "react-native";
import { Colors} from "@/constants";
import iconSet from "@expo/vector-icons/build/Fontisto";

const stylesHotel = StyleSheet.create({

    containerImage:{
        height:300,
        width:'100%',
        borderBottomRightRadius:100
    },
    iconBack:{
        position:'absolute',
        top:50,
        left:20
    },
    image:{
        height:80,
        width:100,
        margin:10,
        borderRadius:20
    },
    title:{
        color:Colors.titleGrey,
        fontFamily: 'EbrimaBold',
        paddingTop:15,
        paddingLeft:20,
        fontSize:22
    },
    smallText:{
        color:Colors.titleGrey,
        fontSize:11,
        fontFamily: 'Ebrima'
    },
    text:{
        color:Colors.titleGrey,
        fontSize:18,
        fontFamily: 'Ebrima'
    },
    textVert:{
        color:Colors.vert,
        fontSize:24,
        fontFamily: 'Ebrima'
    },
    divider:{
        width: 1,
        backgroundColor:Colors.grey,
         height: 20,
         margin:5
    },
    details:{
        flexDirection:'row',
        paddingLeft:30,
        alignItems:'center',
        paddingRight:30,
        justifyContent:'space-between'
    },
    sousTitle:{
        paddingTop:10,
        paddingLeft:30,
        color:Colors.titleGrey,
        fontFamily: 'EbrimaBold',
        fontSize:16
    },
    map:{
        height:130,
        width:Dimensions.get('window').width-40,
        marginTop:10,
        marginLeft:20,
        borderRadius:20
    },
    containerDescription:{
        paddingLeft:35,
        paddingRight:30,
        paddingTop:10
    },
    textRead:{
        fontSize:11,
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        paddingBottom:10
    },
    icon:{
        height:60,
        width:90,
        marginRight:20,

    },
    textIcon:{
        color:Colors.titleGrey,
        fontSize:12,
        marginBottom:20,
        paddingRight:20
    },
    bookText:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:22
    }


})


export default stylesHotel