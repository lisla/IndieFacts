class App {
    constructor(){
        this.form=document.querySelector('form')
        console.log(document.querySelector('.tab'))
        document
        .querySelector('.tab')
        .addEventListener('click',this.changePage.bind(this))
       this.array={
thing1:{
    img:'./cat.jpg'
},
thing2:{
    img:'./download.jpg'
}
}
    }
    

changePage(ev){


var tabName=ev.target.textContent
var tabcont = document.getElementsByClassName("tab-content")

 for(var i=0; i<tabcont.length;i++){
        console.log(tabcont[i].display)
         tabcont[i].style.display="none"
          console.log(tabcont[i].display)
 }

  var tablinks = document.getElementsByClassName("tablelinks");

     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     // Show the current tab, and add an "active" class to the button that opened the tab
     
     document.getElementById(tabName).style.display = "block";
     ev.currentTarget.className += " active";
}
// 

// }
}
 const app=new App()

