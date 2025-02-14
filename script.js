const buttons = document.querySelectorAll(".button");
const giphyContainer = document.querySelector(".giphyGallery");
const giphy = document.querySelectorAll(".image");

let a = 0;
let currentSlide = 1;

const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/trending?api_key="+api_key+"&limit=100&rating=G";

buttons[0].style.visibility = "hidden";

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("Success!", res);
        giphy.forEach((gif) => {
            gif.style = "null;";
            gif.style = "background-image: url('" + res.data[a].images.downsized_large.url + "');";
            console.log(res.data[a].images.downsized_large.url)
        })
        giphySwitchMinus = () => {
            if (a === 0) {
                a = 1
            }
            a = a - 1;
            giphy.forEach(gif => {
                gif.style = "null;";
                gif.style = "background-image: url('" + res.data[a].images.downsized_large.url + "');";
            })
            console.log(res.data[a].images.downsized_large.url)
            if (currentSlide === 1) {
                giphyContainer.style = 'transform: translateX(0);';
                currentSlide = 3
            } else {
                giphyContainer.style = 'transform: translateX(0);';
                currentSlide = currentSlide - 1
            }
            setTimeout(transitionSlide = () => {
                giphyContainer.style = 'transition: none; transform: translateX(-100vw);'
            }, 300);
        }
        giphySwitchPlus = () => {
            if (a < -1) {
                a = -1
            } else if (a === 99) {
                return
            }
            a = a + 1;
            giphy.forEach(gif => {
                gif.style = "null;";
                gif.style = "background-image: url('" + res.data[a].images.downsized_large.url + "');";
            })
            console.log(res.data[a].images.downsized_large.url)
            if (currentSlide === 3) {
                giphyContainer.style = 'transform: translateX(-200vw);';
                currentSlide = 1
            } else {
                giphyContainer.style = 'transform: translateX(-200vw);';
                currentSlide = currentSlide + 1
            }
            setTimeout(transitionSlide = () => {
                giphyContainer.style = 'transition: none; transform: translateX(-100vw);'
            }, 300);
            if (buttons[0].style.visibility == "hidden") { 
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "visible"
            } else {
                return buttons[0].style.visibility
            }
        }
        console.log(res.data[0].images.downsized_large.url);

        buttons[0].addEventListener("click", function(e) {
            e.preventDefault();
            if (a == 1) {
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "hidden";
                giphySwitchMinus();
                console.log(a)
            } else {
                giphySwitchMinus()
                console.log(a)
            }
        })

        buttons[1].addEventListener("click", function(e) {
            e.preventDefault();
            giphySwitchPlus();
            console.log(a)
        })
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })