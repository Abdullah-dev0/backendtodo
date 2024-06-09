import Todo from "../models/Todo.js";

export const gettodos = async (req, res) => {
   try {
      // The empty object { } is a placeholder that tells MongoDB to return all documents in the collection.If you want to filter
      const Todos = await Todo.find({});

      if (!Todos) {
         return res.status(404).json({
            success: false,
            message: "data not found",
         });
      }
      //send success response to client
      res.status(200).json({
         success: true,
         message: "Data fetched successfully",
         //sent response data to client
         data: Todos,
      });
   } catch (error) {
      console.error(error);
      console.log(error.message);
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         data: "Fail to fetch data",
      });
   }
};
