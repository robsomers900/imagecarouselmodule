import "./styles.css"
import { Carousel, initCarousel } from "./carousel"

const carouselObject = [
    { image: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog", alt: "cute dog" },
    { image: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog", alt: "cute cat" },
    { image: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog", alt: "cute bunny" }
];

initCarousel(carouselObject)