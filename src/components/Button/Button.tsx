import Style from './Button.module.css';

type ButtonProps = {
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
  text: string;
  styleType: string;
};

export const Button = ({ type = 'button', onClick, text, styleType }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      ${Style.button}
      ${styleType === 'deleteButton' ? Style.deleteButton : Style.addButton}
      `}
    >
      {text}
    </button>
  );
};
