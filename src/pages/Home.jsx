import routes from "../routes/routes";
import TextWithBold from "../components/ui/TextWithBold";
import TitleSecond from "../components/ui/TitleSecond";
import ButtonLink from "../components/ui/ButtonLink";

export default function Home() {
  return (
    <div className="text-center max-w-2xl">
      {/* <h2 className="text-4xl font-bold mb-6 text-[#463f3a]">
        Bem-vindo à Minha Aplicação
      </h2> */}
      <TitleSecond>Bem-vindo à Minha Aplicação</TitleSecond>
      {/* <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Este é o espaço inicial do sistema. Você pode acessar a página de{" "}
        <span className="font-semibold">Login</span> para entrar ou visitar a
        seção <span className="font-semibold">Sobre</span> para saber mais.
      </p> */}
      <TextWithBold text="Este é o espaço inicial do sistema. Você pode acessar a página de [b]Login[/b] para entrar ou visitar a seção [b]Sobre[/b] para saber mais." />

      <div className="flex justify-center space-x-4">
        {/* <Link
          to="/login"
          className="bg-[#8a817c] text-white px-6 py-3 rounded-lg shadow hover:bg-[#463f3a] transition-colors"
        >
          Ir para Login
        </Link> */}
        <ButtonLink to={routes.LOGIN}>Ir para Login</ButtonLink>
        {/* <Link
          to="/sobre"
          className="bg-[#bcb8b1] text-[#463f3a] px-6 py-3 rounded-lg shadow hover:bg-[#a39e97] transition-colors"
        >
          Sobre
        </Link> */}
        <ButtonLink to={routes.SOBRE} second={true}>
          Sobre
        </ButtonLink>
      </div>
    </div>
  );
}
