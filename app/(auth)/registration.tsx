import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  return (
    <LinearGradient
      colors={["#4f46e5", "#6366f1"]}
      className="flex-1 justify-end"
    >
      {/* Bottom Card */}
      <View className="bg-white rounded-t-3xl p-6 pb-8">
        {/* Header */}
        <Text className="text-2xl font-bold text-gray-900 mb-1">Create Account ✨</Text>
        <Text className="text-gray-500 mb-6">Sign up to get started</Text>

        {/* Full Name */}
        <View className="mb-4">
          <Text className="text-sm text-gray-700 mb-1">Full Name</Text>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor="#9ca3af"
            className="bg-gray-100 h-12 rounded-lg px-4 text-base"
          />
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-sm text-gray-700 mb-1">Email</Text>
          <TextInput
            placeholder="example@email.com"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-gray-100 h-12 rounded-lg px-4 text-base"
          />
        </View>

        {/* Password */}
        <View className="mb-4">
          <Text className="text-sm text-gray-700 mb-1">Password</Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            className="bg-gray-100 h-12 rounded-lg px-4 text-base"
          />
        </View>

        {/* Confirm Password */}
        <View className="mb-4">
          <Text className="text-sm text-gray-700 mb-1">Confirm Password</Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            className="bg-gray-100 h-12 rounded-lg px-4 text-base"
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity className="bg-indigo-600 h-12 rounded-lg items-center justify-center mb-4">
          <Text className="text-white font-semibold text-base">Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="px-2 text-gray-500 text-xs">or sign up with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Footer */}
        <View className="flex-row justify-center">
          <Text className="text-gray-500 text-sm">Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-indigo-600 text-sm font-semibold ml-1">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
