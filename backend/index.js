import { fetchList } from "./fetchList.js";
import { setupEvents } from "./events.js";
import { pokemonListContainer } from "./components/constants.js";

setupEvents();

fetchList();