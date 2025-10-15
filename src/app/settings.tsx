import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Settings</Text>
      <Text className="mt-2">Adjust your preferences  here.</Text>
    </View>
  );
}
