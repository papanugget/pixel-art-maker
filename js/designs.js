// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//var declarations
let col = document.getElementById("input_height");
let row = document.getElementById("input_width");
const submit = document.getElementById("submit");
let color = document.getElementById("colorPicker");
let grid = document.getElementById("pixel_canvas");
let eraser = document.getElementById('eraserCheck');


//event listeners
//get value for columns / rows
col.addEventListener("change", function(){
    col = this.value;
});
row.addEventListener("change", function(){
    row = this.value;
});
color.addEventListener("change", function(){
    color = this.value || "#fff";
});
submit.addEventListener("click", function(e){
    e.preventDefault();
    // alert("button clicked");
    // console.log(col);
    // console.log(row);
    // console.log(color);
    makeGrid();
});
eraser.addEventListener('click', function(){
    eraser = this.checked;
    grid.addEventListener('click', function(e){
        if(eraser){
            grid.style.cursor = "crosshair";
            e.target.style = null;
        }
    });
});

// function eraseCell(){
//     eraser = this.checked;
//     // console.log(eraser);
//     grid.addEventListener('click', function(e){
//         if(eraser){
//             console.log(e.target);
//             e.target.style = null;
//         }
//     });
// }

function makeGrid() {
    //clear old grid
    clearGrid();
    //nest loops for cols and rows of grid
    //loop through rows 
    // console.log(col + " Columns");
    // console.log(row + " Rows");
    // console.log(color + " is the color clicked");
    for(let i = 0; i < row; i++){
        //build rows according to val
        let tr = grid.appendChild(document.createElement("tr"));
        //loop thru col
        for(let j = 0; j < col; j++){
            //build cells and add event listener for color change
            let td = document.createElement('td');
            // let mousedown = false;
            // if(mousedown){
            //     grid.addEventListener("mousemove", function(e){
            //         e.target.style.backgroundColor = color;
            //     });
            // }
            tr.appendChild(td).addEventListener("click", function(e){
                e.target.style.backgroundColor = "#000" || color;
            });  
        }
    }
}

//function to clear grid on submit
// function clearGrid(){
//     //check if grid has rows and columns
//     let gridRows = document.getElementsByTagName("tr");
//     let gridCols = document.getElementsByTagName("td");
//     if(gridRows.length > 0 && gridCols.length > 0){
//         // console.log(gridRows);
//         for(var i = 0; i < gridCols.length; i++){      //console.log(gridCols[i]);
//              grid.removeChild();
//         }
//     }
// }
//removeChild never worked for me. FUCK THAT SHIT

function clearGrid(){
    let gridRows = document.getElementsByTagName("tr");
    let gridCols = document.getElementsByTagName("td");
    if(gridRows.length > 0 && gridCols.length > 0){
        // console.log(grid.innerHTML);
        grid.innerHTML = null;
    }
}
