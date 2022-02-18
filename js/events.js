stations = document.querySelectorAll('text') // получение всех элементов названий станций
stations.forEach(s => s.addEventListener('click', () => { //установление для каждого обработку события клика мыши (s=stations[i])
    parts = s.querySelectorAll('tspan') //если в две строчки
    n1=parts.length;
    if (n1 > 0) {
        for (i = 0; i < n1; i++) {
            parts[i].setAttribute('fill', "red");
        }
    } else {
        s.setAttribute('fill', "red");  //изменение атрибута заливка на красный(в коде можно посмотреть какие есть атрибуты возможные и в инете)
    }
    //console.log(s);
}));