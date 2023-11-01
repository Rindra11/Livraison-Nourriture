import { Image } from 'react-native-animatable';

export const filterCategorie = [
                                { name: "Poulet", Image: require('../assets/images/image1.jpg'), id: "0" },
                                { name: "Pate", Image: require('../assets/images/image2.jpg'), id: "1" },
                                { name: "Burger", Image: require('../assets/images/burger.jpg'), id: "2" },
                                { name: "Crepe salé", Image: require('../assets/images/crepe.jpg'), id: "3" },
                                { name: "Potatos", Image: require('../assets/images/potatos.jpg'), id: "4" },
                                { name: "Tacos", Image: require('../assets/images/tacos.jpg'), id: "5" },
                                { name: "Burger", Image: require('../assets/images/burger.jpg'), id: "6" }
];


export const restaurantsData = [
  {
    restaurantName: "Zomatel",
    farAway: "21.2",
    businessAddress: "Anjoma, Fianarantsoa",
    images: "../assets/images/burger.jpg",
    collectTimes: 5,
    foodType: "Burgers,...",
    productData: [
      { name: "Misaontsika", price: 20000, image: "../assets/images/burger.jpg" },
      { name: "Pates Matsiro", price: 10000, image: "../assets/images/image1.jpg" }
    ],
    id: 0
  },

   {
    restaurantName: "Zomatel",
    farAway: "21.2",
    businessAddress: "Anjoma, Fianarantsoa",
    images: "../assets/images/burger.jpg",
    collectTimes: 5,
    foodType: "Burgers,...",
    productData: [
      { name: "Misaontsika", price: 20000, image: "../assets/images/burger.jpg" },
      { name: "Pates Matsiro", price: 10000, image: "../assets/images/image1.jpg" }
    ],
    id: 1
  },

   {
    restaurantName: "Zomatel",
    farAway: "21.2",
    businessAddress: "Anjoma, Fianarantsoa",
    images: "../assets/images/burger.jpg",
    collectTimes: 5,
    foodType: "Burgers,...",
    productData: [
      { name: "Misaontsika", price: 20000, image: "../assets/images/burger.jpg" },
      { name: "Pates Matsiro", price: 10000, image: "../assets/images/image1.jpg" }
    ],
    id: 2
  },
];
