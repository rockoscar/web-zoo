export class Animal{
    constructor(
        public name: string,
        public description: string,
        public year: string,
        public image: string,
        //aqui capturamos el id del usuario asignado al modelo
        public user: string
        ){}
}