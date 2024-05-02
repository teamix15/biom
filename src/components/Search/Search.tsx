import { useAppDispatch } from "../../features/hooks";
import { update } from "../../features/searchSlice";
import styles from "./Search.module.css";

export default function Search() {
  const dispatch = useAppDispatch();

  function updateSearch(data: string) {
    dispatch(update(data));
  }

  return (
    <div className={styles.search}>
      <caption>
        <input
          type="search"
          className="search-input"
          onChange={(event) => {
            updateSearch(event.target.value);
          }}
          placeholder="Search bacteria"
        />
      </caption>
    </div>
  );
}
