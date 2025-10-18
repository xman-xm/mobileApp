import React from "react";
import { FlatList, FlatListComponent, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native/";


export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className=" bg-white  ">
      <View className=" p-4 header-b flex ">
    <Text className="text-2xl font-bold  " >
      Blinkr
    </Text>
 </View>
<ScrollView>
 <View className="post-borders " >
 <View className="p-4" >
 <Image source={require('../../assets/Unntitled.jpeg')} className="w-12 h-12 rounded-full" />
 </View>
 <Image source={require('../../assets/nature-vertical-yefjvpp5yr2mwqjq.jpg')} className=" w-full max-h-[80vh]" />
   <View className="p-4" >
    <Text>
      Nature is wonderfull?
    </Text>
 </View>
 </View>
 

</ScrollView>


    </View>
  );
}

