var listStudent = []
var fullname = document.getElementById("fullname")
var email = document.getElementById("email")
var phoneNumber = document.getElementById("phoneNumber")
var address = document.getElementById("address")

var id = 0;

function appendStudent() {
    //tien hanh validate
    var errorMes = document.getElementById("errorMes")
    var errorMesInput = document.getElementById("fullname")
    
    errorMes.style.display ="none"
    errorMesInput.classList.remove("errorMesInput");
    if(fullname.value==="") {
      errorMesInput.classList.add("errorMesInput");
      errorMes.style.display ="block"
      return 
    }
    var table = document.querySelector("table")
    var tr = document.createElement("tr")

    //Child1
    var td = document.createElement("td")
    td.innerText = id
    tr.appendChild(td)
    console.log(id)
    //Child2
    var td2 = document.createElement("td")
    td2.innerText = fullname.value
    tr.appendChild(td2)

    //Child3
    var td3 = document.createElement("td")
    var gender = document.querySelector('input[name="gender"]:checked')
    td3.innerText = gender != null ? changeValue(gender.value) : ""

    tr.appendChild(td3)

    //Child4
    var td4 = document.createElement("td")
    td4.innerText = email.value
    tr.appendChild(td4)

    //Child5
    var td5 = document.createElement("td")
    td5.innerText = phoneNumber.value
    tr.appendChild(td5)
    //Child5
    var td6 = document.createElement("td")
    td6.innerText = address.value
    tr.appendChild(td6)

    table.appendChild(tr)
    id++
    reset()
}
function reset() {
    fullname.value = ""
    email.value = ""
    phoneNumber.value = ""
    address.value = ""
}
 function changeValue(value) {
   if(value == "1") {
    return "Male"
   }else {
    return "Female"
   }
 }

function validateInput(value) {
  console.log(value)
  var paraDiv = document.querySelector(".errormessage")
  if(value.trim() === "" ) {
    var para = document.createElement("p")
    para.className = "errorMes"
    para.innerText = "Please enter fullname"
    paraDiv.appendChild(para)
  }else{
     var errMsg = document.querySelector(".errorMes")
     if(errMsg != null) {
      errMsg.remove()
     }
  }

}

