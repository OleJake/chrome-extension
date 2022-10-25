let myLeads = []
const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(document.getElementById("input-el").value)
    inputEl.value = ""
    renderLeads()

})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
        </li>`
    }
    
    ulEl.innerHTML = listItems
}
