import type { SortOrder } from "./types";

interface Props {
  value: SortOrder;
  onChange(value: SortOrder): void;
}

export default function Sort({ value, onChange }: Props) {
  return (
    <select
      className="ml-4 w-40 mt-2 p-2 border-2 border-neutral-500 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value as SortOrder)}
    >
      <option value="asc">Stigande</option>
      <option value="desc">Fallande</option>
    </select>
  );
}
