import styles from './ActionButtons.module.scss';

const ActionButtons = props => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};

export default ActionButtons;