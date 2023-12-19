import { Review } from "./review.model";


export class Marker {
    user!: number;
    longitude!: number;
    latitude!: number;
    description: string = "";
    photo: string = "";
    photo_data: string = "";
    total_rating: 1|2|3|4|5 = 1; 
    reviews!: Array<Review>;
    id!: number;
}