import { Image, Text, TouchableOpacity, View } from "react-native";
import stylesBooking from "@/styles/stylesBooking";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';
import { Ionicons } from "@expo/vector-icons";
import { Colors, Images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Divider} from 'react-native-paper';

export default function Payment(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const carte=[ Images.paypal,Images.visa]
    const carteName=["Paypal Carte","visa Carte"]


    return(
        <View style={{height:'100%',width:'100%',flex:1}}>
            <TouchableOpacity onPress={() => { navigation.goBack()}} style={stylesBooking.iconBack}>
                <Ionicons name='arrow-back' size={28} color={Colors.titleGrey} />
            </TouchableOpacity>
            <Text style={stylesBooking.title}>{t("screens.myBooking.title")} </Text>
            <Image source={Images.room} style={stylesBooking.containerImage}/>
            <View style={stylesBooking.containerDetails}>
                <LinearGradient
                    colors={[Colors.vertdeau,Colors.vert]} 
                    style={{ 
                        flex: 1,
                        borderTopRightRadius:80,
                        borderBottomRightRadius:80,
                        paddingTop:20,
                        paddingLeft:20,
                        marginRight:15
                    }}
                    start={{ x:0, y: 3 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={stylesBooking.sousTitle}> Meridien Pyramids Hotel & Spa </Text>
                    <Text style={stylesBooking.textWhite}> 1 Room, 2 Adults</Text>
                    <Text style={stylesBooking.textWhite}> 13 Nov - 18 Nov , 5 nights</Text>
                </LinearGradient>
            </View>
            <Divider style={{margin:20,height:1}}/>
            <Text style={stylesBooking.textGreyBold}> {t("screens.myBooking.text.method")} </Text>
            


        </View>
    )
}