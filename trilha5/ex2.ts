abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private readonly MAX = 10;

    addItem(item: string, quantity: number): void {
        const atual = this.items[item] || 0;
        const novo = Math.min(atual + quantity, this.MAX);

        this.items[item] = novo;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Caixas", 100);
warehouse.addItem("Caixas", 50);
console.log("Warehouse:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Chocolate", 8);
store.addItem("Chocolate", 10);
console.log("Store:", store.getInventory());
