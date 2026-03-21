const Cabecalho = (props) => {
    const {nomeUsuario} = props;
    return (
        <header>
            Bem vindo, {props.nomeUsuario}
        </header>
    )
};

export {Cabecalho};