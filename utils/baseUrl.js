const baseUrl = process.env.NODE_ENV === "production" 
? 'https://extra-ecom-final.vercel.app' 
: 'http://localhost:3000';
export default baseUrl;
