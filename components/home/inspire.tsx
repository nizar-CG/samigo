import { Image,TouchableOpacity,Text} from 'react-native';
import{Colors, Images} from '@/constants';
import stylesHome from '@/styles/stylesHome';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';

interface Props {
    index: number
}

const  InspireMeInterface: React.FC<Props> = ({ index }) => {
    const inspireImages =[Images.tunisia,Images.egypt,Images.turkey];
    const inspireTitle=["Tunisia","Egypt","Turkey"];
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity key={`InspireMe${index}`} onPress={() => { navigation.navigate('destination')}}>
            <Image
                style={stylesHome.containerInspire}
                source= {inspireImages[index]} />
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={[ Colors.vert,'#3b8d7c','rgba(33, 115, 105, 0.7)','rgba(0, 0, 0, 0)']}  // '80' represents 50% transparency
                style={{
                    marginRight: 20,  
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    height: 36,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={stylesHome.titleDistination}>{inspireTitle[index]}</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
}
export default InspireMeInterface