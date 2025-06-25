// Fake online users (test məqsədi ilə)
document.getElementById('online-users').innerText = Math.floor(Math.random() * 20 + 1);

let currentCategory = "";

function openForm(category) {
  currentCategory = category;
  document.getElementById("popup").classList.remove("hidden");
}

function share() {
  const inputs = document.querySelectorAll("#popup input");
  const data = {
    name: inputs[0].value,
    desc: inputs[1].value,
    img: inputs[2].value,
    price: inputs[3].value,
    category: currentCategory
  };

  // BURADA SADECE Konsolda saxlanılır, amma istəsən Github JSON faylına yaza bilərik!
  console.log("Yeni xidmət:", data);
  alert("Xidmət uğurla əlavə olundu!");
  document.getElementById("popup").classList.add("hidden");
}
