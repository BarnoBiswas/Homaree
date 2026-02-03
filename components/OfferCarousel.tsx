import { FlatList, Image, View } from "react-native";

const offers = [
  {
  
    image:
      "https://cdn.create.vista.com/downloads/04833f06-10d8-449e-a47e-848a97cd2b97_640.jpeg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVKEC02jeZJUpD7IEowA0svO4Rmlz71NFcw&s",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/burger-discount-fast-food-sale-flyer-design-vector-template-size-brochure-layout-concept-127576021.jpg",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/special-offer-hamburger-fastfood-restaurant-design-fast-food-voucher-gift-card-with-price-off-template-flyer-leaflet-with-sale-discount-american-burgers-flat-vector-illustration_633472-7635.jpg",
  },
    {
    image:
      "https://www.shutterstock.com/image-vector/sushi-restaurant-poster-template-social-260nw-2505829631.jpg",
  },
];

export default function OfferCarousel() {
  return (
    <View className="mt-2">
      <FlatList
        data={offers}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mr-3 h-48 w-40 overflow-hidden rounded-2xl">
            {/* Image */}
            <Image
              source={{ uri: item.image }}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}
