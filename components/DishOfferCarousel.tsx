import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

/* -------------------- DEMO DATA -------------------- */
const dishes = [
  {
    id: "1",
    business_name: "Spicy Burger House",
    dish_name: "Double Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 4.5,
    price: 320,
    offer_price: 250,
    delivery_charge: 0,
  },
  {
    id: "2",
    business_name: "Pizza Paradise",
    dish_name: "Pepperoni Pizza Large",
    image:
      "https://redstaryeast.com/wp-content/uploads/2021/09/Fig-Deep-Dish-Pizza3_72dpi-8x12-1.jpg",
    rating: 4.2,
    price: 850,
    offer_price: null,
    delivery_charge: 60,
  },
  {
    id: "3",
    business_name: "Chicken Delight ",
    dish_name: "Crispy Fried Chicken",
    image:
      "https://images.unsplash.com/photo-1606756790138-261d2b21cd75",
    rating: 4.8,
    price: 420,
    offer_price: 360,
    delivery_charge: 0,
  },
   {
    id: "4",
    business_name: "Brooklyn restaurant mini-empire",
    dish_name: "Belle Cushing",
    image:
      "https://assets.bonappetit.com/photos/57ad3dc11b3340441497553d/16:9/w_2560%2Cc_limit/Reynard71.jpg",
    rating: 4.5,
    price: 320,
    offer_price: 250,
    delivery_charge: 0,
  },
  {
    id: "5",
    business_name: "The Urban Nosh",
    dish_name: "Dish & Den",
    image:
      "https://images.deliveryhero.io/image/fd-bd/LH/ww45-listing.jpg",
    rating: 4.1,
    price: 750,
    offer_price: null,
    delivery_charge: 30,
  },
  {
    id: "6",
    business_name: "Spice Route Kitchen",
    dish_name: "The Bear Spaghetti",
    image:
      "https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/the-bear-spaghetti.webp",
    rating: 4.8,
    price: 1250,
    offer_price: 1099,
    delivery_charge: 0,
  },
];

/* -------------------- UTILS -------------------- */
const truncate = (text: string, max = 20) =>
  text.length > max ? text.slice(0, max) + "..." : text;

/* -------------------- COMPONENT -------------------- */
export default function DishOfferCarousel({
  title = "Offer Dishes",
}: {
  title?: string;
}) {
  return (
    <View className="mt-6">
      {/* ---------- Header ---------- */}
      <View className="flex-row items-center justify-between px-4 mb-3">
        <Text className="text-lg font-bold text-gray-900">
          {title}
        </Text>

        <Pressable className="h-9 w-9 rounded-full border border-gray-300 items-center justify-center">
          <Feather name="arrow-right" size={18} color="#111827" />
        </Pressable>
      </View>

      {/* ---------- Dish List ---------- */}
      <FlatList
        data={dishes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable className="mr-4 w-48 rounded-2xl bg-white overflow-hidden shadow-sm"
          onPress={() =>
                        router.push({
                          pathname: "/(entity)/dish/[id]",
                          params: { id: item.id },
                        })
                      }
          >
            {/* Dish Image */}
            <View className="h-40 w-full">
              <Image
                source={{ uri: item.image }}
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>

            {/* Content */}
            <View className="p-3">
              {/* Business name + Rating */}
              <View className="flex-row items-center justify-between">
                <Text className="text-xs text-gray-500">
                  {truncate(item.business_name)}
                </Text>

                <View className="flex-row items-center">
                  <Feather name="star" size={13} color="#facc15" />
                  <Text className="ml-1 text-xs text-gray-700">
                    {item.rating.toFixed(1)}
                  </Text>
                </View>
              </View>

              {/* Dish Name */}
              <Text
                numberOfLines={1}
                className="mt-1 text-sm font-semibold text-gray-900"
              >
                {item.dish_name}
              </Text>

              {/* Price */}
              <View className="flex-row items-center mt-1">
                {item.offer_price ? (
                  <>
                    <Text className="text-xs text-gray-400 line-through mr-2">
                      ৳{item.price}
                    </Text>
                    <Text className="text-md font-bold text-red-500">
                      ৳{item.offer_price}
                    </Text>
                  </>
                ) : (
                  <Text className="text-sm font-bold text-gray-900">
                    ৳{item.price}
                  </Text>
                )}
              </View>


              {/* Delivery Info */}
              <View className="mt-2 flex-row items-center">
                <MaterialIcons
                  name="delivery-dining"
                  size={14}
                  color="#6b7280" // gray-500
                />

                {item.delivery_charge === 0 ? (
                  <Text className="ml-1 text-xs font-semibold text-green-600">
                    Free
                  </Text>
                ) : (
                  <Text className="ml-1 text-xs text-gray-600">
                    ৳{item.delivery_charge}
                  </Text>
                )}
              </View>


            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
