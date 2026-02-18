import {
  CategoryCarousel,
  DishOfferCarousel,
  KitchenCarousel,
  LocationHeader,
  OfferCarousel,
  SearchBarButton,
  TopKitchenCarousel,
} from "@/components";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";

import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

import StepProgressBar from "@/components/StepProgressBar";


export default function LoginScreen() {
  return (
    <LinearGradient colors={["#3f7d5b", "#3f7d5b"]} className="flex-1">
      
      <ScrollView
                   showsVerticalScrollIndicator={false}
                   contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className="px-6 gap-4">
          <LocationHeader />
          <SearchBarButton onPress={() => console.log("Search clicked")} />
        </View>
        <View className="bg-bg rounded-t-3xl p-6 pb-8 mt-6">
          <OfferCarousel />
          <CategoryCarousel />
          <KitchenCarousel title="Order Again" />
          <KitchenCarousel title="Nearby Kitchens" />
          <TopKitchenCarousel />
          <DishOfferCarousel />

           <TouchableOpacity
               onPress={() => router.push("/(entity)/business/create")}
               className="bg-black py-3 rounded-xl items-center mx-4 mt-6"
           >
           <Text className="text-white font-semibold">
               Open Business Form
           </Text>
           </TouchableOpacity>

           <StepProgressBar />



        </View>
      </ScrollView>
    </LinearGradient>
  );
}
