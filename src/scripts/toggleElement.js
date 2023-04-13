export class ElementToggler {
    constructor(toggleableElement) {
        this.toggleableElement = toggleableElement
    }

    toggleElement = (element) => {
        element = document.querySelector(`.${element}`)
        element.classList.toggle(this.toggleableElement)
    }
}