class FKcache {
  storage: Storage;
  constructor(name: string) {
    this.storage = name === "local" ? localStorage : sessionStorage;
  }

  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const localCache = new FKcache("local");
export const sessionCache = new FKcache("session");
