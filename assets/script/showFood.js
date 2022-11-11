class Food{
    constructor(name,price,calories,details,type){
        this.name = name        //ชื่ออาหาร
        this.price= price       //ราคา
        this.calories=calories  //ประมาณเเคลเลอรี่
        this.details=details    //รายละเอียด
        this.type=type          //อาหารมื้อเช้า เที่ยง เย็น
    }
}
var food_dinner = [
    new Food("ก๋วยตี๋ยวลุยสวน",35,250,"โปรตีนจากเนื้อสัตว์ คาร์โบไฮเดครตจากเเป้งห่อ เกลือเเร่เเละวิตามินจากผัก","อาหารเช้า"),
    new Food("ยำสาหร่าย",25,150,"สำหรับใครไม่ชอบทานผักเมนูนี้ก็เป็นทางเลือกที่ดี","อาหารเช้า"),
    new Food("ต้มยำไก่น้ำใส",30,300,"เป็นเมนูที่เพิ่มโปรตีน","อาหารเช้า"),
    new Food("ยำขนมจีน",30,250,"สายเเซ่บห้ามพลาด เพิ่มความสดชื้นให้มื้ออาหารด้วยรสชาติจัดจ้าน","อาหารเช้า"),
    new Food("เเก้งส้มผักบุ้ง",35,300,"เป็นจากเเกงส้มธรรมดา ให้เป็นเเกงส้มวิตามิน เเถมยังเพิ่มเนื้อปลาอัดได้โปรตีนเพิ่มไปอีก","อาหารเช้า"),
    new Food("ยำถั่วพู",40,400,"ความกรุบกรอบๆของถั่วทำให้เราถอนตัวจากเมนูนี้ไม่ได้","อาหารเช้า")
]
var food_lunch =[
    new Food("ข้าวผัด",30,182.1,"เป็นอาหารจานเดียวแบบพื้นฐานของเอเชีย","อาหารเที่ยง"),
    new Food("ผัดกระเพรา",30,580,"ประกอบด้วย เนื้อสัตว์ ใบกะเพรา พริก กระเทียม เนื้อสัตว์ที่ใช้ เนื้อไก่ เนื้อหมู เนื้อวัว","อาหารเที่ยง"),
    new Food("ผัดพริกแกง",50,539,"รสชาติเผ็ดร้อนโดนใจคนไทย! ถ้าใส่หัวกะทิลงไปเล็กน้อย จะทำให้อร่อยเข้มข้นขึ้น","อาหารเที่ยง"),
    new Food("คะน้าหมูกรอบ",60,392,"ถือว่าเป็นหนึ่งในเมนูอาหารจานด่วนที่ใครหลายๆ คนชื่นชอบ ถ้าคิดไม่ออกก็ต้องสั่ง","อาหารเที่ยง"),
    new Food("สุกกี้แห้ง",50,400,"รสชาติอร่อย ง่ายๆ แบบไม่ต้องน้ำ ที่อร่อยในตัวเอง","อาหารเที่ยง"),
    new Food("ข้าวผัดกระเทียม",50,644.5,"รสชาติแบบผัดๆ หอมกระเทียมเต็มคำ","อาหารเที่ยง"),
    new Food("ราดหน้า",50,644.4,"เมนูอร่อยที่กินได้ทุกมื้อก็คือ ราดหน้า ที่หาทานอร่อยได้น้อยมาก อาจจะเจอบ้างร้านที่หมูหมักไม่ถึงเครื่อง","อาหารเที่ยง"),
    new Food("ก๋วยเตี๋ยวไก่ตุ๋น",40,427,"สูตรโบราณลับเฉพาะ หอมกลิ่นเครื่องยาจีน ขวัญใจนักซู๊ดเส้น ไก่ตุ๋นนุ่มละมุนลิ้น ละลายในปาก","อาหารเที่ยง")
]
var food_breakfast = [
    new Food("ขนมปังอบ",25,365,"ขนมปัง ไส้กรอก ไข่ธรรมดา เลยเอาขนมปังฉีก ๆ ยัดใส่ถาดอบ ใส่ไส้กรอก ตอกไข่นกกระทาลงไป แล้วไปอบสัก 3-5 นาที พอให้ไข่ขาวสุก","อาหารเย็น"),
    new Food("สลัดราดน้ำสลัดงาญี่ปุ่น",89,35,"สลัดราดน้ำสลัดงาญี่ปุ่นด้วย เพื่อเป็นการหลอกตัวเองว่าเพื่อสุขภาพดีนะ","อาหารเย็น"),
    new Food("ข้าวคลุกผัดกะเพรา",45,585,"ข้าวผัดกะเพรา เหลือจากมื้อเย็นของเมื่อวานค่ะ ผัดกะเพราเหลือเอามาผัดกับข้าวผสมกันเลย ใส่เนยด้วยจะได้หอม","อาหารเย็น"),
    new Food("ขนมปังกระเทียม",25,345,"ขนมปังกระเทียม ในวันที่มีคนให้ขนมปังฝรั่งเศสมาแล้ว ไม่รู้จะจัดการยังไง เลยทำเป็นขนมปังกระเทียม กรอบหอมมาก","อาหารเย็น"),
    new Food("ไข่อบผักกับไส้กรอก",20,280,"เมนูไข่กับไส้กรอกแค่นี้ก็ทำเป็นอาหารเช้าได้แล้ว แค่จับทุกอย่างไปอยจนสุก ใส่หอมใหญ่กับมันฝรั่งเพิ่มความอร่อย","อาหารเย็น"),
    new Food("ไข่กระทะ",30,253,"กินยามเช้าให้อิ่มท้องพร้อมออกไปสู้งานถ้าพร้อมแล้วมาดูสูตรไข่กระทะกัน","อาหารเย็น")
]
//----------------------------สร้างอาหาร 1 อย่าง--------------------------------------------
function newTag(name_class ,name_tag){
    let tag = document.createElement(name_tag)
    tag.className=name_class
    return tag
}
function createPictureFood(name,page){
    let tag = newTag("img","img")
    tag.setAttribute('src', "../assets/img/"+page+"/"+name+".jpg");
    let br =  document.createElement("br")
    tag.appendChild(br)
    return tag
}
function inputDataInText(head,data,class_head,tag,unit){
    let b = document.createElement("b")
    if (class_head){
        b.className="textHead"
    }
    b.innerHTML=head+" : "
    tag.appendChild(b)
    tag.innerHTML+=data
    tag.innerHTML+=" "+unit
    return tag
}
function newImgUrl(url){
    let tag = document.createElement("img")
    tag.id="img"
    tag.className="img"
    tag.src=url
    let br =  document.createElement("br")
    tag.appendChild(br)
    return tag
}
function newFood(page,food){
    let block = newTag("product","div")
    let picture
    if(page!="null"){
        picture = createPictureFood(food.name,page)
    }
    else{
        picture = newImgUrl(food.url) // เเบบที่เเสดงตัวอย่าง
    }
    console.log("url")
    let message = newTag("text","div")
    let name = newTag("nameFood","div")
    name = inputDataInText("ชื่อ",food.name,false,name,"")
    let details = newTag("details","div")
    details = inputDataInText("รายละเอียด",food.details,true,details,"")
    let calorie = newTag("calorie","div")
    calorie = inputDataInText("เเคลเลอร์รี่",food.calories,true,calorie,"กิโลเเคลเลอร์รี่")
    let price = newTag("price","div")
    price = inputDataInText("ราคา",food.price,true,price,"บาท")

    message.appendChild(name)
    message.appendChild(details)
    message.appendChild(calorie)
    message.appendChild(price)
    
    block.appendChild(picture)
    block.appendChild(message)
    return block
}
// ----------------------------------------ว่างรายการอาหาร-------------------------------------------------
function showFood(page) {
    var data_food;
    if (page=="dinner"){
        data_food=food_dinner
    }
    else if (page=="breakfast"){
        data_food=food_breakfast
    }
    else if (page=="lunch"){
        data_food=food_lunch
    }
    push_food(page,data_food)
}

