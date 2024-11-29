import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon, StarIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";

const startingRestaurants = [
  {
    name: "Sushi Crypto",
    image: require("@/assets/images/restaurant1.jpg"),
    address: "Rua Lauro Linhares, n1200, Florianópolis, SC",
    rating: 4.9,
  },
  {
    name: "Crypto Poke",
    image: require("@/assets/images/restaurant2.jpg"),
    address: "Avenida Mauro Ramos, n462, Florianópolis, SC",
    rating: 4.4,
  },
  {
    name: "BBQ Crypto",
    image: require("@/assets/images/restaurant3.jpg"),
    address: "Avenida da Saudade, n800, Florianópolis, SC",
    rating: 4.8,
  },
];

export default function Index() {
  const restaurants = startingRestaurants;

  return (
    <Box className="p-8">
      <Box>
        <Input variant="rounded" size="md">
          <InputField placeholder="Pesquisar..." />
        </Input>
      </Box>
      <Box>
        <VStack space="lg" className="mt-8 justify-between lg:flex-row">
          {restaurants.map((restaurant, index) => (
            <Box
              key={index}
              className={`flex-1 lg:my-0 ${
                index === 0 ? "lg:ml-0" : "lg:ml-2"
              } ${index === restaurants.length - 1 ? "lg:mr-0" : "lg:mr-2"}`}
            >
              <Pressable className="w-full">
                {(props: any) => {
                  return (
                    <>
                      <Box className="overflow-hidden rounded-md h-40">
                        <Image
                          source={restaurant.image.uri}
                          className={`h-40 w-full`}
                          alt="Explorar"
                        />
                      </Box>
                    </>
                  );
                }}
              </Pressable>

              <HStack className="justify-between py-2 items-start">
                <VStack space="sm" className="flex-1">
                  <Text className="font-semibold text-typography-900">
                    {restaurant.name}
                  </Text>
                  <Text size="sm" className="text-typography-500">
                    {restaurant.address}
                  </Text>
                </VStack>
                <Tooltip
                  trigger={(triggerProps: any) => {
                    return (
                      <Pressable {...triggerProps}>
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
                      </Pressable>
                    );
                  }}
                >
                  <TooltipContent>
                    <TooltipText className="text-white px-2 py-1">
                      Ratings
                    </TooltipText>
                  </TooltipContent>
                </Tooltip>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
