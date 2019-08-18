import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  KakaoCordovaSDK,
  AuthTypes,
  KLFeedTemplate,
  KLListTemplate,
  KLButtonObject,
  KLCommerceObject,
  KLContentObject,
  KLLinkObject,
  KLSocialObject,
  KLLocationTemplate,
  KLCommerceTemplate,
  KLTextTemplate,
  KLScrapTemplate,
  KLCustomTemplate,
  KLUploadImageConfig,
  KLDeleteImageConfig,
  KLPostStoryConfig,
  KLPostStoryUrlInfo,
  ScrapType,
} from 'kakao-sdk';

@Component({
  selector: 'page-kakao',
  templateUrl: 'kakao.html',
})
export class KakaoPage {
  message: string = '';
  isKakaoLogin: boolean = false;
  uploadImageUrl = '';

  //your template id and arguments
  customTemplate: KLCustomTemplate = {
    templateId: '9570', 
    arguments: {
      title: 'title for test',
      description: 'description for description',
      like: '5000000',
    }, 
  };

  // your plus friend id
  plusFriendTemplate = {
    plusFriendId: '_xcLqmC',
  };

  constructor(public navCtrl: NavController, public _kakaoCordovaSDK: KakaoCordovaSDK) {}

  ngOnInit() {}

  postStory() {
    console.log('kakao postStory');
    this.message = '';

    let postStoryUrlInfo: KLPostStoryUrlInfo = {
      title: 'Sample',
      desc: 'Sample 입니다.',
      imageURLs: [
        'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
        'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
      ],
      type: ScrapType.ScrapTypeVideo,
    };

    let postStoryConfig: KLPostStoryConfig = {
      post: 'Sample Story Posting https://www.youtube.com/watch?v=XUX1jtTKkKs',
      appver: '1.0',
      urlinfo: postStoryUrlInfo,
    };

    this._kakaoCordovaSDK
      .postStory(postStoryConfig)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  deleteUploadedImage() {
    console.log('kakao deleteUploadedImage');
    this.message = '';

    let deleteImageConfig: KLDeleteImageConfig = {
      url: this.uploadImageUrl,
    };

    this._kakaoCordovaSDK
      .deleteUploadedImage(deleteImageConfig)
      .then(
        res => {
          this.message = JSON.stringify(res);
          this.uploadImageUrl = '';
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  uploadImage(fileOrUrl?, url?) {
    console.log('kakao uploadImage');
    this.message = '';

    let uploadImageConfig: KLUploadImageConfig = {
      fileOrUrl: fileOrUrl ? fileOrUrl : 'file',
      url: url ? url : '',
    };

    this._kakaoCordovaSDK
      .uploadImage(uploadImageConfig)
      .then(
        res => {
          this.message = JSON.stringify(res);
          this.uploadImageUrl = res;
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkCustom() {
    console.log('kakao sendLinkCustom');
    this.message = '';

    let values = { ...this.customTemplate };
    values.arguments.description = 'message from sendLinkCustom()';

    this._kakaoCordovaSDK
      .sendLinkCustom(values)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkScrap() {
    console.log('kakao sendLinkScrap');
    this.message = '';

    let scrapTemplate: KLScrapTemplate = {
      url: 'https://www.naver.com',
    };

    this._kakaoCordovaSDK
      .sendLinkScrap(scrapTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkText() {
    console.log('kakao sendLinkText');
    this.message = '';

    let textLink: KLLinkObject = {
      webURL: 'https://www.naver.com',
      mobileWebURL: 'https://www.naver.com',
    };

    let textButtons1: KLButtonObject = {
      title: 'button1',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
    };

    let textButtons2: KLButtonObject = {
      title: 'button2',
      link: {
        iosExecutionParams: 'param1=value1&param2=value2',
        androidExecutionParams: 'param1=value1&param2=value2',
      },
    };

    let textTemplate: KLTextTemplate = {
      text: 'Text Template Test',
      link: textLink,
      buttonTitle: '',
      buttons: [textButtons1, textButtons2],
    };

    this._kakaoCordovaSDK
      .sendLinkText(textTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkCommerce() {
    console.log('kakao sendLinkCommerce');
    this.message = '';

    let commerceContent: KLContentObject = {
      title: 'Ivory long dress (4 Color)',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
      imageURL: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
    };

    let commerceCommerce: KLCommerceObject = {
      regularPrice: 208800,
      discountPrice: 146160,
      discountRate: 30,
    };

    let commerceButtons1: KLButtonObject = {
      title: '구매하기',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
    };

    let commerceButtons2: KLButtonObject = {
      title: '공유하기',
      link: {
        iosExecutionParams: 'param1=value1&param2=value2',
        androidExecutionParams: 'param1=value1&param2=value2',
      },
    };

    let commerceTemplate: KLCommerceTemplate = {
      content: commerceContent,
      commerce: commerceCommerce,
      buttons: [commerceButtons1, commerceButtons2],
      buttonTitle: '웹으로 보자',
    };

    this._kakaoCordovaSDK
      .sendLinkCommerce(commerceTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkLocation() {
    console.log('kakao sendLinkLocation');
    this.message = '';

    let locationContent: KLContentObject = {
      title: '카카오 판교오피스',
      desc: '카카오 판교오피스 위치입니다.',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
      imageURL: 'http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
    };

    let locationSocial: KLSocialObject = {
      likeCount: 50,
      sharedCount: 1234,
    };

    let locationTemplate: KLLocationTemplate = {
      content: locationContent,
      address: '성남시 분당구 판교역로 235',
      addressTitle: '"카카오 판교오피스',
      social: locationSocial,
      buttonTitle: '웹으로 보자',
    };

    this._kakaoCordovaSDK
      .sendLinkLocation(locationTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkList() {
    console.log('kakao sendLinkList');
    this.message = '';

    let listHeaderLink: KLLinkObject = {
      webURL: 'https://www.naver.com',
      mobileWebURL: 'https://www.naver.com',
    };

    let listContent1: KLContentObject = {
      title: '자전거 라이더를 위한 공간',
      desc: '매거진',
      link: listHeaderLink,
      imageURL: 'http://mud-kage.kakao.co.kr/dn/QNvGY/btqfD0SKT9m/k4KUlb1m0dKPHxGV8WbIK1/openlink_640x640s.jpg',
    };

    let listContent2: KLContentObject = {
      title: '비쥬얼이 끝내주는 오레오 카푸치노',
      desc: '매거진',
      link: listHeaderLink,
      imageURL: 'http://mud-kage.kakao.co.kr/dn/boVWEm/btqfFGlOpJB/mKsq9z6U2Xpms3NztZgiD1/openlink_640x640s.jpg',
    };

    let listContent3: KLContentObject = {
      title: '감성이 가득한 분위기',
      desc: '매거진',
      link: listHeaderLink,
      imageURL: 'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    };

    let listButtons1: KLButtonObject = {
      title: 'button1',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
    };

    let listButtons2: KLButtonObject = {
      title: 'button2',
      link: {
        iosExecutionParams: 'param1=value1&param2=value2',
        androidExecutionParams: 'param1=value1&param2=value2',
      },
    };

    let listTemplate: KLListTemplate = {
      headerTitle: 'List Template Test',
      headerLink: listHeaderLink,
      contents: [listContent1, listContent2, listContent3],
      buttonTitle: '',
      buttons: [listButtons1, listButtons2],
    };

    this._kakaoCordovaSDK
      .sendLinkList(listTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  sendLinkFeed() {
    console.log('kakao sendLinkFeed');
    this.message = '';

    let feedLink: KLLinkObject = {
      webURL: 'https://www.naver.com',
    };

    let feedSocial: KLSocialObject = {
      likeCount: 50,
    };

    let feedButtons1: KLButtonObject = {
      title: 'button1',
      link: {
        mobileWebURL: 'https://www.naver.com',
      },
    };

    let feedButtons2: KLButtonObject = {
      title: 'button2',
      link: {
        iosExecutionParams: 'param1=value1&param2=value2',
        androidExecutionParams: 'param1=value1&param2=value2',
      },
    };

    let feedContent: KLContentObject = {
      title: 'title',
      link: feedLink,
      imageURL: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    };

    let feedTemplate: KLFeedTemplate = {
      content: feedContent,
      social: feedSocial,
      buttons: [feedButtons1, feedButtons2],
    };

    this._kakaoCordovaSDK
      .sendLinkFeed(feedTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  requestMe() {
    console.log('kakao requestMe');
    this.message = '';

    this._kakaoCordovaSDK
      .requestMe()
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  getAccessToken() {
    console.log('kakao getAccessToken');
    this.message = '';

    this._kakaoCordovaSDK
      .getAccessToken()
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  updateScopes() {
    console.log('kakao updateScopes');
    this.message = '';

    let values = {
      targetScopes: ['account_email', 'age_range', 'gender'],
    };

    this._kakaoCordovaSDK
      .updateScopes(values)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  checkScopeStatus() {
    console.log('kakao checkScopeStatus');
    this.message = '';

    let values = {
      targetScopes: ['account_email', 'age_range', 'gender'],
    };

    this._kakaoCordovaSDK
      .checkScopeStatus(values)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  requestSendMemo() {
    console.log('kakao requestSendMemo');
    this.message = '';

    let values = { ...this.customTemplate };
    values.arguments.description = 'message from requestSendMemo()';

    this._kakaoCordovaSDK
      .requestSendMemo(values)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  addPlusFriend() {
    console.log('kakao addPlusFriend');
    this.message = '';

    this._kakaoCordovaSDK
      .addPlusFriend(this.plusFriendTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  chatPlusFriend() {
    console.log('kakao chatPlusFriend');
    this.message = '';

    this._kakaoCordovaSDK
      .chatPlusFriend(this.plusFriendTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  chatPlusFriendUrl() {
    console.log('kakao chatPlusFriendUrl');
    this.message = '';

    this._kakaoCordovaSDK
      .chatPlusFriendUrl(this.plusFriendTemplate)
      .then(
        res => {
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  unlinkApp() {
    console.log('kakao unlink');
    this.message = '';

    this._kakaoCordovaSDK
      .unlinkApp()
      .then(
        res => {
          this.isKakaoLogin = false;
          this.message = '';
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  logout() {
    console.log('kakao logout');
    this.message = '';

    this._kakaoCordovaSDK
      .logout()
      .then(
        res => {
          this.isKakaoLogin = false;
          this.message = '';
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }

  login() {
    console.log('kakao login');
    this.message = '';

    let values = {
      authTypes: [AuthTypes.AuthTypeTalk, AuthTypes.AuthTypeStory, AuthTypes.AuthTypeAccount],
    };
    // values.authTypes = [AuthTypes.AuthTypeTalk];

    this._kakaoCordovaSDK
      .login(values)
      .then(
        res => {
          this.isKakaoLogin = true;
          this.message = JSON.stringify(res);
          console.info(this.message);
        },
        err => {
          this.message = JSON.stringify(err);
          console.error(this.message);
        }
      )
      .catch(err => {
        this.message = JSON.stringify(err);
        console.error(this.message);
      });
  }
}
