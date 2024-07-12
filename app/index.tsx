import { View,Image,Text, TouchableOpacity } from "react-native";
import { Colors, Images } from "@/constants";
import stylesStart from "@/styles/stylesStart";
import { useTranslation } from 'react-i18next';
import'../localization/i18n';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/hooks/types";
import { useEffect } from "react";

export default function Start(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return(
        <View style={{height:'100%',width:'100%',flex:1}}>
            <Image  source={Images.start} style={stylesStart.containerImage}/>
            <Text style={stylesStart.titleStartBlack}>
                {t("screens.start.titleStart1")}
                <Text style={stylesStart.titleStartVert}>{t("screens.start.titleStart2")}</Text>
                {t("screens.start.titleStart3")} 
            </Text>
            <Text style={stylesStart.textStart}>{t("screens.start.textStart")}</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('login')}}>
                <LinearGradient
                     colors={[Colors.vertdeau,Colors.vert]} 
                     style={stylesStart.containerButton}
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1.6, y: 1 }}
                  >
                     <Text style={stylesStart.textButtonStart}>{t("screens.start.textButtonStart")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}