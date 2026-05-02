import "./Button.scss";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button type="button" className="btn">
      {label}
    </button>
  );
}
