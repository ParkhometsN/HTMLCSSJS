import { ContainerOfVigets } from "../contains.js";

export function AlertError (textofAlert){
    const Error = `
    <h1 style='position: absolute;'>${textofAlert}</h1>
    `
    ContainerOfVigets.insertAdjacentHTML('beforeend', Error)
    setTimeout(() => {
        Error.remove()
    }, 2000);
}