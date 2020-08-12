export class Filter {

    constructor(
        public name?: string, 
        public ingredient?: string, 
        public comments?: string,
        public typeCode?: number, 
        public categoryCode?: number, 
        public prepareTypeCode?: number, 
        public preparationTime?: string,
        public tested?: any, 
        public favorite?: any
    ) {}
}