import { TouchableOpacity, View ,Text, FlatList,Image,Dimensions} from "react-native";
import stylesCompte from "@/styles/stylesCompte";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/hooks/types";
import { Colors, Images } from "@/constants";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { Divider } from "react-native-paper";


export default function MyBooking(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const booking=[Images.room,Images.room4,Images.hotel,Images.argos]

    return (
        <View style={{height:'100%',width:'100%',flex:1}}>
            <TouchableOpacity onPress={() => { navigation.goBack()}}>
                <Ionicons name='arrow-back-outline' size={30} color={Colors.titleGrey} style={{paddingTop:50,paddingLeft:20}}/>
            </TouchableOpacity>
            <Text style={{
                color:Colors.vert,
                fontFamily: 'EbrimaBold',
                fontSize:26,
                paddingLeft:20,
                paddingBottom:20,
                letterSpacing:1
                }}> {t("screens.profile.text.myBooking")} </Text>
            <FlatList
                style={{marginBottom:20}}
                data={booking}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <View style={{marginRight:15,marginLeft:20,paddingTop:20}}> 
                        <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima',fontSize:16}}>Meridien Pyramids Hotel & Spa</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{width:Dimensions.get('window').width-230,paddingTop:10}}>
                            <View style={{flexDirection:'row'}}>
                                <Ionicons name='location-sharp' size={16} color={Colors.titleGrey} style={{paddingTop:5}} />
                                <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima',fontSize:12}}>Le Méridien Pyramids Hotel & Spa El Remaya Square - Pyramids, PO Box 25 Pyramids, Le Caire, Égypte, 12561</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Ionicons name='calendar-sharp' size={14} color={Colors.titleGrey} style={{paddingTop:2}} />
                                <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima'}}> 13 Nov- 18 Nov , 5 nights</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Ionicons name='people-sharp' size={16} color={Colors.titleGrey} style={{paddingTop:2}} />
                                <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima'}}> 1 Room, 2 Adults</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingTop:10,paddingBottom:30}}>
                                <Ionicons name='pricetag-sharp' size={16} color={Colors.titleGrey} style={{paddingTop:5}} />
                                <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima',fontSize:16}}> 1045$
                                    <Text style={{color:Colors.titleGrey,fontFamily: 'Ebrima',fontSize:10}}>/ Par nights</Text>
                                </Text>   
                            </View>
                        
                        </View>
                        <Image source={item} style={{borderRadius:50,height:140,width:170}}/>
                    </View>
                    <Divider style={{backgroundColor:Colors.vertdeau,height:1}}/>
                    </View>
                )}
                />

        </View>
    )
}