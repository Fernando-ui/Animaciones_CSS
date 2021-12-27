document.querySelector(".btn").addEventListener("click", (e) => {
    console.log('hola');
    
    document.body.classList.add("animate");
    document.querySelector(".ball").addEventListener("transitionend", (e) => {
      console.log(e);
      
      if (e.elapsedTime === 1) document.body.classList.remove("animate");
      // document.body.classList.remove("animate");
    });
  });
  