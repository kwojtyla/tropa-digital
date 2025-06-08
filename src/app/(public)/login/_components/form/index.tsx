"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginFormData } from "./schema";
import Input from "@/components/input";
import { FormContainer, SubmitButton } from "./styles";
import { ZodObject, ZodString, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Dados de login (payload):", data);

    // Simulando uma ação que demora, como se chamasse uma API
    try {
      setIsLoading(true);
      setApiError("");
      clearErrors();

      // Simulação de chamada à API (mock)
      await fakeApiCall(data);

      // Aqui você poderia navegar para outra rota, se necessário
      console.log("Processamento mockado concluído com sucesso!");
    } catch (error) {
      console.error("Erro ao processar login (mock):", error);
      setApiError("Erro simulado no login.");
    } finally {
      setIsLoading(false);
    }
  };

  // Função simulada de chamada de API (mock)
  const fakeApiCall = async (data: LoginFormData) => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        label="E-mail"
        placeholder="seunome@seuservidor.com"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Senha"
        placeholder="Digite aqui"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <SubmitButton type="submit" disabled={isLoading || !isValid}>
        {isLoading ? "Enviando..." : "Enviar"}
      </SubmitButton>
    </FormContainer>
  );
};

export default Form;
