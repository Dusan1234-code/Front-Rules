export class Restaurant {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: Categories[];
    rating: number;
    price: string;
    location: Location;
    phone: string;
    display_phone: string;
    distance: number
    constructor(obj?:any ) {
        this.id = (obj && obj.id) || "";
        this.alias = (obj && obj.alias) || "";
        this.name = (obj && obj.name) || "";
        this.image_url = (obj && obj.image_url) || "";
        this.is_closed = (obj && obj.is_closed) || null;
        this.url = (obj && obj.url) || "";
        this.review_count = (obj && obj.review_count) || 0;
        this.categories = (obj && obj.categories && obj.categories.map((elem: any) => new Categories(elem))) || [];
        this.rating = (obj && obj.rating) || 0;
        this.price = (obj && obj.price) || "";
        this.location = (obj && obj.location) || null;
        this.phone = (obj && obj.phone) || "";
        this.display_phone = (obj && obj.display_phone) || "";
        this.distance = (obj && obj.distance) || 0;
    }
}

export class Categories {
    alias: string;
    title: string;
    constructor(obj?: any ) {
        this.alias = (obj && obj.alias) || "";
        this.title = (obj && obj.title) || "";
    }
}

export class Location {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: number;
    country: string;
    state: string;
    display_address: string[];
    constructor(obj?:any) {
        this.address1 = (obj && obj.address1) || "";
        this.address2 = (obj && obj.address2) || "";
        this.address3 = (obj && obj.address3) || "";
        this.city = (obj && obj.city) || "";
        this.zip_code = (obj && obj.zip_code) || 0;
        this.country = (obj && obj.country) || "";
        this.state = (obj && obj.state) || "";
        this.display_address = (obj && obj.display_address) || null;
    }
}




