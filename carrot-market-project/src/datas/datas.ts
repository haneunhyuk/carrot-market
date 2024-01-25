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
        header: ['search','alarm']
    },
    {
        title: '동네생활',
        path: '/life',
        component: LifePage,
        header: ['profile','search','alarm']
    },
    {
        title: '내 근처',
        path: '/near',
        component: NearPage,
        header: ['search','alarm']
    },
    {
        title: '채팅',
        path: '/chat',
        component: ChatPage,
        header: ['QRscan','alarm']

    },
    {
        title: '나의 당근',
        path: '/mypage',
        component: MyPage,
        header: ['setting']
    },
]

const listsToast: toastInterface = {
    location: [
        {title: '명동', select: true},
        {title: '회현', select: false}
    ]
}

export { listsBottomSheet, listsToast, baseData }