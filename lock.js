class Lock{
    constructor(locked){
        this.locked = locked;
    }

    lock(){
        this.locked = true;
    }

    unlock(){
        this.locked = false;
    }
}
