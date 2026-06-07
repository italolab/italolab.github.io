
import Image1 from '../assets/projetos/italoxadrez/1.png';

import Projeto from "../componentes/Projeto";

function ProjetoItaloXadrez() {
    const IMAGES = [
        { src: Image1, alt: 'Jogo em execução' }
    ];

  return (
    <Projeto name="ItaloXadrez" images={IMAGES} github="https://github.com/italolab/italoxadrez">
      <p>O Italo Xadrez é um jogo de xadrez produzido em C++ com biblioteca SDL e orientação a objetos.
        O MINIMAX foi implementado para a inteligência artificial do jogo, bem como, o algoritmo de         
        poda alpha-beta para otimização do MINIMAX. O jogo tem suporte a partidas contra o computador 
        e contra outro jogador humano. O jogo tem suporte a diferentes níveis de dificuldade, que são 
        configurados por meio da profundidade de busca do algoritmo MINIMAX.
      </p>
    </Projeto>
  );
}
export default ProjetoItaloXadrez;