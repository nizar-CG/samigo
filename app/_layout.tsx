import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from './(tabs)/_layout';
import BestDeals from '@/components/navigation/bestDeals';
import Book from '@/components/navigation/book';
import HotelDetails from '@/components/navigation/hotelDetails';
import Payment from '@/components/navigation/payment';

const Stack = createStackNavigator();


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Bahnschrift : require('../assets/fonts/BS_Static_Bold.ttf'),
    EbrimaBold: require('../assets/fonts/Ebrima Bold.ttf'),
    Ebrima: require('../assets/fonts/ebrima.ttf'),
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
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="TabLayout">
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
    </Stack.Navigator>
  </NavigationContainer>

  );
}
