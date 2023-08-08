document.addEventListener("DOMContentLoaded", function () {
  var readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      var postContent = this.parentNode.querySelector(".post-content");
      var full = postContent.querySelector(".full");

      if (postContent.classList.contains("expanded")) {
        postContent.classList.remove("expanded");
        full.style.display = "none";
        this.textContent = "Read More";
      } else {
        postContent.classList.add("expanded");
        full.style.display = "block";
        this.textContent = "Read Less";
      }

      this.focus();
    });
  });
});

function filterPosts(category) {
  var blogPosts = document.querySelectorAll(".blog-post");
  var welcomeSection = document.querySelector(".welcome-section");

  blogPosts.forEach(function (post) {
    if (category === "fnaf" && !post.classList.contains("fnaf")) {
      post.style.display = "none";
    } else if (category === "dragons" && !post.classList.contains("dragons")) {
      post.style.display = "none";
    } else if (category === "about") {
      if (post.classList.contains("about")) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    } else {
      post.style.display = "block";
    }
  });

  if (category === "about") {
    welcomeSection.style.display = "none";
  } else {
    welcomeSection.style.display = "block";
  }
}