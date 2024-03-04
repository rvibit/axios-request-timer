# axios-request-timer
Axios intercepter to mesaure request time


## Usage
Copy the file into your project then create axios instance and apply intercenpers 
```javascript
//create axios insrance

const http = axios.create({
  baseURL: '',
  headers: {},
});

//apply intercepters
http.interceptors.request.use(httpTimer().requestTimer);
http.interceptors.response.use(httpTimer().responseTimer);
```
