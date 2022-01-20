class Environment{
    constructor(){
        this.lightLevel = 0;
    }
}

class Light extends Environment{
    constructor(lightLevel){
        super(lightLevel);

        this.lightLevel = lightLevel;
    }

    generateLight(){
        let d = new Date();
        let hour = d.getHours();
        let intensity = 0;

        if(hour > 5 && hour <= 12){
            intensity = hour;
        }
        else if(hour > 12 && hour <= 17){
            intensity = Math.floor(Math.random() * 10) + 1;
        }
        else{
            intensity = 0;
        }

        this.lightLevel = intensity;
    }
}