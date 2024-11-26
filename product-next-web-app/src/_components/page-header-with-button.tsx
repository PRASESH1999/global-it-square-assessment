interface PageHeaderProps {
  name: string;
  buttonText: string;
  buttonColor: string;
  ButtonIcon: React.ComponentType<any>;
  onClick: () => void;
}

export function PageHeader({
  name,
  buttonText,
  buttonColor,
  ButtonIcon,
  onClick,
}: PageHeaderProps) {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between items-center ">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <button
        className="font-medium flex items-center gap-2 p-2 border-b rounded-lg bg-primary text-sm text-text hover:bg-primary/85 transition-colors"
        onClick={onClick}
      >
        {buttonText}
        <ButtonIcon size={20} />
      </button>
    </div>
  );
}
