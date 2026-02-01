const tabla = document.getElementById("tabla");

fetch("/test.json")
  .then(res => res.json())
  .then(adatok => {
    adatok.forEach(elem => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${elem.nev}</td>
        <td>${elem.vernyomas.szisztoles}</td>
        <td>${elem.vernyomas.diasztoles}</td>
      `;

      tabla.appendChild(tr);
    });
  })
  .catch(err => {
    console.error("Hiba az adatok betöltésekor:", err);
  });
