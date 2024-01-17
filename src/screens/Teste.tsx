import { useState, useEffect } from 'react'

type FormType = {
    nome: string
    idade: number
}

export default function Teste(){

    const [ form, setForm ] = useState<FormType>({
        nome: "",
        idade: -1,
    });

    const [ corNome, setCorNome ] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log("NOME MUDOU:", form);
        if(form.nome === "Higor"){
            setCorNome('red');
        }
        else{
            setCorNome(undefined);
        }
    }, [ form ])

    return <>
        <div>
            <div>Nome:</div>
            <input
                style={{
                    borderColor: corNome,
                    outlineColor: corNome,
                }}
                placeholder='Digite o seu nome'
                type="text" value={form.nome || ""}
                onChange={event => setForm(anterior => {
                    return {
                        ...anterior,
                        nome: event.target.value
                    }
                })}
            /><p>{form.nome}</p>
            <div>Idade:</div>
            <input type="number" onChange={event => {
                setForm(anterior => {
                    return {
                        ...anterior,
                        idade: parseInt(event.target.value)
                    }
                })
            }} />
            {
                form.nome !== "" && form.idade > 0 && form.nome !== "Higor"
                    ? <button onClick={() => {
                        alert(JSON.stringify(form, null, 4));
                    }}>
                        Enviar
                    </button>
                    : null
            }
        </div>
    </>
}