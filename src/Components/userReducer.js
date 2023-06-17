import axios from "axios";

let tokenHeader = {
    headers : {
        'Authorization' : 'Bearer 10f0a49335c1c2c5f2e64e7e460f649b2b8e1789f54382e86b97baa2c1380b27',
    }
}
const userReducer = (state,action) => {
    switch(action.type){
        case 'GET' : {
            return axios.get('https://gorest.co.in/public/v2/users', tokenHeader).then(res => {
                return res.data
            })
        }
        case 'POST' : {
            console.log(action)
            return axios.post('https://gorest.co.in/public/v2/users' , action.obj, tokenHeader).then(res => {
                return axios.get('https://gorest.co.in/public/v2/users', tokenHeader).then(res => {
                    return res.data
                }) 
            })
            
        }
        case 'UPDATE' : {
            return axios.patch('https://gorest.co.in/public/v2/users/'+action.obj.id , action.obj, tokenHeader).then(res => {
                return axios.get('https://gorest.co.in/public/v2/users', tokenHeader).then(res => {
                    return res.data
                }) 
            })
            
        }
        case 'DELETE' : {
            return axios.delete('https://gorest.co.in/public/v2/users/'+action.id , tokenHeader).then(res => {
                return axios.get('https://gorest.co.in/public/v2/users', tokenHeader).then(res => {
                    return res.data
                }) 
            })
            
        }
        default : {
            return state;
        };
    }
}

export default userReducer