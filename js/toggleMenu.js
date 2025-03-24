
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

    const currentPage = window.location.pathname.split("/").pop();
    if(currentPage == "index.html"){
        const liBlog = document.createElement('li');
        const aBlog = document.createElement('a');
        const liServicos = document.createElement('li');
        const aServicios = document.createElement('a');
        aServicios.textContent = "Servicios";
        aServicios.href = "./servicios.html";
        aBlog.textContent = "Blog";
        aBlog.href = "./blog.html";
        liServicos.appendChild(aServicios);
        ul.appendChild(liServicos)
        liBlog.appendChild(aBlog);
        ul.appendChild(liBlog)
    }
    if(currentPage == "servicios.html"){
        const liInicio = document.createElement('li');
        const aInicio = document.createElement('a');
        aInicio.textContent = "Inicio";
        aInicio.href = "./index.html";
        const liBlog = document.createElement('li');
        const aBlog = document.createElement('a');
        aBlog.textContent = "Blog";
        aBlog.href = "./blog.html";
        liInicio.appendChild(aInicio);
        ul.appendChild(liInicio);
        liBlog.appendChild(aBlog);
        ul.appendChild(liBlog)
    }
    if(currentPage == "blog.html"){
        const liInicio = document.createElement('li');
        const aInicio = document.createElement('a');
        aInicio.textContent = "Inicio";
        aInicio.href = "./index.html";
        const liServicos = document.createElement('li');
        const aServicios = document.createElement('a');
        aServicios.textContent = "Servicios";
        aServicios.href = "./servicios.html";
        liInicio.appendChild(aInicio);
        ul.appendChild(liInicio);
        liServicos.appendChild(aServicios);
        ul.appendChild(liServicos)
        
    }
   
    const aContacto = document.createElement('a');
    const aConocenos = document.createElement('a');
    
    const liContacto = document.createElement('li');
    const liConocenos = document.createElement('li');
         
    aContacto.textContent = "Contacto";
    aConocenos.textContent = "Conócenos";      
    aContacto.href = "#contacto";
    aConocenos.href = "#conocenos";

    liContacto.appendChild(aContacto);
    liConocenos.appendChild(aConocenos);
   
    ul.appendChild(liContacto);
    ul.appendChild(liConocenos);

    nav.appendChild(ul);
    return nav
    
}
