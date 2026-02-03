import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const kitchens = [
  {
    id: "1",
    business_name: "Spicy Burger House",
    business_logo:
      "https://static.vecteezy.com/system/resources/previews/005/524/368/non_2x/restaurant-logo-food-logo-vector.jpg",
    cover_photo:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-design-template-86edebc383c2a86ab24640550e52b5f6_screen.jpg?ts=1685806906",
    open: true,
    estimated_time: "40-70 min",
    rating: 4.5,
    category: "Burger",
    offer: "20% OFF If buy 5",
  },
  {
    id: "2",
    business_name: "Pizza Paradise",
    business_logo:
      "https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg",
    cover_photo:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-banner-template-design-925774928d842fc1ac0186b839a10444_screen.jpg?ts=1737384394",
    open: false,
    estimated_time: "30-40 min",
    rating: 4.0,
    category: "Pizza",
    offer: "30% OFF",
  },
  {
    id: "3",
    business_name: "Chicken Delight",
    business_logo:
      "https://thumbs.dreamstime.com/b/restaurant-logo-design-idea-chef-hat-fork-graphic-leaf-shape-food-drinks-symbol-concept-cooking-eating-vector-template-173237325.jpg",
    cover_photo:
      "https://img.pikbest.com/origin/10/04/04/67xpIkbEsTISP.jpg!w700wp",
    open: true,
    estimated_time: "20-50 min",
    rating: 4.8,
    category: "Fried Chicken",
    offer: null, // No offer
  },
];

export default function KitchenCarousel({ title }: { title?: string }) {
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between px-4 mb-3">
        <Text className="text-lg font-bold text-gray-900">{title}</Text>

        {/* Right Arrow Button */}
        <Pressable
          // onPress={() => router.push("/order-again")}
          className="h-9 w-9 rounded-full border border-gray-300 items-center justify-center"
        >
          <Feather name="arrow-right" size={18} color="#111827" />
        </Pressable>
      </View>

      <FlatList
        data={kitchens}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="mr-4 rounded-2xl overflow-hidden"
            style={{ width: width * 0.8 }}
            onPress={() =>
              router.push({
                pathname: "/(entity)/kitchen/[id]",
                params: { id: item.id },
              })
            }
          >
            {/* Cover Photo */ }
              < View className="relative h-48 w-full">
            <Image
              source={{ uri: item.cover_photo }}
              className="h-full w-full"
              resizeMode="cover"
            />

            {/* Logo top-left */}
            <View className="absolute top-3 left-3 h-12 w-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                source={{ uri: item.business_logo }}
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>

            {/* Open/Closed status */}
            <View
              className={`absolute inset-0 justify-center items-center bg-black/25 rounded-2xl`}
            >
              <Text
                className={`text-white text-lg font-bold px-4 py-1 rounded-full ${item.open ? "bg-green-500" : "bg-red-500"
                  }`}
              >
                {item.open ? "OPEN" : "CLOSED"}
              </Text>
            </View>
          </View>

            {/* Info below cover */}
            <View className="p-3 bg-white">
        {/* Name + Rating */}
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-900">
            {item.business_name}
          </Text>

          {/* Star Rating */}
          <View className="flex-row items-center">
            <Feather name="star" size={14} color="#facc15" />
            <Text className="ml-1 text-sm text-gray-700">
              {item.rating.toFixed(1)}
            </Text>
          </View>
        </View>

        {/* Category */}
        <Text className="mt-1 text-sm text-gray-600">
          {item.estimated_time} {item.category}
        </Text>

        {/* Offer (if exists) */}
        {item.offer && (
          <View className="mt-2 rounded-full bg-red-200 px-3 py-1 self-start">
            <Text className="text-xs font-bold text-red-500">
              {item.offer}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  )
}
      />
    </View >
  );
}
