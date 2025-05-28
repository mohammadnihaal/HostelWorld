import { Hostel } from "../models/hostel.model";

export class HostelService {
    //
    getDataByFilters(filters: any) {
        return Hostel.find(filters);
    }

    getHostelById(id: string){
        return Hostel.findById(id);
    }

    getCities(){
        return Hostel.distinct('city');
    }

}