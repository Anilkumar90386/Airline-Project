const express = require("express");
const {City} =require('./models/index')
const CityRepository=require('./repository/city-repository')
const bodyParser=require("body-parser");
const { PORT } = require("./config/serverConfig");
const setUpStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.listen(PORT,  () => {
    console.log(`Server is started ${PORT}`);
      const repo=new CityRepository();
      repo.deleteCity(5);
  });
};
setUpStartServer();
