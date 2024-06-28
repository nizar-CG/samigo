import { useState } from 'react';
import { Image, View,ScrollView,TextInput,TouchableOpacity,Text,FlatList} from 'react-native';
import'../../localization/i18n';
import{Colors, Images} from '@/constants';
import stylesHome from '@/styles/stylesHome';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import InspireMeInterface from '@/components/home/inspire';
import SpecialOffresInterface from '@/components/home/offre';
import BestDealsInterface from '@/components/home/besDeal';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';


export default function HomeScreen() {
  const { t } = useTranslation();
  const [search,setSearch] = useState('');
  const inspireImages =[Images.tunisia,Images.egypt,Images.turkey];
  const offreImage=[Images.iberostart,Images.argos];
  const dealImage=[Images.beach,Images.tennis]
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} >
      <View style={stylesHome.containerImage}>
        <Image
          source={Images.cover}
          resizeMode='cover'
          style={stylesHome.coverImage}
          />
        <View style={stylesHome.searchView}>
          <TouchableOpacity style={stylesHome.buttonSearch}>
            <Ionicons name='search' size={20} color={Colors.white} />
          </TouchableOpacity>
          <TextInput
            style={{paddingLeft:15,paddingRight:15,width:Dimensions.get('window').width-10}}
            value={search}
            onChange={Text=>{ setSearch(Text.nativeEvent.text)}}
            placeholder={t("screens.home.text.search")}
            />
        </View>
      </View>
      <View style={stylesHome.containerTitle}>
        <Ionicons name='earth-outline' size={24} color={Colors.vert}  />
        <Text style={stylesHome.title}>
          Inspire me
        </Text>
      </View>
      <FlatList
        key={"inspireMe"}
        data={inspireImages}
        style={{paddingLeft:15}}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item,index})=>(
          <InspireMeInterface index={index} key={item}/>
          )}
      />
      <View style={{flexDirection:'row',justifyContent: 'space-between',paddingRight:15}}>
        <View  style={stylesHome.containerTitle}>
          <Ionicons name='pricetag-outline' size={24} color={Colors.vert} />
          <Text style={stylesHome.title}>{t("screens.home.text.title1")} </Text>
        </View>
        <TouchableOpacity style={{paddingTop:5}} onPress={() => { navigation.navigate('offres')}}>
          <View style={stylesHome.containerTitle}>
            <Text style={stylesHome.textSeeAll}>{t("screens.home.text.all")}</Text>
            <Ionicons name='arrow-forward-outline' size={18} color={Colors.vert} style={{paddingLeft:5}} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        key={"special offre"}
        data={offreImage}
        style={{paddingLeft:15}}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item ,index})=>(
          <SpecialOffresInterface index={index} key={item}/>
         )}
      />
      <View style={{flexDirection:'row',justifyContent: 'space-between',paddingRight:15}}>
        <View  style={stylesHome.containerTitle}>
          <Ionicons name='heart-outline' size={24} color={Colors.vert} />
          <Text style={stylesHome.title}>{t("screens.home.text.title2")} </Text>
        </View>
        <TouchableOpacity style={{paddingTop:5}} onPress={()=>navigation.navigate("bestDeals")}>
          <View style={stylesHome.containerTitle}>
            <Text style={stylesHome.textSeeAll}>{t("screens.home.text.all")}</Text>
            <Ionicons name='arrow-forward-outline' size={18} color={Colors.vert} style={{paddingLeft:5}} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        key={"best deals"}
        data={dealImage}
        style={{paddingLeft:15,paddingBottom:20}}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item ,index})=>(
          <BestDealsInterface index={index} key={item}/>
          )}
      />
    </ScrollView>

  );
}
