import { BiomDto } from "../../models/dto/biom.dto";
import { useState, useEffect } from "react";
import { Row } from "../Row/Row";
import jsonData from "../../assets/biom.json";
import { getRow } from "../../services/parse-data";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const [bacteriaData, setBacteriaData] = useState<BiomDto[]>([]);

  const search = useSelector<RootState, string>(
    (state: RootState) => state.value
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        jsonData.rows.map((_, index) => getRow(index))
      );
      setBacteriaData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.table}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className={styles.tableData}>
          <tr>
            <th th-data="Name">Name</th>
            <th th-data="Tax ID">Tax ID</th>
            <th th-data="Abundance score">Abundance score</th>
            <th th-data="Relative abundance">Relative abundance</th>
            <th th-data="Name">Unique matches frequency</th>
          </tr>
          {bacteriaData
            .filter((bacteria) => bacteria.name.includes(search))
            .map((bacteria) => (
              <Row key={bacteria.name} bacteria={bacteria}></Row>
            ))}
        </table>
      )}
    </div>
  );
}
