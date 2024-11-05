// Função swap: troca os valores de duas posições de um vetor
const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

// Função shuffle: embaralha os elementos do vetor
const shuffle = (array, times) => {
    for (let i = 0; i < times; i++) {
        let j = Math.floor(Math.random() * array.length);
        let k = Math.floor(Math.random() * array.length);
        swap(array, j, k);
    }
};

// Função bubble_sort: ordena o vetor usando Bubble Sort
const bubble_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

// Função selection_sort: ordena o vetor usando Selection Sort
const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

// Função particionamento: suporte para Quick Sort
const particionamento = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

// Função quick_sort: ordena o vetor usando Quick Sort
const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        let pi = particionamento(array, low, high);
        quick_sort(array, low, pi - 1);
        quick_sort(array, pi + 1, high);
    }
    return array;
};
