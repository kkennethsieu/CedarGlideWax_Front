function GuaranteedItem({ item }) {
  const { icon, title, description } = item;
  return (
    <div className="flex flex-col items-center text-center space-y-2 max-w-[200px]">
      <div className="text-4xl text-main">{icon}</div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default GuaranteedItem;
