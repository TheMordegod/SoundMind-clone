function toggleOverlay() {
    //const button = document.querySelectorAll('hamburger__button')
    const overlayWindow = document.querySelector('.overlay')

    if (overlayWindow.classList.contains('overlay--active')) {
        overlayWindow.classList.remove('overlay--active')
        return
    }

    return overlayWindow.classList.add('overlay--active')
}