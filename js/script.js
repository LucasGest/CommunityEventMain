function compte_a_rebours() {
  var compte_a_rebours = document.getElementById("compte_a_rebours");
  var date_actuelle = new Date();
  var date_evenement = new Date("Feb 20 16:00:00 2026");
  var total_secondes = (date_evenement - date_actuelle) / 1000;
  // var prefixe = "Compte à rebours terminé dans ";

  if (total_secondes < 0) {
    prefixe = "Compte à rebours terminé il y a ";
    total_secondes = Math.abs(total_secondes);
  }

  if (total_secondes > 0) {
    var jours = Math.floor(total_secondes / (60 * 60 * 24));
    var heures = Math.floor(
      (total_secondes - jours * 60 * 60 * 24) / (60 * 60)
    );

    minutes = Math.floor(
      (total_secondes - (jours * 60 * 60 * 24 + heures * 60 * 60)) / 60
    );

    secondes = Math.floor(
      total_secondes - (jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)
    );
    // var et = "et";
    var mot_jour = "jours,";
    var mot_heure = "heures";
    var mot_minute = "minutes";
    var mot_seconde = "secondes";

    if (jours == 0) {
      jours = "";
      mot_jour = "";
    } else if (jours == 1) {
      mot_jour = "jour,";
    }

    if (heures == 0) {
      heures = "";
      mot_heure = "";
    } else if (heures == 1) {
      mot_heure = "heure,";
    }

    if (minutes == 0) {
      minutes = "";
      mot_minute = "";
    } else if (minutes == 1) {
      mot_minute = "minute,";
    }

    if (secondes == 0) {
      secondes = "";
      mot_seconde = "";
      // et = "";
    } else if (secondes == 1) {
      mot_seconde = "";
    }

    if (minutes == 0 && heures == 0 && jours == 0) {
      // et = "";
    }

    compte_a_rebours.innerHTML =
      // prefixe +
      jours +
      " " +
      mot_jour +
      " " +
      heures +
      " " +
      mot_heure +
      " " +
      minutes +
      " " +
      mot_minute +
      // " " +
      // et +
      " " +
      secondes +
      " " +
      mot_seconde;
  } else {
    compte_a_rebours.innerHTML = "Evénement en cours.";
  }

  var actualisation = setTimeout("compte_a_rebours();", 1000);
}

compte_a_rebours();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const body = document.body;
  const icon = toggle.querySelector("i");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("bx-moon", "bx-sun");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
      icon.classList.replace("bx-moon", "bx-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("bx-sun", "bx-moon");
      localStorage.setItem("theme", "light");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var glide = new Glide("#game-carousel", {
//     type: "carousel", // Carrousel (circular)
//     startAt: 0, // Démarre au premier élément
//     perView: 3, // Affiche 3 éléments à la fois
//     focusAt: "center", // Focalise sur l'élément du centre
//     gap: 20, // Espacement entre les éléments
//     autoplay: 3000, // Défilement automatique avec délai de 3 secondes
//     hoverpause: true, // Pause au survol
//     breakpoints: {
//       768: {
//         perView: 1, // Affiche un seul élément à la fois sur les écrans mobiles
//         gap: 10,
//         autoplay: true, // Autoplay actif même sur mobile
//       },
//     },
//   });

//   glide.mount();

//   // Sélectionner tous les liens de la navigation
//   const navLinks = document.querySelectorAll(".nav-links a");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault(); // Empêche le comportement par défaut du lien

//       // Récupérer l'ID de la section ciblée
//       const targetId = link.getAttribute("href").substring(1); // Enlever le '#' du href
//       const targetElement = document.getElementById(targetId); // Sélectionner la section

//       // Animation du défilement avec anime.js
//       anime({
//         targets: "html, body",
//         scrollTop: targetElement.offsetTop, // Position de la cible
//         easing: "easeInOutQuad", // Type d'animation
//         duration: 1000, // Durée de l'animation
//       });
//     });
//   });
// });
