import mongoose, { Document, Schema } from 'mongoose';

// Product interface
interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  category: string;
}

// Product Schema
const productSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

// Product model based on the schema and interface
const Product = mongoose.model<IProduct>('products', productSchema);

export default Product;
