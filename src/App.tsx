import './App.css'
import fotoPerfil from './assets/minhafoto.jpg'

import ItaloMonitorMainImage from './assets/projetos/italomonitor/1.png';
import FoxmakeMainImage from './assets/projetos/foxmake/2.png';
import XUTestMainImage from './assets/projetos/xutest/1.png';
import Siserp2021MainImage from './assets/projetos/siserp-2021/1.png';
import XCLINMainImage from './assets/projetos/xclin/1.png';
import ItaloXadrexMainImage from './assets/projetos/italo-xadrez/1.png';
import JogoBatalhaEstrelarMainImage from './assets/projetos/jogo-batalha-estrelar/1.png';
import JogoPacmanMainImage from './assets/projetos/jogo-pacman/1.png';
import CJAppMainImage from './assets/projetos/cjapp/1.png';
import ProjetoSOMMainImage from './assets/projetos/projeto-som/1.png';
import IPlotMainImage from './assets/projetos/iplot/1.png';
import BreakoutAssemblyMainImage from './assets/projetos/jogo-breakout-assembly/1.png'
import ExpLabMainImage from './assets/projetos/explab/1.png';
import BreakoutPythonMainImage from './assets/projetos/jogo-breakout-python/1.png';

import ProjetoResumo from './componentes/ProjetoResumo';
import WarningBox from './componentes/WarningBox';

