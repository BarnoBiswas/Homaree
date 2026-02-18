import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DishDetailsPage() {
  const { id } = useLocalSearchParams();

  const [selectedSide, setSelectedSide] = useState("French Fries");
  const [selectedSnack, setSelectedSnack] = useState("Chicken Nachos");
  const [instructions, setInstructions] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white">

      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View className="px-4 py-3 flex-row items-center">
            <Ionicons
              name="arrow-back"
              size={22}
              onPress={() => router.back()}
            />
            <Text className="ml-3 text-lg font-semibold">
              Dish Details (ID: {id})
            </Text>
          </View>

          {/* IMAGE */}
          <View className="w-full h-64 bg-gray-100 items-center justify-center">
            <Text className="text-gray-400">Dish Image Placeholder</Text>
          </View>

          {/* INFO */}
          <View className="px-4 py-4">
            <Text className="text-2xl font-bold text-gray-900">
              Double Cheese Burger with French Fries
            </Text>
            <Text className="text-lg font-semibold mt-2">Tk 250</Text>
            <Text className="text-gray-500 mt-2">
              Combo of: Double Cheese Burger, french fries
            </Text>
          </View>

          {/* CHOICE OF SIDES */}
          <View className="mt-6 border-t border-gray-200">
            <View className="px-4 py-4 flex-row justify-between">
              <Text className="text-lg font-semibold">Choice of Sides</Text>
              <Text className="text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                Completed
              </Text>
            </View>

            <Pressable
              onPress={() => setSelectedSide("French Fries")}
              className="px-4 py-3 flex-row justify-between border-t border-gray-200"
            >
              <Text>French Fries</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-500 mr-3">Free</Text>
                <View className="h-5 w-5 rounded-full border-2 border-black items-center justify-center">
                  {selectedSide === "French Fries" && (
                    <View className="h-2.5 w-2.5 rounded-full bg-black" />
                  )}
                </View>
              </View>
            </Pressable>
          </View>

          {/* CHOICE OF SNACKS */}
          <View className="mt-6 border-t border-gray-200">
            <View className="px-4 py-4 flex-row justify-between">
              <Text className="text-lg font-semibold">Choice of Snacks</Text>
              <Text className="text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                Completed
              </Text>
            </View>

            <Pressable
              onPress={() => setSelectedSnack("Chicken Nachos")}
              className="px-4 py-3 flex-row justify-between border-t border-gray-200"
            >
              <Text>Double Cheese Burger</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-500 mr-3">Free</Text>
                <View className="h-5 w-5 rounded-full border-2 border-black items-center justify-center">
                  {selectedSnack === "Chicken Nachos" && (
                    <View className="h-2.5 w-2.5 rounded-full bg-black" />
                  )}
                </View>
              </View>
            </Pressable>
          </View>

          {/* SPECIAL INSTRUCTIONS */}
          <View className="mt-6 border-t border-gray-200 px-4 py-4">
            <Text className="text-lg font-semibold mb-1">
              Special instructions
            </Text>
            <Text className="text-gray-500 text-sm mb-3">
              Let us know if you are allergic to anything or want to avoid something
            </Text>

            {/* ✅ FOODPANDA STYLE PLACEHOLDER */}
            <TextInput
              value={instructions}
              onChangeText={setInstructions}
              placeholder="e.g. No mayo"
              placeholderTextColor="#9CA3AF"
              multiline
              maxLength={500}
              className="border border-gray-300 rounded-xl px-3 py-3 text-gray-900"
              textAlignVertical="top"
            />

            <Text className="text-right text-gray-400 text-xs mt-1">
              {instructions.length}/500
            </Text>
          </View>
        </ScrollView>

        {/* ADD TO CART BAR */}
        <View className="flex-row items-center px-4 py-3 border-t border-gray-200 bg-white">
          <View className="flex-row items-center mr-4">
            <Pressable
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10 border rounded-full items-center justify-center"
            >
              <Text className="text-xl">−</Text>
            </Pressable>

            <Text className="mx-4 text-lg font-semibold">{quantity}</Text>

            <Pressable
              onPress={() => setQuantity(quantity + 1)}
              className="h-10 w-10 border rounded-full items-center justify-center"
            >
              <Text className="text-xl">+</Text>
            </Pressable>
          </View>

          <View className="flex-1 bg-green-600 py-4 rounded-xl items-center">
            <Text className="text-white font-bold">Add to cart</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
