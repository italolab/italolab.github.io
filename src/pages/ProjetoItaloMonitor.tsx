
import Image1 from '../assets/projetos/italomonitor/1.png';
import Image2 from '../assets/projetos/italomonitor/2.png';
import Image3 from '../assets/projetos/italomonitor/3.png';
import Image4 from '../assets/projetos/italomonitor/4.png';
import Image5 from '../assets/projetos/italomonitor/5.png';
import Image6 from '../assets/projetos/italomonitor/6.png';
import Projeto from '../componentes/Projeto';

function ProjetoItaloMonitor() {
    const IMAGES = [
        { src: Image1, alt: 'Lista de dispositivos' },
        { src: Image2, alt: 'Detalhes do dispositivo' },
        { src: Image3, alt: 'Eventos do dispositivo' },
        { src: Image4, alt: 'Tela de pagamentos' },
        { src: Image5, alt: 'Pagamento com PIX' },
        { src: Image6, alt: 'Lista de agentes de servidor' }
    ];    

    return (
        <Projeto name="Italo Monitor" images={IMAGES}>
            <p>O Italo Monitor é um sistema de monitoramento de dispositivos que permite o registro de empresas 
                no sistema, para que os usuários de cada empresa possam registrar dispositivos para serem 
                monitorados pelo sistema 24 horas por dia, 7 dias por semana.
            </p>
            
            <p>O sistema funciona em uma arquitetura de microserviços, onde, há um microserviço principal e 
                um microserviço responsável por alocar virtual threads para o monitoramento de cada dispositivo.
            </p>                   

            <p>O microserviço principal é responsável por tratar as requisições que chegam até ele. O frontend react 
                se comunica diretamente com esse microserviço e, este, por sua vez, quando necessário, se comunica com 
                o microserviço de monitoramento para alocar ou desalocar virtual threads para o monitoramento dos dispositivos.
            </p>
            
            <h4>A segurança e autenticação</h4>
            <p>Está sendo utilizado Spring Security no backend para autorização RBAC, baseada em 
                roles armazenados no banco de dados e carregados com o login bem sucedido do usuário. 
                Os endpoints são configurados com os roles que são requisitos para utilização do recurso.
                Com o login, o sistema gera o access_token e o refresh_token, os armazena em cookies seguros 
                http only e os envia para o computador do usuário. Esses tokens são tokens JWT. O access_token 
                dura 5 minutos e o refresh_token, utilizado sempre que o access_token expira, dura 1 hora. O CORS 
                está sendo configurado para permitir apenas a origem (ou origens) correta(s). Isso é configurável 
                na configuração do docker-compose.yaml ou .env correto.
            </p>

            <p>Também há a segurança para recursos de uma empresa. Por exemplo, a listagem de dispositivos só pode 
                ser bem sucedida se o a empresa ao qual o usuário logado pertence corresponder a empresa dona do 
                dispositivo. Isso também vale para os agentes de subnet e servidor da empresa, entre outros recursos.
            </p>

            <h4>Comunicação entre os microserviços</h4>
            <p>A comunicação entre os microserviços é feita via mensageria RabbitMQ e via REST.</p>

            <h4>O agente de subnet</h4>
            <p>Há também o agente de subnet que é um sistema desktop que se comunica com o microserviço principal e faz o 
                monitoramento dos dispositivos em rede local, de forma semelhante ao microserviço de monitoramento. No entanto, 
                o microserviço de monitoramento precisa que o dispositivo monitorado tenha um IP público e, no caso do agente, 
                ele pode ser colocado em um computador com acesso à internet e acesso a rede local onde os dispositivos a serem 
                monitorados por ele estão. Esse agente tem uma chave configurada nele que o identifica no microserviço principal, 
                para onde ele envia os dados dos dispositivos monitorados.
            </p>

            <h4>Atualização de dados em tempo real</h4>
            <p>Os dados dos dispositivos monitorados são mostrados em tempo real na tela de dispositivos da empresa e 
                na tela de detalhes do dispositivo. Isso é possível porque há uma conexão WebSocket entre o frontend e o microserviço principal, 
                onde o microserviço principal envia os dados do dispositivo monitorado para o frontend em tempo real, e o frontend atualiza a tela com 
                os dados recebidos.
            </p>
        </Projeto>
    );
}
export default ProjetoItaloMonitor;