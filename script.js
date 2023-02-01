const opener = document.querySelector(".mob-open");
console.log(opener);
const closer = document.querySelector(".mob-close");
console.log(closer)

const wrapper = document.querySelector(".mob-wrapper").classList;

opener.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});

closer.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});