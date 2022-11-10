let inps = document.querySelectorAll("input")
let form = document.forms.subscribe


form.onsubmit = (event) => {
    event.preventDefault()
    let user = {}

    let fm = new FormData(form)
    fm.forEach((value,key) => {
        user[key] = value
    } 
    )
    console.log(user);
}
inps.forEach(inp => {
    inp.onfocus = () => {
        inp.style.border = "2px solid blue"
    }
    inp.onblur = () => {
        if(inp.value.length > 0) {
            inp.style.border = "2px solid green"
        } else {
            inp.style.border = "2px solid red"
            
        }
    }
})