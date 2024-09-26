# Welcome to flight service

# Project Setup

     - clone the project
     - execute `npm install` on the same path as of your root directory of the download project
     - create .env file on the root directory and add the following environment variable
         - PORT = 3000
     - Inside `src/config` folder add the config.json and then add following as a .json

     ```
      {
         "development":
         {
            "username": "root",
            "password": "Anilkumar123",
            "database": "Flights_Search_DB",
            "host": "127.0.0.1",
            "dialect": "mysql"
         },
      }
     ```

   ## DB Design
     - Airplane Table
     -Flight Table
     -Airport
     -City 
   
     - A flight belongs to an airplane but one airplane can be used in multiple flights.
     - A city has many airports but one airport belongs to a city.
     - One airport can have many flights,but a flight belongs to one airport.