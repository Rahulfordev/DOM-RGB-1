const main = document.getElementById("root");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const gbColor = generateGRB();
  main.style.backgroundColor = gbColor;
});

function generateGRB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
