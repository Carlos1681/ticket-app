const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "completo":
        color = "bg-green-200";
        return color;

      case "em andamento":
        color = "bg-yellow-200";
        return color;

      case "em analise":
        color = "bg-red-200";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };

  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
