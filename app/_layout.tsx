import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from '../components/(tabs)/_layout';
import BestDeals from '@/components/navigation/bestDeals';
import Book from '@/components/navigation/book';
import HotelDetails from '@/components/navigation/hotelDetails';
import Payment from '@/components/navigation/payment';
import Confirm from '@/components/navigation/confirm';
import { HotelProvider } from '@/hooks/provider';
import Start from './index';
import Login from '@/components/compte/login';
import SignUp from '@/components/compte/signUp';
import EditProfile from '@/components/compte/editProfile';
import ChangePassword from '@/components/compte/changePassword';
import MyBooking from '@/components/compte/myBooking';
import Destination from '@/components/navigation/destination'
import Rooms from '@/components/navigation/rooms';
import Hotels from '@/components/navigation/hotels';

const Stack = createStackNavigator();


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Bahnschrift : require('../assets/fonts/BS_Static_Bold.ttf'),
    EbrimaBold: require('../assets/fonts/Ebrima Bold.ttf'),
    Ebrima: require('../assets/fonts/ebrima.ttf'),
    BellMT: require('../assets/fonts/Bell MT.ttf'),
    BellMTBold: require('../assets/fonts/Bell MT Bold.ttf'),
    calibriBold: require('../assets/fonts/calibri-bold.ttf'),
    calibriRegular: require('../assets/fonts/calibri-regular.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <HotelProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen
            name="index"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ 
              headerShown: false,
              gestureEnabled:false  
            }}
          />
          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabLayout"
            component={TabLayout}
            options={{ 
              headerShown: false,
              gestureEnabled:false
            }}
          />
          <Stack.Screen
            name="bestDeals"
            component={BestDeals}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="book"
            component={Book}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="hotelDetails"
            component={HotelDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="confirm"
            component={Confirm}
            options={{
              gestureEnabled:false , 
              headerShown: false
            }}
          />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="changePassword"
            component={ChangePassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="myBooking"
            component={MyBooking}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="destination"
            component={Destination}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="rooms"
            component={Rooms}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="hotels"
            component={Hotels}
            options={{headerShown: false}}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </HotelProvider>
);
}
