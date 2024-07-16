import { Colors } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";


const stylesBooking =StyleSheet.create({
    title:{
        paddingLeft:30,
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:26
    },
    titleUndreline:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:26,
        textDecorationLine: 'underline',
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
        color:Colors.grey,
        fontFamily: 'Ebrima',
        fontSize:20
    },
    textGreyBold:{
        color:Colors.grey,
        fontFamily: 'EbrimaBold',
        paddingLeft:30
    },
    smallTextGreyBold:{
        color:Colors.grey,
        fontFamily: 'EbrimaBold',
        paddingLeft:5,
        fontSize:13
    },
    sousTitleGrey:{
        color:Colors.grey,
        fontFamily: 'EbrimaBold',
        fontSize:20
    },
    containerCarte:{
        height:55,
        backgroundColor:Colors.vertdeauTran,
        borderRadius:40,
        marginRight:25,
        marginLeft:25,
        marginTop:15,
        flexDirection:'row',
        paddingLeft:25,
        alignItems:'center'
    },
    iconCheck:{            
        color:Colors.vert,
        position:'absolute',
        right:25
    },
    textVert:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        letterSpacing:0.6,
        fontSize:15
    },
    containerPrice:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:30,
        marginRight:30
    },
    backgroundImage:{
        height:200,
        width:Dimensions.get('window').width -60,
        alignItems:'center',
        marginBottom:15,
    },
    titleCard:{
        color:Colors.grey,
        fontFamily: 'EbrimaBold',
        fontSize:15,
        paddingLeft:15
    },
    numberCard:{
        color:Colors.white,
        fontSize:22,
        fontFamily: 'EbrimaBold',
        letterSpacing:3,
        position:'absolute',
        top:90
    },
    userName:{
        color:Colors.white,
        fontSize:20,
        fontFamily: 'Ebrima',
        letterSpacing:3,
        paddingBottom:10,
        position:'absolute',
        bottom:10,
        left:10,
        textTransform: 'uppercase', 
    },
    puceImage:{
        height:60,
        width:80,
        position:'absolute',
        left:10,
        top:30
    },
    typeCardImage:{
        height:40,
        width:70,
        position:'absolute',
        top:20,
        right:20
    },
    textCvc:{
        fontSize:26,
        position:'absolute',
        top:85,
        right:-140
    },
    buttonContainer:{
        backgroundColor:Colors.vert,
        width:260,
        height:50,
        margin:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:18,
        letterSpacing:1
    },
    containerImageRooms:{
        height:180,
        width:"90%",
        marginTop:20,
        marginBottom:10,
        borderRadius:30
    },
    checkBox:{
        height:20,
        width:20,
        borderRadius:5,
        backgroundColor:Colors.vertdeauTran,
        position:'absolute',
        top:40,
        left:40,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily: 'calibriBold',
        fontSize:14
    },
    greenText:{
        fontFamily: 'calibriBold',
        fontSize:15,
        color:Colors.vert

    },
    smallGreenText:{
        fontFamily: 'calibriRegular',
        fontSize:11,
        color:Colors.vert

    },
    containerJaune:{
        borderRadius:40,
        height:45,
        width:100,
        backgroundColor:Colors.jaune,
        justifyContent:'center',
        alignItems:'center'
    },
    containerDetailsRooms:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:30,
        marginLeft:30,
        alignItems:'center'
    },
    bookText:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:22
    }

    }
)

export default stylesBooking