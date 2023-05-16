
import styles from '../Assets/Styles/destino.module.css'

function Destino(props) {

const { title, image, link , tag, subtitulo, descricao } = props;

return (

<div className={styles.card} >
    <div className={styles.card_image} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.container} >
            
            <h1> {title} </h1>
            
            <div className={styles.tag}>
                <p>#{tag}</p>   
            </div>      
                

        </div>
    </div>
    <div className={styles.card_content}>
        <h4> {subtitulo} </h4>
        <p> {descricao} </p>

    </div>
</div>

);

}
export {Destino};