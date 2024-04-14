type ButtonSosmedProps = {
    icon: string;
    title: string;
}

export default function ButtonSosmedComponent(props: ButtonSosmedProps) {
    const { icon, title } = props

    return (
        <button type="button" className="w-full border border-custom-blue rounded-lg px-7 py-2 flex items-center justify-center gap-2">
            <img src={icon} alt="Icon Button" className="w-6 h-6" />
            <span className="text-sm shrink-0">{title}</span>
        </button>
    )
}
