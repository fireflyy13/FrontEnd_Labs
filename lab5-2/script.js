const cells = document.querySelectorAll("table td");
const cell17 = cells[16];
const colorpicker = document.querySelector("#colorPicker");
console.log(cell17);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorRows() {
  const start = parseInt(document.getElementById("startRow").value);
  const rows = document.querySelectorAll("table tr");

  rows.forEach((r) => (r.style.backgroundColor = ""));

  for (let i = start - 1; i < rows.length; i += 2) {
    rows[i].style.backgroundColor = colorpicker.value;
  }

  document.getElementById("rowForm").remove();
}

cell17.addEventListener("mouseover", () => {
  cell17.style.backgroundColor = getRandomColor();
});

cell17.addEventListener("click", () => {
  cell17.style.backgroundColor = colorpicker.value;
});

cell17.addEventListener("dblclick", () => {
  if (document.getElementById("startRow")) return;

  const html = `
        <div id="rowForm" style="margin:20px 0;">
          <label>Почати з рядка №:</label>
          <input type="number" id="startRow" min="1" style="width:60px" />
          <button onclick="colorRows()">Змінити колір</button>
        </div>
      `;
  document.body.insertAdjacentHTML("beforeend", html);
});
