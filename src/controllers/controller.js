const authormodel=require('../models/authormodel')
const publishermodel=require('../models/publishermodel')
const bookmodel=require('../models/bookmodel')
const authorcreate=async function(req,res){
    let data=req.body;
    let saveddata=await authormodel.create(data);
    res.send(saveddata);
}
const publishercreate=async function(req,res){
    let data=req.body;
    let saveddata=await publishermodel.create(data);
    res.send(saveddata);
} 
const bookcreate=async function(req,res){
    
        const { bookName, authorid, price, rating, publisherid } = req.body;
        if (!authorid) {
          return res.status(400).send("Author id is required");
        }
        if (!publisherid) {
          return res.status(400).send("Publisher id is required");
        }
        try {
          const authorExists = await authormodel.exists({ _id: authorid });
          const publisherExists = await publishermodel.exists({ _id: publisherid });
          if (!authorExists) {
            return res.status(400).send("Author not found");
          }
          else if (!publisherExists) {
            return res.status(400).send("Publisher not found");
          }else{
            let saveddata=await bookmodel.create({bookName,authorid,price,rating,publisherid});
            let populate_data=await saveddata.populate('authorid publisherid');
            return res.send(populate_data);
          }
          
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
        
      
    
      
}
const bookshow=async function(req,res){
     let result=await bookmodel.find().populate('authorid publisherid')
     res.send(result);
} 

module.exports.authorcreate=authorcreate
module.exports.publishercreate=publishercreate
module.exports.bookcreate=bookcreate
module.exports.bookshow=bookshow