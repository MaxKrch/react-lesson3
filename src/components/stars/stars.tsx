import Star from "../star/star";
import type { StarsProps } from "./stars.type";

const Stars = ({ count = 0 }: StarsProps) => {
  if (count < 1 || count > 5) return <></>;

  return (
    <div className="m-4 p-2 bg-gray-200 rounded-sm shadow-sm w-full">
      <div className="font-medium text-xl">Рейтинг звезд: {count}</div>
      <ul className="card-body-stars u-clearfix flex justify-start">
        {new Array(count).fill("").map((_, index) => (
          <Star key={`star-${index}`} />
        ))}
      </ul>
    </div>
  );
};

export default Stars;
