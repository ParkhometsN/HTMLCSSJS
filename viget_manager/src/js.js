import { GetWeatherViget } from "./module/WeatherVidet.js";
import { GetTimeViget } from "./module/TimeViget.js";
import { GetThemeVidget } from "./module/ThemeVidget.js";
import { GetYandexMap } from "./api_yandex.js";
import { AlertError } from './module/alert.js';

const AddVIgetButton = document.getElementById('get_viget');
const ModalChooseViget = document.querySelector('.modal_open_choose_viget');
let isvisible = false
let CloseOpenText = false
AddVIgetButton.addEventListener('click', AddNewViget)
function AddNewViget(){
  ModalChooseViget.style.display = isvisible ? 'none' : 'inline';
  AddVIgetButton.textContent = CloseOpenText ? 'Добавить виджет' : 'Закрыть';
  isvisible = !isvisible
  CloseOpenText = !CloseOpenText
}

// виджет погоды
const ButtonGetWeather = document.getElementById('get_weather_button')
ButtonGetWeather.addEventListener('click', GetWeatherViget)
//виджет времени
const ButtonGetTime = document.getElementById('GetTime');
ButtonGetTime.addEventListener('click', GetTimeViget)
//виджет темы
const ButtonGetTheme = document.getElementById('GetTheme');
ButtonGetTheme.addEventListener('click', GetThemeVidget)
// виджет карты
const ButtonGetMap = document.getElementById('GetMap');
ButtonGetMap.addEventListener('click', GetYandexMap)
