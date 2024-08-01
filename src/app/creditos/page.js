import { Card } from "../components/Card";
import lucas from "../../../public/images/lucas.jpg"
import tomas from "../../../public/images/tomas.jpg"
import thiago from "../../../public/images/thiago.jpg"
import "../globals.css"
import styles from './creditos.module.css'

export default function creditos(){
    return(
        <>  
            <main>
                <div className="titleContainer">
                    <h1 className={styles.heading}>Créditos</h1>
                </div>
                <div className="cardContainer">
                    <Card title="Lucas Koziupa" imageSrc={lucas} description="Desarrollador Front-end"/>
                    <Card title="Tomas Czernuszka" imageSrc={tomas} description="Desarrollador Back-end"/>
                    <Card title="Thiago Palachi" imageSrc={thiago} description="Scrum Master"/>
                </div>
            </main>         
        </>
    );
}