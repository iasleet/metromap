stations = document.querySelectorAll("text"); // получение всех элементов названий станций
stations.forEach((s) => {
  s.onclick = function () {
    //установление для каждого обработку события клика мыши (s=stations[i])
    parts = s.querySelectorAll("tspan"); //если в две строчки
    n1 = parts.length;
    if (n1 > 0) {
      for (i = 0; i < n1; i++) {
        parts[i].setAttribute("fill", "red");
      }
    } else {
      s.setAttribute("fill", "red"); //изменение атрибута заливка на красный(в коде можно посмотреть какие есть атрибуты возможные и в инете)
    }
  };
  //console.log(s);

  s.onmouseover = () => {
    s.setAttribute("font-size", "20");
  }; // при наведении мыши увеличение размера (правда некоторые станции двоятся)

  /*альтернативы:
    s.onmouseover = function() {s.setAttribute('font-size', "20");} //более длинная но понятная запись
    s.addEventListener('mouseover', () => {s.setAttribute('font-size', "20");}); //так и не пон чем отличается но мне не нрав */

  s.onmouseout = () => {
    s.setAttribute("font-size", "14");
  }; // когда убираешь мышь размер обратно уменьшается 
});