function push_food(page,data) {
    let table = document.getElementById("food_items")
    table.innerHTML = ""
    let row = 1
    let top = 70
    for (let i in data) {
        const food = data[i]
        if (row == 1) {
            addFoodInTd(page, food, i, "left", 0)
        }
        else if (row == 2) {
            addFoodInTd(page, food, i, "right", top)
            row = 0
            top += 376
        }
        row++
    }
}
function addFoodInTd(page, food, i, name_class,top) {
    let block_food = newFood(page, food)
    block_food.id = food.name
    block_food.classList.add(name_class)

    document.getElementById("food_items").appendChild(block_food)
    let css = document.getElementById(food.name).style
    css.top=top+"px"
}

// ------------------------------------------------key---------------------------------------------------
function enterSearchFood(page){
    let menu_food 
    let input = document.querySelector('input')
    input.addEventListener('keyup',(e)=> {
        if (e.keyCode === 13){
            menu_food = document.getElementById("searchMenu").value
            if (menu_food !=""){
                searchFood(menu_food,page)
            }
            else {
                showFood(page)
            }
        }
    })
}

function ifIn(str_check,data){
    const n = data.length
    let l = str_check.length
    for(let i =0;i+l<n;i++){
        const end = i+l
        let result
        if (end==n){
            result = data.substring(i)
        }
        else {
            result = data.substring(i,end)
        }
        if (result==str_check){
            return true
        }
    }
    return false
}

function searchFood(menu,page){
    var data_food
    if (page=="dinner"){
        data_food=food_dinner
    }
    else if (page=="breakfast"){
        data_food=food_breakfast
    }
    else if (page=="lunch"){
        data_food=food_lunch
    }
    let resultSearch=[]
    console.log(menu)
    for(let i in data_food){
        let name_food = data_food[i].name
        if (ifIn(menu,name_food)){
            resultSearch.push(data_food[i])
        }
    }
    if (resultSearch.length>0){
        push_food(page,resultSearch)
    }
}
//------------------------------------หน้าเพิ่มอาหาร--------
function showExampleFood(){
    const name = document.getElementById("nameF").value
    const type_food = document.getElementById("type_food").value
    const price = document.getElementById("price").value
    const calorie = document.getElementById("calorie").value
    const details = document.getElementById("details").value
    const linkImg = document.getElementById("linkImg").value
    const file_photo = document.querySelector("#photo")
    data={
        name : name,
        price : price,
        calories : calorie,
        details :details,
        url : linkImg
    }
    let food = newFood("null",data)
    let show = document.getElementById("to")
    show.innerHTML=""
    show.appendChild(food)
    if(linkImg==""){
        fileImg()
    }
}
function fileImg(){
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
}

