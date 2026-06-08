import Projeto from "../componentes/Projeto";

import Image1 from "../assets/projetos/projeto-som/1.png";
import Image2 from "../assets/projetos/projeto-som/2.png";
import Image3 from "../assets/projetos/projeto-som/3.png";
import Image4 from "../assets/projetos/projeto-som/4.png";
import WarningBox from "../componentes/WarningBox";

function ProjetoSOM() {

    const IMAGES = [
        { src: Image1, alt: 'Treinamento de rede 3D' },
        { src: Image2, alt: 'Treinamento de rede 2D' },
        { src: Image3, alt: 'Treinamento de rede esferoide' },
        { src: Image4, alt: 'Visualização de Matriz-U' }
    ]

    return (
        <Projeto name="Mapas auto-organizáveis de Kohonen" images={IMAGES} github="https://github.com/italolab/aplicativo-som">
            <p>Trata-se de um projeto que desenvolvi onde foi implantado o algoritmo de mineração 
                de dados SOM (Mapas auto-organizáveis de Kohonen). O aplicativo permite a geração 
                automática de dados 2D e 3D, além de suporte também ao carregamento de dados N 
                dimensionais armazenado em arquivo texto. A dimensão dos dados é detectada automaticamente. 
                Após o treinamento da rede de neurônios artificiais, o resultado da mineração de dados é 
                mostrado num gráfico que representa a matriz de distâncias unificada (Matriz-U).
            </p>

            <p>Para a parte gráfica foi utilizado o framework projeto IPlot, outro projeto que desenvolvi 
                para a criação de gráficos em plano cartesiano 2D ou 3D.
            </p>

            <WarningBox>
                Faça o download pelo github!
            </WarningBox>
        </Projeto>
    )
    
}
export default ProjetoSOM;