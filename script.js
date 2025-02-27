const colorRadios = document.querySelectorAll("[name='color']");
const hoverRadios = document.querySelectorAll("[name='hover']");
const ul = document.querySelector("ul");

function handleSubmit() {
  const itemNameInput = document.querySelector("#item");
  const itemCountInput = document.querySelector("#num");

  ul.innerHTML = "";

  for (let i = 0; i < itemCountInput.value; i++) {
    const li = document.createElement("li");
    li.textContent = itemNameInput.value + (i + 1);
    ul.appendChild(li);
  }

  const lis = document.querySelectorAll("ul li");

  handleChange();
}

function handleChange() {
  colorRadios.forEach((cr) => {
    const lis = document.querySelectorAll("ul li");
    lis.forEach((li) => {
      let prevColor;
      cr.addEventListener("change", () => {
        li.style.color = cr.id;
        prevColor = cr.id;
      });

      hoverRadios.forEach((hr) =>
        hr.addEventListener("change", () => {
          li.addEventListener("mouseover", () => (li.style.color = hr.id));
          li.addEventListener("mouseout", () => (li.style.color = prevColor));
        })
      );
    });
  });
}
handleChange();

document.querySelector("#button").addEventListener("click", handleSubmit);
