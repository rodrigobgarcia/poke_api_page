
export default class ListItem {
    constructor({name, url}, template) {
        this._name = name;
        this._url = url;
        this._template = template;
    }

    _getTemplate() {
        return itemTemplate = document
            .getElementById(this._template)
            .content
            .cloneNode(true);
    };

    _fillListItem() {
        const listItem = this._getTemplate();
        listItem.querySelector(".list__item-name").textContent = this._name;
        listItem.querySelector(".list__item-url").href = this._url;
        return listItem;
    }
}