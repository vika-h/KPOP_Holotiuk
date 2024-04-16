var modal = document.getElementById("modal");
var modalTeacher = document.getElementById("modalTeacher");
var closeButtons = document.querySelectorAll(".close");

document.querySelectorAll(".modal-toggle").forEach(btn => { 
  btn.addEventListener('click',()=>{
    modal.style.display = "block";
    modalTeacher.style.display = "none"; 
  }) 
})

document.querySelectorAll(".modal-teacher-toggle").forEach(btn => { 
  btn.addEventListener('click',()=>{
    modalTeacher.style.display = "block";
    modal.style.display = "none";
  }) 
})

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    modal.style.display = "none";
    modalTeacher.style.display = "none";
  });
}

window.addEventListener('click', function(event) {
  if (event.target == modal || event.target == modalTeacher) {
    modal.style.display = "none";
    modalTeacher.style.display = "none";
  }
});
