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
        STRIPE_PUBLISHABLE_KEY: "..."
    },
    trailingSlash: false
}
