
import Image1 from '../assets/projetos/foxmake/1.png';
import Image2 from '../assets/projetos/foxmake/2.png';
import Image3 from '../assets/projetos/foxmake/3.png';
import Image4 from '../assets/projetos/foxmake/4.png';
import Projeto from '../componentes/Projeto';
import WarningBox from '../componentes/WarningBox';

function ProjetoFoxmake() {
    const IMAGES = [
        { src: Image1, alt: 'Ajuda' },
        { src: Image2, alt: 'Primeiro exemplo' },
        { src: Image3, alt: 'Hello world com testes unitários' },
        { src: Image4, alt: 'Calculadora com testes unitários' },
    ];    

    return (
        <Projeto name="Foxmake" images={IMAGES} github="https://github.com/italolab/foxmake">                        
            <p>O foxmake é um software de linha de comando que desenvolvi que pode ser utilizado para 
                automatizar o processo de build de projetos C/C++, permitindo configurar tarefas e 
                executá-las para ter como resultado final: um executável linkado, uma shared library, 
                uma static library, execução de testes unitários, etc. Inclusive, há versões, tanto 
                para windows, quanto para linux.
            </p>

            <p>O foxmake utiliza um arquivo de configuração que deve ser escrito conforme as regras de 
                uma linguagem interpretada criada para o projeto. Tal linguagem permite a criação e 
                configuração de tarefas e propriedades, bem como, outros recursos do foxmake.
            </p>

            <p>Foi utilizada a linguagem C++ para este projeto. Ele utiliza orientação a objetos complexa com uso 
                threads e popen para leitura dos arquivos de código fonte, e controle da execução na linha de comandos. 
                As threads são utilizadas para dar mais velocidade a tarefa de compilação dos códigos fontes do projeto 
                C/C++ a ser buildado com o foxmake.
            </p>

            <p>O foxmake também utiliza de operações de I/O, porque permite operações básicas como: cópia e remoção de 
                arquivos, etc.
            </p>

            <p>O foxmake tem suporte a testes unitários integrados no interpretador. Isto é, é possível escrever testes 
                unitários separados do código fonte, através das macros suportadas.
            </p>

            <p>Há uma documentação completa sobre o foxmake e o framework de testes integrado a ele: o xutest</p>
            
            <WarningBox>
                Faça o download pelo site oficial
            </WarningBox>

            <div className="text-center mt-3">
                <a href="https://italolab.github.io/foxmake" target="_blank" rel="noopener noreferrer" className="btn btn-success m-1">
                    Site oficial do foxmake
                </a>
                <a href="https://italolab.github.io/xutest" target="_blank" rel="noopener noreferrer" className="btn btn-success m-1">
                    Site oficial do xutest
                </a>
            </div>

            <div className='text-center mt-2'> 
                <a href="https://github.com/italolab/xutest" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    Ver xutest no github
                </a>
            </div>
        </Projeto>
    );
}
export default ProjetoFoxmake;