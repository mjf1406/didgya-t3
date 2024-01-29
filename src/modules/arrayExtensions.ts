// extended.ts
declare global {
    interface Array<T> {
        alphabetize<K extends keyof T>(prop: K): T[];
        random(): T | null;
        shuffle(): void;
    }
}
  
Array.prototype.alphabetize = function <T, K extends keyof T>(prop: K): T[] {
    return this.sort((a: T, b: T) => {
        const valA = a[prop];
        const valB = b[prop];

        if (typeof valA === 'string' && typeof valB === 'string') {
            return valA.localeCompare(valB);
        } else {
            throw new Error("Property values are not strings.");
        }
    });
};

Array.prototype.random = function <T>(): T | null {
    if (this.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
};

Array.prototype.shuffle = function <T>(): void {
    for (let i = this.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap elements using destructuring assignment with type assertion
        [this[i], this[randomIndex]] = [this[randomIndex] as T, this[i] as T];
    }
};

export {}; // Required for TypeScript to recognize the modification to the global scope  