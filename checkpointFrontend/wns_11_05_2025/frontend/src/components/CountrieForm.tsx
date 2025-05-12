import { SubmitHandler, useForm } from "react-hook-form";
import { useAddCountryMutation } from "../generated/graphql-types";
import { useState } from "react";

type Inputs = {
  name: string;
  emoji: string;
  code: string;
};

export const CountrieForm = () => {
  const [addCountryMutation] = useAddCountryMutation();
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addCountryMutation({
      variables: {
        data: data,
      },
      onError: (error) => {
        console.log("error", error);
        setIsError(true);
      },
      onCompleted: () => {
        setIsError(false);
        reset();
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formCountrie">
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Emoji</label>
          <input type="text" {...register("emoji")} />
        </div>
        <div>
          <label>Code</label>
          <input type="text" {...register("code")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isError ? <p className="error">An error occured</p> : <></>}
    </>
  );
};
