// new javascript stuff
function  openTab(event, tabId){

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i=0; i<tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }

  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " is-active";
}
