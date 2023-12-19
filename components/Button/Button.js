import styles from './Button.module.scss';

const Button = ({ className,btnName,btnLink }) => {
    return ( 
        <button className={`${styles.btn} ${className}`} >
            <a href={btnLink}>{btnName}</a>
        </button>
    );
}
 
export default Button;