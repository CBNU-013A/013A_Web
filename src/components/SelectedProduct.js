// src/components/SelectedProduct.js
import { useState } from 'react';
import KeywordCard from './KeywordCard';
import KeywordModal from './KeywordModal';

function SelectedProduct({ product }) {
  const [emotionData, setEmotionData] = useState([
    { keyword: "가격", positiveCount: 15, negativeCount: 5 },
    { keyword: "사이즈", positiveCount: 10, negativeCount: 8 },
    { keyword: "편안함", positiveCount: 20, negativeCount: 3 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // 현재 선택된 정렬 기준

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddKeyword = (keyword) => {
    setEmotionData([
      ...emotionData,
      { keyword, positiveCount: 0, negativeCount: 0 },
    ]);
  };

  // 키워드 삭제 기능
  const handleDeleteKeyword = (keyword) => {
    const updatedEmotionData = emotionData.filter((item) => item.keyword !== keyword);
    setEmotionData(updatedEmotionData);
  };

  // 긍정 비율 높은 순 정렬
  const sortByPositiveHighToLow = () => {
    const sortedData = [...emotionData].sort((a, b) => b.positiveCount - a.positiveCount);
    setEmotionData(sortedData);
    setSortOrder("highToLow"); // 정렬 기준 설정
  };

  // 긍정 비율 낮은 순 정렬
  const sortByPositiveLowToHigh = () => {
    const sortedData = [...emotionData].sort((a, b) => a.positiveCount - b.positiveCount);
    setEmotionData(sortedData);
    setSortOrder("lowToHigh"); // 정렬 기준 설정
  };

  return (
    <div className="border rounded-lg p-4 my-8">
      <h2 className="text-lg font-semibold mb-4">선택한 제품: {product.title}</h2>

      {/* 정렬 버튼 */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={sortByPositiveHighToLow}
          className={`px-4 py-2 rounded-lg transition-colors ${
            sortOrder === "highToLow" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          긍정 비율 높은 순
        </button>
        <button
          onClick={sortByPositiveLowToHigh}
          className={`px-4 py-2 rounded-lg transition-colors ${
            sortOrder === "lowToHigh" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          긍정 비율 낮은 순
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-4 py-4">
        {/* 추가 버튼 */}
        <div
          className="min-w-[150px] border rounded-lg p-4 flex items-center justify-center text-2xl font-bold cursor-pointer transition duration-300
          hover:bg-gray-100 hover:border-blue-400 hover:shadow-lg"
          onClick={handleOpenModal}
        >
          +
        </div>
        {emotionData.map((data, index) => (
          <KeywordCard
            key={index}
            keyword={data.keyword}
            positiveCount={data.positiveCount}
            negativeCount={data.negativeCount}
            onDelete={() => handleDeleteKeyword(data.keyword)} // 삭제 기능 연결
          />
        ))}
      </div>

      {isModalOpen && (
        <KeywordModal onClose={handleCloseModal} onAddKeyword={handleAddKeyword} />
      )}
    </div>
  );
}

export default SelectedProduct;
