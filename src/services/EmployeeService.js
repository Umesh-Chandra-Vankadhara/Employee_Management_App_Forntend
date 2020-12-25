import axios from 'axios' ;

const URL="http://localhost:7070/employees";

class EmployeeService {

    //the below method fetches all employees JSON data
     getAllEmployees()
      {
        return  axios.get(`${URL}/all`);
      }

    //the following method  delete an empployee whose id is passed  as a parameter to it
      deleteEmployee(id)
      {
         return axios.delete(`${URL}/remove/${id}`);
      }

    

}

export default new EmployeeService();