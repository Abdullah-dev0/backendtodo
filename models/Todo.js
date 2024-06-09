import Mongoose from "mongoose";

const Todoschema = new Mongoose.Schema({
   title: {
      type: String,
      required: true,
      maxlength: 30,
   },
   description: {
      type: String,
      required: true,
      maxLength: 300,
   },
   createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
   },
   updatedAt: {
      type: Date,
      required: true,
      default: Date.now(),
   },
});

const Todo = Mongoose.model("Todo", Todoschema);
export default Todo;
