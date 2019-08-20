export class FilterUpdate {
    filterState: boolean;
    filterIndex: number;
    filters: string[];
    constructor(state, index, cities) {
        this.filterIndex = index;
        this.filterState = state;
        this.filters = cities;
    }
}
