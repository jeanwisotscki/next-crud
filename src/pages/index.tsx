import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex 
      h-screen 
      justify-center 
      items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro de usuários">
        <span>conteúdo</span>
      </Layout>
    </div>
  );
}
