import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const mockUsers = [
  {
    id: 1,
    email: "admin@exemplo.com",
    password: "123456",
    name: "Administrador",
    role: "admin",
  },
  {
    id: 2,
    email: "usuario@exemplo.com",
    password: "senha123",
    name: "João Silva",
    role: "user",
  },
  {
    id: 3,
    email: "teste@teste.com",
    password: "teste123",
    name: "Usuário Teste",
    role: "user",
  },
];

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  user?: User;
}

function validateCredentials(email: string, password: string): User | null {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function simulateLogin(
  email: string,
  password: string
): Promise<LoginResult> {
  if (!email || !password) {
    return {
      success: false,
      message: "Email e senha são obrigatórios",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Email inválido",
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Senha deve ter pelo menos 6 caracteres",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = validateCredentials(email, password);

  if (!user) {
    return {
      success: false,
      message: "Email ou senha incorretos",
    };
  }

  return {
    success: true,
    message: "Login realizado com sucesso",
    user,
  };
}
