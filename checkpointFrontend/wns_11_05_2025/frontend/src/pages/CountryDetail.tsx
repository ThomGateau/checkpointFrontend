import { useParams } from "react-router-dom";
import { useGetCountryByIdQuery } from "../generated/graphql-types";

export const CountryDetail = () => {
  const { code } = useParams();
  const { error, loading, data } = useGetCountryByIdQuery({
    variables: { code: code as string },
  });
  console.log(error);

  if (error) return <p>Error ...</p>;
  if (loading) return <p>Loading ...</p>;
  if (data) {
    return (
      <div className="countryPage">
        <h2>{data.country.name}</h2>
        <p className="flag">{data.country.emoji}</p>
        <p>Code: {data.country.code}</p>
        <p>Continent: {data.country.continent?.name}</p>
      </div>
    );
  }
};
