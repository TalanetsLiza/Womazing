import styles from "./FormGroup.module.scss";

interface PropsType {
    children: React.ReactNode,
    title: string,
}

const FormGroup: React.FC<PropsType> = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}> 
                {title}
            </div>
            <div className={styles.block}>
                {children}
            </div>
        </div>
    );
};

export default FormGroup;
