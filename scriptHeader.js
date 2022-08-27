let header = document.getElementById('header')
let naviHeader = document.getElementById('navi_header')
let content = document.getElementById('content')
let showSidebar = false

function toogleSidebar() {
    showSidebar = !showSidebar //alterar de True pra False ou ao contrario.
    console.log(showSidebar)
    if (showSidebar) {
       naviHeader.style.marginLeft = '-10vw' //true.
       naviHeader.style.animationName = 'showSidebar' //animation CSS.
       content.style.filter = 'blur(2px)' //efeito de borrado ao abrir a navibar.
    } else {
        naviHeader.style.marginLeft = '-100vw'//false.
        naviHeader.style.animationName = '' //animation CSS.
        content.style.filter = '' //remova o efeito de borrado.
    }
}

function closeSideBar() {
    if(showSidebar) {
        toogleSidebar() //Se tiver aberto, feche.
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar == true) {
        toogleSidebar()
    }
}) //corrige o bug da tela com o borrado e o tamnho da tela.