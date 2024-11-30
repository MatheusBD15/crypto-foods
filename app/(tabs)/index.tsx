import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon, StarIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { baseRestaurants } from "@/constants/restaurants";
import RestaurantCard from "@/components/RestaurantCard";

const restaurants = baseRestaurants;

export default function Index() {
  return (
    <Box className="p-8">
      <Box>
        <Input variant="rounded" size="md">
          <InputField placeholder="Pesquisar..." />
        </Input>
      </Box>
      <Box>
        <VStack space="xl" className="mt-8 justify-between lg:flex-row">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              restaurant={restaurant}
              index={index}
              length={restaurants.length}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
