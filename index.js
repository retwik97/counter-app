let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save-el")

let count =0
function increment() {
    count+=1
    countEl.innerText=count
}
function save(){
    let prev= count + "--"
    saveEl.innerText += prev
    console.log(count)
}
function zero(){
    count=0
    countEl.innerText=count
}


