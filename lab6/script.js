document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("https://randomuser.me/api")
    .then((response) => {
      if (!response.ok) throw new Error("Помилка завантаження даних");
      return response.json();
    })
    .then((data) => {
      const user = data.results[0];

      const card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML = `
        <img src="${user.picture.medium}" alt="User photo">
        <p><b>Місто:</b> ${user.location.city}</p>
        <p><b>Номер телефону:</b> ${user.cell}</p>
        <p><b>Країна:</b> ${user.location.country}</p>
        <p><b>Email:</b> ${user.email}</p>
      `;
      document.getElementById("output").appendChild(card);
    })
    .catch((error) => {
      console.error(error);
    });
});
