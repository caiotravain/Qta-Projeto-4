
import styles from '../Assets/Styles/planos.module.css'
import red_arrow from '../Assets/Images/red_arrow.png'

function Planos(props) {



return (

<div id="planos" className={styles.planos}>
          {/* divisor  */}
                <div className={styles.plano1}>
                  <div className={styles.box1} >
                    <h1>Plano</h1>
                    <h1> OURO</h1>
                    <div className={styles.linha} />
                    <h3>Para quem curte viajar muito</h3>
                    <p> "Taxa de Adesão é paga apenas 01 vez, ao
                        fazer a Assinatura do Plano. Carência de 60
                        dias após pagamento da Adesão. A partir do 2 °
                        ano, sem carência."
                    </p>
                    <div className={styles.row}>
                      <button className={styles.saiba_plano}>Saiba Mais</button>
                      <div className={styles.assine_plano}>
                        Assine Já
                        <img src={red_arrow} alt="arrow" />
                        </div>
                    </div>
                  </div>
                  <div className={styles.box2}>
                  <img src="https://yata-apix-77aadbf9-5d7b-4baf-b730-ae8de4f69636.s3-object.locaweb.com.br/7f97b9ac43424d3db50af8a36362af7d.jpg" alt="representing plan"/>
                    <h4>Hospedagem para até 3 pessoas</h4>
                    <p> De acordo com o hotel escolhido, em apto.standart, com café da manhã, quando incluso na diária.</p>
                  </div>
                  <div className={styles.box2}>
                    <img src="https://www.jurnalisindonesia.id/uploads/large/2611326bf5dbbfb60ba813df89b7689e.png" alt="representing plan"/>
                    <h4>Destinos imperdíveis</h4>
                    <p> Opções de diferentes estilos de hospedagens no Brasil e no Exterior</p>

                  </div> 
                </div>

                {/* divisor  */}
                <div className={styles.plano1}>
                  <div className={styles.box1} >
                    <h1>Plano</h1>
                    <h1> OURO</h1>
                    <div className={styles.linha} />
                    <h3>Para quem curte viajar muito</h3>
                    <p> "Taxa de Adesão é paga apenas 01 vez, ao
                        fazer a Assinatura do Plano. Carência de 60
                        dias após pagamento da Adesão. A partir do 2 °
                        ano, sem carência."
                    </p>
                    <div className={styles.row}>
                      <button className={styles.saiba_plano}>Saiba Mais</button>
                      <div className={styles.assine_plano}>
                        Assine Já
                        <img src={red_arrow} alt="arrow" />
                        </div>
                    </div>
                  </div>
                  <div className={styles.box2}>
                  <img src="https://yata-apix-77aadbf9-5d7b-4baf-b730-ae8de4f69636.s3-object.locaweb.com.br/7f97b9ac43424d3db50af8a36362af7d.jpg"   alt="representing plan"/>
                    <h4>Hospedagem para até 3 pessoas</h4>
                    <p> De acordo com o hotel escolhido, em apto.standart, com café da manhã, quando incluso na diária.</p>
                  </div>
                  <div className={styles.box2}>
                    <img src="https://www.jurnalisindonesia.id/uploads/large/2611326bf5dbbfb60ba813df89b7689e.png" alt="representing plan"/>
                    <h4>Destinos imperdíveis</h4>
                    <p> Opções de diferentes estilos de hospedagens no Brasil e no Exterior</p>

                  </div>
                </div>
                  {/* divisor  */}
                <div className={styles.plano_final}>
                  <div className={styles.box1} >
                    <h1>Plano</h1>
                    <h1> OURO</h1>
                    <div className={styles.linha} />
                    <h3>Para quem curte viajar muito</h3>
                    <p> "Taxa de Adesão é paga apenas 01 vez, ao
                        fazer a Assinatura do Plano. Carência de 60
                        dias após pagamento da Adesão. A partir do 2 °
                        ano, sem carência."
                    </p>
                    <div className={styles.row}>
                      <button className={styles.saiba_plano}>Saiba Mais</button>
                      <div className={styles.assine_plano}>
                        Assine Já
                        <img src={red_arrow} alt="arrow" />
                        </div>
                    </div>
                  </div>
                  <div className={styles.box2}>
                  <img src="https://yata-apix-77aadbf9-5d7b-4baf-b730-ae8de4f69636.s3-object.locaweb.com.br/7f97b9ac43424d3db50af8a36362af7d.jpg"  alt="representing plan"/>
                    <h4>Hospedagem para até 3 pessoas</h4>
                    <p> De acordo com o hotel escolhido, em apto.standart, com café da manhã, quando incluso na diária.</p>
                  </div>
                  <div className={styles.box2}>
                    <img src="https://www.jurnalisindonesia.id/uploads/large/2611326bf5dbbfb60ba813df89b7689e.png"  alt="representing plan"/>
                    <h4>Destinos imperdíveis</h4>
                    <p> Opções de diferentes estilos de hospedagens no Brasil e no Exterior</p>

                  </div>
                </div>
              </div >
);

}
export {Planos};