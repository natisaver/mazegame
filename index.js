let maze = $(".maze"); //1) document.querySelector(".maze");
let ctx = maze.getContext("2d"); //2) make a 2d context on canvas

//3) We need to make a Cell class & a Grid/Maze class:

// --Maze Class--
class Maze {
  constructor(size, rows, columns) {
    this.size = size;
    this.grid = []; //set up the grid
    this.rows = rows;
    this.columns = columns;
    this.stack = []; //stack to push pop for maze generating algo


  }
  
  generate() { //4) double nested loop to create 2 arrays (row&col) to populate the cells to make maze
    for (let r=0; r < this.rows; r++) { //4a) first loop for rows
      let rowArr = [];
      for (let c=0; c < this.columns; c++) { //4b loop for each col per row
        let cell = new Cell(r, c, this.grid, this.size); //5) create cell obj
        rowArr.push(cell) //6) push it to rowArr in loop above
      }
      this.grid.push(rowArr);
    }
  }

}

// --Cell Class--
class Cell {
  constructor(rowNo, colNo, grid, gridSize) {
    this.rowNo = rowNo; //coordinate of each row
    this.colNo = colNo; //coordinate of each col
    this.grid = grid;
    this.gridSize = gridSize;
    this.visited = false;
    this.walls = { //defining properties of a wall object, 4 walls for every cell
      topWall: true,
      rightWall: true,
      leftwall: true,
      bottomWall:true,
    };
  }
}
