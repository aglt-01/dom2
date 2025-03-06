document.addEventListener("DOMContentLoaded", function(){
    const divCats = document.querySelector(".divCats")
    let content = ""
    cats.forEach(cat=>{
        console.log(cat)
        content+=`
        <div class = "cat">
        <h1>${cat.name}</h1>
        <img src=${cat.img_link} alt = "cat">
        <p><strong>Возраст: </strong>${cat.age}</p>
        <p><strong>Рейтинг: </strong>${cat.rate}</p>
        <p>${cat.favourite?"фаворит":"не фаворит"}</p>
        <p><strong>Описание: </strong>${cat.description}</p>
        </div>
        `
    })
    divCats.innerHTML=content
})

