const Author=require("../models/author.model");


module.exports.findAllAuthors=(req,res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors})
        })
        .catch(err=>{
            res.json({message:"something went wrong",error:err})
        })
}

module.exports.addAuthor=(req,res)=>{
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({results:newAuthor})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })
}

module.exports.findOneAuthor=(req,res)=>{
    Author.findOne({_id: req.params.id})
        .then(Author=>{
            res.json({results:Author})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })

}

module.exports.updateAuthor=(req,res)=>{
    Author.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then(updatedAuthor=>{
        res.json({results:updatedAuthor})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}

module.exports.removeAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(deletedAuthor=>{
        res.json({results:deletedAuthor})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}