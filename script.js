const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
      inputCitiesTo = document.querySelector('.input__cities-to'),
      dropdownCitiesTo = document.querySelector('.dropdown__cities-to');

const city = ['Москва', 'Санкт-петербург', 'Минск', 'Караганда', 'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Одесса', 'Калининград', 'Вроцлав', 'Ростов-на-Дону', 'Варшава', 'Рига', 'Киев'];


// function expression. Вызывается только после объявления. const get = function() {}

// функция поиска нужного города, который содержит в названии введенные символы в инпут.  и вывода списка с подсказками
const showCity = (input, list) => {

  list.textContent = '';

  if (input.value !== '') {  
    const filterCity = city.filter((item) => {
      const fixItem = item.toLowerCase();
      return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('dropdown__city');
      li.textContent = item;
      list.append(li);
    });
  }
};

// поиск в инпуте Откуда
inputCitiesFrom.addEventListener('input', () => {
  showCity(inputCitiesFrom, dropdownCitiesFrom);
});

// поиск в инпуте Куда
inputCitiesTo.addEventListener('input', () => {
  showCity(inputCitiesTo, dropdownCitiesTo);
});

// при клике на список с подсказками выводится нужное название в инпут
dropdownCitiesFrom.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'li') {
    inputCitiesFrom.value = target.textContent;
    dropdownCitiesFrom.textContent = '';
  }
});

dropdownCitiesTo.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'li') {
    inputCitiesTo.value = target.textContent;
    dropdownCitiesTo.textContent = '';
  }
});




