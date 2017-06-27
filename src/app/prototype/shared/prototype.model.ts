export class Prototype { 
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    private _role : string;
    public get role() : string {
        return this._role;
    }
    public set role(v : string) {
        this._role = v;
    }
    
    constructor(name?:string, role?:string){
        this._name = name;
        this.role = role;
    }
}