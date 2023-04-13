export class MobileOverlay {
    overlayWindow = document.querySelector('.overlay')
    closeButtonLeft = document.querySelector('.overlay__close-button--left')
    closeButtonRight = document.querySelector('.overlay__close-button--right')
    aboutSection = document.querySelector('.overlay__about-dropdown')

    toggleOverlay() {
        if (this.overlayWindow.classList.contains('overlay--active')) {
            this.overlayWindow.classList.remove('overlay--active')
            this.closeButtonLeft.classList.remove('build')
            this.closeButtonRight.classList.remove('build')
            return
        }

        this.overlayWindow.classList.add('overlay--active')
        this.closeButtonLeft.classList.add('build')
        this.closeButtonRight.classList.add('build')
    }

    toggleAbout() {
        if (this.aboutSection.classList.contains('active')) {
            this.aboutSection.classList.remove('active')
            return
        }
        this.aboutSection.classList.add('active')
    }
}