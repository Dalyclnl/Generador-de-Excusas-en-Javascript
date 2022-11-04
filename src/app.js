/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#ebtn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generatexcuse();
  });

  function generatexcuse() {
    var myActor = ["uron", "camello", "abuela", "raton", "sombra", "donNadie"];
    var myAcc = ["desaparecio", "lavó", "quemó", "robó", "perdió", "tragó"];
    var myWork = ["trabajo", "dibujo", "maqueta", "reporte", "investigacion"];

    var who = myActor[Math.round(Math.random() * (myActor.length - 1))];
    var did = myAcc[Math.round(Math.random() * (myAcc.length - 1))];
    var what = myWork[Math.round(Math.random() * (myWork.length - 1))];

    return ["<div>Mi " + who + " " + did + "<br> mi " + what + ".</div>"];
  }
};
