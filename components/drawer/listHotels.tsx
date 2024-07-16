import { Colors, Images } from "@/constants";
import { FlatList, TextInput, View,Image, Text, Dimensions, TouchableOpacity } from "react-native";
import stylesOffre from "@/styles/stylesOffre";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
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

export default function ListHotels(){
    const { t } = useTranslation();
    const [search,setSearch] = useState('');
    const offreImage=[Images.iberostart,Images.argos,Images.iberostart,Images.argos];
    const offreTiltle=["Iberostar kuriat est kuriat","Argos","Iberostar kuriat","Argos"];
    const offrePrice=["850$" , "630$","580$",'930$'];
    const offrePlace=["Palace Monastir et Monastir" , "in Cappadocia","Palace Monastir" , "in Cappadocia"];
    const etoile : number[] = [4,5,4,5];


    return(
        <View style={{height:'100%',width:'100%',flex:1,backgroundColor:Colors.white}}>
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
    )
}