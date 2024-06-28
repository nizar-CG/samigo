import { Colors,Images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View ,Text,FlatList,Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import stylesOffre from "@/styles/stylesOffre";
import { useState } from "react";
const renderItems = (itemCount: number) => {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(
          <Ionicons name='star' size={14} color={Colors.jaune } style={{paddingLeft:2,shadowColor:Colors.grey,shadowOpacity:0.2, elevation: 5,
        }} key={i}/>
        );
    }
    return items;
  }
export default function BestDeals(){
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [filterSelected,setFilterSelected]= useState(0);
    const images=[Images.beachIcon,Images.wellBeingIcon,Images.golfIcon,Images.kitesurfingIcon]
    const titles=[t("screens.bestDeals.text.beach"),t("screens.bestDeals.text.wellBeing"),t("screens.bestDeals.text.golf"),t("screens.bestDeals.text.kitesurfing")]
    const dealImage=[Images.iberostart,Images.argos,Images.iberostart,Images.argos,Images.iberostart,Images.argos,Images.iberostart,Images.argos];
    const dealTiltle=["Hilton Pyramids Golf","Golf Beach Resort-Sharm El Sheikh","Hilton Pyramids Golf","Golf Beach Resort-Sharm El Sheikh","Hilton Pyramids Golf","Golf Beach Resort-Sharm El Sheikh","Hilton Pyramids Golf","Golf Beach Resort-Sharm El Sheikh"];
    const dealPrice=["850$" , "630$","580$",'930$',"850$" , "630$","580$",'930$'];
    const dealPlace=["Tunis" , "Egypt","in Cappadocia" , "Egypt","Tunis" , "Egypt","in Cappadocia" , "Egypt"];
    const etoile : number[] = [4,5,4,5,4,5,4,5];

    
    return(
        <View style={{height:"100%",width:"100%",backgroundColor:Colors.white,paddingTop:50}}>
            <TouchableOpacity onPress={() => { navigation.goBack()}}>
                <Ionicons name='arrow-back' size={30} color={Colors.titleGrey} style={{paddingLeft:20,paddingBottom:10}} />
            </TouchableOpacity>
            <Text style={stylesOffre.title}>{t("screens.bestDeals.title")} </Text>
            <View style={{height:125,paddingTop:15}}>
                <FlatList
                    key={"filtre"}
                    data={images}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item,index})=>(
                        
                        <View style={index==filterSelected?stylesOffre.containerFiltreSelect:stylesOffre.containerFiltre}>
                            <TouchableOpacity onPress={()=>{setFilterSelected(index)}}>
                                <Image source={item} style={{height:40,width:70}}/>
                                <Text style={{color:Colors.vert,fontSize:11,textAlign:'center'}}> {titles[index]} </Text>
                           </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <FlatList
                key={"deals"}
                data={dealImage}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <View style={stylesOffre.containerOffre}>
                        <Image source={item} style={stylesOffre.containerImage}/>
                        <View style={{paddingTop:5,width:Dimensions.get('window').width-210,paddingRight:5}}>
                            <Text style={{color:Colors.grey,fontFamily: 'EbrimaBold',fontSize:14,paddingLeft:5}}>{dealTiltle[index]}</Text>
                            <View style={{flexDirection:'row',paddingTop:10,paddingLeft:10}}>{renderItems(etoile[index])}</View>
                            <Text style={{color:Colors.grey,paddingLeft:5,paddingTop:10,fontSize:13}}>{dealPlace[index]}</Text>
                            <Text style={{color:Colors.grey,paddingLeft:5,paddingTop:5,fontSize:12}}>Ultra All Inclusive   </Text>
                            <Text style={stylesOffre.textPrice}>{dealPrice[index]}</Text>
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