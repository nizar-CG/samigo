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

export default function EditProfile(){
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [firstName,setFirstName]= useState<string>();
    const [lastName,setLastName]=useState<string>();
    const [email,setEmail]= useState<string>();


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
                <Text style={stylesCompte.title} > {t("screens.compte.edit")} </Text>
                <ScrollView style={{paddingLeft:20,paddingRight:20}}>
                    <Text style={stylesCompte.titleField}> {t("screens.compte.firstName")}</Text>
                    <TextInput
                        value={firstName}
                        style={stylesCompte.inputField}
                        onChange={Text=>{ setFirstName(Text.nativeEvent.text)}}
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