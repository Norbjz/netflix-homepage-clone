var coll = document.getElementsByClassName("collapsible");
var activas = 0

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", expandir);
}

function expandir() {
    const activeElement = document.querySelector('.active');

    if(activeElement){
        activeElement.nextElementSibling.style.maxHeight = null;
        activeElement.classList.remove('active')
    }

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}