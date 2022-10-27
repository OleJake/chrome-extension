let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsfromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const deleteBtn = document.getElementById("delete-btn")

if (leadsfromLocalStorage) {
    myLeads = leadsfromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>`
    }
    
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(document.getElementById("input-el").value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

