import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const mockUsers = [
  {
    id: 1,
    email: "kaique.steck@tropa.digital",
    password: "teste123!",
    name: "Kaique Steck",
    role: "admin",
  },
  {
    id: 2,
    email: "teste@tropa.digital",
    password: "teste123!",
    name: "Usuário Teste",
    role: "user",
  },
  {
    id: 3,
    email: "karol.wojtyla@tropa.digital",
    password: "teste123!",
    name: "Karol Wojtyla",
    role: "employee",
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

export interface JWTPayload {
  user: User;
  expires: string;
  loginTime: string;
  iat?: number;
  exp?: number;
  [key: string]: unknown;
}

function validateCredentials(email: string, password: string): User | null {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload as JWTPayload;
  } catch {
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