function App() {
  return (
    <div className="layout">
      <h1 className="text-center">Meu portifólio</h1>

      <div className="text-center">
        <img src={fotoPerfil} alt="Minha foto" className="foto-perfil" />
      </div>
      <div className="text-center">
        <h6>Ítalo Herbert Siqueira Gabriel</h6>
        <h6 className="text-light">(87) 99905-2371</h6>
        <h6 className="text-light">italoherbert@outlook.com</h6>
      </div>      
      <br />

      <p>Bem-vindo ao meu portfólio! Aqui você encontrará alguns dos meus projetos. Sinta-se à 
        vontade para explorar e conhecer mais sobre mim e meu trabalho.
      </p>

      <p>Sou desenvolvedor com forte domínio em Java e outras linguagens como: C++, PHP, Nodejs, 
        Python e Assembly. Nos últimos anos, desenvolvi alguns projetos onde ganhei experiência, 
        desde a análise de requisitos e projeto do banco de dados, até a escolha de arquiteturas e 
        tecnologias adequadas, desenvolvimento e realização de testes. Tenho também experiência 
        com tecnologias de sistemas legados e, claro, estou sempre me aprimorando e aprendendo 
        tecnologias atuais.
      </p>

      <div className="d-flex justify-content-center">
        <div className="rounded d-inline-block bg-light p-2">    
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height="30" alt="java logo" />    
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height="30" alt="javascript logo" />
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo"  />
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo"  />
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
          <img width="12" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo"  />
          <img width="12" />  
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" height="30" alt="docker logo" />          
          <img width="12" />    
        </div>
      </div>

      <br />

      <WarningBox>
        Atualmente, estou <span className="text-success fw-bold">OpenToWork</span>
      </WarningBox>

      <br />

      <h3 className="text-center">PRINCIPAIS PROJETOS</h3>

      <br />
      
      <ProjetoResumo name="Ítalo Monitor" image={ItaloMonitorMainImage} projLink="/projeto/italomonitor">
        <p>Trata-se de um sistema de monitoramento de dispositivos de redes. Esse sistema tem 
        como público-alvo: empresas de internet e foi colocado em produção no AWS ECS. Trata-se de 
        um sistema com arquitetura em microserviços que se comunicam via mensageria (RabbitMQ) e 
        via REST também. Websockets são utilizados para atualização de status do dispositivo em 
        tempo real. Tokens JWT (access token e refresh token) armazenados em cookies HTTP Only 
        para aumentar a segurança também estão sendo utilizados. O backend utiliza Spring Boot 
        e seu ecossistema e o frontend utiliza reactjs. O pagamento via pix foi implementado 
        e a comunicação via API do telegram para envio de mensagens de notificação e alerta 
        também, bem como, envio de e-mails. Conexão SSL/TLS foi implementada. Os monitoramentos 
        são executados em virtual threads Java.</p>      
      </ProjetoResumo>

      <ProjetoResumo name="Foxmake" image={FoxmakeMainImage} projLink="/projeto/foxmake">
        <p>O foxmake é um software de linha de comando que criei que pode ser utilizado para 
          automatizar o processo de build de projetos C/C++, permitindo configurar tarefas e 
          executá-las para ter como resultado final: um executável linkado, uma shared library, 
          uma static library, execução de testes unitários, etc. Inclusive, há versões, tanto 
          para windows, quanto para linux.
        </p>

        <p>Para tanto, o foxmake utiliza um arquivo de configuração cujo conteúdo é conforme uma 
          linguagem interpretada criada com o projeto. Isto é, foi necessário criar uma linguagem de 
          definição e configuração de tarefas e propriedades e um interpretador para a linguagem.
        </p>
      </ProjetoResumo>
      
      <ProjetoResumo name="SISERP 2021" image={Siserp2021MainImage} projLink="/projeto/siserp-2021">
        <p>O Siserp 2021 é um sistema de gestão comercial desenvolvido para atender às necessidades 
          de pequenos e médios comércios e mercadinhos. O sistema conta com funções de produto, clientes, 
          fornecedores, compras, vendas, contas a pagar, contas a receber, fluxo de caixa, etc.
        </p>
      </ProjetoResumo>

      <ProjetoResumo name="XCLIN" image={XCLINMainImage} projLink="/projeto/xclin">
        <p>O XCLIN foi feito para suprir as necessidades de automação de clínicas médicas ou 
          odontológicas. Ele também tem suporte a controle e agendamento de consultas, exames 
          e procedimentos que podem ser vinculados a um profissional, data e turno de atendimento.</p>
            
        <p>O XCLIN também suporta controle de fluxo de caixa, bem como, usuários e restrição de 
            acesso pelo perfil e cadastro e utilização de dados de clínicas, pacientes, usuários, 
            recepcionistas, profissionais, diretores, etc.</p>
      </ProjetoResumo>

      <ProjetoResumo name="SISBANCO - Arquitetura Hexagonal" github="https://github.com/italolab/sisbanco-hex-arq">
        <p>Esse sistema é um simples sistema de banco com suporte a conta corrente e operações de: 
            depósito, saque e transferência de dinheiro.</p>

        <p>A arquitetura hexagonal foi utilizada para separar a lógica de negócios, domínio e validações 
            do módulo de infraestrutura, onde são tratadas as dependências tecnológicas do projeto.</p>      
      </ProjetoResumo>

      <ProjetoResumo name="xutest" image={XUTestMainImage} github='https://github.com/italolab/xutest'>
        <p>A xutest é uma biblioteca de testes unitários que criei que pode ser integrada a 
          um projeto C++ para realização de testes de unidade. A biblioteca dispõe de macros 
          de assert para verificações e comparações de valores e descobre os casos de teste 
          definidos nos arquivos de código fonte de testes e os carrega numa estrutura de 
          informações das funções de teste.</p>
      </ProjetoResumo>

      <ProjetoResumo name="Italo Xadrez" image={ItaloXadrexMainImage} github="https://github.com/italolab/italo-xadrez">
        <p>O Italo Xadrez é um jogo de xadrez produzido em C++ com biblioteca SDL e orientação a objetos.
          O MINIMAX foi implementado para a inteligência artificial do jogo, bem como, o algoritmo de         
          poda alpha-beta para otimização do MINIMAX. O jogo tem suporte a partidas contra o computador 
          e contra outro jogador humano. O jogo tem suporte a diferentes níveis de dificuldade, que são 
          configurados por meio da profundidade de busca do algoritmo MINIMAX.
        </p>
      </ProjetoResumo>

      <ProjetoResumo name="Aplicativo de casa de jogo" image={CJAppMainImage} github='https://github.com/italolab/cjapp'>
        <p>Este é um aplicativo para gestão de contas e de devedores de uma casa de jogo. O sistema foi feito em react native 
          com banco de dados local SQLite.
        </p>
      </ProjetoResumo>

      <ProjetoResumo name="ExpLab - Linguagem de Programação" image={ExpLabMainImage} github="https://github.com/italolab/explab">
        <p>O ExpLab é um interpretador e linguagem de programação interpretada que produzi, orientada a 
          objetos e a matemática. Ela suporta as estruturas básicas de uma linguagem de programação OO 
          como, por exemplo, os comandos: SE, COMPARE/CASO, ENQUANTO, PARA... inclusive, também suporta 
          definição e chamada de funções, expressões aritméticas e booleans, classes, objetos como variáveis 
          instâncias de classes, herança de classes, tratamento de exceções, organização das classes 
          em pacotes, etc. Inclusive, como linguagem de programação orientada a matemática, a linguagem 
          ExpLab tem suporte a operações com vetores e matrizes e plotagem e visualização de dados e 
          funções matemáticas em 2D e 3D.</p>

        <p>Trata-se de um software semelhante a outros já consagrados como: MatLab, SciLab e GNU Octave.</p>

        <p>O ExpLab tem uma sintaxe muito parecida com a das linguagens C, C++ e Java. É uma linguagem case 
          insensitive e as variáveis não precisam ser declaradas com tipos definidos. Os tipos das variáveis 
          são detectados automaticamente pelo interpretador, conforme o valor, ou expressão atribuido a 
          ela.</p>        
      </ProjetoResumo>

      <ProjetoResumo name="Jogo Batalha Estrelar" image={JogoBatalhaEstrelarMainImage} github="https://github.com/italolab/jogo-batalha-estrelar">
        <p>O jogo foi construído em Java e os gráficos foram feitos em puro Java 2D. Isto é, com as 
          primitivas gráficas: Retângulo, círculo, linha e polígono e texto. Não foi utilizado Pixel Art 
          para desenhar as naves ou outros objetos do jogo!</p>

        <p>Os arquivos de áudio estão em formato MP3 e estão embutidos no jar da aplicação, junto com a 
          biblioteca de audio JLayer para java.</p>

        <p>Esta foi uma ótima oportunidade para aplicar alguns padrões de projeto e separar a lógica da 
          aplicação dos gráficos e interface gráfica.</p>
      </ProjetoResumo>

      <ProjetoResumo name="Jogo de Pacman" image={JogoPacmanMainImage} github="https://github.com/italolab/jogo-pacman">
        <p>Esse jogo foi produzido em Java e depende do JRE8 ou superior para funcionar. Os gráficos 
          foram feitos com uso de primitivas gráficas. Logo, os gráficos do jogo são conjuntos de 
          polígonos, linhas, retângulos e círculos. Os personagens e outros objetos do jogo não foram 
          desenhados com pixelart!</p>

        <p>Foi implantado para o movimento dos personagens monstrinhos o A*: um algoritmo de inteligência artificial simbólica 
          que é uma variação do algorítmo do caminho mínimo de Dijkstra que pode ser aplicado em jogos com obstáculos para 
          determinar o caminho mais curto de uma origem até um destino.</p>

        <p>Graças ao A*, os monstrinhos chegam tão fácil até onde está o pacman, aumentando o nível de 
          dificuldade do jogo.</p>
      </ProjetoResumo>

      <ProjetoResumo name="Mapas auto-organizáveis" image={ProjetoSOMMainImage} projLink="/projeto/projeto-som">
        <p>Trata-se de um projeto onde foi implantado o algoritmo de mineração de dados SOM 
            (Mapas auto-organizáveis de Kohonen). O aplicativo permite a geração automática de 
            dados 2D e 3D, além de suporte também ao carregamento de dados N dimensionais 
            armazenado em arquivo texto. A dimensão dos dados é detectada automaticamente. Após 
            o treinamento da rede de neurônios artificiais, o resultado da mineração de dados é 
            mostrado num gráfico que representa a matriz de distâncias unificada (Matriz-U).
        </p>
        <p>Esse aplicativo utiliza para os gráficos, outro framework que produzi: O iplot.</p>
      </ProjetoResumo>

      <ProjetoResumo name="IPlot - Plotagem de Gráficos em 2D e 3D" image={IPlotMainImage} projLink='/projeto/iplot'>
        <p>O IPlot, inicialmente chamado de plot3d porque tinha suporte apenas a gráficos em 3D, 
            é um framework Java que criei para criação de gráficos que possam representar a 
            plotagem de funções matemáticas ou conjunto de dados armazenados em vetores. Com o 
            IPlot é possível criar graficos de funções matemáticas em 2D e 3D desenhadas em um 
            plano cartesiano 2D ou 3D conforme o tipo de função. Na visualização em 3D é possível 
            mover o gráfico, rotacionar e visualizar em diversos ângulos, aplicar zoom menos 
            e mais, etc. Na visualização 2D também é possível aplicar o zoom mais e menos e 
            mover o gráfico para visualizar outras partes da função fora do intervalo 
            predefinido.
        </p>
      </ProjetoResumo>

      <ProjetoResumo name="Jogo de Breakout em Assembly" image={BreakoutAssemblyMainImage} github='https://github.com/italolab/breakout-asm16'>
        <p>Esta página trata de um jogo de breakout produzido em puro assembly com uso, apenas, da 
          arquitetura de 16 bits. O que significa utilizar apenas os registradores e instruções de 
          16 bits do processador 8086. Esse jogo funciona independente de sistema operacional. Dado 
          que, dá instruções diretamente ao BIOS do computador.</p>
      </ProjetoResumo>

      <ProjetoResumo name="Jogo de Breakout em Python" image={BreakoutPythonMainImage} github='https://github.com/italolab/breakout-python'>
        <p>Este jogo produzido em python é uma versão do clássico "breakout". Onde, o objetivo é acertar 
          todos os quadradinhos que ficam na parte de cima do tabuleiro com uma bolinha que se movimenta 
          em linha reta e pode ter seu ângulo de direção alterado por uma raquete.</p>
      </ProjetoResumo>
    </div>
  )
}

export default App
