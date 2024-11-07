// src/components/ProductSelectModal.js
import React from 'react';

function ProductSelectModal({ similarProducts, onClose, onSelectProduct }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">제품 선택</h2>
        <p className="mb-4 text-gray-600">제품명</p>
        <ul className="mb-4">
          {similarProducts.map((product, index) => (
            <li
              key={index}
              onClick={() => onSelectProduct(product)}
              className="cursor-pointer border-b py-2 hover:bg-gray-100"
            >
              {product.title}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-300 p-2 rounded">돌아가기</button>
          <button onClick={() => onSelectProduct(null)} className="bg-black text-white p-2 rounded">
            분석하러 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSelectModal;
