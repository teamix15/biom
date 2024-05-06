import { Row } from "../Row/Row";
import styles from "./Table.module.css";
import { useAppSelector } from "../../hooks/redux.ts";
import { BiomDto } from "../../models/dto/biom.dto.tsx";

export default function Table() {
  const search = useAppSelector((state) => state.search.value);

  const biom: BiomDto[] = useAppSelector((state) => state.bacteria.biom);

  const filterBiom = biom.filter((bacteria: BiomDto) =>
    bacteria.name.includes(search)
  );

  return (
    <div className={styles.table}>
      <table className={styles.tableData}>
        <thead>
          <tr>
            <th th-data="Name">Name</th>
            <th th-data="Tax ID">Tax ID</th>
            <th th-data="Abundance score">Abundance score</th>
            <th th-data="Relative abundance">Relative abundance</th>
            <th th-data="Name">Unique matches frequency</th>
          </tr>
        </thead>
        <tbody>
          {filterBiom.map((bacteria) => (
            <Row bacteria={bacteria} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
