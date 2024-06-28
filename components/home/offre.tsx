import { Image,TouchableOpacity,Text,View} from 'react-native';
import{Colors, Images} from '@/constants';
import stylesHome from '@/styles/stylesHome';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import'../../localization/i18n'
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';

interface Props {
    index: number
}

const renderItems = (itemCount: number) => {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(
          <Ionicons name='star' size={10} color={Colors.jaune } style={{paddingLeft:2}} key={i}/>
        );
    }
    return items;
  }

const  SpecialOffresInterface: React.FC<Props> = ({ index }) =>{
    const { t } = useTranslation();
    const offreImage=[Images.iberostart,Images.argos];
    const offreTiltle=["Iberostar kuriat","Argos"];
    const offrePlace=["Palace Monastir" , "in Cappadocia"];
    const offre=["-35%","-25%"];
    const etoile : number[] = [4,5];
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();



    return (
        <TouchableOpacity key={`specialOffre${index}`} onPress={() => {navigation.navigate('hotelDetails')}}>
        <Image style={stylesHome.containerOffre} source={offreImage[index]}/>
        <LinearGradient
          colors={[Colors.vertdeau,Colors.vert]} 
          style={{ 
            flex: 1,
            borderRadius:50 ,
            height:40,
            width:40,
            position: 'absolute',
            top:8,
            left:8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={stylesHome.titleDistination}>{offre[index]}</Text>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[ Colors.vert,'#3b8d7c','rgba(33, 115, 105, 0.9)','rgba(0, 0, 0, 0)']} // '80' represents 50% transparency
          style={{
            marginRight: 20,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            height: 50
          }}
        >
          <View style={stylesHome.containerDeatils}>
            <View>
              <View  style={{width:170}}>
                <Text numberOfLines={1} style={stylesHome.defaultText}>{offreTiltle[index]}</Text>
              </View>   
              <View style={{flexDirection:'row',paddingTop:1,alignItems:"flex-end",width:110}}>
                <Text numberOfLines={1} style={stylesHome.defaultText}>{offrePlace[index]}</Text>
                {renderItems(etoile[index])}
              </View>
            </View>
            <TouchableOpacity 
              style={{ 
                borderRadius:40 ,
                height:28,
                width:70,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:Colors.jaune
                }} 
                onPress={() => {navigation.navigate('book')}}
              >
              <Text style={stylesHome.defaultText}>{t("screens.home.text.book")}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        </TouchableOpacity>
    );
};


export default SpecialOffresInterface;