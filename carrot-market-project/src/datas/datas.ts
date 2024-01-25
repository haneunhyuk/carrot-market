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
        // component: () => import(),
        header: ['search','alarm']
    },
    {
        title: '동네생활',
        path: '/life',
        // component: () => import(),
        header: ['profile','search','alarm']
    },
    {
        title: '내 근처',
        path: '/near',
        // component: () => import(),
        header: ['search','alarm']
    },
    {
        title: '채팅',
        path: '/chat',
        // component: () => import(),
        header: ['QRscan','alarm']

    },
    {
        title: '나의 당근',
        path: '/mypage',
        // component: () => import(),
        header: ['setting']
    },
]

const listsToast: toastInterface = {
    location: [
        {title: '명동', select: true},
        {title: '회현', select: false}
    ]
}

export { listsBottomSheet, listsToast }