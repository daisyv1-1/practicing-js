let countEl = document.getElementById("count-el")
let saveEl =  document.getElementById("save-el")
let clearEl = document.getElementById("count-el")
let count = 0
function increment(){
    count ++
    countEl.innerText=count
}
function save(){
    let countStr=count+", "
    saveEl.textContent+=countStr
    console.log(count)
}
