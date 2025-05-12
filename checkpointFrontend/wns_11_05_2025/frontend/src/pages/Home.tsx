import { CountrieForm } from "../components/CountrieForm";
import { CountryCard } from "../components/CountryCard";
import { useGetAllCountriesQuery } from "../generated/graphql-types";

export function HomePage() {
  const { error, loading, data } = useGetAllCountriesQuery();

  if (error) return <p>Error...</p>;
  if (loading) return <p>Loading ...</p>;

  if (data) {
    return (
      <>
        <CountrieForm />
        <div className="countriesCards">
          {data.countries.map((countrie) => {
            return (
              <div key={countrie.id}>
                <CountryCard
                  id={countrie.id}
                  code={countrie.code}
                  name={countrie.name}
                  emoji={countrie.emoji}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
