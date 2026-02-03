import { FlatList, Image, Text, View } from "react-native";

const kitchens = [
  {
    id: "1",
    name: "Burger Hub",
    estimated_time: "40-70 min",
    image:
      "https://img.freepik.com/premium-vector/modern-restaurant-logo-design-template_872774-98.jpg",
  },
  {
    id: "2",
    name: "Pizza Palace",
    estimated_time: "30-45 min",
    image:
      "https://images.freecreatives.com/wp-content/uploads/2016/03/Fast-Food-Restaurant-Logo-Design.jpg",
  },
  {
    id: "3",
    name: "Chicken Delight",
    estimated_time: "20-30 min",
    image:
      "https://marketplace.canva.com/EAFzZd9frfk/2/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo--ZRvZSmoCi4.jpg",
  },
  {
    id: "4",
    name: "Cool Drinks Corner",
    estimated_time: "25-35 min",
    image:
      "https://i.pinimg.com/1200x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg",
  },
  {
    id: "5",
    name: "Royal Biriyani House",
    estimated_time: "50-70 min",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo%2Ccooking-logo%2Crestaurant-logo-design-template-8048c6b88c3702da6e0804bc38ce7f33_screen.jpg",
  },
  {
    id: "6",
    name: "Beef Kabab Express",
    estimated_time: "30-45 min",
    image:
      "https://marketplace.canva.com/EAGuwPNF_64/1/0/1600w/canva-yellow-and-brown-illustrated-kitchen-food-logo-vpHGqUvB8rk.jpg",
  },
  {
    id: "7",
    name: "Sweet Dessert Bar",
    estimated_time: "40-70 min",
    image:
      "https://thumbs.dreamstime.com/b/restaurant-logo-vector-art-illustration-360064070.jpg",
  },
  {
    id: "8",
    name: "Chinese Wok",
    estimated_time: "60-65 min",
    image:
      "https://marketplace.canva.com/EAGZjfIfCdw/2/0/1600w/canva-yellow-black-minimalist-illustration-kitchen-and-restaurant-food-catering-logo-sMc_kUdyT1g.jpg",
  },
];

export default function TopKitchenCarousel() {
  return (
    <View className="mt-6">
      {/* Section Title */}
      <Text className="text-lg font-bold text-gray-900 px-4 mb-3">
        Top Kitchens
      </Text>

      <FlatList
        data={kitchens}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mr-4 items-center">
            {/* Kitchen Image */}
            <View className="h-32 w-32 overflow-hidden rounded-xl p-2 bg-gray-200">
              <Image
                source={{ uri: item.image }}
                className="h-full w-full rounded-xl"
                resizeMode="cover"
              />
            </View>

            {/* Kitchen Name */}
            <Text
              className="mt-2 text-sm font-semibold text-gray-800 text-center"
              numberOfLines={1}
            >
              {item.name}
            </Text>

            {/* Estimated Time */}
            <Text className="text-xs text-gray-500">{item.estimated_time}</Text>
          </View>
        )}
      />
    </View>
  );
}
