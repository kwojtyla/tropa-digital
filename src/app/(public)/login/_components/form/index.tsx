"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginSchema, LoginFormData } from "./schema";
import Input from "@/components/input";
import { FormContainer, SubmitButton } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticateUser } from "@/app/lib/auth-actions";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const router = useRouter();

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

    try {
      setIsLoading(true);
      setApiError("");
      clearErrors();

      const result = await authenticateUser(data.email, data.password);

      if (result.success) {
        console.log("Login bem-sucedido:", result.user);
        router.push("/eventos");
        router.refresh();
      } else {
        if (result.message?.includes("Email ou senha incorretos")) {
          setError("email", { message: result.message });
          setError("password", { message: "Verifique suas credenciais" });
        } else if (result.message?.includes("Email inválido")) {
          setError("email", { message: result.message });
        } else if (result.message?.includes("Senha deve ter")) {
          setError("password", { message: result.message });
        } else {
          setApiError(result.message || "Erro no login");
        }
      }
    } catch (error) {
      console.error("Erro ao processar login:", error);
      setApiError("Erro interno do servidor. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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

        {apiError && (
          <div
            style={{
              color: "#ef4444",
              fontSize: "14px",
              marginBottom: "16px",
              padding: "8px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "4px",
            }}
          >
            {apiError}
          </div>
        )}

        <SubmitButton type="submit" disabled={isLoading || !isValid}>
          {isLoading ? "Entrando..." : "Entrar"}
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default Form;
