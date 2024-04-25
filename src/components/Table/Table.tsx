import { BiomDto } from "../../models/dto/biom.dto";
import {useState, useEffect} from "react"
import { Row } from "../Row/Row";
import jsonData from "../../assets/biom.json";
import { getRow } from "../../services/parse-data";

export default function Table({search}: {search: string}) {
  const [loading, setLoading] = useState(true);
  const [bacteriaData, setBacteriaData] = useState<BiomDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(jsonData.rows.map((_, index) => getRow(index)));
      setBacteriaData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="table">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Tax ID</th>
            <th>Abundance score</th>
            <th>Relative abundance</th>
            <th>Unique matches frequency</th>
          </tr>
          {bacteriaData.filter((bacteria) => bacteria.name.includes(search)).map((bacteria) => (
            <Row key={bacteria.name} bacteria={bacteria}></Row>
          ))}
        </table>
      )}
    </div>
  );
}
