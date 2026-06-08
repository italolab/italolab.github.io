import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ProjetoResumoProps {
    name : string;
    image? : string;
    projLink? : string;
    github? : string;
    children : ReactNode;
}

function ProjetoResumo( { name, image, projLink, github, children } : ProjetoResumoProps ) {
  return (
    <div className="py-3">
      <h3 className="text-center">{name}</h3>

      { image && (
        <div className="d-flex justify-content-center">
          <img src={image} alt={name} />
        </div>
      ) }

      <br />

      {children}

      { projLink && (
        <div className="text-center">
          <Link to={projLink} className="btn btn-primary fs-5">
            Mais detalhes...
          </Link>
        </div>
      ) }

      { github && (
          <div className="text-center mt-3">
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-success fs-5">
                  Ver no GitHub
              </a>
          </div>
      ) }
    </div>
  )
}
export default ProjetoResumo;