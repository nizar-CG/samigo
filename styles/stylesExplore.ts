import { StyleSheet,Dimensions } from "react-native";
import { Colors} from "@/constants";

const stylesExplore = StyleSheet.create({
    
    containerImage:{
        width:'100%',
        height:Dimensions.get('window').height-320,
    },
    containerFormulaire:{
        width:'100%',
        height:400,
        backgroundColor:Colors.white,
        borderTopRightRadius:100,
        position: 'absolute',
        bottom:0,
        overflow: 'hidden',
        paddingLeft:20,
        paddingRight:20
    },
    containerField:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle:{
        color:Colors.titleGrey,
        fontFamily: 'EbrimaBold',
        fontSize:14,
        paddingLeft:10,
        paddingBottom:10,
        paddingVertical:10
    },
    styleDate:{
        backgroundColor:Colors.vertdeauTran, 
        paddingLeft:10,
        paddingRight:20,
        padding :5, 
        borderRadius:40, 
        height:45,
        justifyContent:'center',
        borderColor:"#cce1de",
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    field:{
        width:(Dimensions.get('window').width-120)/2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth: 1,
        borderColor:Colors.vert,
        borderRadius:40
    },
    containerImageBook:{
        height:300,
        width:'100%',
        borderBottomRightRadius:75
    },
    iconBack:{
        position:'absolute',
        top:50,
        left:20
    },
    containerDate:{
        height:45,
        backgroundColor:Colors.vertdeauTran,
        borderRadius:40,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        borderColor:"#cce1de",
        borderWidth:1
    },
    textField:{
        color:Colors.grey,
        paddingLeft:10,
        fontSize:13
    },
    botton:{
        height:42,
        width:250,
        backgroundColor:Colors.vert,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40
    },
    containerRoom:{
        backgroundColor:Colors.vertdeauTran,
        borderRadius:30,
        marginTop:20,
        padding:10,
        borderColor:"#cce1de",
        borderWidth:1
    },
    number:{
        fontFamily: 'Bahnschrift',
        fontSize:16,
         color:Colors.grey ,
         width:10
    },
    containerChild:{ 
        borderWidth: 1,
        marginLeft:5,
        marginRight:5,
        borderColor:Colors.vert,
        borderRadius:30 ,
        flexDirection:'row',
        alignItems:'center'
    },
    textRoom:{
        color:Colors.vert,
        fontFamily: 'EbrimaBold',
        fontSize:16
    },
    textBotton:{
        color:Colors.white,
        fontFamily: 'EbrimaBold',
        fontSize:16
    }
})

export default stylesExplore