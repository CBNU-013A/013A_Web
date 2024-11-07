// src/components/ProductCard.js
import { useState } from 'react';

function ProductCard({ image, title, price, onClick, isSelected, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`min-w-[200px] max-w-[200px] border rounded-lg p-4 flex flex-col items-center cursor-pointer shadow-sm transition duration-300 ${
        isSelected ? 'border-blue-500' : 'border-gray-300'
      } hover:shadow-lg hover:border-blue-300 relative`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 삭제 버튼 - 호버 시에만 표시 */}
      {isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트가 카드 전체로 전달되지 않도록 함
            onDelete();
          }}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      )}

      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-4 text-lg font-semibold text-center">{title}</h2>
      <p className="text-gray-700 font-bold mt-2">{price}</p>
    </div>
  );
}

export default ProductCard;
