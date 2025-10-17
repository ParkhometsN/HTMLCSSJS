export function DeleteVidget(Weather){
    let result = window.confirm('Удалить виджет?')
    if (result){
        Weather.remove()
    }else{
        console.log('no')
    }
}