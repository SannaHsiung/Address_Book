interface Props {
  value: string;
  onChange(value: string): void;
}

export default function Searchbox({ value, onChange }: Props) {
  return (
    <input
      className="w-60 mt-2 p-2 border-2 border-neutral-500 rounded"
      placeholder="Sök..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
