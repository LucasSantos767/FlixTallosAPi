export default interface ITheater {

    address: {
        street1: string;
        city: string;
        state: string;
        zipcode: string;
    },
    geo:{
        type: string;
        coordinates: Array<number>
    }

}