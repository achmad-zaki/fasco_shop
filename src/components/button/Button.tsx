type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export default function ButtonComponent(props: ButtonProps) {
  const { title, type, className } = props

  return (
    <button type={type} className={className}>
      {title}
    </button>
  )
}
