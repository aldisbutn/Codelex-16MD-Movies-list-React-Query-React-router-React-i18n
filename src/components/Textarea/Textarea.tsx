type TextareaProps = {
  name: string;
  className: string;
  placeholder: string;
  value: string;
  onChange: (e:React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ name, className, placeholder, value, onChange }: TextareaProps) => {
  return (
    <textarea name={name} className={className} placeholder={placeholder} value={value} onChange={onChange}></textarea>
  );
};