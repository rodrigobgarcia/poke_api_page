export default class Section {
    constructor({data}, container) {
        this._container = container;
        this._data = data;
    }

    renderList() {
        this._data.forEach(item => {
            const listItem = new ListItem(item);
            this._container.appendChild(listItem.render());
        });
    }
}

