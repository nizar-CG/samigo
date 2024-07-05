import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
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

const Stack = createStackNavigator();


// Prevent the splash screen from auto-hiding before asset loading is complete.
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabLayout"
            component={TabLayout}
            options={{ headerShown: false }}
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
        
        </Stack.Navigator>
      </NavigationContainer>
    </HotelProvider>
);
}
