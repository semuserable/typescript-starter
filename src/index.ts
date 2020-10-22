interface AnimalMap {
    "cat": string;
    "dog": string;
}

function printAnimal<T extends keyof AnimalMap>(animal: T) {
    console.log("animal", animal);
}

printAnimal("cat");