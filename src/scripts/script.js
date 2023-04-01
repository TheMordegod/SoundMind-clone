function toggleOverlay() {
    //const button = document.querySelectorAll('hamburger__button')
    const overlayWindow = document.querySelector('.overlay')
    const closeButtonLeft = document.querySelector('.hamburger__close-button--left')
    const closeButtonRight = document.querySelector('.hamburger__close-button--right')

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