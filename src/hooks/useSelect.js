import React, {useState} from 'react';


const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )
    // eslint-disable-next-line no-undef
    return [state, SelectNoticias];
}
 
export default useSelect;