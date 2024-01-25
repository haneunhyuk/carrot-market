export interface listInterface {
    title: string,
    subjects: string[]
}

export interface toastInterface {
    location: object[]
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

const listsToast: toastInterface = {
    location: [
        {title: '명동', select: true},
        {title: '회현', select: false}
    ]
}

export { listsBottomSheet, listsToast }