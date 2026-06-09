
import Image1 from '../assets/projetos/xclin/1.png';
import Image2 from '../assets/projetos/xclin/2.png';
import Image3 from '../assets/projetos/xclin/3.png';
import Projeto from '../componentes/Projeto';

function ProjetoXCLIN() {
    const IMAGES = [
        { src: Image1, alt: 'Tela de consultas' },
        { src: Image2, alt: 'Tela de lançamentos' },
        { src: Image3, alt: 'Tela de login' }
    ];

    return (
        <Projeto name="XCLIN" images={IMAGES} github="https://github.com/italolab/xclin">
            <p>O XCLIN foi feito para suprir as necessidades de automação de clínicas médicas ou 
                odontológicas.</p>

            <p>O sistema tem suporte a controle e agendamento de consultas, exames e procedimentos 
                que podem ser vinculados a um profissional, data e turno de atendimento.</p>

            <p>O XCLIN também suporta controle de fluxo de caixa, bem como, usuários e restrição de 
                acesso pelo perfil e cadastro e utilização de dados de clínicas, pacientes, usuários, 
                recepcionistas, profissionais, diretores, etc.</p>

            <h5>Tecnologias Utilizadas</h5>

            <p>O XCLIN foi desenvolvido com Spring Boot e Angular 15. O sistema cresceu e envolveu 
                em torno de 30 tabelas no banco de dados PostgreSQL e teve integração com a API do IBGE 
                para carregamento de caixas de seleção com cidades e estados brasileiros.</p>

            <h5>Segurança e autenticação</h5>

            <p>Está sendo utilizado Spring Security no backend para autorização RBAC, baseada em 
                roles armazenados no banco de dados e carregados com o login bem sucedido do usuário. 
                Os endpoints são configurados com os roles que são requisitos para utilização do recurso.
                Com o login, o sistema gera o access_token e o envia para o 
                frontend. Trata-se de um token JWT. O access_token dura 1 hora.</p>
        </Projeto>
    );

}
export default ProjetoXCLIN;