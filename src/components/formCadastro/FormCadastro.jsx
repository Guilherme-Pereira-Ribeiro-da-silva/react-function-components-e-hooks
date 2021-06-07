import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";
import './style.css';
import {useState} from "react";

export default function FormCadastro({onSubmit}){
    const [nome,setNome] = useState("");
    const [sobreNome,setSobreNome] = useState("");
    const [cpf,setCPF] = useState("");
    const [promocoes,setProm] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const [erros,setErros] = useState({cpf:{errado:false,texto:""}});

    return(
        <form className="FormCadastro_form" onSubmit={(evento) => {
            evento.preventDefault();
            onSubmit({nome,sobreNome,cpf,promocoes,novidades});
        }}>
            <h1>Formulário de cadastro</h1>

            <TextField value={nome} onChange={(evento) => {
                setNome(evento.target.value);
            }} variant="outlined" label="nome" type="text" margin="normal" fullWidth/>

            <TextField value={sobreNome} onChange={(evento) => {
                setSobreNome(evento.target.value);
            }} variant="outlined" label="sobrenome" type="text" margin="normal" fullWidth/>

            <TextField value={cpf} variant="outlined" onChange={(evento) => {
                let tempCPF = evento.target.value;
                let ultimaLetraCPF = tempCPF.substr(tempCPF.length - 1,1);
                if(isNaN(parseInt(ultimaLetraCPF))) tempCPF = tempCPF.substr(0,tempCPF.length - 2);
                if(tempCPF.length >= 11) tempCPF = tempCPF.substr(0,11);
                setCPF(tempCPF);
            }} onBlur={(evento) => {
                let tempErros;
                const tamanhoCPF = evento.target.value.length;

                if(tamanhoCPF !== 11 && tamanhoCPF !== 0) tempErros = {cpf:{errado:true,texto:"CPF deve ter 11 dígitos"}};
                else tempErros = {cpf:{errado:false,texto:""}};

                setErros(tempErros);
            }} label="cpf" margin="normal" error={erros.cpf.errado} helperText={erros.cpf.texto} fullWidth/>

            <FormControlLabel control={<Switch onChange={(evento) => {
                setProm(evento.target.checked);
            }} color="primary"/>} label="promoções" checked={promocoes}/>

            <FormControlLabel control={<Switch onChange={(evento) => {
                setNovidades(evento.target.checked);
            }} color="primary"/>} label="novidades" checked={novidades}/>

            <Button variant="contained" color="primary" type="submit" fullWidth>Cadastrar</Button>
        </form>
    );
}
