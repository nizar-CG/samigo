import { Image,TouchableOpacity,Text,View} from 'react-native';
import{Colors, Images} from '@/constants';
import stylesHome from '@/styles/stylesHome';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import'../../localization/i18n'
import { useTranslation } from 'react-i18next';


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

const BestDealsInterface: React.FC<Props> = ({ index }) =>{
    const { t } = useTranslation();
    const dealImage=[Images.beach,Images.tennis]
    const dealTiltle=["Bel Azur Hammamet","Savoy Sharm El Sheikh"];
    const dealOffre=["Beach" , "Tennis" ];
    const etoile : number[] = [4,5];


    return (
        <TouchableOpacity key={`bestDeal${index}`}>
            <Image style={stylesHome.containerDeal} source={dealImage[index]}/>
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={[ Colors.vert,'#3b8d7c','rgba(33, 115, 105, 0.9)','rgba(0, 0, 0, 0)']} style={{
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
                  <View style={{width:170}}>
                    <Text numberOfLines={1} style={stylesHome.defaultText}>{dealTiltle[index]}</Text>
                  </View>   
                  <View style={{flexDirection:'row',paddingTop:1,alignItems:"flex-end",width:110}}>
                      <Text numberOfLines={1} style={stylesHome.defaultText}>{dealOffre[index]}</Text>
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
                  >
                  <Text style={stylesHome.defaultText}>{t("screens.home.text.book")}</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
        </TouchableOpacity>
           
   );
};


export default BestDealsInterface;