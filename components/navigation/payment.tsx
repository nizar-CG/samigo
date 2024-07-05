import { Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View ,KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import stylesBooking from "@/styles/stylesBooking";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/hooks/types';
import { Ionicons } from "@expo/vector-icons";
import { Colors, Images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Divider} from 'react-native-paper';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useState,useRef, useEffect  } from "react";
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';

export default function Payment(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const sheetRef = useRef<BottomSheetMethods>(null);
    const [carte , setCarte]= useState<Number>() 
    const cartes=[ Images.paypal,Images.visa]
    const cartesName=["Paypal Carte","Visa Carte"]
    const [numberCard,setNumberCard]= useState<String>('')
    const [userName,setUserName]= useState<String>('')
    const [cvc,setCVC]= useState<String>('')
    const [expirationDate, setExpirationDate] = useState('');
    const [image,setImage]= useState(null)
    const [isCVCFocused, setIsCVCFocused] = useState(false);

    const flipAnimation = useRef(new Animated.Value(0)).current;
    const flipInterpolate = flipAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    const handleExpirationDateChange = (text:any) => {
        const cleanedText = text.replace(/[^\d]/g, '');
      
        if (cleanedText.length <= 2) {
          setExpirationDate(cleanedText);
        } else if (cleanedText.length > 2 && cleanedText.length <= 4) {
          setExpirationDate(cleanedText.slice(0, 2) + '/' + cleanedText.slice(2));
        } else {
          setExpirationDate(cleanedText.slice(0, 2) + '/' + cleanedText.slice(2, 4));
        }
      };

    const formatCardNumber = () => {
        let formattedNumber = '';
        for (let i = 0; i < 16; i++) {
          if (i < numberCard!.length) {
            formattedNumber += numberCard![i];
          } else {
            formattedNumber += '•';
          }
          if ((i + 1) % 4 === 0 && i !== 15) {
            formattedNumber += ' ';
          }
        }
        return formattedNumber;
      };
      const getCardType = (number:String) => {
        const cleanedNumber = number.replace(/\D/g, '');
        const firstDigit = cleanedNumber.charAt(0);
        const firstTwoDigits = cleanedNumber.slice(0, 2);
    
        if (firstDigit === '4') {
          return Images.visa;
        } else if (['51', '52', '53', '54', '55'].includes(firstTwoDigits)) {
          return Images.masterCard;
        } else if (['34', '37'].includes(firstTwoDigits)) {
          return Images.americanExpress;
        } else {
          return null;
        }
      };

      useEffect(() => {
        const cardImage = getCardType(numberCard);
        setImage(cardImage);
      }, [numberCard]);
    
      const handleCVCFocus = () => {
        setIsCVCFocused(true);
        Animated.timing(flipAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
      };
    
      const handleCVCBlur = () => {
        setIsCVCFocused(false);
        Animated.timing(flipAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
      };

    return(
        <KeyboardAvoidingView
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
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
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={stylesBooking.textGreyBold}> {t("screens.myBooking.text.method")} </Text>
            <View>
                <FlatList
                    key={"carte"}
                    data={cartes}
                    scrollEnabled={false}
                    renderItem={({item,index})=>(
                        <TouchableOpacity style={stylesBooking.containerCarte} onPress={()=>setCarte(index)}>
                            <Image source={item} style={{height:50,width:50}}/>
                            <Text style={stylesBooking.smallTextGreyBold}> {cartesName[index]} </Text>
                            {index==carte?
                                <Ionicons name='checkmark-sharp' size={26} style={stylesBooking.iconCheck} />:
                                <View/>
                            }
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => sheetRef.current?.open()}>
                <View style={{flexDirection:'row',paddingTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name='add' size={24} color={Colors.vert} />
                    <Text style={stylesBooking.textVert}> {t("screens.myBooking.text.addCarte")} </Text>
                </View>
            </TouchableOpacity>
            <Divider style={{margin:20,height:1}}/>
            <View style={stylesBooking.containerPrice}>
                <Text style={stylesBooking.textGrey}> 280 $ * 5 nights </Text>
                <Text style={stylesBooking.textGrey}> 1.400 $ </Text>
            </View>
            <Divider style={{margin:20,height:1}}/>
            <View style={stylesBooking.containerPrice}>
                <Text style={stylesBooking.sousTitleGrey}> {t("screens.myBooking.text.total") } </Text>
                <Text style={stylesBooking.sousTitleGrey}> 1.400 $ </Text>
            </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={stylesBooking.buttonContainer} onPress={()=>navigation.navigate("confirm")}> 
                <Text style={stylesBooking.textButton}> {t("screens.myBooking.text.confirm")}</Text>    
              </TouchableOpacity>  
            </View> 
            </ScrollView>
            <BottomSheet ref={sheetRef} style={{alignItems:'center'}} disableDragHandlePanning={true} height={600}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Animated.View style={{ transform: [{ rotateY: flipInterpolate }]}}>
                        <ImageBackground source={isCVCFocused ? Images.cardBack : Images.cardFront} style={stylesBooking.backgroundImage}>
                           {!isCVCFocused?
                           ( <>
                            {image && <Image source={image} style={stylesBooking.typeCardImage}/>}
                            <Image source={Images.puce} style={stylesBooking.puceImage}/>
                            <Text style={stylesBooking.numberCard}> {formatCardNumber()}</Text>
                            <Text style={stylesBooking.userName}> {userName.length==0? 'XXXX XXXX':userName }</Text>
                            <View style={{flexDirection:'row', position:'absolute',bottom:40,right:20}}>
                                <Text style={{color:Colors.white,fontSize:8,fontFamily: 'EbrimaBold',letterSpacing:2,paddingRight:15,paddingTop:5}}> {t("screens.myBooking.text.cardValid")}</Text>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{color:Colors.white,fontSize:7,fontFamily: 'EbrimaBold',letterSpacing:2}}> {t("screens.myBooking.text.monthYear")}</Text>
                                    <Text style={{color:Colors.white,fontSize:8,fontFamily: 'EbrimaBold',letterSpacing:2,paddingBottom:10}}> {expirationDate.length==0? 'MM/YY ':expirationDate }</Text>
                                </View>
                            </View>
                            </> ):
                            <View style={{ transform: [{ rotateY: '180deg' }] }}>
                                <Text style={stylesBooking.textCvc}>{cvc}</Text>
                            </View>
                            
                        }
                        
                        </ImageBackground>
                    </Animated.View>
                    <Text numberOfLines={1} style={stylesBooking.titleCard}> {t("screens.myBooking.text.holder")} </Text>
                    <View style={{alignItems:'center',paddingBottom:20}}>
                        <TextInput
                            style={{padding:10,width:Dimensions.get('window').width-70,borderBottomColor:Colors.grey,borderWidth:1,borderColor:Colors.transparent}}
                            onChange={Text=>{ setUserName(Text.nativeEvent.text)}}
                            placeholder= "xxxx xxxx"
                        />
                    </View>
                    <Text style={stylesBooking.titleCard}> {t("screens.myBooking.text.cardNumber")} </Text>
                    <View style={{alignItems:'center'}}>
                        <TextInput
                            style={{padding:10,width:Dimensions.get('window').width-70,borderBottomColor:Colors.grey,borderWidth:1,borderColor:Colors.transparent}}
                            onChange={Text=>{ setNumberCard(Text.nativeEvent.text)}}
                            placeholder= "•••• •••• •••• ••••"
                            keyboardType="number-pad"
                            maxLength={16}	
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:25,paddingLeft:10,paddingRight:20}}>
                        <View>
                            <Text style={stylesBooking.titleCard}>{t("screens.myBooking.text.expiry") } </Text>
                            <TextInput
                                style={{padding:15,borderBottomColor:Colors.grey,borderWidth:1,borderColor:Colors.transparent,width:100,textAlign:'center'}}
                                value={expirationDate}
                                onChangeText={handleExpirationDateChange}
                                placeholder="MM/YY"
                                keyboardType="number-pad"
                                maxLength={5}
                            />
                        </View>
                        <View>
                            <Text style={stylesBooking.titleCard}> CVC/CCV</Text>
                            <TextInput
                                style={{padding:15,borderBottomColor:Colors.grey,borderWidth:1,borderColor:Colors.transparent,textAlign:'center',width:100}}
                                onChange={Text=>{ setCVC(Text.nativeEvent.text)}}
                                onFocus={handleCVCFocus}
                                onBlur={handleCVCBlur}
                                keyboardType="number-pad"
                                placeholder= "•••"
                                maxLength={3}	
                            />
                        </View>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={stylesBooking.buttonContainer} onPress={() => sheetRef.current?.close()}> 
                            <Text style={stylesBooking.textButton}> {t("screens.myBooking.text.save")}</Text>    
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </BottomSheet>
        </View>
        </KeyboardAvoidingView>

        
    )
}