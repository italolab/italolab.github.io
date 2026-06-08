import type { ReactNode } from "react";

function WarningBox( { children } : { children : ReactNode }) {
    return (
        <div className="d-flex justify-content-center">
            <div className="p-2 rounded text-dark text-center mw-100" 
                    style={{width: '40em', backgroundColor: '#FFC'}}>
                {children}
            </div>
        </div>
    );
}
export default WarningBox;