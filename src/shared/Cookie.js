const getCookie = (name) => {
    let value = ";" + document.cookie; // 쿠키 값 가져오기
    let parts = value.split(";" + name + "="); // 키값을 기준으로 파싱
    //value를 return
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

//쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
    let date = new Date();//날짜 만들기(현재 날짜 및 시간.)
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
};
//만료일을 예전으로 설정해 쿠키를 지우기
const deleteCookie = (name) => {
    document.cookie = name + `=; expires=Thu, 01 Jan 1999 00:00:10 GMT`;
}

export { getCookie, setCookie, deleteCookie}