import LogoFullIcon from "@/assets/icons/logo-full";
import {
  Container,
  FormContainer,
  FormContent,
  FormHeader,
  FormSubtitle,
  FormTitle,
  LoginContainer,
} from "./styles";
import Form from "./_components/form";

export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <FormContainer>
          <LogoFullIcon />
          <FormHeader>
            <FormTitle>Bem-vindo de volta</FormTitle>
            <FormSubtitle>
              Entre com sua conta para acessar o painel.
            </FormSubtitle>
          </FormHeader>
          <FormContent>
            <Form />
          </FormContent>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}
