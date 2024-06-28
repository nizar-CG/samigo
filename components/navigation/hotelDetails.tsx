import { FlatList, Image, ScrollView, TouchableOpacity, View ,Text} from "react-native";
import { Colors , Images } from "@/constants";
import stylesHotel from "@/styles/stylesHotel";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "@/hooks/types";

const renderItems = (itemCount: number) => {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(
          <Ionicons name='star' size={18} color={Colors.jaune } style={{paddingLeft:2}} key={i}/>
        );
    }
    return items;
  }
export default function HotelDetails(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { t } = useTranslation();
    const [image,setImage]= useState(Images.hotel)
    const [expanded, setExpanded] = useState(false);
    const equipementImage=[
        Images.wifiIcon,
        Images.poolIcon,
        Images.restaurantIcon,
        Images.sportIcon,
        Images.climatisuerIcon,
        Images.barIcon
    ]
    const equipementTitle=[
        "Free-Wifi",
        "Pool",
        "Free breakfast",
        "Gym",
        "A.c",
        "Bar"
    ]

    const hotels=[
        Images.hotel,
        Images.hotelPool,
        Images.hotelResturant,
        Images.room,
        Images.room2,
        Images.room3,
        Images.room4
    ]

    return(
        <View style={{height:"100%",width:"100%",backgroundColor:Colors.white}}>
            <Image source={image} style={stylesHotel.containerImage}/>
            <TouchableOpacity style={stylesHotel.iconBack} onPress={() => { navigation.goBack()}}>
                <Ionicons name='arrow-back' size={28} color={Colors.white} />
            </TouchableOpacity>
            <ScrollView >
                <FlatList
                    data={hotels}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item ,index})=>(
                        <TouchableOpacity key={index} onPress={()=>setImage(item)}>
                            <Image source={item} style={stylesHotel.image}/>
                        </TouchableOpacity>
                    )}
                />
                <Text style={stylesHotel.title}> Meridien Pyramids Hotel & Spa</Text>
                <View style={{flexDirection:'row',paddingLeft:30,paddingTop:10}}>
                    <Ionicons name='location-sharp' size={20} color={Colors.titleGrey} />
                    <View style={{width:'75%'}}>
                        <Text style={stylesHotel.smallText}>
                            Le Méridien Pyramids Hotel & Spa El Remaya Square - Pyramids, PO Box 25 Pyramids, Le Caire, Égypte, 12561
                        </Text>
                    </View>
                </View>
                <View style={stylesHotel.details}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{flexDirection:'row',paddingLeft:10}}>{renderItems(5)}</View>
                        <View style={stylesHotel.divider}/>
                        <Text style={stylesHotel.text}> 5 Star</Text>
                    </View>
                    <Text style={stylesHotel.textVert}> 1045 $</Text>
                </View>
                <Text style={stylesHotel.sousTitle}> {t("screens.hotelDetails.text.map")}</Text>
                <Image source={Images.map} style={stylesHotel.map}/>
                <Text style={stylesHotel.sousTitle}> Description</Text>
                <View style={stylesHotel.containerDescription}>
                    <Text numberOfLines={expanded ? 0 : 3} style={stylesHotel.smallText}>
                    Niché entre la ville du Caire et le désert,
                     le Méridien Pyramids Hotel and Spa offre une vue inégalée sur les majestueuses pyramides de Gizeh.
                      Admirez l'une des sept merveilles du monde par la fenêtre de votre chambre,
                       à seulement 20 minutes du cœur de la capitale égyptienne.
                        Entouré de jardins paysagers, notre hôtel est une véritable oasis de verdure au cœur du désert.
                         Ici, vous trouverez tout ce dont vous pourriez avoir besoin.
                          Dégustez un grand choix de spécialités culinaires dans nos restaurants internationaux puis détendez-vous dans 
                          notre magnifique piscine ou profitez de notre spa. 
                          Nos 641 chambres et suites luxueuses proposent des lits confortables avec des draps en coton de grande qualité, 
                          la climatisation et une vue époustouflante sur les grandes pyramides de Gizeh. Passez un séjour luxueux,
                           unique et confortable au Caire en choisissant le Méridien Pyramids Hotel and Spa. 
                    </Text>
                    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                        <Text style={stylesHotel.textRead}> {expanded ? t("screens.hotelDetails.text.readLess") : t("screens.hotelDetails.text.readMore")}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={stylesHotel.sousTitle}> Amenities & facilities </Text>
                <View style={{alignItems:'center',paddingBottom:40}}>
                    <FlatList
                        key={"icons"}
                        scrollEnabled={false}
                        data={equipementImage}
                        renderItem={({ item ,index}) => (
                            <View style={{alignItems:'center'}}>
                                <Image source={item} style={stylesHotel.icon} />
                                <Text style={stylesHotel.textIcon}> {equipementTitle[index]} </Text>
                            </View>
                            
                        )}
                        numColumns={3}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate("book")}>
                <LinearGradient
                    colors={[Colors.vertdeau,Colors.vert]} 
                    style={{ 
                        flex: 1,
                        borderTopLeftRadius:30 ,
                        height:60,
                        width:120,
                        position: 'absolute',
                        bottom:0,
                        right:0,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                >
                    <Text style={stylesHotel.bookText}>{t("screens.hotelDetails.text.book")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}