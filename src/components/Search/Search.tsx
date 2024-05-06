import { useAppDispatch } from "../../hooks/redux.ts";
import { update } from "../../features/search/searchSlice";
import styles from "./Search.module.css";

export default function Search() {
  const dispatch = useAppDispatch();

  function updateSearch(data: string) {
    dispatch(update(data));
  }

  return (
    <div className={styles.search}>
      <input
        type="search"
        className="search-input"
        onChange={(event) => {
          updateSearch(event.target.value);
        }}
        placeholder="Search bacteria"
      />
    </div>
  );
}
