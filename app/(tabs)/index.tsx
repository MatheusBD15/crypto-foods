import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
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
              key={index}
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
