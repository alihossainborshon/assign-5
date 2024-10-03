document.getElementById('sec_1_btn').addEventListener('click', function(event) {
  event.preventDefault();

  const addMoney = getInputFieldValueById('sec_1_input');
  if (isNaN(addMoney)) {
    alert('Fail to add Money');
  }
  if (addMoney < 0) {
    alert('Negative is not donate');
    return;
  }
  const balance = getTextFieldValueById('sec_1_coin');
  const newBalance = balance + addMoney;
  document.getElementById('sec_1_coin').innerText = newBalance;
  const navCoin = getTextFieldValueById('nav_coin');
  const cutBalance = navCoin - addMoney;
  document.getElementById('nav_coin').innerText = cutBalance;

  // history section
  const p = document.createElement('p');
  p.innerHTML = `<p class="text-[#111111] text-xl font-bold">${addMoney} Taka is donate for famine-2024 at NoaKhAli, Bangladesh.</p>`;
  
  const now = new Date();
  const display = `<p class="text-[#616060]">Date: ${now}</p>`;
  const dateElement = document.createElement('p');
  dateElement.innerHTML = display;

  document.getElementById('history_container').appendChild(p);
  document.getElementById('history_container').appendChild(dateElement);
  
})

document.getElementById('sec_2_btn').addEventListener('click', function(event) {
  event.preventDefault();

  const addMoney = getInputFieldValueById('sec_2_input');
  if (isNaN(addMoney)) {
    alert('Fail to add Money');
  }
  if (addMoney < 0) {
    alert('Negative is not donate');
    return;
  }
  const balance = getTextFieldValueById('sec_2_coin');
  const newBalance = balance + addMoney;
  document.getElementById('sec_2_coin').innerText = newBalance;
  const navCoin = getTextFieldValueById('nav_coin');
  const cutBalance = navCoin - addMoney;
  document.getElementById('nav_coin').innerText = cutBalance;

  // history section
  const p = document.createElement('p');
  p.innerHTML = `<p class="text-[#111111] text-xl font-bold">${addMoney} Taka is Donate for Flood Relief in FenI, Bangladesh.</p>`

  const now = new Date(); 
  const display = `<p class="text-[#616060]">Date: ${now}</p>`;
  const dateElement = document.createElement('p');
  dateElement.innerHTML = display;

  document.getElementById('history_container').appendChild(p);
  document.getElementById('history_container').appendChild(dateElement);
})

document.getElementById('sec_3_btn').addEventListener('click', function(event) {
  event.preventDefault();

  const addMoney = getInputFieldValueById('sec_3_input');
  if (isNaN(addMoney)) {
    alert('Fail to add Money');
  }
  if (addMoney < 0) {
    alert('Negative is not donate');
    return;
  }
  const balance = getTextFieldValueById('sec_3_coin');
  const newBalance = balance + addMoney;
  document.getElementById('sec_3_coin').innerText = newBalance;
  const navCoin = getTextFieldValueById('nav_coin');
  const cutBalance = navCoin - addMoney;
  document.getElementById('nav_coin').innerText = cutBalance;

  // history section
  const p = document.createElement('p');
  p.innerHTML = `<p class="text-[#111111] text-xl font-bold">${addMoney} Taka is Donate for Aid for injured in the Quota Movement, Bangladesh.</p>`

  const now = new Date(); 
  const display = `<p class="text-[#616060]">Date: ${now}</p>`;
  const dateElement = document.createElement('p');
  dateElement.innerHTML = display;

  document.getElementById('history_container').appendChild(p);
  document.getElementById('history_container').appendChild(dateElement);
})