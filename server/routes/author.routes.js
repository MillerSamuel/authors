const AuthorController=require("../controllers/author.controller");

module.exports=(app)=>{
    app.get("/api/allAuthors",AuthorController.findAllAuthors)
    app.post("/api/addAuthor",AuthorController.addAuthor)
    app.get("/api/author/:id",AuthorController.findOneAuthor)
    app.put("/api/updateAuthor/:id",AuthorController.updateAuthor)
    app.delete("/api/deleteAuthor/:id",AuthorController.removeAuthor) 
}