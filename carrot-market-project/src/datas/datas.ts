import HomePage from '@/views/HomePage.vue'
import LifePage from '@/views/LifePage.vue'
import NearPage from '@/views/NearPage.vue'
import ChatPage from '@/views/ChatPage.vue'
import MyPage from '@/views/MyPage.vue'

export interface listInterface {
    title: string,
    subjects: string[]
}

export interface toastInterface {
    location: object[]
}

export interface baseInterface {
    title: string,
    path: string,
    component: any,
    header: string[],
    category?: {
        vertical?: boolean,
        round?: boolean,
        big?: boolean,
        cont: Array<object>
    } | {
        vertical?: boolean,
        round?: boolean,
        big?: boolean,
        cont: Array<object>
    }[],
    content: any[] | object
}

const listsBottomSheet: listInterface = {
    title: '게시글의 주제를 선택해주세요.',
    subjects: [
        '동네질문',
        '동네사건사고',
        '겨울간식',
        '동네맛집',
        '동네소식',
        '생활정보',
        '취미생활',
        '일상',
        '분실/실종센터',
        '해주세요',
        '동네사진전'
    ]
}

const baseData: baseInterface[] = [
    {
        title: '홈',
        path: '/',
        component: HomePage,
        header: ['search','alarm'],
        category: {
            cont: [
                {src:'hamburger', all: true, txt:'전체'},
                {src:'part-timer',txt:'알바'},
                {src:'home',txt:'부동산'},
                {src:'car',txt:'중고차'},
            ]
        },
        content: [
            {
                more: false,
                img: ['test'],
                title: '테스트1',
                subTxt: {
                    locale: '명동',
                    time: '11분 전',
                    price: 10000,
                },
                react: {
                    like: 6
                }
            },
            {
                img: ['test'],
                title: '테스트2',
                subTxt: {
                    locale: '명동',
                    time: '3시간 전',
                    price: 0,
                },
                react: {
                    like: 11
                }
            },
            {
                img: ['test'],
                title: '테스트3',
                subTxt: {
                    locale: '종로',
                    time: '41분 전',
                    price: 1420000,
                },
                react: {
                }
            },
            {
                img: ['test'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                },
                react: {   
                    like: 2
                }
            },
            {
                img: ['test'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                },
                react: {   
                    like: 2
                }
            },
            {
                img: ['test'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                },
                react: {   
                    like: 2
                }
            },
            {
                img: ['test'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                },
                react: {   
                    like: 2
                }
            },
            {
                img: ['test'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                },
                react: {   
                    like: 2
                }
            },

        ]
    },
    {
        title: '동네생활',
        path: '/life',
        component: LifePage,
        header: ['profile','search','alarm'],
        category: [
            {   
                vertical: true,
                cont: [
                    {src:'test', txt: '모임1'},
                    {src:'test', txt: '모임2'},
                    {src:'test', txt: '모임3'},
                    {src:'test', txt: '모임4'},
                    {src:'test', txt: '모임5'},
                    {src:'test', txt: '모임6'},
                    {src:'test', txt: '모임7'},
                    {src:'test', txt: '모임8'},
                    {src:'test', txt: '모임9'},
                    {src:'test', txt: '모임10'},
                    {src:'test', txt: '모임11'},
                ]
            },
            {
                round: true,
                cont: [
                    {src:'hamburger', txt: '주제', all: true},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'part-timer',txt:'알바'},
                    {src:'home',txt:'부동산'},
                    {src:'car',txt:'중고차'},
                ]
            },
        ],
        content: [
            {
                more: false,
                tag: ['인기'],
                img: ['test01'],
                title: '테스트1',
                subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                subTxt: {
                    locale: '명동',
                    time: '11분 전',
                    watch: 48,
                },
                react: {
                    thumb: 5,
                    comment: 1
                }
            },
            {
                more: false,
                tag: ['인기', '모임'],
                img: ['test01','test03'],
                title: '테스트2',
                subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                subTxt: {
                    locale: '명동',
                    time: '3시간 전',
                    watch: 1,
                },
                react: {
                    thumb: 11
                }
            },
            {
                more: false,
                tag: ['인기'],
                title: '테스트3',
                subTxt: {
                    locale: '종로',
                    time: '41분 전',
                },
                react: {
                    person: 6
                }
            },
            {
                more: false,
                tag: ['동네질문'],
                img: ['test01','test02','test03'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    watch: 5
                },
                react: {
                    person: 6
                }
            },
            {
                more: false,
                tag: ['신규모임'],
                img: ['test01','test02','test03'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    watch: 3,
                },
                react: {
                    thumb: 2,
                    comment: 5,
                }
            },
            {
                more: false,
                tag: ['인기','신규모임','생활정보','취미생활','해주세요'],
                img: ['test01','test02','test03'],
                title: '테스트4',
                subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    watch: 22,
                },
                react: {
                    thumb: 2
                }
            },
            {
                more: false,
                tag: ['인기','신규모임','생활정보','취미생활','해주세요'],
                img: ['test01','test02','test03'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    watch: 15,
                },
                react: {
                    thumb: 2
                }
            },
            {
                more: false,
                tag: ['인기','신규모임','생활정보','취미생활','해주세요'],
                img: ['test01','test02','test03'],
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                },
                react: {
                    thumb: 2
                }
            },
        ]
    },
    {
        title: '내 근처',
        path: '/near',
        component: NearPage,
        header: ['search','alarm'],
        category: {   
            vertical: true,
            cont: [
                {src:'test', txt: '음식점'},
                {src:'test', txt: '카페·디저트'},
                {src:'test', txt: '운동'},
                {src:'test', txt: '동네쿠폰'},
                {src:'test', txt: '농수산물'},
                {src:'test', txt: '이사·용달'},
                {src:'test', txt: '수리'},
                {src:'test', txt: '과외·클래스'},
                {src:'test', txt: '뷰티샵'},
                {src:'test', txt: '미용실'},
                {src:'test', txt: '인테리어시공'},
                {src:'arrow', txt: '더보기'},
                {src:'test', txt: '청소'},
                {src:'test', txt: '세탁소'},
                {src:'test', txt: '취미'},
                {src:'test', txt: '학원'},
                {src:'test', txt: '육아'},
                {src:'test', txt: '병원·약국'},
                {src:'test', txt: '반려동물'},
            ]
        },
        content: {
            음식점: [
                {
                    tag: ['카페'],
                    img: ['test01'],
                    title: '테스트1',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 11분 전',
                    },
                },
                {
                    tag: ['카페'],
                    img: ['test02'],
                    title: '테스트2',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3시간 전',
                    },
                },
                {
                    tag: ['일반음식점'],
                    img: ['test03'],
                    title: '테스트3',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '13일 전',
                    },
                },
                {
                    tag: ['일반음식점'],
                    img: ['test02'],
                    title: '테스트4',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3분 전',
                    },
                },
                {
                    tag: ['카페'],
                    img: ['test01'],
                    title: '테스트5',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 2주 전',
                    },
                },
            ],
            생활: [
                {
                    tag: ['의류전문점'],
                    img: ['test01'],
                    title: '테스트1',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 11분 전',
                    },
                },
                {
                    tag: ['일반의류판매'],
                    img: ['test02'],
                    title: '테스트2',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3시간 전',
                    },
                },
                {
                    tag: ['반려동물호텔'],
                    img: ['test03'],
                    title: '테스트3',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '13일 전',
                    },
                },
                {
                    tag: ['일반의류판매'],
                    img: ['test02'],
                    title: '테스트4',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3분 전',
                    },
                },
                {
                    tag: ['여성의류전문점'],
                    img: ['test01'],
                    title: '테스트5',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 2주 전',
                    },
                },
            ],
            건강: [
                {
                    tag: ['필라테스'],
                    img: ['test01'],
                    title: '테스트1',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 11분 전',
                    },
                },
                {
                    tag: ['실내골프연습장'],
                    img: ['test02'],
                    title: '테스트2',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3시간 전',
                    },
                },
                {
                    tag: ['헬스'],
                    img: ['test03'],
                    title: '테스트3',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '13일 전',
                    },
                },
                {
                    tag: ['필라테스'],
                    img: ['test02'],
                    title: '테스트4',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3분 전',
                    },
                },
                {
                    tag: ['실내골프연습장'],
                    img: ['test01'],
                    title: '테스트5',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 2주 전',
                    },
                },
            ],
            미용: [
                {
                    tag: ['두피/탈모관리'],
                    img: ['test01'],
                    title: '테스트1',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 11분 전',
                    },
                },
                {
                    tag: ['미용'],
                    img: ['test02'],
                    title: '테스트2',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3시간 전',
                    },
                },
                {
                    tag: ['미용실'],
                    img: ['test03'],
                    title: '테스트3',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '13일 전',
                    },
                },
                {
                    tag: ['두피관리'],
                    img: ['test02'],
                    title: '테스트4',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3분 전',
                    },
                },
                {
                    tag: ['탈모관리'],
                    img: ['test01'],
                    title: '테스트5',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 2주 전',
                    },
                },
            ],
            교육: [
                {
                    tag: ['패션/뷰티클래스'],
                    img: ['test01'],
                    title: '테스트1',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 11분 전',
                    },
                },
                {
                    tag: ['보컬/성악레슨'],
                    img: ['test02'],
                    title: '테스트2',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3시간 전',
                    },
                },
                {
                    tag: ['보컬/성악레슨'],
                    img: ['test03'],
                    title: '테스트3',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '13일 전',
                    },
                },
                {
                    tag: ['패션클래스'],
                    img: ['test02'],
                    title: '테스트4',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 3분 전',
                    },
                },
                {
                    tag: ['뷰티클래스'],
                    img: ['test01'],
                    title: '테스트5',
                    subTitle: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
                    subTxt: {
                        time: '약 2주 전',
                    },
                },
            ]
        }
    },
    {
        title: '채팅',
        path: '/chat',
        component: ChatPage,
        header: ['QRscan','alarm'],
        content: []
    },
    {
        title: '나의 당근',
        path: '/mypage',
        component: MyPage,
        header: ['setting'],
        category: {
            round: true,
            big: true,
            cont: [
                {src:'hamburger', all: true},
                {txt:'남성패션/잡화'},
                {txt:'디지털기기'},
                {txt:'취미/게임/음악'},
                {txt:'모임'},
                {txt:'여성잡화'},
                {txt:'동네질문'},
                {txt:'기타 중고물품'},
            ]
        },
        content: []
    },
]

const listsToast: toastInterface = {
    location: [
        {title: '명동', select: true},
        {title: '회현', select: false}
    ]
}

export { listsBottomSheet, listsToast, baseData }