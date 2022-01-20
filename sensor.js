class LightSensor{
    constructor(value, available, defaultSetting){
        this.value = value;
        this.available = available;

        this.defaultSetting = defaultSetting;
    }

    checkIntensity(lightLevel){
        if(this.available){
            if(lightLevel >= this.defaultSetting){
                this.value = true;
            }
            else{
                this.value = false;
            }
    
            return this.value;
        }
        else{
            return false;
        }
    }
}
