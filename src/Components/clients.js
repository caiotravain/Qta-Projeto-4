import styles from '../Assets/Styles/clients.module.css'




function Clients(props) {

    const { Name, image, frase } = props;
    
    return (
    
        <div className={styles.clients}>
            <div className={styles.column1}>
                <img src={image} className={styles.image} alt="person"></img>
            </div>
            <div className={styles.column2}>
                <p>{frase}</p>
                <p className={styles.p}> {Name}</p>
            </div>
        </div>
    );
    
    }
    export {Clients};