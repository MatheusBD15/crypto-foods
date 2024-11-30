export type RestaurantReview = {
  title: string;
  body: string;
  reviewedPlace: string;
  rating: number;
};

export const myReviews: RestaurantReview[] = [
  {
    title: "Gostei do local",
    body: "Comida muito boa e atendimento bom. Fui atendido pelo Fula de Tal.",
    reviewedPlace: "Sukiyabashi Jiro",
    rating: 4,
  },
  {
    title: "Atendimento ruim",
    body: "Fui muito mal atendido pelo garçom Fulano de Tal.",
    reviewedPlace: "Cédric Grolet",
    rating: 3,
  },
  {
    title: "Perfeito",
    body: "Comida perfeita, curti demais, recomendo muito o sushi de camarão.",
    reviewedPlace: "Nusr-Et Steakhouse",
    rating: 5,
  },
  {
    title: "Maravilhoso",
    body: "Sushi muito bom e fresco. Ambientação e vistas maravilhosas.",
    reviewedPlace: "Crypto Sushi",
    rating: 4.5,
  },
];
