import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon, StarIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { myReviews } from "@/constants/reviews";

export default function MyReviews() {
  const reviews = myReviews;
  return (
    <Box className="p-8">
      <VStack>
        <Heading className="mb-6">Minhas Análises</Heading>
        {reviews.map((review) => (
          <Card size="sm" variant="outline" className="mb-4">
            <HStack space="lg" className="w-full">
              <VStack>
                <HStack className="justify-between w-full">
                  <Heading>{review.title}</Heading>
                  <HStack className="items-center flex-start" space="sm">
                    <Text size="sm" className="pl-1 text-typography-900">
                      {review.rating}
                    </Text>
                    <Icon
                      as={StarIcon}
                      size="2xs"
                      className="stroke-typography-900 fill-typography-900"
                    />
                  </HStack>
                </HStack>
                <Text size="sm" className="text-typography-500">
                  {review.reviewedPlace}
                </Text>
                <Text>{review.body}</Text>
              </VStack>
            </HStack>
          </Card>
        ))}
      </VStack>
    </Box>
  );
}
