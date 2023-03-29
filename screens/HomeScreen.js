import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  // TODO: Create different JSX for Android and iOS, with If Platform.OS===
  return (
    <SafeAreaView className="bg-white pt-5">
      <View
        className="flex-row pb-3 items-center mx-4 space-x-2"
        style={Platform.OS === "android" ? { marginTop: 16 } : null}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView className="bg-gray-100">
        <Categories />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />
        <FeaturedRow
          title="Tasty discounts"
          description="Everyone's been enjoying these juicy discounts"
          id="1234"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant today!"
          id="12345"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
