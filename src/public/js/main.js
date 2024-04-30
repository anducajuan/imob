export function runMainRoutine() {
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  });
}

import $ from "jquery";

export function toggleSidebar() {
  $("#sidebar").toggleClass("d-none");
  if ($("#sidebar").hasClass("d-none")) {
    adjustMainContentForHiddenSidebar();
  } else {
    adjustMainContentForVisibleSidebar();
  }
  updateToggleSidebarButtonText();
}

function adjustMainContentForHiddenSidebar() {
  $(".col-md-9")
    .removeClass("ml-sm-auto")
    .removeClass("col-lg-10")
    .addClass("col-lg-12");
}

function adjustMainContentForVisibleSidebar() {
  $(".col-md-9")
    .removeClass("col-lg-12")
    .addClass("ml-sm-auto")
    .addClass("col-lg-10");
}

function updateToggleSidebarButtonText() {
  $("#toggleSidebar").text(function (i, text) {
    return text === "Esconder Lateral" ? "Mostrar Lateral" : "Esconder Lateral";
  });
}

export function initializeMain() {
  $(document).ready(function () {
    $("#toggleSidebar").click(toggleSidebar);
  });
}
