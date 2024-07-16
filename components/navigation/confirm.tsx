import { Images } from "@/constants";
import { Image, Text, TouchableOpacity, View,BackHandler } from "react-native";
import stylesConfirm from "@/styles/stylesConfirm";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';
import { useEffect } from "react";

export default function Confirm(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    useEffect(() => {
        const backAction = () => {
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction
        );
    
        return () => backHandler.remove(); 
      }, []);


    return(
        <View style={{width:'100%',height:'100%',flex:1, alignItems:'center'}}>
            <Image source={Images.valise} style={stylesConfirm.containerImage} />
            <Text style={stylesConfirm.title}> {t("screens.confirm.title")} </Text>
            <View style={{padding:20}}/>
            <Text style={stylesConfirm.text}> {t("screens.confirm.text")}  </Text>
            <Text style={stylesConfirm.text}> Kellypotman@gmail.com </Text>
            <View style={{flexDirection:'row',marginTop:50}}>
                <TouchableOpacity style={stylesConfirm.buttonLeft} onPress={()=>navigation.navigate("home")}>
                    <Text style={stylesConfirm.textButton}> {t("screens.confirm.menu")} </Text>
                </TouchableOpacity>
                <View style={stylesConfirm.divider}/>
                <TouchableOpacity style={stylesConfirm.buttonRight} onPress={()=>navigation.navigate("myBooking")}>
                    <Text style={stylesConfirm.textButton}> {t("screens.confirm.history")} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}