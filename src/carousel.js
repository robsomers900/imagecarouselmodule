import "./styles.css"

class Carousel{
    constructor(images){
        this.images = images
    }
}

function initCarousel(carouselObject){
    const mainBody = document.querySelector(".main-container")
    const carouselHTML = 
        `<div class="arrow-container">
            <button class="image-carousel-left-arrow-button">
                <
            </button>
        </div>
        <div class="carousel-container">
            <div class="image-container">
                <img class="carousel-image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw0NE0sF4H6gbPxSrS-mGZA8&ust=1731166268742000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDT0PuGzYkDFQAAAAAdAAAAABAE" alt="cute dog">
            </div>
            <div class="navdot-section-container">
                <div class="navdot-container">
                    <button class="navdot image-visible">O</button>
                </div>
            </div>
        </div>
        <div class="arrow-container">
            <button class="image-carousel-right-arrow-button">
                >
            </button>
        </div>`
    mainBody.innerHTML = carouselHTML
    const navdotSectionContainer = document.querySelector(".navdot-section-container")
    let i = 1
    while (i < carouselObject.length){
        const navdot = document.createElement("div")
        navdot.classList.add("navdot-container")
        navdot.innerHTML = `<button class="navdot">O</button>`
        navdotSectionContainer.appendChild(navdot)
        i ++;   
    }
    let currentImage = 0
    const navdots = document.querySelectorAll(".navdot")
    navdots.forEach((navdot, index) =>{
            navdot.addEventListener("click",() =>{
                const highlightedNavdot = document.querySelector(".image-visible")
                highlightedNavdot.classList.remove("image-visible")
                navdot.classList.add("image-visible")
                const carouselImage = document.querySelector(".carousel-image")
                carouselImage.src = carouselObject[index]["image"]
                carouselImage.alt = carouselObject[index]["alt"]
                currentImage = index
            })
        }
    )
    const leftArrow = document.querySelector(".image-carousel-left-arrow-button")
    const rightArrow = document.querySelector(".image-carousel-right-arrow-button")
    leftArrow.addEventListener("click", () => {
        if (currentImage > 0){
            currentImage --
        }
        else{
            currentImage = carouselObject.length - 1
        }
        const highlightedNavdot = document.querySelector(".image-visible")
        highlightedNavdot.classList.remove("image-visible")
        const navdot = navdots[currentImage]
        navdot.classList.add("image-visible")
        const carouselImage = document.querySelector(".carousel-image")
        carouselImage.src = carouselObject[currentImage]["image"]
        carouselImage.alt = carouselObject[currentImage]["alt"]
    })
    rightArrow.addEventListener("click", () => {
        if (currentImage < carouselObject.length - 1){
            currentImage ++
        }
        else{
            currentImage = 0
        }
        const highlightedNavdot = document.querySelector(".image-visible")
        highlightedNavdot.classList.remove("image-visible")
        const navdot = navdots[currentImage]
        navdot.classList.add("image-visible")
        const carouselImage = document.querySelector(".carousel-image")
        carouselImage.src = carouselObject[currentImage]["image"]
        carouselImage.alt = carouselObject[currentImage]["alt"]
    })
}

export{Carousel, initCarousel}