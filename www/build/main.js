webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KakaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__ = __webpack_require__(194);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KakaoPage = /** @class */ (function () {
    function KakaoPage(navCtrl, _kakaoCordovaSDK) {
        this.navCtrl = navCtrl;
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.message = '';
        this.isKakaoLogin = false;
        this.uploadImageUrl = '';
        //your template id and arguments
        this.customTemplate = {
            templateId: '9570',
            arguments: {
                title: 'title for test',
                description: 'description for description',
                like: '5000000',
            },
        };
        // your plus friend id
        this.plusFriendTemplate = {
            plusFriendId: '_xcLqmC',
        };
    }
    KakaoPage.prototype.ngOnInit = function () { };
    KakaoPage.prototype.postStory = function () {
        var _this = this;
        console.log('kakao postStory');
        this.message = '';
        var postStoryUrlInfo = {
            title: 'Sample',
            desc: 'Sample 입니다.',
            imageURLs: [
                'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
                'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
            ],
            type: __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["c" /* ScrapType */].ScrapTypeVideo,
        };
        var postStoryConfig = {
            post: 'Sample Story Posting https://www.youtube.com/watch?v=XUX1jtTKkKs',
            appver: '1.0',
            urlinfo: postStoryUrlInfo,
        };
        this._kakaoCordovaSDK
            .postStory(postStoryConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.deleteUploadedImage = function () {
        var _this = this;
        console.log('kakao deleteUploadedImage');
        this.message = '';
        var deleteImageConfig = {
            url: this.uploadImageUrl,
        };
        this._kakaoCordovaSDK
            .deleteUploadedImage(deleteImageConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            _this.uploadImageUrl = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.uploadImage = function (fileOrUrl, url) {
        var _this = this;
        console.log('kakao uploadImage');
        this.message = '';
        var uploadImageConfig = {
            fileOrUrl: fileOrUrl ? fileOrUrl : 'file',
            url: url ? url : '',
        };
        this._kakaoCordovaSDK
            .uploadImage(uploadImageConfig)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            _this.uploadImageUrl = res;
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkCustom = function () {
        var _this = this;
        console.log('kakao sendLinkCustom');
        this.message = '';
        var values = __assign({}, this.customTemplate);
        values.arguments.description = 'message from sendLinkCustom()';
        this._kakaoCordovaSDK
            .sendLinkCustom(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkScrap = function () {
        var _this = this;
        console.log('kakao sendLinkScrap');
        this.message = '';
        var scrapTemplate = {
            url: 'https://www.naver.com',
        };
        this._kakaoCordovaSDK
            .sendLinkScrap(scrapTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkText = function () {
        var _this = this;
        console.log('kakao sendLinkText');
        this.message = '';
        var textLink = {
            webURL: 'https://www.naver.com',
            mobileWebURL: 'https://www.naver.com',
        };
        var textButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var textButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var textTemplate = {
            text: 'Text Template Test',
            link: textLink,
            buttonTitle: '',
            buttons: [textButtons1, textButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkText(textTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkCommerce = function () {
        var _this = this;
        console.log('kakao sendLinkCommerce');
        this.message = '';
        var commerceContent = {
            title: 'Ivory long dress (4 Color)',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
            imageURL: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
        };
        var commerceCommerce = {
            regularPrice: 208800,
            discountPrice: 146160,
            discountRate: 30,
        };
        var commerceButtons1 = {
            title: '구매하기',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var commerceButtons2 = {
            title: '공유하기',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var commerceTemplate = {
            content: commerceContent,
            commerce: commerceCommerce,
            buttons: [commerceButtons1, commerceButtons2],
            buttonTitle: '웹으로 보자',
        };
        this._kakaoCordovaSDK
            .sendLinkCommerce(commerceTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkLocation = function () {
        var _this = this;
        console.log('kakao sendLinkLocation');
        this.message = '';
        var locationContent = {
            title: '카카오 판교오피스',
            desc: '카카오 판교오피스 위치입니다.',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
            imageURL: 'http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
        };
        var locationSocial = {
            likeCount: 50,
            sharedCount: 1234,
        };
        var locationTemplate = {
            content: locationContent,
            address: '성남시 분당구 판교역로 235',
            addressTitle: '"카카오 판교오피스',
            social: locationSocial,
            buttonTitle: '웹으로 보자',
        };
        this._kakaoCordovaSDK
            .sendLinkLocation(locationTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkList = function () {
        var _this = this;
        console.log('kakao sendLinkList');
        this.message = '';
        var listHeaderLink = {
            webURL: 'https://www.naver.com',
            mobileWebURL: 'https://www.naver.com',
        };
        var listContent1 = {
            title: '자전거 라이더를 위한 공간',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/QNvGY/btqfD0SKT9m/k4KUlb1m0dKPHxGV8WbIK1/openlink_640x640s.jpg',
        };
        var listContent2 = {
            title: '비쥬얼이 끝내주는 오레오 카푸치노',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/boVWEm/btqfFGlOpJB/mKsq9z6U2Xpms3NztZgiD1/openlink_640x640s.jpg',
        };
        var listContent3 = {
            title: '감성이 가득한 분위기',
            desc: '매거진',
            link: listHeaderLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        };
        var listButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var listButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var listTemplate = {
            headerTitle: 'List Template Test',
            headerLink: listHeaderLink,
            contents: [listContent1, listContent2, listContent3],
            buttonTitle: '',
            buttons: [listButtons1, listButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkList(listTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.sendLinkFeed = function () {
        var _this = this;
        console.log('kakao sendLinkFeed');
        this.message = '';
        var feedLink = {
            webURL: 'https://www.naver.com',
        };
        var feedSocial = {
            likeCount: 50,
        };
        var feedButtons1 = {
            title: 'button1',
            link: {
                mobileWebURL: 'https://www.naver.com',
            },
        };
        var feedButtons2 = {
            title: 'button2',
            link: {
                iosExecutionParams: 'param1=value1&param2=value2',
                androidExecutionParams: 'param1=value1&param2=value2',
            },
        };
        var feedContent = {
            title: 'title',
            link: feedLink,
            imageURL: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        };
        var feedTemplate = {
            content: feedContent,
            social: feedSocial,
            buttons: [feedButtons1, feedButtons2],
        };
        this._kakaoCordovaSDK
            .sendLinkFeed(feedTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.requestMe = function () {
        var _this = this;
        console.log('kakao requestMe');
        this.message = '';
        this._kakaoCordovaSDK
            .requestMe()
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.getAccessToken = function () {
        var _this = this;
        console.log('kakao getAccessToken');
        this.message = '';
        this._kakaoCordovaSDK
            .getAccessToken()
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.updateScopes = function () {
        var _this = this;
        console.log('kakao updateScopes');
        this.message = '';
        var values = {
            targetScopes: ['account_email', 'age_range', 'gender'],
        };
        this._kakaoCordovaSDK
            .updateScopes(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.checkScopeStatus = function () {
        var _this = this;
        console.log('kakao checkScopeStatus');
        this.message = '';
        var values = {
            targetScopes: ['account_email', 'age_range', 'gender'],
        };
        this._kakaoCordovaSDK
            .checkScopeStatus(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.requestSendMemo = function () {
        var _this = this;
        console.log('kakao requestSendMemo');
        this.message = '';
        var values = __assign({}, this.customTemplate);
        values.arguments.description = 'message from requestSendMemo()';
        this._kakaoCordovaSDK
            .requestSendMemo(values)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.addPlusFriend = function () {
        var _this = this;
        console.log('kakao addPlusFriend');
        this.message = '';
        this._kakaoCordovaSDK
            .addPlusFriend(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.chatPlusFriend = function () {
        var _this = this;
        console.log('kakao chatPlusFriend');
        this.message = '';
        this._kakaoCordovaSDK
            .chatPlusFriend(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.chatPlusFriendUrl = function () {
        var _this = this;
        console.log('kakao chatPlusFriendUrl');
        this.message = '';
        this._kakaoCordovaSDK
            .chatPlusFriendUrl(this.plusFriendTemplate)
            .then(function (res) {
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.unlinkApp = function () {
        var _this = this;
        console.log('kakao unlink');
        this.message = '';
        this._kakaoCordovaSDK
            .unlinkApp()
            .then(function (res) {
            _this.isKakaoLogin = false;
            _this.message = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.logout = function () {
        var _this = this;
        console.log('kakao logout');
        this.message = '';
        this._kakaoCordovaSDK
            .logout()
            .then(function (res) {
            _this.isKakaoLogin = false;
            _this.message = '';
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage.prototype.login = function () {
        var _this = this;
        console.log('kakao login');
        this.message = '';
        var values = {
            authTypes: [__WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["a" /* AuthTypes */].AuthTypeTalk, __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["a" /* AuthTypes */].AuthTypeStory, __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["a" /* AuthTypes */].AuthTypeAccount],
        };
        // values.authTypes = [AuthTypes.AuthTypeTalk];
        this._kakaoCordovaSDK
            .login(values)
            .then(function (res) {
            _this.isKakaoLogin = true;
            _this.message = JSON.stringify(res);
            console.info(_this.message);
        }, function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        })
            .catch(function (err) {
            _this.message = JSON.stringify(err);
            console.error(_this.message);
        });
    };
    KakaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kakao',template:/*ion-inline-start:"/Users/admin/Documents/workspace-hhp/KakaoSDKExample/src/pages/kakao/kakao.html"*/'<ion-header>\n  <ion-navbar color="kakao">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>KAKAO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div>\n    <ion-list>\n      <ion-list-header>\n        카카오 사용자 관리\n      </ion-list-header>\n\n      <button ion-item (click)="login()">\n        <ion-label>로그인(login)</ion-label>\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-label>로그아웃(logout)</ion-label>\n      </button>\n      <button ion-item (click)="unlinkApp()">\n        <ion-label>앱 연결 해제(unlinkApp)</ion-label>\n      </button>\n      <button ion-item (click)="requestMe()">\n        <ion-label>사용자 정보 요청(requestMe)</ion-label>\n      </button>\n      <button ion-item (click)="getAccessToken()">\n        <ion-label>토큰 정보 얻기(getAccessToken)</ion-label>\n      </button>\n      <button ion-item (click)="checkScopeStatus()">\n        <ion-label>동의사항 체크(checkScopeStatus)</ion-label>\n      </button>\n      <button ion-item (click)="updateScopes()">\n        <ion-label>동적 동의(updateScopes)</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        카카오톡\n      </ion-list-header>\n\n      <button ion-item (click)="requestSendMemo()">\n        <ion-label>나에게 보내기(requestSendMemo)</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        카카오플러스친구\n      </ion-list-header>\n\n      <button ion-item (click)="addPlusFriend()">\n        <ion-label>플러스친구 추가(addPlusFriend)</ion-label>\n      </button>\n      <button ion-item (click)="chatPlusFriend()">\n        <ion-label>플러스친구 채팅(chatPlusFriend)</ion-label>\n      </button>\n      <button ion-item (click)="chatPlusFriendUrl()">\n        <ion-label>플러스친구 url(chatPlusFriendUrl)</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        카카오 링크\n      </ion-list-header>\n\n      <button ion-item (click)="sendLinkFeed()">\n        <ion-label>기본 템플릿(sendFeedTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkList()">\n        <ion-label>기본 리스트 템플릿(sendListTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkLocation()">\n        <ion-label>장소 템플릿(sendLocationTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkCommerce()">\n        <ion-label>커머스 템플릿(sendCommerceTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkText()">\n        <ion-label>텍스트 템플릿(sendTextTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkScrap()">\n        <ion-label>스크랩 템플릿(sendScrapTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="sendLinkCustom()">\n        <ion-label>커스텀 템플릿(sendCustomTemplate)</ion-label>\n      </button>\n      <button ion-item (click)="uploadImage()">\n        <ion-label>이미지 업로드(uploadImage)</ion-label>\n      </button>\n      <button ion-item (click)="uploadImage(\'url\',\'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png\')">\n        <ion-label>이미지 스크랩(uploadScrap)</ion-label>\n      </button>\n      <button ion-item (click)="deleteUploadedImage()">\n        <ion-label>이미지 지우기(deleteUploadedImage)</ion-label>\n      </button>\n      <button ion-item (click)="postStory()">\n        <ion-label>카카오스토리 글쓰기(postStory)</ion-label>\n      </button>\n\n\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-list>\n    <ion-list-header color="clight">\n      결과(Response)\n    </ion-list-header>\n\n    <ion-item text-wrap>\n\n      <div class="copy-text" style="width:100%;height:100px;overflow:scroll" [innerHTML]="message"></div>\n\n    </ion-item>\n\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/admin/Documents/workspace-hhp/KakaoSDKExample/src/pages/kakao/kakao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["b" /* KakaoCordovaSDK */]])
    ], KakaoPage);
    return KakaoPage;
}());

//# sourceMappingURL=kakao.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_kakao_kakao__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kakao_sdk__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_kakao_kakao__["a" /* KakaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    mode: 'md',
                    platforms: {
                        ios: {
                            statusbarPadding: true
                        },
                        android: {}
                    },
                }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_kakao_kakao__["a" /* KakaoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5_kakao_sdk__["b" /* KakaoCordovaSDK */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_kakao_kakao__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_kakao_kakao__["a" /* KakaoPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/workspace-hhp/KakaoSDKExample/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/admin/Documents/workspace-hhp/KakaoSDKExample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map