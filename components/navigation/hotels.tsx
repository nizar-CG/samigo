import {TouchableOpacity} from "react-native";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { Colors} from "@/constants";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterScreen from "@/components/drawer/drawerFilter";
import ListHotels from "../drawer/listHotels";


const Drawer = createDrawerNavigator();

export default function Hotels() {
   const { t } = useTranslation();

    
  return (
    <Drawer.Navigator
      initialRouteName="listHotels"
      drawerContent={(props) => <FilterScreen {...props}/>}
      screenOptions={({ navigation }) => ({
        
        drawerPosition:'right',
        headerRight: () => (
          <TouchableOpacity onPress={navigation.toggleDrawer} >
            <Ionicons name="options-outline" size={30} color={Colors.vert} style={{paddingRight:20}}/>
          </TouchableOpacity>
        ),
        headerLeft:()=>(<TouchableOpacity  onPress={() => {navigation.goBack()}}>
            <Ionicons name="arrow-back-outline" size={30} color={Colors.vert} style={{paddingLeft:20}}/>
          </TouchableOpacity>),
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
        headerTitle:t("screens.hotels.title"),
        headerTitleAlign:'left'
      })}
    >  
      <Drawer.Screen
         name="listHotels" 
         component={ListHotels}
         options={{ headerShown: true }} 
        />
    </Drawer.Navigator>
  )   
}
