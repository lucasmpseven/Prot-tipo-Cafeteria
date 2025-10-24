import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { toast } from "sonner@2.0.3";

export function Auth() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cadastro realizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center py-16 px-4">
      <Card className="w-full max-w-md bg-white border-[#D9D9D9] p-8">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#F5EFE6]">
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-[#C29C6D] data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="data-[state=active]:bg-[#C29C6D] data-[state=active]:text-white"
            >
              Cadastro
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-[#3D2420]">
                  E-mail
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="border-[#D9D9D9] focus:border-[#C29C6D]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-[#3D2420]">
                  Senha
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="border-[#D9D9D9] focus:border-[#C29C6D]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider"
              >
                Entrar
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-[#3D2420]/70 hover:text-[#6B8E6B] transition-colors"
                >
                  Esqueceu sua senha?
                </button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="register-name" className="text-[#3D2420]">
                  Nome Completo
                </Label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="Seu nome"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  required
                  className="border-[#D9D9D9] focus:border-[#C29C6D]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-[#3D2420]">
                  E-mail
                </Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                  className="border-[#D9D9D9] focus:border-[#C29C6D]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-[#3D2420]">
                  Senha
                </Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  className="border-[#D9D9D9] focus:border-[#C29C6D]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C29C6D] hover:bg-[#E0A96D] text-white uppercase tracking-wider"
              >
                Criar Conta
              </Button>

              <p className="text-center text-[#3D2420]/70">
                Ao criar uma conta, você concorda com nossos termos de uso.
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}