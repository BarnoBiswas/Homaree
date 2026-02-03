import { FlatList, Image, Text, View } from "react-native";

const categories = [
    {
        id: "1",
        name: "Burger",
        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "2",
        name: "Pizza",
        image:
            "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "3",
        name: "Chicken",
        image:
            "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "4",
        name: "Drinks",
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "5",
        name: "Biriyani ",
        image: "https://www.shutterstock.com/image-photo/delicate-photography-indian-chicken-biriyani-600nw-2681696327.jpg",
    },
     {
        id: "6",
        name: "Beef Kabab",
        image: "https://salsabd.com/wp-content/uploads/2023/06/beef-boti-kabab-1.jpg",
    },
     {
        id: "7",
        name: "Dessert",
        image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-01/Dessert%20Menu%20Ideas%20for%20Restaurant.jpg",
    },
      {
        id: "8",
        name: "Chinese",
        image: "https://www.chingssecret.com/public/uploads/blogs/1582286855_1_bfi_im.png",
    },
];

export default function CategoryCarousel() {
    return (
        <View className="mt-6">
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="mr-4 items-center">
                        {/* Image */}
                        <View className="h-20 w-20 overflow-hidden rounded-2xl">
                            <Image
                                source={{ uri: item.image }}
                                className="h-full w-full"
                                resizeMode="cover"
                            />
                        </View>

                        {/* Category Name */}
                        <Text className="mt-2 text-sm font-medium text-gray-800">
                            {item.name}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}
