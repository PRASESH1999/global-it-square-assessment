'use client';
import nodeJsAxiosInstance from '@/_apiServices/nodeJsAxiosInstance';
import { PageHeader } from '@/_components/page-header-with-button';
import { ProductCard } from '@/_components/product-card';
import { isAxiosError } from 'axios';
import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

async function getProducts() {
  try {
    const response = await nodeJsAxiosInstance.get(
      process.env.NEXT_PUBLIC_NODE_JS_URL + 'products',
    );
    return response.data.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(
        err.response?.data?.message ||
          err.message ||
          'Failed to fetch products',
      );
    }
    throw new Error('An unexpected error occurred.');
  }
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Use refactored function

        console.log('DATA L ', data);
        setProducts(data.products);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    console.log('ASDASD', products);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        name=".NET Products"
        buttonText="Add Product"
        buttonColor="text-text"
        ButtonIcon={PlusIcon}
        onClick={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name || ''}
              price={product.price || ''}
              description={product.description || ''}
              quantity={product.quantity || ''}
            />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
}
