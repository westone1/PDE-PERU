
const hamburger = document.getElementById('hamburgerMenu');
const toggleMenuMainContainer = document.getElementById('toggleMenuMainContainer');

hamburger.addEventListener("click", ()=>{ 
    hamburger.style.display = "none";
    const mainDiv = createMainDiv();
    mainDiv.style.display = "block";
    mainDiv.appendChild(createNavBar());
    toggleMenuMainContainer.appendChild(mainDiv);
})
function createMainDiv(){
    const div = document.createElement('div');
    div.classList.add('toggleMenuMainDiv');
    return div
}
function createNavBar(){
    const nav = document.createElement('nav');
    nav.classList.add('toggleMenuNav');
    const ul = document.createElement('ul');

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    if(currentPage == "index.html"){
        agregarElemento(ul,"Servicios","./servicios.html");
        agregarElemento(ul,"Blog","./blog.html");
        
        
    }
    if(currentPage == "servicios.html"){
        agregarElemento(ul,"Inicio","./index.html");
        agregarElemento(ul,"Blog","./blog.html");

        
    }
    if(currentPage == "blog.html"){
        agregarElemento(ul,"Inicio","./index.html");
        agregarElemento(ul,"Servicios","./servicios.html");

    }
        agregarElemento(ul,"Contacto","#contacto");
        agregarElemento(ul,"Conócenos","#conocenos");
        
        nav.appendChild(ul);
        return nav
}

function agregarElemento(ul,texto,href){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = texto;
    a.href = href;
    li.appendChild(a);
    ul.appendChild(li);
}

   

