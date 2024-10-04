import mongoose, { Document, Model, Schema, Types } from "mongoose";
interface CategoryItem {
  _id?: Types.ObjectId;
  name: string;
  selected: boolean;
}
interface CategoryDocument extends Document {
  name: string;
  items: CategoryItem[];
}
const categoryItemSchema: Schema = new Schema<CategoryItem>({
  name: { type: String, required: [true, "Please enter an item"] },
  selected: { type: Boolean, default: false },
});
const categorySchema: Schema = new Schema<CategoryDocument>({
  name: { type: String, required: [true, "Please enter a category"] },
  items: { type: [categoryItemSchema], required: true },
});
const Category: Model<CategoryDocument> = mongoose.model<CategoryDocument>(
  "Category",
  categorySchema
);
export default Category;
