// src/components/KeywordModal.js
import { useState } from 'react';

function KeywordModal({ onClose, onAddKeyword }) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleAddClick = () => {
    onAddKeyword(keyword);
    setKeyword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">키워드 추가</h2>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          className="border p-2 rounded w-full mb-4"
          placeholder="키워드를 입력하세요"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-300 p-2 rounded">취소</button>
          <button onClick={handleAddClick} className="bg-blue-500 text-white p-2 rounded">추가</button>
        </div>
      </div>
    </div>
  );
}

export default KeywordModal;
