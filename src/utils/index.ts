// <== Custom math method == >
export const getRandomIndex = (range: number): number => Math.floor(Math.random() * range);

// <== enum information == >

export enum SCORE {
    SUCKS = 'SUCKS',
    GOOD = 'GOOD',
    BEST = 'BEST',
}

export enum GENRE {
    ALL = '전체',
    CCM = 'CCM_종교',
    OST = 'OST',
    NEW_AGE = '뉴에이지',
    DANCE_POP = '댄스_팝',
    ROCK_METAL = '락_메탈',
    RAP_HIPHOP = '랩_힙합',
    METAL = '메탈',
    TROT = '성인가요',
    SOUL = '알앤비_소울',
    KID = '어린이',
    ACOUSTIC = '어쿠스틱',
    ELECTRONIC = '일렉트로닉',
    CAROL = '캐롤',
    CLASSIC = '클래식',
    PRENATAL = '태교',
    FORK = '포크_어쿠스틱',
}