export class LocalStorageMock {
    constructor() {
        this.value = {};
    }
    clear() {
        this.value = {};
    }
    getItem(key) {
        return this.value[key] || null;
    }
    setItem(key, value) {
        this.value[key] = String(value);
    }
    removeItem(key) {
        delete this.value[key];
    }
}


