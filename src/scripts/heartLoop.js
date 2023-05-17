export function heartLoop() {
    const heartImages = document.querySelectorAll('.apresentation__header-heart')
    heartImages[0].style.opacity = '1'
    let currentImageIndex = 1

    setInterval(() => {
        if (heartImages[currentImageIndex - 1]) {
            heartImages[currentImageIndex - 1].style.opacity = '0'
        }

        if (currentImageIndex > 2) {
            currentImageIndex = 0
        }

        heartImages[currentImageIndex].style.opacity = '1'
        currentImageIndex++
    }, 2000)
}