// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import SelectedProduct from './components/SelectedProduct';
import ProductSelectModal from './components/ProductSelectModal';
import img1 from './img/NB.webp';
import img2 from './img/af.webp';
import img3 from './img/cs.webp';

const demoProducts = [
  { id: "NBPDEF705W", title: "MR530AD (WHITE)", price: "₩119,000", image: "/images/product1.jpg" },
  { id: "AIR_FORCE_1", title: "에어 포스 1", price: "₩139,000", image: "/images/product2.jpg" },
  { id: "SLIP_ON", title: "클래식 슬립온 (화이트)", price: "₩69,000", image: "/images/product3.jpg" },
];

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  const productData = {
    "NBPDEF705W": { title: "NBPDEF705W / MR530AD (WHITE)", price: "₩119,000", image: img1 },
    "에어 포스 1": { title: "에어 포스 1 07 M (화이트)", price: "₩139,000", image: img2 },
    "클래식 슬립온": { title: "클래식 슬립온 (화이트)", price: "₩69,000", image: img3 }
  };

  const handleSearch = (productName) => {
    const similarProducts = Object.values(productData).filter(product =>
      product.title.includes(productName)
    );

    if (similarProducts.length > 0) {
      setSimilarProducts(similarProducts);
      setIsModalOpen(true);
    } else {
      alert("해당 제품을 찾을 수 없습니다.");
    }
  };

  const handleSelectProduct = (product) => {
    if (product) {
      setProducts((prevProducts) => [...prevProducts, product]);
      setSelectedProduct(product);
    }
    setIsModalOpen(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (product) => {
    // 선택된 제품이 아닌 경우에만 삭제 수행
    if (selectedProduct !== product) {
      setProducts(products.filter((item) => item !== product));
    } else {
      alert("선택된 제품은 삭제할 수 없습니다.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <SearchBar onSearch={handleSearch} />

      <div className="flex overflow-x-auto space-x-4 py-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            onClick={() => handleProductClick(product)}
            isSelected={selectedProduct === product}
            onDelete={() => handleDeleteProduct(product)} // 삭제 기능
          />
        ))}
      </div>

      <div className="mt-4">
        {selectedProduct && <SelectedProduct product={selectedProduct} />}
      </div>

      {isModalOpen && (
        <ProductSelectModal
          similarProducts={similarProducts}
          onClose={() => setIsModalOpen(false)}
          onSelectProduct={handleSelectProduct}
        />
      )}
    </div>
  );
}
export default App;
