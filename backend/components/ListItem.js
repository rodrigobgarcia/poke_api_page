
export default class ListItem {
    constructor({name, url}, template) {
        this._name = name;
        this._url = url;
        this._template = template;
    }

    _getTemplate() {
        const itemTemplate = document
            .getElementById(this._template)
            .content
            .cloneNode(true);
        return itemTemplate;
    };

    _fillListItem() {
        const listItem = this._getTemplate();
        console.log(typeof(listItem));
        listItem.getElementById("list__item-name").textContent = this._name;
        listItem.getElementById("list__item-url").textContent = this._url;
        listItem.getElementById("list__item-url").href = this._url;
        return listItem;
    }
}