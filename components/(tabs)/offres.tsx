import {TouchableOpacity} from "react-native";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { Colors, Images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListOfOffres from "@/components/offres/listOffres";
import FilterScreen from "@/components/offres/drawerOffres";


const Drawer = createDrawerNavigator();

export default function Offres() {
   const { t } = useTranslation();
    
  return (
    <Drawer.Navigator
      initialRouteName="listOffres"
      drawerContent={(props) => <FilterScreen {...props}/>}
      screenOptions={({ navigation }) => ({
        drawerPosition:'right',
        headerRight: () => (
          <TouchableOpacity onPress={navigation.toggleDrawer} >
            <Ionicons name="options-outline" size={30} color={Colors.vert} style={{paddingRight:20}}/>
          </TouchableOpacity>
        ),
        headerLeft:()=>(<></>),
        headerStyle: { 
          backgroundColor: "#fff",
           elevation: 0,
           shadowOpacity: 0,
           borderBottomWidth: 0,
        },
        headerTitleStyle:{
          color:Colors.vert,
          fontSize: 26,
          fontFamily: 'Bahnschrift',
          letterSpacing:1,
        },
        headerTitle:t("screens.offres.title"),
        headerTitleAlign:'left'
      })}
    >  
      <Drawer.Screen
         name="listOffres" 
         component={ListOfOffres}
         options={{ headerShown: true }} 
        />
    </Drawer.Navigator>
  )   
}
