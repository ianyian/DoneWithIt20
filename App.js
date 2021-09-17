import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";

import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Platform,
  Dimensions,
  ViewPagerAndroidComponent,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}
