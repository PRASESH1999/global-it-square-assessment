'use client';

import nodeJsAxiosInstance from '@/_apiServices/nodeJsAxiosInstance';
import { Input } from '@/_components/form-components/input';
import { Select } from '@/_components/form-components/select-field';
import { TextareaInput } from '@/_components/form-components/textarea-input';
import { PageHeader } from '@/_components/page-header';
import { Form, Formik } from 'formik';
import { Plus } from 'lucide-react';
import * as Yup from 'yup';

const initialValues: ProductFormValues = {
  name: '',
  price: 0,
  category: '',
  description: '',
  quantity: 0,
};

const categories = [
  { value: 'Food', label: 'Food' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Other', label: 'Other' },
];

const productValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  price: Yup.number()
    .positive('Price must be positive')
    .required('Price is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters')
    .required('Description is required'),
  quantity: Yup.number()
    .min(0, 'Quantity cannot be negative')
    .required('Quantity is required'),
});

type ProductFormValues = Yup.InferType<typeof productValidationSchema>;

export default function AddProductForm() {
  const handleSubmit = async (values: ProductFormValues) => {
    try {
      nodeJsAxiosInstance.post(
        process.env.NEXT_PUBLIC_NODE_JS_URL + 'Products',
        values,
      );
    } catch (error) {
      console.log(error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <PageHeader name="Add .NET Product" />
      <div className="bg-white rounded-lg p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={productValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="na@/_components/form-components/inputname"
                  label="Name"
                  name="name"
                  placeholder="Enter Name"
                />
                <Input
                  id="pri@/_components/form-components/inputprice"
                  label="Price"
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                />
                <Select
                  id="category"
                  name="category"
                  label="Category"
                  options={categories}
                />
                <Input
                  id="quanti@/_components/form-components/inputquantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  placeholder="Enter Quantity"
                />
              </div>
              <TextareaInput
                id="description"
                name="description"
                label="Add a Short Description"
                placeholder="Description"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-2 rounded-full shadow-elevation-1 hover:shadow-elevation-2 transition-shadow flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Plus className="mr-2" size={20} />
                  Add Product
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
