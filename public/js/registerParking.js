// const  validateForm = () => {
//    const cartype = document.getElementById('cartype')
//     const cartypeError = document.getElementById('cartypeError')
//     const name = document.getElementById('name')
//     const nameError = document.getElementById('nameError')
//     const numberplate = document.getElementById('numberplate')
//     const numberplateError = document.getElementById('numberplateError')
//     const arrivaltime = document.getElementById('arrivaltime')
//     const arrivaltimeError = document.getElementById('arrivaltimeError')
//     const model = document.getElementById('model')
//     const modelError = document.getElementById('modelError')
//     const color = document.getElementById('color')
//     const colorError = document.getElementById('colorError')
//     const parkingtime = document.getElementById('parkingtime')
//     const parkingtimeError = document.getElementById('parkingtimeError')
//     const parkingfee = document.getElementById('parkingfee')

//     if(cartype.value == "Default") {
//         cartype.style.border = "1px solid red"
//         cartypeError.textContent = "Please choose the car type"
//         cartypeError.style = "color: red"
//         return false
//     } else {
//         cartype.style = "1px solid green"
//         cartypeError.textContent = ""
//     }

//     if(name.value == "") {
//         name.style.border = "1px solid red"
//         nameError.textContent = "Please enter your name"
//         nameError.style = "color: red"
//         return false
//     } else {
//         name.style = "1px solid green"
//         nameError.textContent = ""
//     }
//     if(numberplate.value == "") {
//         numberplate.style.border = "1px solid red"
//         numberplateError.textContent = "Please enter your numberplate"
//         numberplateError.style = "color: red"
//         return false
//     } else {
//         numberplate.style = "1px solid green"
//         numberplateError.textContent = ""
//     }
//     if(phonenumber.value == "") {
//         phonenumber.style.border = "1px solid red"
//         phonenumberError.textContent = "Please enter your phonenumber"
//         phonenumberError.style = "color: red"
//         return false
//     } else {
//         phonenumber.style = "1px solid green"
//         phonenumberError.textContent = ""
//     }
//     if(arrivaltime.value == "") {
//         arrivaltime.style.border = "1px solid red"
//         arrivaltimeError.textContent = "Please enter your arrivaltime"
//         arrivaltimeError.style = "color: red"
//         return false
//     } else {
//         arrivaltime.style = "1px solid green"
//         arrivaltimeError.textContent = ""
//     }
//     if(model.value == "") {
//         model.style.border = "1px solid red"
//         modelError.textContent = "Please enter your model"
//         modelError.style = "color: red"
//         return false
//     } else {
//         model.style = "1px solid green"
//         modelError.textContent = ""
//     }
//     if(color.value == ""){
//         color.style.border = "1px solid red"
//         colorError.textContent = "Please enter your color"
//         colorError.style = "color: red"
//         return false
//     } else {
//         color.style = "1px solid green"
//         colorError.textContent = ""
//     }
//     if(parkingtime.value == "") {
//         parkingtime.style.border = "1px solid red"
//         parkingtimeError.textContent = "Please enter your parkingtime"
//         parkingtimeError.style = "color: red"
//         return false
//     } else {
//         parkingtime.style = "1px solid green"
//         parkingtimeError.textContent = ""
//     }
//     if(parkingfee.value == "") {
//         parkingfee.style.border = "1px solid red"
//         parkingfeeError.textContent = "Please enter your parkingfee"
//         parkingfeeError.style = "color: red"
//         return false
//     } else {
//         parkingfee.style = "1px solid green"
//         parkingfeeError.textContent = ""
//     }

// };