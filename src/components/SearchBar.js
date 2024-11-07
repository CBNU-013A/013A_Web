// src/components/SearchBar.js
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue); // 검색어를 부모 컴포넌트로 전달
    setInputValue(''); // 입력 필드 초기화
  };

  return (
    <div className="flex justify-center items-center my-4">
      <label htmlFor="search" className="mr-2 text-gray-700 font-medium">제품명</label>
      <input
        type="text"
        id="search"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:border-gray-500"
        placeholder="제품 이름 입력"
      />
      <button onClick={handleSearchClick} className="ml-2 bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-800">
        검색
      </button>
    </div>
  );
}

export default SearchBar;
