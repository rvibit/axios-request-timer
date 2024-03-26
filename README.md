# axios-request-timer
Axios interceptor to mesaure request time


## Usage
Copy the file into your project then create axios instance and apply interceptors 
```javascript
//create axios instance

const http = axios.create({
  baseURL: '',
  headers: {},
});

//apply interceptors
http.interceptors.request.use(httpTimer().requestTimer);
http.interceptors.response.use(httpTimer().responseTimer);
```
