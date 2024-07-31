import { Card } from "../components/Card";
import lucas from "../../../public/images/lucas.jpg"
import tomas from "../../../public/images/tomas.jpg"
import thiago from "../../../public/images/thiago.jpg"
import "../globals.css"

export default function creditos(){
    return(
        <>
            <div className="cardContainer">
                <Card title="Lucas Koziupa" imageSrc={lucas} description="bebeeeee"/>
                <Card title="Tomas Czernuszka" imageSrc={tomas} description="bebeeeee"/>
                <Card title="Thiago Palachi" imageSrc={thiago} description="bebeeeee"/>
            </div>
        </>
    );
}