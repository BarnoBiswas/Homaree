import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

type MenuItem = { key: string; label: string; icon: string };

export default function BottomMenu({
  items: itemsProp,
  activeKey,
  onChange,
}: {
  items?: MenuItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
}) {
  const defaultItems: MenuItem[] = [
    { key: "food", label: "Food", icon: "fork.knife" },
    { key: "offer", label: "Offer", icon: "tag.fill" },
    { key: "search", label: "Search", icon: "magnifyingglass" },
    { key: "carts", label: "Carts", icon: "cart.fill" },
    { key: "account", label: "Account", icon: "person.fill" },
  ];

  const items = itemsProp ?? defaultItems;
  const [innerActive, setInnerActive] = useState<string>(
    activeKey ?? items[0].key,
  );
  const current = activeKey ?? innerActive;

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white  border-t border-gray-200">
      <View className="flex-row px-6 py-3">
        {items.map((item) => {
          const isActive = current === item.key;
          const color = isActive ? "#3f7d5b" : "#9CA3AF";
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                if (onChange) onChange(item.key);
                else setInnerActive(item.key);
              }}
              className="flex-1 items-center"
              accessibilityRole="button"
            >
              <IconSymbol name={item.icon as any} size={24} color={color} />
              <Text className="text-xs mt-1" style={{ color }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
