//it prevent the auto reload function
// document.querySelector('form').addEventListener('submit', function(event) { 
//   event.preventDefault();
// }); 
 
 let passwordBox = document.getElementById("password")
      const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const LowerCase = "abcdefghijklmnopqrstuvwxyz";
      const Numbers = "0123456789";
      const SplCharacter = "!@$%&*()_~#";
      const AllCharacter = UpperCase + LowerCase + Numbers + SplCharacter;
      PassLength = 10
      
      //this function generated password
     function GeneratePass(){ 
       let password = "";
      password+=UpperCase[Math.floor(Math.random()*UpperCase.length)]
      password+=LowerCase[Math.floor(Math.random()*LowerCase.length)]
      password+=Numbers[Math.floor(Math.random()*Numbers.length)]
      password+=SplCharacter[Math.floor(Math.random()*SplCharacter.length)]
      
      // we generated only four chart password but we need 10 so this while loop do this 
      
      while(PassLength>password.length){
        password+=AllCharacter[Math.floor(Math.random()*AllCharacter.length)]
      }
      passwordBox.value = password
     }
     
     //copy fuction for password we generated
     function CopyPass(){
       passwordBox.select();
       document.execCommand("copy")
       let a = document.getElementById("copybtn")
       
       a.innerHTML= `<i class="bi bi-check-lg"></i> Copied`
       setTimeout(function() {
         a.innerHTML = `<i class="bi bi-copy"></i> Copy`
         
       }, 2000);
     }