import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function KitchenPage() {
  const { id } = useLocalSearchParams();
  const [deliveryType, setDeliveryType] = useState("delivery"); // delivery | walk

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Cover Photo */}
      <View className="relative">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
          }}
          className="w-full h-56"
          resizeMode="cover"
        />

        {/* Profile Section (Logo + Info) */}
        <View className="absolute -bottom-24 left-5 flex-row items-end">
          {/* Logo */}
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/005/524/368/non_2x/restaurant-logo-food-logo-vector.jpg",
            }}
            className="w-28 h-28 rounded-full border-4 border-white"
          />

          {/* Name & Rating */}
          <View className="ml-3 mb-8">
            <Text className="text-2xl font-bold text-gray-900">
              Khaddo Sompod
            </Text>

            <View className="flex-row items-center">
              <Text className="text-yellow-500 text-base">⭐ 4.6</Text>
              <Text className="text-gray-500 ml-2">(1.2k ratings)</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="h-24" />
      {/* 🔹 Delivery Card */}
      <View className="mx-4 bg-white rounded-lg p-2 shadow-sm flex-row items-center border-gray-200 border">
        {/* Left Side: Switch Icons */}
        <View className="flex-row space-x-2">
          {/* Delivery Icon */}
          <Pressable
            onPress={() => setDeliveryType("delivery")}
            className={`p-3 rounded-full ${deliveryType === "delivery" ? "bg-green-100" : "bg-gray-100"
              }`}
          >
            <Ionicons
              name="car-outline"
              size={20}
              color={deliveryType === "delivery" ? "#16a34a" : "#6b7280"}
            />
          </Pressable>
          {/* Walk Icon */}
          <Pressable
            onPress={() => setDeliveryType("walk")}
            className={`p-3 rounded-full ${deliveryType === "walk" ? "bg-blue-100" : "bg-gray-100"
              }`}
          >
            <MaterialIcons
              name="directions-walk"
              size={20}
              color={deliveryType === "walk" ? "#2563eb" : "#6b7280"}
            />
          </Pressable>
        </View>

        {/* Right Side: Details */}
        <View className="flex-1 ml-2 pl-4">
          {deliveryType === "delivery" ? (
            <>
              <Text className="text-gray-800 text-md font-medium">
                Delivery Time: 30–40 mins
              </Text>
              <Text className="text-gray-500 mt-1 text-sm">
                Delivery Fee: ৳60
              </Text>
            </>
          ) : (
            <>
              <Text className="text-gray-800 text-md font-medium">
                Pickup Time: 15–20 mins
              </Text>
              <Text className="text-gray-500 mt-1 text-sm">
                12/A Road No 5, Dhanmondi
              </Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
