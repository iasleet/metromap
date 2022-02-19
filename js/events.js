stations = document.querySelectorAll("text"); // получение всех элементов названий станций
stations.forEach((s) => {

  s.flag = false;
  s.onclick = function () {
    if (s.getAttribute("fill") == "Firebrick")
    {
    s.setAttribute("fill", "gray");
    s.setAttribute("font-size", "14");
    s.setAttribute("font-weight", "400");
    s.flag = false;
  }
    else{
    //установление для каждого обработку события клика мыши (s=stations[i])
    parts = s.querySelectorAll("tspan"); //если в две строчки
    n1 = parts.length;
    if (n1 > 0) {
      for (i = 0; i < n1; i++) {
        parts[i].setAttribute("fill", "Firebrick");
        parts[i].setAttribute("font-size", "20");
        parts[i].setAttribute("font-weight", "900");
      }
    } else {
      s.setAttribute("fill", "Firebrick"); //изменение атрибута заливка на красный(в коде можно посмотреть какие есть атрибуты возможные и в инете)
      s.setAttribute("font-size", "20");
      s.setAttribute("font-weight", "900");
    }
    s.flag = true;

  }
  }
  
  ;

  //console.log(s);

  s.onmouseover = () => {
    if (!s.flag) {
    s.setAttribute("font-size", "20");
    s.setAttribute("font-weight", "500");
    }
  }; // при наведении мыши увеличение размера (правда некоторые станции двоятся)

  /*альтернативы:
    s.onmouseover = function() {s.setAttribute('font-size', "20");} //более длинная но понятная запись
    s.addEventListener('mouseover', () => {s.setAttribute('font-size', "20");}); //так и не пон чем отличается но мне не нрав */
  s.onmouseout = () => {
    if (!s.flag) {
      s.setAttribute("font-size", "14");
      s.setAttribute("font-weight", "400");
    }

  };

});