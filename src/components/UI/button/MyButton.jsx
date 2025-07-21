import React from 'react';
// импорт стилей. Тут импортируется как бы некоторый объект из этого файла. И стиль в таком случае мы получаем как свойство объекта.
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
        {/* специальный пропс children создан для понимания Реактом куда именно надо добавлять вложенные в компонент элементы.
        Тут в компоненте сделана деструктуризация, но она не обязательна для использования этого пропса как и для всех других лол */}
        {children}
    </button>
  );
};

export default MyButton;