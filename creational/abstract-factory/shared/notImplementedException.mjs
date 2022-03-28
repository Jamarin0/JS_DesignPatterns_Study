export default class NotImplementedException extends Error {
    constructor(message){
        super(`the "${message}" fuction was not implemented`)
        this.name = "NotImplementedException"
    }
}