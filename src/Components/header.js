import styles from '../Assets/Styles/header.module.css'

function Header(props) {


return (
    <div className={styles.column}>
        <div className={styles.row}>
            <h1> QTA – MONITORANDO AS ÁGUAS </h1>  
        </div>
    <h2 className={styles.grupo}> Grupo: Caio, Felipe, Guilherme, Rafael e Thomas </h2>

    <div className={styles.introducao}>
        <h1>Intrudução </h1>
        <p>
        Nesta era em que a escassez de recursos naturais se torna cada vez mais evidente, 
        entender a importância do monitoramento das águas para a sociedade e para o meio ambiente 
        é fundamental. Água é vida, e seu acesso seguro e sustentável é essencial para garantir a saúde
        humana, a preservação dos ecossistemas aquáticos e o desenvolvimento sustentável.
        A água desempenha um papel vital em diversos aspectos de nossas vidas diárias. 
        É utilizada para consumo humano, agricultura, indústria, recreação e conservação da natureza.
        No entanto, a poluição, as mudanças climáticas e o crescimento populacional descontrolado 
        têm colocado pressão sobre os recursos hídricos, comprometendo sua qualidade e disponibilidade.
        Nesse contexto, o monitoramento de águas torna-se um instrumento valioso para avaliar 
        a qualidade e a saúde dos ecossistemas aquáticos, bem como para garantir a segurança das fontes de água potável. 
        O monitoramento sistemático e contínuo permite a identificação precoce de problemas, 
        a implementação de medidas corretivas e a tomada de decisões embasadas em dados científicos. 
        Além disso, ao acompanhar a qualidade da água e os impactos das atividades humanas, 
        podemos mitigar os efeitos negativos, preservando a biodiversidade e os serviços ecossistêmicos associados à água.
        A conscientização sobre o monitoramento de águas é crucial para promover a participação ativa da sociedade 
        na preservação dos recursos hídricos.
        </p>

    </div>



    </div>


);

}
export {Header};