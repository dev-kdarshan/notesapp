const main_container = document.querySelector(".container")
const new_note_container = document.querySelector(".new_note_container")
const mynotes_container = document.querySelector(".mynotes_container")
const new_note_title = document.querySelector(".new_note_title")
const new_note_text = document.querySelector(".new_note_text")
const new_note_close = document.querySelector(".new_note_close")
const mynotes_close = document.querySelector(".mynotes_close")
const savenote = document.querySelector(".new_note_save")
const create = document.querySelector(".create")
const mynote = document.querySelector(".mynote")
const mynotes_holder = document.querySelector(".mynotes_holder")
const emptytext = document.querySelector(".emptytext")
const msg = document.querySelector(".toast_holder")


//open new note
create.addEventListener("click",()=>{
      new_note_container.style.display = "block"
})

//close new note
new_note_close.addEventListener("click",()=>{
    new_note_container.style.display = "none"
})

//my notes
mynote.addEventListener("click",()=>{
    mynotes_container.style.display = "block"
})

//close mynotes
mynotes_close.addEventListener("click",()=>{
    mynotes_container.style.display = "none"
})

function toast(){
    // toast notification after succeffully note created
    msg.style.display = "flex"
    setTimeout(()=>msg.style.display="none",5000)
}

function saveinfo(){
    // new note div created
    let note = document.createElement('div')
    let note_content = document.createElement('div')
    let note_head_holder = document.createElement('div')
    let note_head = document.createElement('h1')
    let div_1 = document.createElement('div')
    let delete_ = document.createElement('i')
    let div_2 = document.createElement('div')
    let note_body = document.createElement('p')
 
    note.className = 'note'
    note_content.className = 'note_content'
    note_head_holder.className ='note_head_holder'
    note_head.className = 'note_head'
    delete_.className = 'fa-solid fa-trash delete'
    note_body.className = 'note_body'
 
    emptytext.style.display = 'flex'
    mynotes_holder.append(note)
    note.append(note_content)
    note_content.append(note_head_holder)
    note_head_holder.append(note_head)
    note_head_holder.append(div_1)
    div_1.append(delete_)
    note_content.append(div_2)
    div_2.append(note_body)
    emptytext.style.display = 'none'
    
    // deleting that note
    delete_.addEventListener("click",()=>{
        emptytext.style.display = 'none'
        note.remove()
   })
// adding new note after checking whether inputs are filled or not
let head = new_note_title.value
let body = new_note_text.value

if(head == "" || body == ""){
    alert("you missed something")
}
else{
    note.style.display = "flex"
    note_head.innerHTML = head
    note_body.innerHTML = body
    new_note_title.value = ""
    new_note_text.value = ""
    new_note ={}
    new_note['title']=head
    new_note['body']=body
    console.log(new_note);
    localStorage.setItem('new_note',new_note)
    toast()
}


}
savenote.addEventListener("click",saveinfo)

