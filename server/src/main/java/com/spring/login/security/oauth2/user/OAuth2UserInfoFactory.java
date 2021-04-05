package com.spring.login.security.oauth2.user;

import com.spring.login.exception.OAuth2AuthenticationProcessingException;

import java.util.Map;

import static com.spring.login.model.AuthProvider.google;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}
