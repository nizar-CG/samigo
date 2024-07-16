import { Colors, Images } from "@/constants";
import { RootStackParamList } from "@/hooks/types";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { TouchableOpacity, View ,Text, FlatList, Image, Dimensions, ScrollView} from "react-native";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import stylesBooking from "@/styles/stylesBooking";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { LinearGradient } from "expo-linear-gradient";

export default function Rooms(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { t } = useTranslation();
    const [select,setSelect]=useState<number[]>([])
    const data=[Images.rooms_1,Images.rooms_1,Images.rooms_2,Images.rooms_3]
    const titles=["1 x Standard Double Room Graden View",,"1 x Standard Double Room Graden View","1 x Double Room Sea View", "1 x Double Room Sea View"]
     
    const toggleElementInList = (element:number) => {
        if (select.includes(element)) {
            const updateSelect= select.filter(item => item !== element);
           setSelect(updateSelect)
          } else {
            setSelect ([...select, element]);
          }
      }
     


    return(
        <View style={{height:'100%',flex:1,width:'100%', paddingTop:40}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name='arrow-back' size={30} color={Colors.titleGrey} style={{paddingLeft:20,paddingBottom:10}} />
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:30}}>
                <Text style={stylesBooking.title}>{t("screens.rooms.title")} </Text>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate("payment")}>
                    <Text style={stylesBooking.titleUndreline}> {t("screens.rooms.next")}</Text>
                    <Ionicons name='chevron-forward-outline' size={26} color={Colors.vert}/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    style={{paddingBottom:60}}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    renderItem={({item,index})=>(
                        <View style={{marginBottom:10}}>
                            <TouchableOpacity style={{alignItems:'center'}} 
                                onPress={()=>toggleElementInList(index)}>
                                <Image source={item} style={stylesBooking.containerImageRooms}/>
                                <View style={stylesBooking.checkBox}>
                                    {select.includes(index)&& <Ionicons name='checkmark-sharp' size={16} color={Colors.vert}/> }
                                </View>
                            </TouchableOpacity>
                            <View style={stylesBooking.containerDetailsRooms}>
                                <View style={{width:Dimensions.get('window').width-170}}>
                                    <Text style={stylesBooking.text}>{titles[index]}</Text>
                                    <Text style={stylesBooking.text}>2 adults</Text>
                                </View>
                                <View style={stylesBooking.containerJaune}>
                                    <Text style={stylesBooking.greenText}>320 $</Text>
                                    <Text style={stylesBooking.smallGreenText}>{t("screens.rooms.price")} </Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )
}