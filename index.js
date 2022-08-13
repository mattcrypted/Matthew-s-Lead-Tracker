
let myLeads = []
let inputEl =document.getElementById("input-el")
let getButton = document.getElementById("input-btn")
let getDelBtn = document.getElementById("del-btn")
let getUl = document.getElementById("ul-El")
let getTabBtn = document.getElementById("tab-btn")

 let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

  if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
  }

getTabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      let mytab = tabs[0].url
        myLeads.push(mytab)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })

    
})
getDelBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads = []
render(myLeads)
})

getButton.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)
    
   
})


function render(leads) {
    let listItems =""
    for(let i =0;i<leads.length;i++){

    // listItems += "<li><a target='_blank' href='" + myLeads[i] + " '>" + myLeads[i] + "</a></li>"
     listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`
    } 
    getUl.innerHTML = listItems
}


  


