import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
			scope:"email,first_name"
		})
	]
})