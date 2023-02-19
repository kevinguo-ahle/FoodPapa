import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Settings: "settings-outline",
  Map: "map-outline",
};
const TAB_ICON_FOCUSED = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const CreateScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const iconNameFocused = TAB_ICON_FOCUSED[route.name];
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? iconNameFocused : iconName}
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button
        title="logout"
        mode="text"
        textColor="black"
        onPress={() => onLogout()}
      >
        Log out
      </Button>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={CreateScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
