import { BiomDto } from "../../models/dto/biom.dto";

export function Row({ bacteria }: { bacteria: BiomDto }) {
  return (
    <tr>
      <td data-cell="name">{bacteria.name}</td>
      <td data-cell="taxId">{bacteria.taxId}</td>
      <td data-cell="abundanceScore">{bacteria.abundanceScore}</td>
      <td data-cell="relativeAbundance">{bacteria.relativeAbundance}</td>
      <td data-cell="uniqeMatchesFrequency">
        {bacteria.uniqueMatchesFrequency}
      </td>
    </tr>
  );
}
