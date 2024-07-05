import { Colors, Images } from "@/constants";
import {ImageBackground, Image,Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import stylesStart from "@/styles/stylesStart";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";


export default function Login(){
    const { t } = useTranslation();
    const [username,setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={Images.login} style={{flex:1,height:'100%',width:'100%',justifyContent:'flex-end'}}>
            <View style={{alignItems:'center'}}>
                <Image source={Images.samigo} style={stylesStart.logo}/>
            </View>
            <Text style={stylesStart.textButtonStart}> {t("screens.start.welcome")} </Text>
            <View style={{alignItems:'center',marginTop:30}}>
                <View style={stylesStart.field}>
                    <Ionicons name='person' size={26} color={Colors.white}/>
                    <TextInput
                        value={username}
                        textAlign="center"
                        style={{color:Colors.white,width:"90%",paddingRight:40}}
                        onChange={Text=>{ setUsername(Text.nativeEvent.text)}}
                        placeholder={t("screens.start.username")}
                        placeholderTextColor={Colors.white}
                    /> 
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={stylesStart.field}> 
                    <Ionicons name='lock-closed' size={26} color={Colors.white}/> 
                    <TextInput
                        value={password}
                        textAlign="center"
                        style={{color:Colors.white,width:"90%",paddingRight:40}}
                        onChange={Text=>{ setPassword(Text.nativeEvent.text)}}
                        placeholder={t("screens.start.password")}
                        placeholderTextColor={Colors.white}
                    />
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:'80%'}}>
                    <LinearGradient
                        colors={[Colors.vertdeau,Colors.vert]} 
                        style={stylesStart.buttonLogin}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1.6, y: 1 }}
                    >
                    <Text style={stylesStart.textButtonStart}>{t("screens.start.textButtonStart")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={stylesStart.textWhite}>
                {t("screens.start.textSignUp")}
            </Text>
            <TouchableOpacity>
                <Text style={stylesStart.textWhite}>{t("screens.start.signUp")}</Text>
            </TouchableOpacity>

            </View>
            
        </ImageBackground>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}