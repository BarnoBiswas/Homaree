import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateBusinessPage() {
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());

  const [showOpening, setShowOpening] = useState(false);
  const [showClosing, setShowClosing] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
    <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          className="px-4"
        >
          <Text className="text-2xl font-bold mt-4 mb-6">
            Create Business
          </Text>

          {/* Business Name */}
          <FormInput label="Business Name" placeholder="Rana's Kitchen" />

          {/* Business Logo */}
          <FormInput label="Business Logo URL" placeholder="/uploads/logo.png" />

          {/* Cover Photo */}
          <FormInput label="Cover Photo URL" placeholder="/uploads/cover.jpg" />

          {/* Description */}
          <FormInput
            label="Description"
            placeholder="Write business description..."
            multiline
          />

          {/* Address */}
          <FormInput label="Address" placeholder="Business address" />

          {/* Opening Time */}
          <View className="mb-4">
            <Text className="font-semibold mb-2">Opening Time</Text>
            <TouchableOpacity
              onPress={() => setShowOpening(true)}
              className="border border-gray-300 rounded-xl px-4 py-3"
            >
              <Text>
                {openingTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </TouchableOpacity>

            {showOpening && (
              <DateTimePicker
                value={openingTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowOpening(false);
                  if (selectedDate) setOpeningTime(selectedDate);
                }}
              />
            )}
          </View>

          {/* Closing Time */}
          <View className="mb-4">
            <Text className="font-semibold mb-2">Closing Time</Text>
            <TouchableOpacity
              onPress={() => setShowClosing(true)}
              className="border border-gray-300 rounded-xl px-4 py-3"
            >
              <Text>
                {closingTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </TouchableOpacity>

            {showClosing && (
              <DateTimePicker
                value={closingTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowClosing(false);
                  if (selectedDate) setClosingTime(selectedDate);
                }}
              />
            )}
          </View>

          {/* Delivery Available */}
          <View className="mb-4">
            <Text className="font-semibold mb-2">
              Delivery Available
            </Text>
            <Switch
              value={deliveryAvailable}
              onValueChange={setDeliveryAvailable}
            />
          </View>

          {/* Minimum Order */}
          <FormInput
            label="Minimum Order Value"
            placeholder="0"
            keyboardType="numeric"
          />

          {/* Shareable Link */}
          <FormInput
            label="Shareable Link"
            placeholder="https://yourlink.com"
          />

          {/* Is Deleted */}
          <View className="mb-4">
            <Text className="font-semibold mb-2">
              Is Deleted
            </Text>
            <Switch value={isDeleted} onValueChange={setIsDeleted} />
          </View>

          {/* Status */}
          <FormInput label="Status" placeholder="pending" />

          {/* Submit Button */}
          <TouchableOpacity className="bg-green-600 py-4 rounded-xl mt-6 items-center">
            <Text className="text-white font-bold text-base">
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function FormInput({
  label,
  placeholder,
  multiline = false,
  keyboardType = "default",
}: any) {
  return (
    <View className="mb-4">
      <Text className="font-semibold mb-2">{label}</Text>
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
        className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
        style={multiline ? { height: 100, textAlignVertical: "top" } : {}}
      />
    </View>
  );
}
