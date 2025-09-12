export default function TextWithBold({ text }) {
  const parts = text.split(/(\[b\].*?\[\/b\])/g);

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith("[b]") && part.endsWith("[/b]")) {
          return (
            <span key={index} className="font-semibold">
              {part.replace("[b]", "").replace("[/b]", "")}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}
