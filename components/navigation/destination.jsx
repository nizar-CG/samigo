import { useState } from "react";
import { FlatList, TextInput, View ,TouchableOpacity ,Image,Text,Dimensions, ImageBackground} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors,Images } from "@/constants";
import { useTranslation } from "react-i18next";
import'../../localization/i18n'
import SliderImage from '@/components/slider/sliderImage'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';


export default function Destination() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [search,setSearch]=useState()
    const coverDestination=[Images.coverDestination,Images.coverDestination1,Images.coverDestination2]
    const data=[
        Images.dahab,
        Images.giza,
        Images.cairo,
        Images.luxor,
        Images.hurghada,
        Images.alexandria
    ]
    const titles=["Dahab","Giza","Cairo","Luxor","Hurghada","Alexandria"]

    const getRandomHeight = () => {
        return Math.floor(Math.random() * (220 - 180 + 10)) + 180; 
    }

    const randemItem = ({item, index}) =>{
        const heightImage=getRandomHeight()
        return(<TouchableOpacity key={`destination${index}`} onPress={()=>navigation.navigate("hotelDetails")}>
            <ImageBackground
                borderRadius={40}
                style={{
                height:heightImage,
                margin:10,
                width:Dimensions.get('window').width/2-30,
                }}
                source= {item} >
            <LinearGradient
                start={{ x: 0, y: 0.8 }}
                end={{ x: 0, y: 0 }}
                colors={['#59e0a5','rgba(107, 221, 170, 1)','rgba(107, 221, 170, 0.8)','rgba(107, 221, 170, 0.6)','rgba(107, 221, 170, 0.4)', 'rgba(107, 221, 170, 0.1)', 'rgba(0, 0, 0, 0)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    height: 58,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >   
                <Text 
                    numberOfLines={1}
                    style={{color:Colors.vert,fontFamily: 'EbrimaBold'}}
                >
                    Savoy Sharm El Sheikh 
                </Text>
                <View style={{flexDirection:'row'}}>
                <Ionicons name='location-sharp' size={16} color={Colors.vert} />
                <Text 
                    numberOfLines={1} 
                    style={{color:Colors.vert,fontFamily: 'EbrimaBold'}}
                >
                    {titles[index]}
                </Text>

                </View>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>

        );
    }


    return(
        <View style={{height:'100%',width:'100%',flex:1,alignItems:'center'}}>
            <View style={{alignItems:'center',marginBottom:40}}>
                <SliderImage images={coverDestination}/>
                <TouchableOpacity onPress={() => { navigation.goBack()}} style={{position:'absolute',top:40,left:20}}>
                    <Ionicons name='arrow-back' size={30} color={Colors.vertdeau} />
                </TouchableOpacity>
                <View 
                    style={{
                        flexDirection:'row',
                        backgroundColor:Colors.vertdeau,
                        width:'65%',
                        height:40,
                        borderRadius:30,
                        paddingLeft:20,
                        alignItems:'center',
                        position:'absolute',
                        bottom:-20
                    }}
                >
                    <Ionicons name='search' size={16} color={Colors.vert} />
                    <TextInput
                        style={{paddingLeft:10,paddingRight:15,width:'92%',height:30,color:Colors.vert,fontSize:13}}
                        value={search}
                        onChange={Text=>{ setSearch(Text.nativeEvent.text)}}
                        placeholder={t("screens.destination.search")}
                        placeholderTextColor={Colors.vert}
                    />
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2} 
                renderItem={randemItem}
            />
        </View>
    )
}