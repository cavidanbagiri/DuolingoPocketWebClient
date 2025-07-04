
function CardIconComponent({ icon_name: Icon, tooltipText, color = 'text-gray-400' }) {
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

      {/* Icon with dynamic color */}
      <div className={`
        rounded-full 
        p-1 
        transition-colors 
        duration-150
        inline-block
        ${color === 'text-yellow-400' ? 'hover:bg-yellow-100/20' : 'hover:bg-gray-100/20'}
      `}>
        <Icon
          className={`
            text-white
            text-3xl 
            hover:transform 
            hover:scale-125 
            duration-150
            ${color}
          `}
        />
      </div>
    </div>
  );
}

export default CardIconComponent;