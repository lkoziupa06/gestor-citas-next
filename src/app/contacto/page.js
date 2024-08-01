import { FormContact } from "../components/FormContact";
import '../globals.css'
import styles from './contacto.module.css'

export default function contacto(){
    return(
        <main>
            <h1 className={styles.heading}>Contactanos!</h1>
            <FormContact/>
        </main>
    );
}