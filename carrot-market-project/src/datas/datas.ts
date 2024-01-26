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
    categoryBtnType? : string,
    categoryTxt?: string,
    category?: {
        round?: boolean,
        big?: boolean,
        cont: Array<object>
    },
    content: any[]
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
                {src:'hamburger', all: true},
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
        content: [
            {
                more: false,
                img: 'test',
                title: '테스트1',
                subTxt: {
                    locale: '명동',
                    time: '11분 전',
                    price: 10000,
                    like: 5
                }
            },
            {
                img: 'test',
                title: '테스트2',
                subTxt: {
                    locale: '명동',
                    time: '3시간 전',
                    price: 0,
                    like: 11
                }
            },
            {
                img: 'test',
                title: '테스트3',
                subTxt: {
                    locale: '종로',
                    time: '41분 전',
                    price: 1420000,
                }
            },
            {
                img: 'test',
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                    like: 2
                }
            },
            {
                img: 'test',
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                    like: 2
                }
            },
            {
                img: 'test',
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                    like: 2
                }
            },
            {
                img: 'test',
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
                    like: 2
                }
            },
            {
                img: 'test',
                title: '테스트4',
                subTxt: {
                    locale: '회현',
                    time: '10시간 전',
                    price: 500,
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
        categoryBtnType: 'round',
        categoryTxt: '주제',
        category: {
            round: true,
            cont: [
                {src:'hamburger', all: true},
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
        content: []
    },
    {
        title: '내 근처',
        path: '/near',
        component: NearPage,
        header: ['search','alarm'],
        content: []
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
        categoryBtnType: 'round',
        categoryTxt: '전체',
        category: {
            round: true,
            big: true,
            cont: [
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'알바'},
                {txt:'부동산'},
                {txt:'중고차'},
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