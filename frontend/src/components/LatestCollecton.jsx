import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollecton = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-9 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic, dolorem autem modi voluptatum possimus
          praesentium error omnis natus.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((product, index) => (
          <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollecton;
