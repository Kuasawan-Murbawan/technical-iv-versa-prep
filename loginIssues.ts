/*
A user reports:

I can log in successfully.
After refreshing the page, I am logged out.

How would you investigate?
*/

1. I would check the FE state management whether it stors the JWT token
2. Then i will check the backend specifically the jwt token whether it produced correctly
3. then check the time validity whether it persist long enough
4. check the local frontend storage if it store the jwt token

hm actually yea, in my project, i store jwt token using zustand, after i refresh, the jwt token should dissapear right? 
but why can i still log in even after i refresh?

/*
Your investigation flow should be:

Check browser localStorage after login. Is the JWT stored?
Refresh page. Is the JWT still in localStorage?
Check whether Zustand rehydrates the token correctly.
Check ProtectedRoute logic. Is it running before rehydration completes?
Check Axios interceptor. Is it attaching Authorization: Bearer <token>?
Check backend logs/API response. Is backend returning 401 because token is missing/expired?
Decode token and check expiry time.
*/