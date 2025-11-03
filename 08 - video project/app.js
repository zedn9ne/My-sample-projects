const button = document.querySelector('.btns');
const switchBtn = document.querySelector('.switch');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');


button.addEventListener('click', function () {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add('slide')
        video.pause()
    } else {
        switchBtn.classList.remove('slide')
        video.play()
    }
});

window.addEventListener('load', function () {
    preloader.classList.add('preloader_hide')
})