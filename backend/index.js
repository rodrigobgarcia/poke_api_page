import { fetchList } from "./fetchList.js";
import { setupEvents } from "./events.js";
import { listItemTemplate, listItemTemplateTag, pokemonListContainer } from "./components/constants.js";
import ListItem from "./components/ListItem.js";

setupEvents();

const pokeList = await fetchList();


pokeList.forEach(element => {
    const listItem = new ListItem(element, listItemTemplateTag);
    console.log(listItem);
    listItem._getTemplate();
    const item = listItem._fillListItem();
    pokemonListContainer.appendChild(item);
    
});