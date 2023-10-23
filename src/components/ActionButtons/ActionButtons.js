import styles from './ActionButtons.module.scss';

const ActionButtons = props => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.children}</button>
    );
};

export default ActionButtons;