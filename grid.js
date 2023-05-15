function createGrid() {
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        var div = document.createElement("div");
        div.setAttribute("style","outline: 1px solid red;")
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.border = "1px solid black";
        div.textContent = i + ", " + j;
        document.getElementById("container").appendChild(div);
      }
    }
  }
  
  createGrid();