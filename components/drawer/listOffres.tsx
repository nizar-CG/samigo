import { View ,Text,FlatList,Image,Dimensions, Platform,StyleSheet, TouchableOpacity, TextInput} from "react-native";
import stylesOffre from "@/styles/stylesOffre";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { Colors, Images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


const renderItems = (itemCount: number) => {
   const items = [];
   for (let i = 0; i < itemCount; i++) {
       items.push(
         <Ionicons name='star' size={14} color={Colors.jaune } style={{paddingLeft:2}} key={i}/>
       );
   }
   return items;
 }

export default function ListOfOffres(){
   const { t } = useTranslation();
   const offreImage=[Images.iberostart,Images.argos,Images.iberostart,Images.argos];
   const offreTiltle=["Iberostar kuriat est kuriat","Argos","Iberostar kuriat","Argos"];
   const offrePrice=["850$" , "630$","580$",'930$'];
   const offrePlace=["Palace Monastir et Monastir" , "in Cappadocia","Palace Monastir" , "in Cappadocia"];
   const offre=["-35%","-25%","-35%","-25%"];
   const etoile : number[] = [4,5,4,5];
   const navigation = useNavigation();
   const [search,setSearch] = useState('');
   

    return <View style={{height:'100%',width:'100%',backgroundColor:Colors.white,paddingTop:20}}>
      <View style={stylesOffre.searchContainer}>
            <TextInput
               value={search}
               onChange={Text=>{ setSearch(Text.nativeEvent.text)}}
               placeholder={t("screens.offres.search")}
               style={{color:Colors.grey,fontFamily: 'Ebrima',width:'92%'}}
            />
            <Ionicons name="search" size={20} color={Colors.vert} style={{}}/>
         </View>
      <FlatList
         key={"specialOffres"}
         data={offreImage}
         style={{paddingLeft:10,paddingRight:5}}
         showsVerticalScrollIndicator = {false}
         renderItem={({item,index})=>(
         <View style={stylesOffre.containerOffre}>
            <Image source={item} style={stylesOffre.containerImage}/>
            <View style={{paddingTop:5,width:Dimensions.get('window').width-210,paddingRight:5}}>
               <Text style={{color:Colors.grey,fontFamily: 'EbrimaBold',fontSize:15,paddingLeft:10}}>{offreTiltle[index]}</Text>
               <View style={styles.shadowContainer}>
                  <LinearGradient
                     colors={[Colors.vertdeau,Colors.vert]} 
                     style={{
                        borderRadius: 50,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     start={{ x: 0.3, y: 0 }}
                     end={{ x: 1, y: 1 }}
                  >
                     <Text style={stylesOffre.textOffre}>{offre[index]}</Text>
                  </LinearGradient>
               </View>
               <View style={{width:Dimensions.get('window').width-265}}>
                  <Text style={{color:Colors.grey,paddingLeft:5,paddingTop:15,fontSize:13}}>{offrePlace[index]}</Text>
               </View>
               <View style={{flexDirection:'row',paddingTop:10,paddingLeft:5}}>{renderItems(etoile[index])}</View>
               <Text style={stylesOffre.textPrice}>{offrePrice[index]}</Text>
               <TouchableOpacity style={stylesOffre.botton}  >
                  <Text style={stylesOffre.defaultText}>{t("screens.home.text.book")}</Text>
               </TouchableOpacity>
            </View>
         </View>
         )}
      />
   </View>

 }
 const styles = StyleSheet.create({
   shadowContainer: {
     borderRadius: 45,
     height: 43,
     width: 42,
     position:'absolute',
     justifyContent:'center',
     alignItems:'center',
     right:5,
     top:35,

     ...Platform.select({
       ios: {
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.5,
         shadowRadius: 2,
       },
       android: {
         elevation: 2,
         
       },
     }),
   }

 });