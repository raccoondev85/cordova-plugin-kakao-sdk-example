# cordova-plugin-kakao-sdk-example
Ionic 3 Kakao Cordova SDK Plugin example 예제 


## Environment
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
// replace KAKAO_APP_KEY to yours in config.xml
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
