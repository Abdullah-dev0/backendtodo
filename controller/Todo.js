import Todo from "../models/Todo.js";

export const createtodos = async (req, res) => {
   try {
      //extract data from request body
      const { title, description } = req.body;
      //create new todo object and save it to database
      const response = await Todo.create({ title, description });
      //send success response to client
      res.status(200).json({
         success: true,
         message: "Data added successfully",
         //sent response data to client
         data: response,
      });
   } catch (error) {
      console.log(error);
      console.log(error.message);
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         data: "fail to add data",
      });
   }
};
