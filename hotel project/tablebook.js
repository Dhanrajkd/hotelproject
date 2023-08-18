
const forms=document.querySelector("#form")
console.log(forms)

const name=document.querySelector("#name")
const date=document.querySelector("#date")
const time=document.querySelector("#time")
const adults=document.querySelector("#adults")
const children=document.querySelector("#children")

forms.addEventListener("submit",function(e){
    e.preventDefault()
    validate()
})
function validate(){
        const nameval=name.value.trim()
        const dateval=date.value.trim()
        const adultsval=adults.value.trim()
        const childrenval=children.value.trim()

        if(nameval===""){
            alert("all fields required")
        }
        else if(dateval===""){
            alert("all fields required")
        }
        else if(adultsval===""){
            alert("all fields required")
        }
        else if(childrenval===""){
            alert("all fields required")
        }
        else {
            alert("booking confirmed")
            window.location.href = "tablebook.html";
        }

}
