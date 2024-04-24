import { BiomDto } from "../../models/dto/biom.dto";

export function Row({bacteria}: {bacteria: BiomDto}) {
  return (
    <tr>
      <td>{bacteria.name}</td>
      <td>{bacteria.taxId}</td>
      <td>{bacteria.abundanceScore}</td>
      <td>{bacteria.relativeAbundance}</td>
      <td>{bacteria.uniqeMatchesFrequency}</td>
    </tr>
  );
}
