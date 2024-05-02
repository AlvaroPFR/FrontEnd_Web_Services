import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:3000'
})
export class CropsApiService {
  async getAll() {
    return await http.get('cultivos')
  }
  async getById(id) {
    return await http.get('cultivos/'+id)
  }
  async create(body) {
    return await http.post('cultivos',body)
  }
  async update(body,id) {
    return await http.put('cultivos/'+id,body)
  }    async delete(id) {
    return await http.delete('cultivos/'+id)
  }
}