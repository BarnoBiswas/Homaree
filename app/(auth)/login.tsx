import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4f46e5" }}>
      <StatusBar style="light" />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <LinearGradient
            colors={["#4f46e5", "#6366f1"]}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{ paddingTop: 24 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {/* TOP CONTENT */}
              <View className="bg-white rounded-t-3xl rounded-b-3xl p-6 pb-8">
                {/* Header */}
                <Text className="text-3xl font-bold text-gray-900 mb-1">
                  Homaree
                </Text>
                <Text className="text-gray-500 mb-6">
                  Login to continue to your account
                </Text>

                {/* Email */}
                <Text className="text-gray-700 text-sm mb-1">Email</Text>
                <TextInput
                  placeholder="example@email.com"
                  className="bg-gray-100 h-12 rounded-lg px-4 mb-4"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                {/* Password */}
                <Text className="text-gray-700 text-sm mb-1">Password</Text>
                <TextInput
                  placeholder="••••••••"
                  secureTextEntry
                  className="bg-gray-100 h-12 rounded-lg px-4 mb-4"
                />

                {/* Forgot password */}
                <TouchableOpacity className="mb-5 items-end">
                  <Text className="text-indigo-600 text-sm">
                    Forgot password?
                  </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity className="bg-indigo-600 h-12 rounded-lg items-center justify-center mb-4">
                  <Text className="text-white font-semibold text-base">
                    Login
                  </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center mb-4">
                  <View className="flex-1 h-px bg-gray-300" />
                  <Text className="px-2 text-gray-500 text-sm">
                    or continue with
                  </Text>
                  <View className="flex-1 h-px bg-gray-300" />
                </View>

                {/* Social Buttons */}
                <View className="flex-row justify-between mb-4">
                  <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-gray-100 h-12 rounded-lg mr-2">
                    <FontAwesome name="google" size={20} color="#DB4437" />
                    <Text className="ml-2 text-gray-700 font-semibold text-base">
                      Google
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-blue-600 h-12 rounded-lg ml-2">
                    <FontAwesome name="facebook" size={20} color="#fff" />
                    <Text className="ml-2 text-white font-semibold text-base">
                      Facebook
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Footer */}
                <View className="flex-row justify-center">
                  <Text className="text-gray-500 text-sm">
                    Don’t have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/(auth)/registration")}
                  >
                    <Text className="text-indigo-600 text-sm font-semibold ml-1">
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* 🔹 BLANK SPACE BELOW (FULL SCREEN FEEL) */}
              <View style={{ height: 300 }} />
            </ScrollView>
          </LinearGradient>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
