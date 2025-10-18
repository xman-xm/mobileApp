import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-white  items-center justify-center">
 <View>
    
 </View>
    </View>
  );
}
