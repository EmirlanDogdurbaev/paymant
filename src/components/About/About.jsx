import cl from "./About.module.scss"
import card from "../../assets/static/images/card.png"
import payment from "../../assets/static/images/payment.png"

const About = () => {
    return ( 
        <section className={cl.About}>
            <div className="container">
                <div className={cl.About__inner} >
                    <div className={cl.About__content}>
                        <h2 className={cl.About__title}>Полностью интегрированный набор платежных продуктов</h2>
                        <p className={cl.About__text}>
                            Мы объединяем все, что требуется для создания веб-сайтов и приложений, которые принимают платежи и отправляют выплаты по всему миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично розничным продавцам, компаниям, занимающимся подпиской, программным платформам и маркетплейсам, а также всему, что находится между ними.
                        </p>
                    </div>
                    <img src={payment} alt="mobile" className={cl.About__image} style={{width: "750px"}}/>
                    <img src={card} alt="card" className={cl.About__card}/>
                </div>
            </div>
        </section>
     );
}
 
export default About;