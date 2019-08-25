// let button = document.getElementById('button');
// let button1 = document.getElementById('button1');
// let modal = document.getElementById('page-modal');
// let modal1 = document.getElementById('page-modal1');
// let close = document.getElementsByClassName('modal-close')[0]

// button.onclick = function(){
//   modal.style.display = 'block';
// }
//
// close.onclick = function(){
//   modal.style.display = 'none';
// }
//
// button1.onclick = function(){
//   modal1.style.display = 'block';
// }
//
// close.onclick = function(){
//   modal.style.display = 'none';
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++Intersting



let contentOpen = document.querySelectorAll('.open_Box_Content');

contentOpen.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

let closeContent =  document.querySelectorAll('.modal-close')[0];

closeContent.forEach(function(btn){
  btn.onclick = function () {
    var modal = (btn.closest('.modal').style.display = 'none');
  };
});
