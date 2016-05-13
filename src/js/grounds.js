import {GROUNDS_DATA} from './constants';


export class Ground {
    constructor(key, icon) {
        this.key = key;
        this.icon = icon;
    }
}

export class Home extends Ground {
    constructor() {
        super(GROUNDS_DATA.home.key, GROUNDS_DATA.home.icon);
    }
}

export class Water extends Ground {
    constructor() {
        super(GROUNDS_DATA.water.key, GROUNDS_DATA.water.icon);
    }
}

export default {Ground, Home, Water};
