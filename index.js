let form = document.getElementById('form')
let input = document.getElementById('input')
let msg = document.getElementById('msg')
let posts = document.getElementById("posts")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("button click")
    formValidation()    
})

let formValidation = () => {
    if (input.value === "") { 
        msg.innerHTML = "Post cannot be blank"  //add msg   
    console.log("failure")
    } else {
    console.log("success")
    msg.innerHTML = ""
    acceptData()
    }    
}

let data = {} // data = object

let acceptData = () => {
    data["text"] = input.value // testo dell'input
    console.log(data) 
    createPost()   
}

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
    </span>
    </div>
`
input.value = ""
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}




