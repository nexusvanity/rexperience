let currZ = 5;
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.querySelector('.dragHeader')) {

    elmnt.querySelector('.dragHeader').onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }
  elmnt.style.left = elem_old_pos.left;
  elmnt.style.top = elem_old_pos.top;
  elmnt.style.position = '';

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.position = 'fixed';
    document.onmouseup = closeDragElement;
 
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
 
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
  
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 
    elmnt.style.zIndex = currZ++;
  }

  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.position = 'fixed';
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.draggable').forEach(elem=>dragElement(elem));
});

// WHAT H