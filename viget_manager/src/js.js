fetch('http://wttr.in/saint-petersburg?format=j1')
  .then(response => response.json())
  .then(data => {
    // Извлекаем нужные данные
    const city = data.nearest_area[0].areaName[0].value;
    const currentTemp = data.current_condition[0].temp_C;
    const feelsLike = data.current_condition[0].FeelsLikeC;
    
    // Получаем ссылки на DOM элементы
    const celsi = document.getElementById('celsi');
    const cityt = document.getElementById('city');
    
    console.log(`Город: ${city}`);
    console.log(`Температура: ${currentTemp}°C`);
    console.log(`Ощущается как: ${feelsLike}°C`);
    
    // Правильное присвоение значений элементам
    celsi.textContent = `${currentTemp}°C`;
    cityt.textContent = city;
    
    // Если хотите показать "ощущается как" в отдельном элементе
    const feelsLikeElement = document.getElementById('feels-like');
    feelsLikeElement.textContent = ` ${feelsLike}°C`;

    // Сохраняем в переменные
    const temperature = currentTemp;
    const cityName = city;
    
    // Используем переменные дальше
    displayWeather(cityName, temperature);
  })
  .catch(error => console.error('Ошибка:', error));

function displayWeather(city, temp) {
  console.log(`В городе ${city} сейчас ${temp}°C`);
}

const wheaterviget = document.getElementById('weatherviget')
wheaterviget.addEventListener('click', function(){
    const widget = document.querySelector('.weatherviget')
    let result = confirm("Убрать виджет?");
        if (result) {
            console.log("Пользователь нажал OK (Да)");
            widget.style.display = 'none'
            localStorage.setItem({widget})
        } else {
            console.log("Пользователь нажал Отмена (Нет)");
            return
        }
})

const timetime = document.getElementById('time');

function updateTime() {
    const now = new Date();
    
    // Форматированное время (ЧЧ:ММ:СС)
    const timeString = now.toLocaleTimeString('ru-RU');
    timetime.textContent = timeString; // Например: "14:30:25"
}

updateTime();
setInterval(updateTime, 1000);