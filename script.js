let submit=document.getElementById("submit");
submit.addEventListener("click",display);

let row=1;

function display() {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode= document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;
    let food = document.getElementById("food").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;


let display=document.getElementById("display");

let newRow = display.insertRow(row);

var td1= newRow.insertCell(0);
var td2 = newRow.insertCell(1);
var td3 = newRow.insertCell(2);
var td4 = newRow.insertCell(3);
var td5 = newRow.insertCell(4);
var td6 = newRow.insertCell(5);
var td7 = newRow.insertCell(6);
var td8 = newRow.insertCell(7);

td1.innerHTML = firstname;
td2.innerHTML = lastname;
td3.innerHTML = address;
td4.innerHTML = pincode;
td5.innerHTML = gender;
td6.innerHTML = food;
td7.innerHTML = state;
td8.innerHTML = country;

row++;

}

// let register=document.querySelector("button")
// let table=document.querySelector("table")

// let firstinput=document.querySelector("#first-name")
// let lastinput=document.querySelector("#last-name")
// let addressinput=document.querySelector("#address")
// let pincodeinput=document.querySelector("#pincode")
// let genderinput=document.querySelector("#gender")
// let foodinput=document.querySelector("#food")
// let stateinput=document.querySelector("#state")
// let countryinput=document.querySelector("#country")

// register.addEventListener("click",display)


// function display(){
//     let firstname=firstinput.value;
//     let lastname=lastinput.value;
//     let address=addressinput.value;
//     let pincode=pincodeinput.value;
//     let gender=genderinput.value;
//     let food=foodinput.value;
//     let state=stateinput.value;
//     let country=countryinput.value;

//     let template=`
//     <tr>
//     <td>${firstname}</td>
//     <td>${lastname}</td>
//     <td>${address}</td>
//     <td>${pincode}</td>
//     <td>${gender}</td>
//     <td>${food}</td>
//     <td>${state}</td>
//     <td>${country}</td>
//     `;

//     table.innerhtml += template;
// } 