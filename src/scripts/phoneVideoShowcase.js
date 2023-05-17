export function phoneVideoShowcase() {
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
