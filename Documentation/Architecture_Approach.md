# Architectural Approach


We are choosing the Three-Layer Architecture:

- The `presentation layer`, which contains `View, Controller, Model` in the `MVC` pattern, interacts with the users.
- The `business logic layer` contains the entire logic of the program, most of the code stays here.
- The `data access layer` composes of persistent storage mechanism and the data access layer. It supports connection to the database and to perform insert, update, delete, get data from the database.

![OverallThreeTier](./Diagrams/OverallThreeTier.png)

## Deployment Diagram


<p align="center">
  <img src="https://github.com/anhnhivu/Restaurant-Application-Semester-211/blob/master/Documentation/Diagrams/UML-Deployment.drawio%20(2).png" width="800" />
 </p>



## Component Diagram

<p align="center">
  <img src="./Diagrams/component_diagram.png" width="750" />
 </p>

## Package Diagram


<p align="center">
  <img src="./Diagrams/package_diagram.png" width="800" />
 </p>
