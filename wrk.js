

class bike {
    constructor(model) {
        this.model=model;
    }
    bikes(){
        console.log(`${this.model} is a splender`);
        
    }
}
class splender extends bike{
    constructor(model,name){
        super(model)
        this.name=name;
    }
    bikes(){
        console.log(`${this.model} is better than ${this.name}`);
        
    }
}
const splender1=new splender("splender 2003","splender 2025");
splender1.bikes();