const RatingCircle = ({ value }) => {
  const radius = 40;
  const stroke = 4;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;

  const percentage = Math.min(Math.max(value, 0), 10) / 10;
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg height={radius * 2} width={radius * 2}>
        {/* background dark circle */}
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <circle
          stroke="#a855f7"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.6s ease",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>

      {/* score text */}
      <div className="absolute inset-0 flex items-center justify-center text-[24px] font-bold">
        {value}
      </div>
    </div>
  );
};
export default RatingCircle;
