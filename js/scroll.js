const download = document.getElementById("download")

window.addEventListener("scroll", () => {
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !localStorage['visited']) {
            download.click()
            localStorage['visited'] = true
        }
        const watch = ["#hard-click"]
        const restarters = ["hardClickRestart"]
        for (let i=0; i<watch.length; i++) {
            el = document.querySelector(watch[i])
        }
    }
})



let options = {
    root: null,
    threshold: 0
  }

const callback = (entries, observer) => {
    entries.forEach(item => {
        if (item.isIntersecting) {
            item.target.dataset.isIntersecting = 1
        }
        else {
            if (Boolean(item.target.dataset.isIntersecting) === true) {
                eval(item.target.querySelector("div").dataset.callback)()
                item.target.dataset.isIntersecting = 0
            }
        }
    })
}

if (IntersectionObserver !== undefined) {
    let observer = new IntersectionObserver(callback, options)
    document.querySelectorAll("[data-callback]").forEach(item => {
        observer.observe(item.parentElement)
    })
}
  
