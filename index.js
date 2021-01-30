const Images = document.getElementsByClassName("Images")
const Foods = document.getElementsByClassName("divFood")
//Loading Animation
setTimeout(() => {
    document.getElementsByClassName("wrapper")[0].style.display = "block"
    document.getElementsByClassName("loading")[0].style.display = "none"
}, 1000);

//Hover Main
for (let i = 0; i < Foods.length; i++){
    Images[i].style.opacity = '0'
    Foods[i].addEventListener("mouseover", () => {
        Images[i].style.opacity = '1'
        Images[i].style.marginLeft = "0%"
    })
    Foods[i].addEventListener("mouseout", () => {
        Images[i].style.opacity = '0'
        Images[i].style.marginLeft = "-60%"
    })
}
Foods[0].addEventListener("click", () => {
    location.replace("./Israel/israel.html")
})
Foods[1].addEventListener("click", () => {
    location.replace("./Russian/russian.html")
})
Foods[2].addEventListener("click", () => {
    location.replace("./Chinese/chinese.html")
})