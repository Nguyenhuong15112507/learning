var listStudent = []
var fullname = document.getElementById("fullname")
var email = document.getElementById("email")
var phoneNumber = document.getElementById("phoneNumber")
var address = document.getElementById("address")
var popupConfirm = document.getElementById("popupConfirm")
var deletevalue = null

var id = 0;

function appendStudent() {
    //tien hanh validate
    var isValidate = true
    var errorMes = document.getElementById("errorMes")
    var errorMes1 = document.getElementById("errorMes1")
    var errorMes2 = document.getElementById("errorMes2")
    var errorMes3 = document.getElementById("errorMes3")
    // var errorMesInput1 = document.getElementById("fullname")
    // var errorMesInput1 = document.getElementById("fullname")
    // var errorMesInput1 = document.getElementById("fullname")

    
    errorMes.style.display ="none"
    errorMes1.style.display ="none"
    errorMes2.style.display ="none"
    errorMes3.style.display ="none"
    fullname.classList.remove("errorMesInput");
    email.classList.remove("errorMesInput");
    phoneNumber.classList.remove("errorMesInput");
    address.classList.remove("errorMesInput");

    if(fullname.value==="") {
      isValidate = false
      fullname.classList.add("errorMesInput");
      errorMes.style.display ="block"
      //return 
    }
    if(email.value === "") {
      isValidate = false
      email.classList.add("errorMesInput")
      errorMes1.style.display ="block"
      //return 
    }
    if(phoneNumber.value === "") {
      isValidate = false
      phoneNumber.classList.add("errorMesInput")
      errorMes2.style.display ="block"
      //return 
    }
    if(address.value === "") {
      isValidate = false
      address.classList.add("errorMesInput")
      errorMes3.style.display ="block"
      //return 
    }
    if(isValidate === false) {
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
    //button edit
    var td7 = document.createElement("td")
    var elebtn = document.createElement("button")
    elebtn.textContent = "Edit"
    elebtn.classList.add("commonBtn")
    elebtn.classList.add("button")
    
    td7.appendChild(elebtn)
    tr.appendChild(td7)

    //button delete
    var td8 = document.createElement("td")
    var elebtn1 = document.createElement("button")
    elebtn1.textContent = "Delete"
    elebtn1.classList.add("commonBtn")
    elebtn1.classList.add("button")
    elebtn1.onclick = function() {
      deletevalue = this.parentNode.parentNode
      popupConfirm.style.visibility = "visible"
      
    }
    td8.appendChild(elebtn1)
    tr.appendChild(td8)

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
function closePopup() {
  deletevalue = null
  popupConfirm.style.visibility = "hidden"

}
function deleteRow() {
  deletevalue.parentNode.removeChild(deletevalue)
  closePopup()
}
