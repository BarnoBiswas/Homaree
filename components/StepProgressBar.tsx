import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const steps = [
  "Request Submitted",
  "Received Responses",
  "Negotiation Done",
  "Hired Professional",
  "Service Completed",
];

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = 32; // px-4 left + right
const circleSize = 40;

export default function StepProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);

  const lineWidth =
    ((screenWidth - horizontalPadding - circleSize) /
      (steps.length - 1)) *
    currentStep;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View className="px-4 mt-10">

      <View className="relative mt-6">

        {/* Background Line */}
        <View
          style={{
            position: "absolute",
            top: 20,
            left: circleSize / 2,
            right: circleSize / 2,
            height: 4,
            backgroundColor: "#D1D5DB",
          }}
        />

        {/* Active Line */}
        <View
          style={{
            position: "absolute",
            top: 20,
            left: circleSize / 2,
            width: lineWidth,
            height: 4,
            backgroundColor: "#16A34A",
          }}
        />

        {/* Steps */}
        <View className="flex-row justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <View key={index} className="items-center">
                <View
                  style={{
                    height: circleSize,
                    width: circleSize,
                    borderRadius: circleSize / 2,
                    backgroundColor:
                      isCompleted || isActive
                        ? "#16A34A"
                        : "#D1D5DB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isCompleted ? (
                    <Ionicons name="checkmark" size={18} color="white" />
                  ) : (
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {index + 1}
                    </Text>
                  )}
                </View>

                <Text className="text-xs text-center mt-2 w-20">
                  {step}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between mt-10">
        <TouchableOpacity
          onPress={prevStep}
          className="bg-gray-400 px-6 py-3 rounded-xl"
        >
          <Text className="text-white font-bold">Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={nextStep}
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          <Text className="text-white font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
