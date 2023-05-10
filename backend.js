function encriptarTxt() {
  let txtInput = document.getElementById("txtInput").value;
  if (
    txtInput.includes("a") == true ||
    txtInput.includes("e") == true ||
    txtInput.includes("i") == true ||
    txtInput.includes("o") == true ||
    txtInput.includes("u") == true
  ) {
    let newInputTxt = txtInput
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.getElementById("txtOutput").style.backgroundImage = "none";
    document.getElementById("smsText").innerHTML = "";
    document.getElementById("txtOutput").innerHTML = newInputTxt;
    document.getElementById("buttonCopy").style.display = "inline";
    document.getElementById("txtInput").value = "";
  } else {
    Swal.fire({
      title: "Oops...",
      text: "Campo vacío!",
    });
  }
}

function desencriptarTxt() {
  let txtInput = document.getElementById("txtInput").value;
  if (
    txtInput.includes("enter") == true ||
    txtInput.includes("imes") == true ||
    txtInput.includes("ai") == true ||
    txtInput.includes("ober") == true ||
    txtInput.includes("ufat") == true
  ) {
    let newInputTxt = txtInput
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("txtOutput").innerHTML = newInputTxt;
    document.getElementById("txtInput").value = "";
  } else {
    Swal.fire({
      title: "Oops...",
      text: "Campo vacío!",
    });
  }
}

function copiarTxt() {
  let txtEncriptado = document.getElementById("txtOutput");
  txtEncriptado.select();
  document.execCommand("copy");
  Swal.fire("Texto copiado!");
}
