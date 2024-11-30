import { Pressable } from "react-native";
import { Box } from "../ui/box";
import { Image } from "../ui/image";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { Icon, StarIcon } from "../ui/icon";
import { Restaurant } from "@/constants/restaurants";
import { Link } from "expo-router";

export type RestaurantCardProps = {
  restaurant: Restaurant;
  index: number;
  length: number;
};

export default function RestaurantCard({
  restaurant,
  index,
  length,
}: RestaurantCardProps) {
  return (
    <Box
      key={index}
      className={`flex-1 lg:my-0 mb-6 ${index === 0 ? "lg:ml-0" : "lg:ml-2"} ${
        index === length - 1 ? "lg:mr-0" : "lg:mr-2"
      }`}
    >
      <Link href={`/restaurants/${restaurant.id}`} asChild>
        <Pressable className="w-full">
          <Box className="overflow-hidden rounded-md h-40">
            <Image
              source={restaurant.image}
              className={`h-40 w-full`}
              alt="Explorar"
            />
          </Box>
        </Pressable>
      </Link>

      <HStack className="justify-between py-2 items-start">
        <VStack space="sm">
          <Text className="font-semibold text-typography-900">
            {restaurant.name}
          </Text>
          <Text size="sm" className="text-typography-500">
            {restaurant.address}
          </Text>
        </VStack>
        <HStack className="items-center flex-start">
          <Icon
            as={StarIcon}
            size="2xs"
            className="stroke-typography-900 fill-typography-900"
          />
          <Text size="sm" className="pl-1 text-typography-900">
            {restaurant.rating}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}
