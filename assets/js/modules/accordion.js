const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

  const btn = item.querySelector(".faq-question");
  const body = item.querySelector(".faq-answer");

  if(item.classList.contains("active")){
    body.style.height = body.scrollHeight + "px";
  }

  btn.addEventListener("click",()=>{

    const open = item.classList.contains("active");

    faqItems.forEach(i=>{
      i.classList.remove("active");
      i.querySelector(".faq-answer").style.height="0px";
    });

    if(!open){
      item.classList.add("active");
      body.style.height = body.scrollHeight + "px";
    }

  });

});