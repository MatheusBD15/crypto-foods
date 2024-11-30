export type Restaurant = {
  name: string;
  image: any;
  address: string;
  rating: number;
  id: number;
  reviews: Review[];
};

export type Review = {
  title: string;
  body: string;
  reviewerName: string;
  rating: number;
  avatar: string;
};

export const baseRestaurants: Restaurant[] = [
  {
    name: "Sukiyabashi Jiro",
    image: require("@/assets/images/restaurant1.jpg"),
    address: "Japão, 〒104-0061 Tokyo, Chuo City, Ginza, 4",
    rating: 4.9,
    id: 1,
    reviews: [
      {
        title: "Gostei do local",
        body: "Comida muito boa e atendimento bom.",
        reviewerName: "Matheus Dambrowski",
        rating: 4,
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fpt%2Fsearch%3Fq%3Davatar&psig=AOvVaw3OyzM-SR0Sl7QUw4Z9FtGW&ust=1733076133536000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiM7-zRhIoDFQAAAAAdAAAAABAE",
      },
      {
        title: "Atendimento ruim",
        body: "Fui muito mal atendido pelo garçom Fulano de Tal.",
        reviewerName: "Ciclano da Silva",
        rating: 3,
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Perfeito",
        body: "Comida perfeita, curti demais, recomendo muito o sushi de camarão.",
        reviewerName: "Pedro Farias da Silva",
        rating: 5,
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fpt%2Fsearch%3Fq%3Davatar&psig=AOvVaw3OyzM-SR0Sl7QUw4Z9FtGW&ust=1733076133536000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiM7-zRhIoDFQAAAAAdAAAAABAE",
      },
    ],
  },
  {
    name: "Cédric Grolet",
    image: require("@/assets/images/restaurant2.jpg"),
    address: "35 Av. de l'Opéra, 75002 Paris, França",
    rating: 4.4,
    id: 2,
    reviews: [],
  },
  {
    name: "Nusr-Et Steakhouse",
    image: require("@/assets/images/restaurant3.jpg"),
    address: "60 W 53rd St, New York, NY 10019, Estados Unidos",
    rating: 4.8,
    id: 3,
    reviews: [],
  },
];
