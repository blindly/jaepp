//@ts-check
class Member {
    constructor(data) {
        this.name = data.name;
        this.country = data.country;
        this.university = data.university;
        this.image = data.image;
    }

    university() {
        return this.university;
    }

    country() {
        return this.country;
    }

    image() {
        return this.image;
    }
}