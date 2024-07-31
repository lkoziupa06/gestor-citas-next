import styles from './Card.module.css';

export const Card = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt={title} className={styles.image} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
