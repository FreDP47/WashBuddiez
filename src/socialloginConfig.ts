import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular-6-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("<GoogleClientIdJHere>")
    }]);
    
    return config;
}