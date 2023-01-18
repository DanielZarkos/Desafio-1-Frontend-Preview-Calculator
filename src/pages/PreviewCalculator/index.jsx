import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { previewAPI } from "../../services/index";

const PreviewCalculator = () => {
  const [calculatedValue, setCalculatedValue] = useState(0);

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { amount, installments, mdr } = data;
    previewAPI({ amount, installments, mdr })
      .then((calculatedValues) => {
        console["log"](calculatedValues);
        setCalculatedValue(calculatedValues);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Simule sua Antecipação</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Informe o valor da venda</p>
          <input
            className="form-input"
            type="number"
            placeholder="Valor da venda"
            name="amount"
            {...register("amount", { required: true })}
          />
        </div>

        <div>
          <p>Em quantas parcelas</p>
          <input
            className="form-input"
            type="number"
            placeholder="Quantidade de parcelas"
            name="installments"
            {...register("installments", { required: true })}
          />
        </div>

        <div>
          <p>Informe o percentual de MDR</p>
          <input
            className="form-input"
            type="number"
            placeholder="Percentual de MDR"
            name="mdr"
            {...register("mdr", { required: true })}
          />
        </div>

        <button>Calcular</button>
      </form>
      <div>
        <div>
          <p>Você receberá</p>
          <p>Amanhã: {calculatedValue["1"]}</p>
          <p>Em 15 dias: {calculatedValue["15"]}</p>
          <p>Em 30 dias: {calculatedValue["30"]}</p>
          <p>Em 90 dias: {calculatedValue["90"]}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCalculator;
