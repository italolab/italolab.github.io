
import Image1 from '../assets/projetos/iplot/1.png';
import Image2 from '../assets/projetos/iplot/2.png';
import Image3 from '../assets/projetos/iplot/3.png';
import Image4 from '../assets/projetos/iplot/4.png';

import Projeto from '../componentes/Projeto';
import WarningBox from '../componentes/WarningBox';

function ProjetoIPlot() {

    const IMAGES = [
        { src: Image1, alt: 'Várias funções' },
        { src: Image2, alt: 'Função Gaussiana' },
        { src: Image3, alt: 'Funçao Gaussiana sem Plano Cartesiano' },
        { src: Image4, alt: 'Cubo 3D' }
    ];

    return (
        <Projeto name='Projeto IPlot' images={IMAGES} github='https://github.com/italolab/iplot'>
            <p>O IPlot, inicialmente chamado de plot3d porque tinha suporte apenas a gráficos em 3D, 
                é um framework Java para criação de gráficos que possam representar a plotagem de 
                funções matemáticas ou conjunto de dados armazenados em vetores. Com o IPlot é 
                possível criar graficos de funções matemáticas em 2D e 3D desenhadas em um plano 
                cartesiano 2D ou 3D conforme o tipo de função. Na visualização em 3D é possível 
                mover o gráfico, rotacionar e visualizar em diversos ângulos, aplicar zoom menos 
                e mais, etc. Na visualização 2D também é possível aplicar o zoom mais e menos e 
                mover o gráfico para visualizar outras partes da função fora do intervalo 
                predefinido.
            </p>

            <WarningBox>
                Faça o download pelo github!
            </WarningBox>
        </Projeto>
    )

}
export default ProjetoIPlot;