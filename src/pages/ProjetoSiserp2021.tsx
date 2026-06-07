
import Image1 from '../assets/projetos/siserp-2021/1.png';
import Image2 from '../assets/projetos/siserp-2021/2.png';
import Image3 from '../assets/projetos/siserp-2021/3.png';
import Image4 from '../assets/projetos/siserp-2021/4.png';
import Image5 from '../assets/projetos/siserp-2021/5.png';
import Image6 from '../assets/projetos/siserp-2021/6.png';
import Image7 from '../assets/projetos/siserp-2021/7.png';
import Image8 from '../assets/projetos/siserp-2021/8.png';
import Image9 from '../assets/projetos/siserp-2021/9.png';

import Projeto from '../componentes/Projeto';

function ProjetoSiserp2021() {

    const IMAGES = [
        { src: Image1, alt: 'Detalhes da compra' },
        { src: Image2, alt: 'Lista de produtos' },
        { src: Image3, alt: 'Efetuando venda' },
        { src: Image4, alt: 'Tela de login' },
        { src: Image5, alt: 'Simulação de parcelas' }, 
        { src: Image6, alt: 'Pagamento de parcelas à prazo' },
        { src: Image7, alt: 'Lançamentos de um usuário caixa' },
        { src: Image8, alt: 'Contas a receber' },
        { src: Image9, alt: 'Contas a pagar' }  
    ];

    return (
        <Projeto name="SISERP 2021" images={IMAGES} github="https://github.com/italolab/siserp-2021">
            <p>O Siserp 2021 é um sistema de gestão comercial desenvolvido para atender às necessidades 
                de pequenos e médios comércios e mercadinhos. O sistema conta com funções de produto, clientes, 
                fornecedores, compras, vendas, contas a pagar, contas a receber, fluxo de caixa, etc.
            </p>

            <p>O usuário gerente tem acesso principalmente ao fluxo de caixa, contas a pagar e contas a receber. O 
                supervisor tem acesso a tela de compras para adicionar ao sistema produtos comprados aos fornecedores 
                e o usuário caixa tem acesso a abertura e fechamento do caixa, vendas de produtos aos clientes e 
                pagamentos a serem efetuados. Já o usuário administrador, tem acesso as configurações de segurança: 
                usuários grupos de usuários e recursos, e, também, as configurações do sistema.
            </p>

            <h5>Tecnologias Utilizadas</h5>

            <p>Esse sistema foi desenvolvido em Java com Spring Boot e React no frontend e PostgreSQL como 
                banco de dados. A autenticação é stateless e RBAC, baseada em papeis e tem vários perfis de usuários 
                com seus roles configurados para acesso a recursos do sistema.</p>            
        </Projeto>
    );
}

export default ProjetoSiserp2021;