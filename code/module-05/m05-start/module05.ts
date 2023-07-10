/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */
type Order = 'ascending' | 'descending';
class BuildArray {
    // TODO Define the properties
    private _items: number;
    private _sortOrder: Order;

    // TODO Define the constructor
    public constructor(items: number, sortOrder: Order) {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    public get items() {
        return this._items;
    }
    public set items(items) {
        this._items = items;
    }
    public get sortOrder() {
        return this._sortOrder;
    }
    public set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    // TODO Define the methods
    private sortDescending = (a: number, b: number): number => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
    }
    private sortAscending = (a: number, b: number): number => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    public buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this.sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
