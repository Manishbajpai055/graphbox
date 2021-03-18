const themetoggle = document.getElementsByTagName('html');
window.addEventListener('DOMContentLoaded', (event) => {
         const preferredTheme = localStorage.getItem('preferred-theme') ;
         const beforeTheme =  localStorage.getItem('before-theme') ;
         let toggleFeature = document.getElementById('isombefore');
        

         if (preferredTheme === 'light') {
           document.getElementsByTagName('html')[0].classList.add(preferredTheme)
         } else {
         document.getElementsByTagName('html')[0].classList.add(preferredTheme)
         }
       
       if(beforeTheme === 'isom'){
         toggleFeature.classList.add('isom')  
         toggleFeature.classList.remove('isom2');
         
         }
         else if(beforeTheme === 'isom2') {
           toggleFeature.classList.add('isom2');
           toggleFeature.classList.remove('isom');
         }
       
});


 function theme( persist = false){
   const on = 'dark';
   const off = 'light';
   let toggleFeatureAfter = document.getElementById('isombefore') 
 
 
 if(toggleFeatureAfter.classList.contains('isom2') === true ) {      
   console.log('isom triggered')
   localStorage.setItem('before-theme', 'isom');
     toggleFeatureAfter.classList.remove('isom2');
     toggleFeatureAfter.classList.add('isom');
     console.log('isom triggered hehe ')
   
 }

else if (toggleFeatureAfter.classList.contains('isom') === true ) {
     console.log('isom2 triggered')
     localStorage.setItem('before-theme', 'isom2');
     toggleFeatureAfter.classList.remove('isom');
     toggleFeatureAfter.classList.add('isom2');
     console.log('isom2 triggered hehe ')

 }
 
   
 try{
 if (themetoggle[0].classList.contains('dark') == true ){
   localStorage.setItem('preferred-theme', off);
   throw themetoggle[0].classList.remove('dark');  
 }
 else{
   console.log("gandu light")
   localStorage.setItem('preferred-theme', on);
   throw themetoggle[0].classList.add(on)
 }
 
 }
 catch(err){
   console.log(err)
 }
}

function  work(){

  document.getElementById('work').scrollIntoView({behavior: "smooth"})
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth >= 960) {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            document.getElementById("navbar").classList.add('fixed');
            document.getElementById("navbar").style.zIndex = '-1';
            document.getElementById('Completedwork').style.zIndex = '-2';
            document.getElementById('mobnav').style.margin = '0px -2em'
            document.getElementById('logo').style.margin = '0px -3rem';
            document.getElementById("logo").style.padding = '44px 0px'
            document.getElementById("logo").style.rotate = "-90deg";

        } else {
            document.getElementById("navbar").style.zIndex = '10';
            document.getElementById('Completedwork').style.zIndex = '12';
            document.getElementById('mobnav').style.margin = '0px 0.5em'
            document.getElementById('logo').style.margin = '0px 1rem';
            document.getElementById("navbar").classList.remove('fixed');
            document.getElementById("logo").style.padding = '0px 0px'
            document.getElementById("logo").style.rotate = "0deg";        
        }
    }
}


//projects function

function hover() {
  document.getElementById('rA1').style.marginLeft = '1.5rem';
  }
  
function unhover(){
          document.getElementById('rA1').style.marginLeft = '1rem';    
 }
