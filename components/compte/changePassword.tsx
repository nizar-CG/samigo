import { useTranslation } from "react-i18next";
import '../../localization/i18n'
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback, View ,Text, ScrollView, TextInput} from "react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/hooks/types";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants";
import stylesCompte from "@/styles/stylesCompte";
import { useState } from "react";

export default function ChangePassword(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [password,setPassword]= useState<string>();
    const [newPassword,setNewPassword]=useState<string>();
    const [confirmPassword,setConfirmPassword]= useState<string>();
    const [showPass,setShowPass]=useState(true);
    const [showNewPass,setShowNewPass]=useState(true);
    const [showConfirmPass,setShowConfirmPass]=useState(true);
    
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
                <Text style={stylesCompte.title} > {t("screens.compte.changePassword")} </Text>
                <ScrollView style={{paddingLeft:20,paddingRight:20}}>
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
                    <Text style={stylesCompte.titleField}> {t("screens.compte.newPassword")}</Text>
                    <View  style={stylesCompte.viewPassword}>
                        <TextInput
                            value={newPassword}
                            secureTextEntry={showNewPass}
                            style={stylesCompte.inputPassword}
                            onChange={Text=>{ setNewPassword(Text.nativeEvent.text)}}
                        />
                        <TouchableOpacity onPress={() => {setShowNewPass(!showNewPass)}}>
                            {
                                showNewPass?
                                <Ionicons name='eye-outline' size={28} color={Colors.vertdeau}/>
                                :<Ionicons name='eye-off-outline' size={28} color={Colors.vertdeau}/>

                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={stylesCompte.titleField}> {t("screens.compte.confirmPassword")}</Text>
                    <View style={stylesCompte.viewPassword}>
                        <TextInput
                            secureTextEntry={showConfirmPass}
                            value={confirmPassword}
                            style={stylesCompte.inputPassword}
                            onChange={Text=>{ setConfirmPassword(Text.nativeEvent.text)}}
                        />
                        <TouchableOpacity onPress={() => {setShowConfirmPass(!showConfirmPass)}}>
                            {
                                showConfirmPass?
                                <Ionicons name='eye-outline' size={28} color={Colors.vertdeau}/>
                                :<Ionicons name='eye-off-outline' size={28} color={Colors.vertdeau}/>

                            }
                        </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center',marginTop:40}}>
                        <TouchableOpacity style={stylesCompte.buttonCreate} >
                            <Text style={stylesCompte.textButtonWhite}> {t("screens.compte.save")} </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        
    )
}