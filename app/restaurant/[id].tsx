import RestaurantCard from "@/components/RestaurantCard";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { AddIcon, CloseIcon, Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { VStack } from "@/components/ui/vstack";
import { baseRestaurants } from "@/constants/restaurants";
import { useLocalSearchParams } from "expo-router";
import { ChevronDownIcon } from "lucide-react-native";
import { useState } from "react";

export default function RestaurantPage() {
  const { id } = useLocalSearchParams();
  const restaurant = baseRestaurants.find((r) => r.id === Number(id));
  const [showModal, setShowModal] = useState(false);

  if (!restaurant)
    return (
      <Box>
        <Text>Restaurante não existe</Text>
      </Box>
    );

  return (
    <Box className="p-8">
      <RestaurantCard restaurant={restaurant} length={0} index={0} />
      <VStack>
        <Heading className="mb-6">Análises</Heading>
        {restaurant.reviews.map((review) => (
          <Card size="sm" variant="outline" className="mb-4">
            <HStack space="lg">
              <Avatar size="md">
                <AvatarFallbackText>{review.reviewerName}</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: review.avatar,
                  }}
                />
                <AvatarBadge />
              </Avatar>
              <VStack>
                <Heading>{review.title}</Heading>
                <Text size="sm" className="text-typography-500">
                  {review.reviewerName}
                </Text>
                <Text>{review.body}</Text>
              </VStack>
            </HStack>
          </Card>
        ))}
      </VStack>
      <Fab
        size="md"
        placement="bottom right"
        onPress={() => setShowModal(true)}
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Escrever Análise</FabLabel>
      </Fab>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Escrever análise
            </Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack space="md">
              <Input>
                <InputField placeholder="Título..." />
              </Input>
              <Textarea size="md" className="w-full">
                <TextareaInput placeholder="Escreva sua análise aqui..." />
              </Textarea>
              <Select>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Nota..." />
                  <SelectIcon className="mr-3" as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="1" value="1" />
                    <SelectItem label="2" value="2" />
                    <SelectItem label="3" value="3" />
                    <SelectItem label="4" value="4" />
                    <SelectItem label="5" value="5" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Confirmar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
