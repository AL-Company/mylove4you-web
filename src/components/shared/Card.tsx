// Card.tsx
interface CardProps {
  title: string;
  icon: string;
  gradient?: string;
  width?: number;
  height?: number;
  titleColor?: string;
  imageBg?: string;
  padding?: number;
}

function Card({
  title,
  icon,
  gradient = "white",
  width = 200,
  height = 200,
  titleColor = "white",
  imageBg = "bg-amber-100",
  padding = 20,
}: CardProps) {
  return (
    <div
      className="rounded-3xl shadow-lg flex flex-col items-center justify-center"
      style={{
        background: gradient,
        width,
        height,
        padding: `${padding}px`,
        borderRadius: "1.5rem", 
      }}
    >
      <div
        className={`w-40 h-28 ${imageBg} rounded-xl overflow-hidden shadow-md cursor-pointer flex items-center justify-center`}
      >
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>

      <h3
        className="text-lg font-semibold mt-3"
        style={{ color: titleColor }}
      >
        {title}
      </h3>
    </div>
  );
}

export default Card;
