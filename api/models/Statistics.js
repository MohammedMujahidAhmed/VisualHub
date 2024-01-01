import mongoose from "mongoose";

const { Schema } = mongoose;

const AlgSchema = new Schema({
    linearsearch: {
        type: Number,
        default: 0, // Set default value to 0
    },
    binarysearch: {
        type: Number,
        default: 0,
    },
    bubblesort: {
        type: Number,
        default: 0,
    },
    selectionsort: {
        type: Number,
        default: 0,
    },
    mergesort: {
        type: Number,
        default: 0,
    },
    quicksort: {
        type: Number,
        default: 0,
    },
    heapsort: {
        type: Number,
        default: 0,
    },
    insertionsort: {
        type: Number,
        default: 0,
    },
});

const Alg = mongoose.model('Alg', AlgSchema);

export {Alg};