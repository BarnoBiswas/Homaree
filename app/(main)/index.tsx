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

export default function LoginScreen() {
  return (
    <LinearGradient colors={["#3f7d5b", "#3f7d5b"]} className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
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
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
