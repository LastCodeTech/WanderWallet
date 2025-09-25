 // Toggle Mobile Menu
   document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle code
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fa-solid fa-bars"></i>' 
        : '<i class="fa-solid fa-xmark"></i>';
    });
  }

 


async function getBaseCurrencies() {
  let response = await fetch("https://api.frankfurter.dev/v1/currencies");
  let data = await response.json();

  const select = document.getElementById("selectBase");

  Object.keys(data)
    .sort()
    .forEach(code => {
      let option = document.createElement("option");
      option.value = code;
      option.textContent = `${code.toUpperCase()} - ${data[code]}`;
      select.appendChild(option);
    });
}

// Get selected currency
document.getElementById("selectBase").addEventListener("change", (e) => {
  console.log("Selected currency:", e.target.value);
});

getBaseCurrencies();

async function getTargetCurrencies() {
  let response = await fetch("https://api.frankfurter.dev/v1/currencies");
  let data = await response.json();

  const select = document.getElementById("selectTarget");

  Object.keys(data)
    .sort()
    .forEach(code => {
      let option = document.createElement("option");
      option.value = code;
      option.textContent = `${code.toUpperCase()} - ${data[code]}`;
      select.appendChild(option);
    });
}

// Get selected currency
document.getElementById("selectTarget").addEventListener("change", (e) => {
  console.log("Selected currency:", e.target.value);
});

getTargetCurrencies();
// let selectBase = document.getElementById('selectBase');
// let selectTarget = document.getElementById('selectTarget');
// let amount = document.getElementById('amount');
// let screen = document.getElementById('screen');
// let convertNow = document.getElementById('convertNow');
// const amountt = amount.value;
// const fromm = selectBase.value;
// const too = selectTarget.value;
// function convert(fromm, too, amountt) {
//   fetch(`https://api.frankfurter.dev/v1/latest?base=${fromm}&symbols=${too}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       const convertedAmount = (amountt * data.rates[too]).toFixed(2);
//       // alert(`${amount} ${from} = ${convertedAmount} ${to}`);
//       screen.value.textContent=`${amountt} ${fromm} = ${convertedAmount} ${too}`
//     });
//   }
let selectBase = document.getElementById('selectBase');
let selectTarget = document.getElementById('selectTarget');
let amount = document.getElementById('amount');
let screen = document.getElementById('screen');
let convertNow = document.getElementById('convertNow');
let resultDiv = document.getElementById('resultDiv');

function convert() {
  const from = selectBase.value;
  const to = selectTarget.value;
  const amt = amount.value;

  fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amt * data.rates[to]).toFixed(2);
      screen.value = `${amt} ${from} = ${convertedAmount} ${to}`;
    })
    .catch(err => console.error("Error fetching conversion:", err));
}



convertNow.addEventListener('click',function(){
  resultDiv.classList.remove('hidden');
  convert();
  
})

  
});

