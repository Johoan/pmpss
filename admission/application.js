var button = document.getElementById("btn");
      button.addEventListener("click", function() {
         var doc = new jsPDF();
         var pdf = document.querySelector(".form-page");
         doc.fromHTML(pdf);
         doc.save("application-form.pdf");
      });