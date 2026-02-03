import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function AccountPage() {
  return (
    <View className="flex-1 bg-white">
      {/* Status bar visible over background */}
      <StatusBar style="dark" translucent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Header (drawn under status bar) */}
        <View className="flex-row items-center justify-between px-4 pt-16 pb-3 border-b border-gray-200">

          <Text className="text-lg font-semibold text-gray-900">
            Account
          </Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={22} color="#111" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View className="px-4 py-4">
          <Text className="text-xl font-bold text-gray-900">
            Anamul Haque
          </Text>
          <Text className="text-gray-500 mt-1">
            View profile
          </Text>
        </View>

        {/* Promo Banner */}
        <View className="mx-4 mb-4 rounded-xl bg-green-700 p-4">
          <Text className="text-white text-lg font-bold mb-1">
            Save on your future orders with HOMAREE
          </Text>
          <TouchableOpacity className="flex-row items-center mt-1">
            <Text className="text-white text-sm mr-1">
              Learn more
            </Text>
            <Ionicons name="chevron-forward" size={14} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View className="mx-4 mb-4 flex-row justify-between">
          <View className="flex-1 mr-2 rounded-xl border border-gray-200 py-4 items-center">
            <Ionicons name="receipt-outline" size={22} />
            <Text className="mt-2 text-sm">Orders</Text>
          </View>

          <View className="flex-1 mx-1 rounded-xl border border-gray-200 py-4 items-center">
            <Ionicons name="heart-outline" size={22} />
            <Text className="mt-2 text-sm">Favourites</Text>
          </View>

          <View className="flex-1 ml-2 rounded-xl border border-gray-200 py-4 items-center">
            <Ionicons name="location-outline" size={22} />
            <Text className="mt-2 text-sm">Addresses</Text>
          </View>
        </View>

        {/* Refund Account */}
        <View className="mx-4 mb-6 rounded-xl border border-gray-200 px-4 py-4 flex-row justify-between">
          <Text className="font-medium text-gray-900">
            Refund Account
          </Text>
          <Text className="text-gray-500">
            Tk 0
          </Text>
        </View>

        {/* Perks for you */}
        <Text className="px-4 mt-6 mb-2 text-lg font-bold text-gray-900">
          Perks for you
        </Text>

        <View className="mx-4 mb-4 border-t border-gray-200">
          {[
            { icon: "star-outline", label: "Become a pro" },
            { icon: "trophy-outline", label: "Homaree rewards" },
            { icon: "pricetag-outline", label: "Vouchers" },
            { icon: "gift-outline", label: "Invite friends" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-200"
            >
              <View className="flex-row items-center">
                <Ionicons name={item.icon as any} size={20} />
                <Text className="ml-3 text-gray-900">
                  {item.label}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* General */}
        <Text className="px-4 mt-6 mb-2 text-lg font-bold text-gray-900">
          General
        </Text>

        <View className="mx-4 mb-6 border-t border-gray-200">
          {[
            { icon: "help-circle-outline", label: "Help center" },
            { icon: "briefcase-outline", label: "Homaree for business" },
            { icon: "document-text-outline", label: "Terms & policies" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-200"
            >
              <View className="flex-row items-center">
                <Ionicons name={item.icon as any} size={20} />
                <Text className="ml-3 text-gray-900">
                  {item.label}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <View className="px-4 mb-4">
          <TouchableOpacity className="border border-gray-900 rounded-lg py-3 items-center">
            <Text className="font-semibold text-gray-900">
              Log out
            </Text>
          </TouchableOpacity>
        </View>

        {/* Version */}
        <Text className="text-center text-gray-400 text-sm mb-6">
          Version 26.4.0
        </Text>
      </ScrollView>
    </View>
  );
}
