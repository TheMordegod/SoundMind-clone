//Robust section selector
export function robustFeaturesSelector() {
    const navElements = document.querySelectorAll('.robust-features__list__item')
    const navBlueBlocks = document.querySelectorAll('.robust-features__list__item__blue-block')
    const featureSection = document.querySelectorAll('.robust-features__container')

    //adds event listener to every feature
    navElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            //removes all classes
            document.querySelectorAll('.robust-features__container--active').forEach(node => {
                node.classList.remove('robust-features__container--active')
            })

            document.querySelectorAll('.blue-active').forEach(node => {
                node.classList.remove('blue-active')
            })

            //add to user selected item
            navBlueBlocks[index].classList.add('blue-active')
            featureSection[index].classList.add('robust-features__container--active')
        })
    })
}
