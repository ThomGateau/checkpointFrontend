import { Link } from "react-router-dom";

export const CountryCard = ({
  id,
  name,
  emoji,
  code,
}: {
  id: number;
  name: string;
  emoji: string;
  code: string;
}) => {
  return (
    <div className="countryCard" key={id}>
      <Link className="countryCardLink" to={`/countries/${code}`}>
        <h2>{name}</h2>
        <p>{emoji}</p>
      </Link>
    </div>
  );
};
