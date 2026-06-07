import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ProjetoResumoProps {
    name : string;
    image? : string;
    projLink : string;
    children : ReactNode;
}

function ProjetoResumo( { name, image, projLink, children } : ProjetoResumoProps ) {
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

      <div className="text-center">
        <Link to={projLink} className="btn btn-primary fs-5">
          Mais detalhes...
        </Link>
      </div>
    </div>
  )
}
export default ProjetoResumo;