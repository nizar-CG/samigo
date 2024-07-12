import { View ,Text,Image,Dimensions,TouchableOpacity} from "react-native";
import stylesProfile from "@/styles/stylesProfile";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { Colors, Images } from "@/constants";
import { Divider} from 'react-native-paper';
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/hooks/types";



export default function Profile(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={{height:'100%',width:'100%',backgroundColor:Colors.white,paddingLeft:15,paddingRight:15}}>
            <Text style={stylesProfile.title}>{t("screens.profile.text.title")} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:40}}>
                <View style={{width:Dimensions.get('window').width-170,paddingLeft:5}}>
                    <Text style={stylesProfile.title1}> Kelly Portman</Text>
                    <Text style={stylesProfile.email}> kellyportman@gmail.com</Text>
                </View>
                <Image source={Images.profile} style={stylesProfile.containerImage}/>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('editProfile')}}>
                <Text style={stylesProfile.title2}>{t("screens.profile.text.edit")}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => {navigation.navigate('changePassword')}}>
                <Text style={stylesProfile.title2}>{t("screens.profile.text.changePassword")}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
                <Text style={stylesProfile.title2}>{t("screens.profile.text.credit")}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => {navigation.navigate('myBooking')}}>
                <Text style={stylesProfile.title2}>{t("screens.profile.text.myBooking")}</Text>
            </TouchableOpacity>
            <Divider />

        </View>
    )
}