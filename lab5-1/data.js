function formData() {
  const data = document.querySelector("form");

  const pibField = data.elements["pib"];
  const groupField = data.elements["group"];
  const phoneField = data.elements["phone"];
  const idCardField = data.elements["idCard"];
  const facultyField = data.elements["faculty"];

  const pib = data.elements["pib"].value.trim();
  const group = data.elements["group"].value.trim();
  const phone = data.elements["phone"].value.trim();
  const idCard = data.elements["idCard"].value.trim();
  const faculty = data.elements["faculty"].value.trim();

  [pibField, groupField, phoneField, idCardField, facultyField].forEach((f) =>
    f.classList.remove("error")
  );

  if (
    pib == null ||
    pib.length < 5 ||
    !/^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/.test(pib)
  ) {
    alert("Заповніть ваше ім'я!");
    pibField.classList.add("error");
  }

  if (
    group == null ||
    group.length < 5 ||
    !/^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2}-\d{2}$/.test(group)
  ) {
    alert("Введіть коректну групу!");
    groupField.classList.add("error");
    return false;
  }

  if (
    phone == null ||
    phone.length < 15 ||
    !/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone)
  ) {
    alert("Введіть коректний номер телефону!");
    phoneField.classList.add("error");
    return false;
  }

  if (
    idCard == null ||
    idCard.length < 10 ||
    !/^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2} №\d{6}$/.test(idCard)
  ) {
    alert("Введіть коректний номер ID-карти!");
    idCardField.classList.add("error");
    return false;
  }

  if (
    faculty == null ||
    faculty.length < 4 ||
    !/^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2,10}$/.test(faculty)
  ) {
    alert("Введіть коректний факультет!");
    facultyField.classList.add("error");
    return false;
  }

  const win = window.open("", "OutputWindow", "width=400,height=400");
  win.document.write(`
          <html>
            <head>
              <title>Введені дані</title>
              <style>
                body { font-family: Arial; padding: 20px; }
                h2 { color: #333; }
                p { margin: 8px 0; }
              </style>
            </head>
            <body>
              <h2>Введена інформація:</h2>
              <p><b>ПІБ:</b> ${pib}</p>
              <p><b>Група:</b> ${group}</p>
              <p><b>Телефон:</b> ${phone}</p>
              <p><b>ID-картка:</b> ${idCard}</p>
              <p><b>Факультет:</b> ${faculty}</p>
            </body>
          </html>
        `);
  win.document.close();

  return false;
}
