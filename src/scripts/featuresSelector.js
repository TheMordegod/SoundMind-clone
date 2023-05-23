//Feature Container
const featureSection = document.querySelectorAll('.robust-features__container')
//wide selector version
const navElements = document.querySelectorAll('.robust-features__list__item')
const navBlueBlocks = document.querySelectorAll('.robust-features__list__item__blue-block')
//mobile selector version
const selectedItem = document.querySelector('.robust-features__mobile__selected')
const featuresList = document.querySelector('.robust-features__mobile__list')
const featureItem = document.querySelectorAll('.robust-features__mobile__list__item')

//widescreen selector
export function robustFeaturesSelector() {
    navElements.forEach((element, index) => {
        element.addEventListener('click', (element) => {
            removeAllActiveClasses()

            //replace the text with selected
            const selectedText = element.target.textContent
            selectedItem.textContent = selectedText

            //activate elements
            featureItem[index].classList.add('robust-features__mobile__list__item--active')
            navBlueBlocks[index].classList.add('blue-active')
            featureSection[index].classList.add('robust-features__container--active')
        })
    })
}

//Mobile selector
export function robustFeaturesSelectorMobile() {
    //toggle dropdown
    selectedItem.addEventListener('click', () => {
        featuresList.classList.toggle('robust-features__mobile__list--open')
    })

    featureItem.forEach((listItem, index) => {
        listItem.addEventListener('click', (element) => {
            removeAllActiveClasses()
            //replace the text with selected
            const selectedText = element.target.textContent
            selectedItem.textContent = selectedText

            //activate elements
            element.target.classList.add('robust-features__mobile__list__item--active')
            featureSection[index].classList.add('robust-features__container--active')
            navBlueBlocks[index].classList.add('blue-active')
            featureSection[index].classList.add('robust-features__container--active')
        })
    })
}

function removeAllActiveClasses() {
    //closes the dropdown every time a option is chosen
    featuresList.classList.toggle('robust-features__mobile__list--open')

    document.querySelectorAll('.robust-features__container--active').forEach(node => {
        node.classList.remove('robust-features__container--active')
    })

    document.querySelectorAll('.blue-active').forEach(node => {
        node.classList.remove('blue-active')
    })

    document.querySelectorAll('.robust-features__mobile__list__item--active').forEach(listItem => {
        listItem.classList.remove('robust-features__mobile__list__item--active')
    })

}