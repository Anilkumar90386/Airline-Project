const { City }=require('../models/index')

class CityRepository{
    async createCiyt({name}){
        try{
           const city=await City.create({name});
           return city;
        }
        catch(error)
        {
            console.log("Something went Wrong");
            throw{error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true
        }
        catch(error)
        {
            console.log("Something went wrong");
            throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:CityId
                }
            });
            return city;
        }
        catch(error)
        {
            console.log("Something went wrong");
            throw{error};
        }
    }
    async getCity(CityId){
        try{
             const city=await City.findByPK(cityId);
        }
        catch(error)
        {
            console.log("Something went wrong");
            throw{error};
        }
    } 
}
module.exports=CityRepository;