/* Add your script here */
function changeBGColor(event){
    //console.log(event.target.innerText)
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = event.target.innerText.toLowerCase()
}