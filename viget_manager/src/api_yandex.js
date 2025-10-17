import { ContainerOfVigets } from "./contains.js";
import { AlertError } from './module/alert.js';
import { DeleteVidget } from "./module/DeleteWidget.js";

export function GetYandexMap() {
    const YaMapHtml = `
    <div id='MapViget' class="backround_viget MapVigettt">
        <div id="map" class="map_stiles"></div>
    </div>
    `;
    ContainerOfVigets.insertAdjacentHTML('beforeend', YaMapHtml);

    const mapElement = document.getElementById('map');
    if (!mapElement) {
        AlertError('Ошибка: не удалось создать элемент карты');
        return;
    }

    if (typeof ymaps === 'undefined') {
        AlertError('Ошибка: библиотека Yandex Maps не загружена');
        return;
    }

    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.872331, 30.320962],
            zoom: 14,
            controls: ['zoomControl'],
            suppressMapOpenBlock: true
        });
    }

    DeleteVigetHandle();
}

function DeleteVigetHandle(){
    const VigetMap = document.getElementById('MapViget')
    VigetMap.addEventListener('click', () => DeleteVidget(VigetMap))
}