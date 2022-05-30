function burgerdreng() {
    var x = document.getElementById("linkz");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  const captcha = document.querySelector(".captcha");
  const wrap = document.querySelector(".wrapper");
  reloadBtn = document.querySelector(".reload-btn"),
  inputField = document.querySelector(".input-area input"),
  checkBtn = document.querySelector(".check-btn"),
  statusTxt = document.querySelector(".status-text");
  
  let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                       'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                       'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                       't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function getCaptcha(){
    for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
      let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
    }
  }
  getCaptcha(); 
  reloadBtn.addEventListener("click", ()=>{
    removeContent();
    getCaptcha();
  });
  checkBtn.addEventListener("click", e =>{
    e.preventDefault(); 
    statusTxt.style.display = "block";
    
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText){ 
      statusTxt.style.color = "#3DCD58";
      statusTxt.innerText = "Fedt! du er ikke en robot.";
      setTimeout(()=>{
        removeContent();
        wrap.remove();
      }, 2000);
    }else{
      statusTxt.style.color = "#ff0000";
      statusTxt.innerText = "Captcha matcher ikke, prøv igen!";
    }
  });
  function removeContent(){
   inputField.value = "";
   captcha.innerText = "";
   statusTxt.style.display = "none";
  }
  const open = document.getElementById("button");
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById("close");
  
  open.addEventListener('click', () => {
    modal_container.classList.add('show');
  })
  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  })
  $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".div2").offset().top},
        'fast');
  });
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  function validation(){
    var nameV = document.getElementById('navn').value;
    var mailV = document.getElementById('email').value;
  
    var errormsgV = document.getElementById('error_message');
    var msgV =["Venligst skriv navn", "Venligst skriv email"];
  
  
    if(nameV.length <5 ){
        errormsgV.innerHTML = msgV[0];
        return false;
    }
  
    if(mailV.length <6 ){
        errormsgV.innerHTML = msgV[1];
        return false;
    }
    else{
     alert("Tak - din mail er blevet sendt. Tjek din mail for yderligere info");
    }
  }
  
  for(let i=0; i<5; i++){
    if (i% 2 !==0) console.log('msgV')
  }
  function confirm_alert(node) {
    return confirm("Dette link sender dig til wisers hovedside og forlader denne, er du sikker på du vil videre?");
  }
  