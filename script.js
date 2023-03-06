const handleClick = () => {
    const fakeImage = document.getElementById("fakeImage")
    fakeImage.style.display = "block"
    fakeImage.requestFullscreen()

    fakeImage.addEventListener("click", () => {
        const audio = document.getElementById("audio")
        audio.play()
    })
}


