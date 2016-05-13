'user strict'

import {GROUNDS_DATA} from './constants';


export class Agent {
    constructor(name, factors) {
        this.icon = 'reddit';
        this.name = name,
        this.factors = factors
    }
}

export class Mombo extends Agent {
    constructor() {
        let factors = {};

        factors[GROUNDS_DATA.mountain.key] = 2.5;
        factors[GROUNDS_DATA.water.key]    = 0.3;
        factors[GROUNDS_DATA.canyon.key]   = 1.5;
        factors[GROUNDS_DATA.plane.key]    = 1.0;

        super('Mombo', factors);
    }
}

export class Pirolo extends Agent {
    constructor() {
        let factors = {};

        factors[GROUNDS_DATA.mountain.key] = 0.3;
        factors[GROUNDS_DATA.water.key]    = 2.5;
        factors[GROUNDS_DATA.canyon.key]   = 1.0;
        factors[GROUNDS_DATA.plane.key]    = 1.5;

        super('Pirolo', factors);
    }
}

export class Lucas extends Agent {
    constructor() {
        let factors = {};

        factors[GROUNDS_DATA.mountain.key] = 1.5;
        factors[GROUNDS_DATA.water.key]    = 1.0;
        factors[GROUNDS_DATA.canyon.key]   = 2.5;
        factors[GROUNDS_DATA.plane.key]    = 0.3;

        super('Lucas', factors);
    }
}

export default {Agent, Mombo, Pirolo, Lucas};
