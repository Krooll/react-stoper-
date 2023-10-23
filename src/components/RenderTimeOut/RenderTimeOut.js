import styles from './RenderTimeOut.module.scss';

const RenderTimeOut = ({time}) => {
    
    function formatTime(milliseconds) {
        const date = new Date(milliseconds);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const millisecondsPart = String(date.getUTCMilliseconds()).padStart(3, '0');
      
        return `${hours}:${minutes}:${seconds}.${millisecondsPart}`;
      }

    return (
        <div className={styles.numbers}>
            {formatTime(time)}
        </div>
    );
};

export default RenderTimeOut;