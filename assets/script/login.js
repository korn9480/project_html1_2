// -----------------------------------------------หน้า login-------------------------------------------
var data_user = {
    "man": 123456,
    "kon":"64021700",
    "ken":121212
}
// undefined

console.log(data_user["ddd"])
function cheak(){
    let password = document.getElementById("password")
    let Resulf = document.getElementById('Cheak')
    let user = document.getElementById("user")
    let name = data_user[user.value]
    if (name != password.value ){
        console.log(name)
        if (name==undefined){
            user.value=""
            user.style.border="2px solid red"
        }
        Resulf.style.display="block"
        password.value=""
        password.style.border="2px solid red"
        return false
    }
    else if (data_user[user] == password.value) {
        alert("yes")
        // let form = document.getElementById("form")
        // form.setAttribute("action","addFood.html")
        return true
    }
}
// ------------------------------------------------------หน้า home--------------------------------------
var img_background = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"]
var indext = 0
function changBackground() {
    let background = img_background[indext]
    console.log(background)
    let body= document.getElementById("body")
    body.style.backgroundImage="url(../assets/img/home/"+background+".jpg)"
    indext++
    if (indext>= img_background.length){
        indext=0
    }
    
}