const path = require('path')

module.exports = {
    distDir: 'build',
    optimizeFonts: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        JWT_SECRET: "djhfghbdsgrasklkajsdgf",
        // Update your cloudinary access credentials here
        CLOUDINARY_URL: "...",
		CLOUDINARY_NAME: "...",
		UPLOAD_PRESET: "...",
        
        // Update your Stripe Secret Key & Publishable Key here
        STRIPE_SECRET_KEY: "...",
        STRIPE_PUBLISHABLE_KEY: "...",
	DATABASE_URL: "postgres://tbnjhebqixntzg:94891aae919f9e9869897897cf5171dae7a7e412c96e2ccb1936bd874c095405@ec2-54-228-32-29.eu-west-1.compute.amazonaws.com:5432/d9ms4408n3hl30"
    },
    trailingSlash: false
}
