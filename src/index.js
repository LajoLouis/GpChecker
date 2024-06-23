const addMore = document.getElementById("addMore")
const inputContainer = document.getElementById("inputDiv")
const myForm = document.getElementById("theForm")
const resu = document.getElementById("res")
const remove = document.getElementById("remove")

document.addEventListener("DOMContentLoaded", () => {
    addMore.onclick = create
    remove.onclick = remover
})

let create = () => {
    let newInput = document.createElement("input")
    inputContainer.appendChild(newInput)
    newInput.className = "inputs"
    newInput.placeholder = "Credit Unit"
    newInput.type = "number"
    newInput.setAttribute("required", true)

    let newSelect = document.createElement("select")
    inputContainer.appendChild(newSelect)
    newSelect.className = "selects"

    let options = ["F","E","D","C","B","A"]
    // options.forEach(item => {
    //     let newOption = document.createElement("option")
    //     newSelect.appendChild(newOption)
    //     newOption.innerHTML = item
    // });
    for (let i = 0; i < options.length; i++) {
        let newOption = document.createElement("option")
        newSelect.appendChild(newOption)
        newOption.innerHTML = options[i]
        newOption.value = i
        
    }

}
let remover  = ()=>{
    const inputs = document.querySelectorAll(".inputs")
    const selectBo = document.querySelectorAll(".selects")
    inputContainer.removeChild(inputs[inputs.length-1])
    inputContainer.removeChild(selectBo[selectBo.length-1])
}

let inputVal = []
let selectVal = []
let inputBySelect = []
let calculator = ()=>{
    // get the input values
    const inputs = document.querySelectorAll(".inputs")
    inputVal = []
    inputs.forEach((item) => {
        inputVal.push(Number(item.value))
    });
    // get the select values
    const selectBo = document.querySelectorAll(".selects")
    selectVal = []
    selectBo.forEach((item) =>{
        selectVal.push(Number(item.value))
    });
    // multiply selects by input
    inputBySelect = []
    for (let i = 0; i < inputVal.length; i++) {
        inputBySelect[i] = inputVal[i] * selectVal[i];
        
    }
    // sumUp all inputs and all multiplicaions
    let totalInput =  inputVal.reduce((acc,cur) =>acc+ cur, 0)
    let totalInput2 =  inputBySelect.reduce((acc,cur) =>acc+ cur, 0)
    let result = totalInput2 / totalInput
    result = result.toFixed(4) 

    if (result > 3) {
        resu.style.color = "green"
    }else {
        resu.style.color = "red"
    }
    resu.innerHTML = result
}


// let getSelect = () =>{
//     const selectBo = document.querySelectorAll(".selects")
//     selectVal = []
//     selectBo.forEach((item) =>{
//         selectVal.push(Number(item.value))
//     });
// }

myForm.onsubmit = (event) => {
    event.preventDefault()
    
    calculator()
}


