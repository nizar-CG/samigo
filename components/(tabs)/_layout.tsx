import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import HomeScreen from './home';
import Explore from'./explore';
import Offres from './offres';
import Profile from './profile';
export default function TabLayout() {
  const { t } = useTranslation();
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.vertdeau,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: t("screens.home.title").toString(),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        component={Explore}
        options={{
          title: t("screens.explore.title").toString(),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search-outline' : 'search-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="offres"
        component={Offres}
        options={{
          title: t("screens.offres.title").toString(),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        component={Profile}
        options={{
          title: t("screens.profile.title").toString(),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
