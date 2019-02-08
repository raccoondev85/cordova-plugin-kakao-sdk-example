# cordova-plugin-kakao-sdk-example
Ionic 3 Kakao Cordova SDK Plugin example 예제 


*Kakao Official Documents

**Android:  
  - Login: https://developers.kakao.com/docs/android/user-management
  - Link: https://developers.kakao.com/docs/android/kakaotalk-link
  - Talk: https://developers.kakao.com/docs/android/kakaotalk-api
  - PlusFriend: https://developers.kakao.com/docs/android/plusfriend
  
**iOS:  
  - Login: https://developers.kakao.com/docs/ios/user-management
  - Link: https://developers.kakao.com/docs/ios/kakaotalk-link
  - Talk: https://developers.kakao.com/docs/ios/kakaotalk-api
  - PlusFriend: https://developers.kakao.com/docs/ios/plusfriend


## Development Environment and ETC
|type|version
|---|---
|ionic (Ionic CLI)|3.19.1
|cordova (Cordova CLI)|8.0.0
|Cordova Platforms Android|7.1.4
|Cordova Platforms IOS|4.5.4
|Ionic Framework|ionic-angular 3.9.2
|cordova-plugin-kakao-sdk|3.0.0
|kakao-sdk|3.0.0

## How to install
```
// replace to your KAKAO_APP_KEY in config.xml
    <plugin name="cordova-plugin-kakao-sdk" spec="^3.0.0">
        <variable name="KAKAO_APP_KEY" value="HERE TO BE CHANGED" />
    </plugin>
```

install node modules
```
$ npm install 
```

add platforms 
```
$ ionic cordova platform add android
$ ionic cordova platform add ios

```

build platforms 
```
$ ionic cordova build android
$ ionic cordova build ios

```

Let's test it!
