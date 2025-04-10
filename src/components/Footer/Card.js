function Card({ icon: Icon, title, infoOne, infoTwo }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icon className="text-yellow-400" />
      <p className="text-lg font-bold">{title}</p>
      <div className="flex flex-col items-center justify-center gap-1 text-sm font-semibold text-gray-200">
        <span>{infoOne}</span>
        <span>{infoTwo}</span>
      </div>
    </div>
  );
}

export default Card;
