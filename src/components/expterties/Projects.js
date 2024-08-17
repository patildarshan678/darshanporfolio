import React from 'react'
import ProjectCard from './ProjectCard'
const projectcars = [
  { Text: "A CSV generator from JSON project converts JSON data into a CSV format, enabling easier data manipulation and analysis in spreadsheet applications. It typically involves parsing JSON objects and converting them into comma-separated values, handling nested structures, and generating CSV files for export.", 
    Title: "CSV Genarator",
     Image: "" },
  { Text: "A Tic-Tac-Toe game project is a simple interactive application where two players take turns to place their symbols (X or O) on a 3x3 grid. The game ends when one player aligns three symbols horizontally, vertically, or diagonally, or when the grid is filled without a winner, resulting in a draw. The project focuses on implementing game logic, user interface, and handling player interactions.", 
    Title: "Tic-Tac-Toe", 
    Image: "" },
  { Text: "A CSV Analyzer project processes CSV files to extract and visualize data, then generates a PDF report with charts, graphs, and summaries. The tool enables users to convert raw data into insightful visual representations, facilitating easy analysis and presentation in a professional PDF format.",
     Title: "CSV analyzer",
      Image: "" }
];

function Projects() {
  return (
    <div className='projects_div'>
      {projectcars.map((item) => (
        <ProjectCard Text={item.Text} Title={item.Title} Image={item.Image} />
      ))}

    </div>
  )
}

export default Projects