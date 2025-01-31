type ButtonProps = {
    text: string; // Texto que se mostrará en el botón
    className?: string; // Clases adicionales opcionales
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export function ButtonComponent({ text, className, onClick }: ButtonProps) {

    return (
        <div className="flex justify-center">
            <button
                className={`mt-8 bg-button w-36 h-12 rounded font-bold text-white hover:bg-[#004D76] ${className}`}
                onClick={(event) => {
                    if (onClick) {
                        onClick(event);
                    }
                }}
            >
                {text}
            </button>
        </div>
    )
}