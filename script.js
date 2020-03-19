const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
      inputCitiesTo = document.querySelector('.input__cities-to'),
      dropdownCitiesTo = document.querySelector('.dropdown__cities-to');

const citiesApi = 'dataBase/cities.json',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      API_KEY = '0d684f68cc459a8d976b016cc1431ff5',
      calendar = 'http://min-prices.aviasales.ru/calendar_preload';
      
let city = [];

// получаем данные с сервера
const getData = (url, callback) => {
  const request = new XMLHttpRequest(); // объект запроса  
  request.open('GET', url); // получать данные и отправлять url

  request.addEventListener('readystatechange', () => {
    if (request.readyState !==4) return;
    if (request.status === 200) {
      callback(request.response);
    } else {
      console.error(request.status);
    }    
  });

  request.send();
};

// function expression. Вызывается только после объявления. const get = function() {}
// функция поиска нужного города, который содержит в названии введенные символы в инпут.  и вывода списка с подсказками
const showCity = (input, list) => {

  list.textContent = '';

  if (input.value !== '') {  
    const filterCity = city.filter((item) => {
      const fixItem = item.name.toLowerCase();
      return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('dropdown__city');
      li.textContent = item.name;
      list.append(li);
    });
  }
};

const selectCity = (event, input, list) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'li') {
    input.value = target.textContent;
    list.textContent = '';
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
  selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
  selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

// вызовы функций
getData(citiesApi, (data) => city = JSON.parse(data).filter(item => item.name));

// getData(citiesApi, (data) => {
//   city = JSON.parse(data).filter((item) => {
//     return item.name;
//   });   
// });
