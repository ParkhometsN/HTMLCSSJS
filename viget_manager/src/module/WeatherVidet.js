import { ContainerOfVigets } from "../contains.js";
import { DeleteVidget } from "./DeleteWidget.js";
export function GetWeatherViget() {
    const vigetWeatherItem = `
    <div id="weatherviget" class="backround_viget weatherviget">
      <p style="opacity: 0.4;">сейчас</p>
      <p style="color: palevioletred;" id="celsi"></p>
      <div class="f"><p id="city"></p></div>
      <p style="opacity: 0.5;">Ощущается как</p>
      <p style="color: palevioletred;" id="feels-like"></p>
    </div>
  `;
    ContainerOfVigets.insertAdjacentHTML('beforeend', vigetWeatherItem);
    DeleteVigetHandle()
}

function DeleteVigetHandle(){
    const VigetWeather = document.getElementById('weatherviget')
    VigetWeather.addEventListener('click', () => DeleteVidget(VigetWeather))
}
