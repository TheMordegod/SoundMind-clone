import { ElementToggler } from './toggleElement.js'

/*Overlay Functions*/
const openOverlay = new ElementToggler('overlay--active')
const closeOverlayButtonAnimation = new ElementToggler('build')
const aboutOverlay = new ElementToggler('overlay__about-dropdown--active')

document.querySelectorAll('.hamburger__button').forEach((button) => {
    button.addEventListener('click', () => {
        openOverlay.toggleElement('overlay')
        closeOverlayButtonAnimation.toggleElement('overlay__close-button--left')
        closeOverlayButtonAnimation.toggleElement('overlay__close-button--right')
    })
})

document.querySelector('.overlay__about-button').addEventListener('click', () => {
    aboutOverlay.toggleElement('overlay__about-dropdown')
})
/*End of Overlay Functions*/

function changeHeart() {
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

function showVideo() {
    const closeVideoBtn = document.querySelector('.phone-screen__close-button')
    const videoElement = document.querySelectorAll('.phone-screen__video')
    const songElementList = document.querySelectorAll('.phone-screen__song')
    const audioList = document.querySelectorAll('.audio')

    songElementList.forEach((song, soundIndex) => {
        song.addEventListener('click', () => {
            closeVideoBtn.classList.add('phone-screen__video--active')
            videoElement[soundIndex].classList.add('phone-screen__video--active')
            audioList[soundIndex].play()
            videoElement[soundIndex].play()
            closeVideoBtn.focus()
        })
    })

    closeVideoBtn.addEventListener('click', () => {
        closeVideoBtn.classList.remove('phone-screen__video--active')
        songElementList.forEach((song, soundIndex) => {
            videoElement[soundIndex].classList.remove('phone-screen__video--active')
            audioList[soundIndex].pause()
            videoElement[soundIndex].pause()
        })
    })
}


/*Load functions into page*/
showVideo()
changeHeart()

