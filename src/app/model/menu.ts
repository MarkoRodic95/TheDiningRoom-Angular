import { MenuItem } from './menu-item';

export class Menu {
    _id: number;
    restaurants: number;
    items: MenuItem[];

    constructor (obj?:any) {
        this._id = obj && obj._id || null;
        this.restaurants = obj && obj.restaurants || null;
        this.items = obj && obj.items || {};
    }
}