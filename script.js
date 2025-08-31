// Switch Form
    function showForm(formId){
      document.querySelectorAll(".form-box").forEach(f=>f.classList.remove("active"));
      document.getElementById(formId).classList.add("active");
    }

    // Theme Toggle
    function toggleMode(){document.body.classList.toggle("light");}

    // Show/Hide Passwords
    function togglePassword(inputId, iconId){
      const input=document.getElementById(inputId);
      const icon=document.getElementById(iconId);
      if(input.type==="password"){input.type="text";icon.classList.replace("fa-eye","fa-eye-slash");}
      else{input.type="password";icon.classList.replace("fa-eye-slash","fa-eye");}
    }
    document.getElementById("toggleLoginPassword").onclick=()=>togglePassword("loginPassword","toggleLoginPassword");
    document.getElementById("toggleSignupPassword").onclick=()=>togglePassword("signupPassword","toggleSignupPassword");

    // Validation
    function validateLogin(e){
      e.preventDefault();
      let user=document.getElementById("loginUsername");
      let pass=document.getElementById("loginPassword");
      let ue=document.getElementById("loginUserError");
      let pe=document.getElementById("loginPassError");
      let valid=true;
      if(user.value.trim()===""){ue.style.display="block";valid=false;} else ue.style.display="none";
      if(pass.value.trim().length<6){pe.style.display="block";valid=false;} else pe.style.display="none";
      if(valid) alert("✅ Login Successful!");
    }

    function validateSignup(e){
      e.preventDefault();
      let user=document.getElementById("signupUsername").value.trim();
      let email=document.getElementById("signupEmail").value.trim();
      let pass=document.getElementById("signupPassword").value.trim();
      if(user===""||email===""||pass.length<6){alert("⚠️ Fill all fields correctly!");return;}
      alert("✅ Registered Successfully!");
      showForm('loginForm');
    }

    function validateForgot(e){
      e.preventDefault();
      let email=document.getElementById("forgotEmail").value.trim();
      if(email===""){alert("⚠️ Please enter email!");return;}
      alert("📧 Reset link sent to "+email);
      showForm('loginForm');
    }