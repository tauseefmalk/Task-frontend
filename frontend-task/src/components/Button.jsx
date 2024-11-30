import React from 'react';

export default function Button({ color, label, onClick, className, startIcon, endIcon, ...props }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`px-4 py-2 rounded  flex items-center gap-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {startIcon && <span className="flex items-center"><img src={startIcon} alt="start icon" className="w-4 h-4" /></span>}
      <span>{label}</span>
      {endIcon && <span className="flex items-center"><img src={endIcon} alt="end icon" className="w-4 h-4" /></span>}
    </button>
  );
}

