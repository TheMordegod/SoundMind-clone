//intersection Observers
export function intersectionObserverAnim() {
    const verticalContainer = document.querySelectorAll('.iov')
    const horizontalContainer = document.querySelectorAll('.ioh')

    //observer for vertical type of animations
    const verticalObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('iov-animate', entry.isIntersecting);
        })
    }, { threshold: 0.25, rootMargin: '99999px 0px 0px 0px' })

    //observer for horizontal type of animations
    const horizontalObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('ioh-animate', entry.isIntersecting);
        });
    }, { threshold: 0.1, rootMargin: '99999px 0px 0px 0px' })

    verticalContainer.forEach(entry => {
        verticalObserver.observe(entry)
    })

    horizontalContainer.forEach(entry => {
        horizontalObserver.observe(entry)
    })
}