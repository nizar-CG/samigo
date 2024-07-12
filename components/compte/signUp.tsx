import { Colors } from "@/constants";
import { RootStackParamList } from "@/hooks/types";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback, View ,Text, ScrollView, TextInput} from "react-native";
import { useTranslation } from "react-i18next";
import'../../localization/i18n';
import stylesCompte from "@/styles/stylesCompte";
import { useState } from "react";

export default function SignUp(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [firstName,setFirstName]= useState<string>();
    const [lastName,setLastName]= useState<string>();
    const [email,setEmail]=useState<string>();
    const [password,setPassword]= useState<string>();
    const [showPass,setShowPass]=useState(true);


    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                <TouchableOpacity onPress={() => { navigation.goBack()}}>
                    <Ionicons name='arrow-back-outline' size={30} color={Colors.titleGrey} style={{paddingTop:50,paddingLeft:20}}/>
                </TouchableOpacity>
                <Text style={stylesCompte.title} > {t("screens.compte.signUp")} </Text>
                <ScrollView style={{paddingLeft:20,paddingRight:20}}>
                    <Text style={stylesCompte.titleField}> {t("screens.compte.firstName")}</Text>
                    <TextInput
                        value={firstName}
                        style={stylesCompte.inputField}
                        onChange={Text=>{ setFirstName(Text.nativeEvent.text)}}
                        underlineColorAndroid="transparent"
                    />
                    <Text style={stylesCompte.titleField}> {t("screens.compte.lastName")}</Text>
                    <TextInput
                        value={lastName}
                        style={stylesCompte.inputField}
                        onChange={Text=>{ setLastName(Text.nativeEvent.text)}}
                    />
                    <Text style={stylesCompte.titleField}> {t("screens.compte.email")}</Text>
                    <TextInput
                        value={email}
                        style={stylesCompte.inputField}
                        onChange={Text=>{ setEmail(Text.nativeEvent.text)}}
                    />
                    <Text style={stylesCompte.titleField}> {t("screens.compte.password")}</Text>
                    <View style={stylesCompte.viewPassword}>
                        <TextInput
                            secureTextEntry={showPass}
                            value={password}
                            style={stylesCompte.inputPassword}
                            onChange={Text=>{setPassword(Text.nativeEvent.text)}}
                        />
                        <TouchableOpacity onPress={() => {setShowPass(!showPass)}}>
                            {
                                showPass?
                                <Ionicons name='eye-outline' size={28} color={Colors.vertdeau}/>
                                :<Ionicons name='eye-off-outline' size={28} color={Colors.vertdeau}/>

                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',marginTop:40}}>
                        <TouchableOpacity style={stylesCompte.buttonCreate} onPress={() => {navigation.navigate('TabLayout')}}>
                            <Text style={stylesCompte.textButtonWhite}> {t("screens.compte.create")} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',margin:20}}>
                        <Text style={{fontFamily: 'EbrimaBold',color:Colors.titleGrey,fontSize:20}}> {t("screens.compte.or")} </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={stylesCompte.buttonFacebook} onPress={() => {navigation.navigate('TabLayout')}}>
                            <Text style={stylesCompte.textButtonVert}> {t("screens.compte.facebook")} </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}