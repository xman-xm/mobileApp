import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (

      <View className="flex flex-1">
        <Text className="text-3xl font-bold text-center mt-4">Welcome to the App!</Text>
      </View>

  );
}



