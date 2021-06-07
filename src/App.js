import './App.css';
import FormCadastro from "./components/formCadastro/";
import {Container} from "@material-ui/core";

export default function App() {
    return (
        <Container component="article" maxWidth="sm">
            <FormCadastro onSubmit={onSubmitFormCadastro}/>
        </Container>
    );
}

function onSubmitFormCadastro(dados) {console.log(dados);}


