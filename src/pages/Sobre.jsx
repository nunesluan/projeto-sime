import CardWhite from "../components/ui/CardWhite";
import TitleSecond from "../components/ui/TitleSecond";

export default function Sobre() {
  return (
    <CardWhite>
      <TitleSecond>Sobre</TitleSecond>
      {/* <h2 className="text-2xl font-bold mb-4">Sobre</h2> */}
      <p>
        Esta é a página Sobre da nossa aplicação. Aqui você pode colocar
        informações sobre o sistema, a equipe ou qualquer outro detalhe
        importante.
      </p>
    </CardWhite>
  );
}
