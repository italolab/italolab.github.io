import { useState, type ReactNode } from "react";
import '../App.css'

export type ImagesList = { src: string; alt: string }[];

interface ProjetoProps {
    name : string;
    images : ImagesList;
    github? : string;
    children : ReactNode
}

function Projeto( { name, images, github, children } : ProjetoProps ) {
    
    const [currentImage, setCurrentImage] = useState( 0 );

    const nextImage = async () => {
        setCurrentImage( ( prev ) => ( prev + 1 ) % images.length );
    };
    const prevImage = async () => {
        setCurrentImage( ( prev ) => ( prev - 1 + images.length ) % images.length );
    };

    return (        
        <div className="layout p-3">
            <div className="text-center mb-3">
                <a href="/" className="btn btn-secondary">
                    Voltar
                </a>
            </div>
            <h1 className="text-center">
                {name}
            </h1>
            <div className="mx-auto w-100">
                <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: '400px' }}>
                    <img src={images[currentImage].src} alt={images[currentImage].alt} />
                </div>            
                <p className="text-center">{images[currentImage].alt}</p>
                <div className="mt-3 d-flex flex-row justify-content-center align-items-center w-100">
                    <button className="btn btn-primary mx-2" onClick={prevImage}>Anterior</button>
                    <button className="btn btn-primary" onClick={nextImage}>Próximo</button>
                </div>
            </div>            
            { github && (
                <div className="text-center mt-3">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Ver no GitHub
                    </a>
                </div>
            )}
            <div className="p-3">
                {children}
            </div>     
        </div>
    );
}
export default Projeto;