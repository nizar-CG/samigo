import { Colors, Images } from "@/constants";
import {ImageBackground, Image,Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/hooks/types";
import stylesCompte from "@/styles/stylesCompte";


export default function Login(){
    const { t } = useTranslation();
    const [username,setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [showPass,setShowPass]=useState(true);


    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={Images.login} style={stylesCompte.backgroundImage}>
            <View style={{alignItems:'center'}}>
                <Image source={Images.samigo} style={stylesCompte.logo}/>
            </View>
            <Text style={stylesCompte.textButtonStart}> {t("screens.compte.welcome")} </Text>
            <View style={{alignItems:'center',marginTop:30}}>
                <View style={stylesCompte.field}>
                    <Ionicons name='person' size={26} color={Colors.white}/>
                    <TextInput
                        value={username}
                        textAlign="center"
                        style={{color:Colors.white,width:"90%",paddingRight:40}}
                        onChange={Text=>{ setUsername(Text.nativeEvent.text)}}
                        placeholder={t("screens.compte.username")}
                        placeholderTextColor={Colors.white}
                    /> 
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={stylesCompte.field}> 
                    <Ionicons name='lock-closed' size={26} color={Colors.white}/> 
                    <TextInput
                        secureTextEntry={showPass}
                        value={password}
                        textAlign="center"
                        style={{color:Colors.white,width:"80%"}}
                        onChange={Text=>{ setPassword(Text.nativeEvent.text)}}
                        placeholder={t("screens.compte.password")}
                        placeholderTextColor={Colors.white}
                    />
                    <TouchableOpacity onPress={() => {setShowPass(!showPass)}}>
                            {
                                showPass?
                                <Ionicons name='eye' size={28} color={Colors.white} style={{paddingLeft:5}} />
                                :<Ionicons name='eye-off' size={28} color={Colors.white} style={{paddingLeft:5}}/>

                            }
                        </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:'80%'}} onPress={() => {navigation.navigate('TabLayout')}}>
                    <LinearGradient
                        colors={[Colors.vertdeau,Colors.vert]} 
                        style={stylesCompte.buttonLogin}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1.6, y: 1 }}
                    >
                    <Text style={stylesCompte.textButtonStart}>{t("screens.compte.textButtonStart")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={stylesCompte.textWhite}>
                {t("screens.compte.textSignUp")}
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('signUp')}}>
                <Text style={stylesCompte.textWhite}>{t("screens.compte.signUp")}</Text>
            </TouchableOpacity>

            </View>
            
        </ImageBackground>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}