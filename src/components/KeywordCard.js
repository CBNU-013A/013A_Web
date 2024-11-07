// src/components/KeywordCard.js
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function KeywordCard({ keyword, positiveCount, negativeCount, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  const totalCount = positiveCount + negativeCount;
  const positivePercentage = totalCount > 0 ? (positiveCount / totalCount) * 100 : 0;

  return (
    <div
      className="min-w-[150px] max-w-[150px] h-[220px] border rounded-lg p-4 text-center shadow-md bg-gray-800 text-white relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 삭제 버튼 - 호버 시에만 표시 */}
      {isHovered && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      )}

      {/* 원형 차트 */}
      <div className="w-24 h-24 mx-auto mb-2">
        <CircularProgressbar
          value={positivePercentage}
          text={`${Math.round(positivePercentage)}%`}
          styles={buildStyles({
            textColor: '#ffffff',
            pathColor: '#1f77b4',
            trailColor: '#d3d3d3',
          })}
        />
      </div>

      {/* 키워드 이름 */}
      <h3 className="text-lg font-semibold">{keyword}</h3>

      {/* 긍정/부정 리뷰 수 표시 */}
      <div className="text-sm mt-2">
        <p className="text-green-400">긍정: {positiveCount}개</p>
        <p className="text-red-400">부정: {negativeCount}개</p>
      </div>
    </div>
  );
}

export default KeywordCard;
