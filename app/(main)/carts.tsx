import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartPage() {
  const [cutlery, setCutlery] = useState(false);

  return (
    <View className="flex-1 bg-green-700">
  
      <StatusBar style="light" translucent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Header */}
        <View className="px-4 pt-16 pb-4">
          <View className="flex-row items-center">
            <Ionicons name="close" size={22} color="white" />
            <View className="ml-3">
              <Text className="text-lg font-semibold text-white">Cart</Text>
              <Text className="text-white/80 text-sm">
                Modhumita Mithai Ghor
              </Text>
            </View>
          </View>
        </View>

        {/* White content container */}
        <View className="flex-1 bg-white rounded-t-3xl pt-6">
          {/* Steps */}
          <View className="flex-row justify-between px-6 py-4">
            {["Menu", "Cart", "Checkout"].map((step, index) => (
              <View key={index} className="items-center flex-1">
                <View
                  className={`h-7 w-7 rounded-full items-center justify-center ${
                    index === 1 ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`${
                      index === 1 ? "text-white" : "text-gray-600"
                    } text-xs`}
                  >
                    {index + 1}
                  </Text>
                </View>
                <Text className="text-xs mt-1 text-gray-600">{step}</Text>
              </View>
            ))}
          </View>

          {/* Delivery Card */}
          <View className="mx-4 mb-4 p-4 rounded-xl border border-gray-200 flex-row">
            <Image
              source={{ uri: "https://i.imgur.com/6XH4YJz.png" }}
              className="h-12 w-12 mr-3"
            />
            <View>
              <Text className="text-gray-500 text-sm">Estimated delivery</Text>
              <Text className="font-semibold text-gray-900">
                Standard (15–30 mins)
              </Text>
              <Text className="text-green-600 text-sm mt-1">Change</Text>
            </View>
          </View>

          {/* Cart Items */}
          <View className="mx-4 mb-4">
            {[
              {
                name: "Balushahi",
                price: 225,
                img: "https://i.imgur.com/FYQ4E1R.png",
              },
              {
                name: "mithai misti laddu 500 gm",
                price: 420,
                img: "https://i.imgur.com/oZ5GQ6N.png",
              },
            ].map((item, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between py-4 border-b border-gray-200"
              >
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: item.img }}
                    className="h-12 w-12 rounded mr-3"
                  />
                  <View>
                    <Text className="font-medium">{item.name}</Text>
                    <View className="flex-row items-center mt-1">
                      <Ionicons name="trash-outline" size={16} />
                      <Text className="mx-2">1</Text>
                      <Ionicons name="add-outline" size={16} />
                    </View>
                  </View>
                </View>
                <Text className="font-medium">Tk {item.price}</Text>
              </View>
            ))}
          </View>

          {/* Add More */}
          <TouchableOpacity className="mx-4 mb-6">
            <Text className="text-green-600 font-medium">
              + Add more items
            </Text>
          </TouchableOpacity>

          {/* PRO Banner */}
          <View className="mx-4 mb-4 p-4 rounded-xl bg-green-700 flex-row justify-between items-center">
            <View>
              <Text className="text-white font-bold">
                PRO Save Tk 9 more
              </Text>
              <Text className="text-white text-sm">
                Add HOMAREEpro to cart and save on this order
              </Text>
            </View>
            <Text className="text-white font-semibold">See how</Text>
          </View>

          {/* Price Summary */}
          <View className="mx-4 mb-4">
            <View className="flex-row justify-between mb-2">
              <Text>Subtotal</Text>
              <Text>Tk 645</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text>Standard delivery</Text>
              <Text className="text-green-600">Free</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Platform fee</Text>
              <Text>Tk 19</Text>
            </View>
          </View>

          {/* Voucher */}
          <TouchableOpacity className="mx-4 mb-4 border border-gray-300 rounded-lg py-3 items-center">
            <Text className="font-medium">Apply a voucher</Text>
          </TouchableOpacity>

          {/* Cutlery */}
          <View className="mx-4 mb-6 flex-row justify-between items-center">
            <View>
              <Text className="font-medium">Cutlery</Text>
              <Text className="text-gray-500 text-sm">
                No cutlery provided. Thanks for reducing waste!
              </Text>
            </View>
            <Switch value={cutlery} onValueChange={setCutlery} />
          </View>

          {/* Total */}
          <View className="mx-4 mb-8">
            <View className="flex-row justify-between mb-2">
              <Text className="font-semibold">
                Total (incl. fees and tax)
              </Text>
              <Text className="font-bold text-green-600">
                Tk 664
              </Text>
            </View>
            <TouchableOpacity className="bg-green-600 rounded-xl py-4 items-center">
              <Text className="text-white font-bold">
                Review payment and address
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
