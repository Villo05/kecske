let kepElem = document.querySelectorAll("img");
console.log(kepElem);
let csonakElem = document.querySelectorAll("#csonak");

const tomb = [];



for (let index = 0; index < kepElem.length; index++) {



    kepElem[index].addEventListener("click", function (event) {
        tomb.push(event.target.src);
        console.log(tomb);


        event.target.classList.add("eltunt")
        csonakElem[0].innerHTML += `<img src="${event.target.src}" alt="kecske">`


    })

    kepElem[index].addEventListener("mouseover", function (event) {
        event.target.classList.add("keret");
    })
    kepElem[index].addEventListener("mouseout", function (event) {
        event.target.classList.remove("keret");
    })

}
