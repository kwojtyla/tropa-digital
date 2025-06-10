import LogoFullIcon from "@/assets/icons/logo-full";
import LoginImage from "@/assets/images/login-drawing.webp";
import {
  Container,
  FormContainer,
  FormContent,
  FormHeader,
  FormSubtitle,
  FormTitle,
  ImageContainer,
  LoginContainer,
  LogoContainer,
} from "./styles";
import Form from "./_components/form";
import Image from "next/image";

export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <FormContainer>
          <LogoContainer>
            <LogoFullIcon />
          </LogoContainer>
          <FormHeader>
            <FormTitle>Bem-vindo de volta</FormTitle>
            <FormSubtitle>
              Entre com sua conta para acessar o painel
            </FormSubtitle>
          </FormHeader>
          <FormContent>
            <Form />
          </FormContent>
        </FormContainer>
        <ImageContainer>
          <Image
            src={LoginImage}
            alt="Ilustração de pessoa utilizando redes sociais"
            width={355}
            height={315}
          />
        </ImageContainer>
      </LoginContainer>
    </Container>
  );
}
