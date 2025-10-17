import { ContainerOfVigets } from "../contains.js";
import { DeleteVidget } from "./DeleteWidget.js";
export function GetTimeViget() {
    const TimeViget = `
            <div id='TimeViget' class="backround_viget timeviget">
                <p id="time">00:00:00</p>
            </div>
  `;
    ContainerOfVigets.insertAdjacentHTML('beforeend', TimeViget);
    DeleteVigetHandle()
}

function DeleteVigetHandle(){
    const VigetTime = document.getElementById('TimeViget')
    VigetTime.addEventListener('click', () => DeleteVidget(VigetTime))
}
