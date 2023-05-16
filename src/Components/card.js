
import styles from '../Assets/Styles/card.module.css'
import check from '../Assets/Images/check.png'
import heart from '../Assets/Images/heart.png'

function Card(props) {

const { title, image, link , incluso =false } = props;

return (

<div className={styles.card} style={{backgroundImage: `url(${image})`}}>
    <div className={styles.container}>
        <div className={styles.row_top}>
            <div className={styles.menor}> 7 diarias</div>
            <img src={heart} alt="heart" className={styles.heart} />
        </div>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.plano}>
            Plano Vip       
        </div>
        <div className={styles.bottom}>
            <button className={styles.button}>
                Quero Viajar
            </button> 

            {incluso ? 
               <div className={styles.row_bottom}>
               <img className={styles.check} src = {check} alt= "imagem"/>
              <div> Incluso: café da manhã</div>
              </div>
              :null
            }

            
              
               
        </div>
    </div>
</div>
);

}
export {Card};