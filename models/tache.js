const mongoose=require('mongoose');
const tache = mongoose.model(
    "Taches-api",
    {
        titre:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        durée:{
            type:Number,
            require:true
        },
        couleur:{
            type:String,
            require:true
        },
        code:{
            type:String,
            require:true
        }
        
        


    },
    "Taches"
);
module.exports= {tache};