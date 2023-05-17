import { ElementToggler } from './toggleElement.js'

export function mobileOverlay() {
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
}