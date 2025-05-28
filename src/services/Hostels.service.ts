import { BaseService } from "./Service";

export class HostelService extends BaseService{
    static url: string = '/hostel';
    static getHostels(filterData) {

        return this.get(this.url, filterData);
    }
    static getCities(filterData) {

        return this.get(this.url+'/cities', filterData);
    }
    static getHostelData(id: string){
        return this.get(this.url+'/'+id);
    }
}
