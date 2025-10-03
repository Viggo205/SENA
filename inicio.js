const modal = document.getElementById("authModal");
    const abrirModal = document.getElementById("abrirModal");
    const closeModal = document.getElementById("closeModal");
    const registerTab = document.getElementById("registerTab");
    //const loginTab = document.getElementById("loginTab");
    const registerForm = document.getElementById("registerForm");
// const loginForm = document.getElementById("loginForm");

    abrirModal.addEventListener("click", () => modal.style.display = "flex");
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    registerTab.addEventListener("click", () => {
      registerTab.classList.add("active");
      //loginTab.classList.remove("active");
      registerForm.classList.add("active");
      //loginForm.classList.remove("active");
    });
    /*
    loginTab.addEventListener("click", () => {
      loginTab.classList.add("active");
      registerTab.classList.remove("active");
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
    });*/
