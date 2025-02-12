import React from 'react';
import * as styles from './toggleButton.css';

interface ToggleButtonProps {
    isActive: boolean;
    onToggle: () => void;
    labels :[string,string];
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive, onToggle, labels }) => {

  return (
    <div className={styles.container}>
      <input 
        hidden 
        id="check" 
        name="check" 
        type="checkbox" 
        checked={isActive} 
        onChange={onToggle} 
      />
      <label 
        className={`${styles.toggle} ${isActive ? styles.toggleChecked : ''}`} 
        htmlFor="check"
      >
        <div className={`${styles.toggleCircle} ${isActive ? styles.toggleCircleChecked : ''}`} />
      </label>
      <div className={styles.toggleText}>
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
      </div>
    </div>
  );
};

export default ToggleButton;
