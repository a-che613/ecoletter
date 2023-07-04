
const progressBar = document.getElementById("progress_bar");
const progressStatus = document.getElementById("progress_status");

window.addEventListener("scroll", () => {
  // const scrollY = window.scrollY;
  // const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  // const progress = scrollY / scrollHeight;

  // progressBar.style.width = progress * 100 + "%";
  // progressStatus.innerHTML = Math.round(progress * 100) + "%";

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
});