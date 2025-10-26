
import { Slot ,Tabs} from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
export default function Layout() {
  return <Tabs 
  screenOptions={
    {
      
    }
  }
  >
    <Tabs.Screen  name="index" options={{ title: "",
      headerShown: false,
      tabBarIcon: ({ focused }) => { return focused ? <Octicons name="home-fill" size={24} color="black" /> : <Feather name="home" size={24} color="black" /> }
     }} />
    <Tabs.Screen name="search" options={{ title: "", headerShown: false, tabBarIcon: ({ focused }) => { return focused ? <Octicons name="search" size={24} color="black" /> : <Feather name="search" size={24} color="black" /> } }} />
    <Tabs.Screen name="notifications" options={{ title: "", headerShown: false, tabBarIcon: ({ focused }) => { return focused ? <Octicons name="heart-fill" size={24} color="black" /> : <Feather name="heart" size={24} color="black" /> } }} />
    <Tabs.Screen name="profile" options={{ title: "", headerShown: false, tabBarIcon: ({ focused }) => { return focused ? <Octicons name="person-fill" size={24} color="black" /> : <Feather name="user" size={24} color="black" /> } }} />

    </Tabs>;
}
