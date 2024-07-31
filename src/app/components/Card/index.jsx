import styles from './Card.module.css'
import Image from 'next/image';

export const Card = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={imageSrc} alt={title} layout="fill" className={styles.image} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
