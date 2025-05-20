// === Superclass ===
class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getDescription() {
      return `${this.name} - Rp ${this.price}`;
    }
  }
  
  // === Subclass Drink ===
  class Drink extends MenuItem {
    constructor(name, price, isIced) {
      super(name, price);
      this.isIced = isIced;
    }
  
    getDescription() {
      return `${this.name} (${this.isIced ? "Dingin" : "Panas"}) - Rp ${this.price}`;
    }
  }
  
  // === Subclass Food ===
  class Food extends MenuItem {
    constructor(name, price, isVegetarian) {
      super(name, price);
      this.isVegetarian = isVegetarian;
    }
  
    getDescription() {
      return `${this.name} (${this.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}) - Rp ${this.price}`;
    }
  }
  
  // === Menu Class ===
  class Menu {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    showAll() {
      console.log("=== Menu Kopi Shop ===");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.getDescription()}`);
      });
    }
  
    getItem(index) {
      return this.items[index - 1]; // karena user input mulai dari 1
    }
  }
  
  // === Order Class ===
  class Order {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    printSummary() {
      console.log("\n--- Ringkasan Pesanan ---");
      this.items.forEach((item, i) => {
        console.log(`${i + 1}. ${item.getDescription()}`);
      });
      console.log(`Total: Rp ${this.getTotal()}`);
    }
  }
  
  // === CoffeeShop Class ===
  class CoffeeShop {
    constructor(name) {
      this.name = name;
      this.menu = new Menu();
    }
  
    addMenuItem(item) {
      this.menu.addItem(item);
    }
  
    showMenu() {
      this.menu.showAll();
    }
  
    takeOrder(indexes) {
      const order = new Order();
      indexes.forEach(i => {
        const item = this.menu.getItem(i);
        if (item) order.addItem(item);
      });
      order.printSummary();
    }
  }
  
  const shop = new CoffeeShop("Kopi Mantap");
  
  // Tambahkan menu minuman dan makanan
  shop.addMenuItem(new Drink("Latte", 20000, false));
  shop.addMenuItem(new Drink("Cold Brew", 22000, true));
  shop.addMenuItem(new Food("Croissant", 15000, false));
  shop.addMenuItem(new Food("Salad", 17000, true));
  
  // Tampilkan menu
  shop.showMenu();
  
  // Simulasi pesanan: pelanggan memilih item nomor 1 dan 4
  shop.takeOrder([1, 4]);
  