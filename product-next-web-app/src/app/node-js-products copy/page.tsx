import nodeJsAxiosInstance from '@/_apiServices/nodeJsAxiosInstance';
import { PageHeader } from '@/_components/page-header-with-button';
import { ProductCard } from '@/_components/product-card';
import { PlusIcon } from 'lucide-react';

async function getProducts() {
  // Fetch data using axios
  const response = await nodeJsAxiosInstance.get(
    'https://localhost:7144/api/Products',
  );
  console.log('RESPONSE :', response);
  return response.data.products;
}

export default async function Home() {
  const products = await getProducts();
  console.log('PRODUCTS :', products);
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        name="Node.Js Products"
        buttonText="Add Product"
        buttonColor="text-text"
        ButtonIcon={PlusIcon}
        onClick={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name || ''}
            price={product.price || ''}
            description={product.description || ''}
            quantity={product.quantity || ''}
          />
        ))}
      </div>
    </div>
  );
}
