// Animate skill bars on page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      bar.style.width = bar.getAttribute("style").split("--progress:")[1];
    });
  }, 100);

  // Download CV button functionality
  document.getElementById("downloadBtn").addEventListener("click", function () {
    alert(
      "The download functionality would be implemented here in a production environment."
    );
    // In a real implementation, this would link to a PDF download or generate one
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
