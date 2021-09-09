let i, j;
let root = document.getElementById("root");

for (i = 1; i <= 9; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    root.appendChild(row);

    for (j = 1; j <= 9; j++) {
        let cell = document.createElement("div"); // <div>
        cell.setAttribute("class", "cell");
        let red = [255, 144, 135][1 + (i < j) - (i > j)]
        let green = [255, 238, 206][1 + (i < j) - (i > j)];
        let blue = [0, 144, 250][1 + (i < j) - (i > j)];
        cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        cell.innerText = i * j;
        row.appendChild(cell);
    }
    
}
