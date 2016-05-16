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

export class Wall extends Ground {
    constructor() {
        super(GROUNDS_DATA.wall.key, GROUNDS_DATA.wall.icon);
    }
}

export class Mountain extends Ground {
    constructor() {
        super(GROUNDS_DATA.mountain.key, GROUNDS_DATA.mountain.icon);
    }
}

export class Water extends Ground {
    constructor() {
        super(GROUNDS_DATA.water.key, GROUNDS_DATA.water.icon);
    }
}

export class Canyon extends Ground {
    constructor() {
        super(GROUNDS_DATA.canyon.key, GROUNDS_DATA.canyon.icon);
    }
}

export class Plane extends Ground {
    constructor() {
        super(GROUNDS_DATA.plane.key, GROUNDS_DATA.plane.icon);
    }
}

export default {Ground, Home, Wall, Mountain, Water, Canyon, Plane};
