function toggleOverlay() {
    const overlayWindow = document.querySelector('.overlay')
    const closeButtonLeft = document.querySelector('.overlay__close-button--left')
    const closeButtonRight = document.querySelector('.overlay__close-button--right')

    if (overlayWindow.classList.contains('overlay--active')) {
        overlayWindow.classList.remove('overlay--active')
        closeButtonLeft.classList.remove('build')
        closeButtonRight.classList.remove('build')
        return
    }

    overlayWindow.classList.add('overlay--active')
    closeButtonLeft.classList.add('build')
    closeButtonRight.classList.add('build')
}

function toggleAbout() {
    const aboutSection = document.querySelector('.overlay__about-dropdown')

    if (aboutSection.classList.contains('active')) {
        aboutSection.classList.remove('active')
        return
    }
    aboutSection.classList.add('active')
}

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
    const videoScreen = document.querySelector('.phone-screen__video')
    const songs = document.querySelectorAll('.phone-screen__song')
    const videoLinks = [
        'https://www.soundmind.app/wp-content/themes/soundmind/assets/video/alert-and-calm/alert-and-calm.mp4',
        'https://www.soundmind.app/wp-content/themes/soundmind/assets/video/balance/balance.mp4',
        'https://www.soundmind.app/wp-content/themes/soundmind/assets/video/brain-power/brain-power.mp4',
        'https://www.soundmind.app/wp-content/themes/soundmind/assets/video/deep-sleep/deep-sleep.mp4'
    ]

    songs.forEach((song, soundIndex) => {
        song.addEventListener('click', () => {
            closeVideoBtn.classList.add('phone-screen__video--active')
            closeVideoBtn.focus()
            videoScreen.classList.add('phone-screen__video--active')
            videoScreen.src = videoLinks[soundIndex]
            videoScreen.play()

        })
    })

    closeVideoBtn.addEventListener('click', () => {
        closeVideoBtn.classList.remove('phone-screen__video--active')
        videoScreen.classList.remove('phone-screen__video--active')
        videoScreen.pause()
    })
}


showVideo()
changeHeart()