import React from "react";

function CardIconComponent({ icon_name: Icon, tooltipText }) {
  return (
    <div className="relative group inline-block">
      {/* Tooltip container */}
      <div className="
        absolute 
        bottom-full 
        left-1/2 
        transform 
        -translate-x-1/2 
        mb-2
        hidden 
        group-hover:block
        bg-slate-800 
        text-white 
        text-xs 
        px-2 
        py-1 
        rounded
        whitespace-nowrap
      ">
        {tooltipText}
      </div>

      {/* Icon with hover effects */}
      <div className="
        hover:bg-yellow-400 
        rounded-full 
        p-1 
        transition-colors 
        duration-150
        inline-block
      ">
        <Icon
          className="
            text-3xl 
            
            hover:transform 
            hover:scale-125 
            duration-150
          "
        />
      </div>
    </div>
  );
}

export default CardIconComponent;