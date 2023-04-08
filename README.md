# wanted-pre-onboarding-frontend-사전과제

# 📚 <Listify 프로젝트> Fron-end Developer 정건희

📬 *GitHub: [https://github.com/xunxee](https://github.com/xunxee)*

📬 *Blog: [https://www.gunhee.co.kr/](https://www.gunhee.co.kr/)*

## 📌 배포 사이트 안내

📬 *배포 사이트: [https://enchanting-sherbet-101baf.netlify.app/](https://enchanting-sherbet-101baf.netlify.app/)*

## 📌 프로젝트 실행 방법

git clone 후, npm install & npm start 명령어를 실행

```bash
$ npm install

$ npm start
```

## 📌 소개

### 🔗 회원가입과 로그인

<img src="https://user-images.githubusercontent.com/87808288/230725316-eff18f54-7c0d-44d0-a039-f4ae2a92c85e.gif" width="60%">

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호의 유효성 검사 조건 통과 시 button을 활성화

- 회원가입이 정상적으로 완료시 /todo 경로로 페이지가 이동
  - 로그인 시 응답받은 JWT는 로컬 스토리지에 저장

- 로그인 여부에 따른 리다이텍트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지 접속 시 /todo 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 /todo 페이지에 접속하면 /signin 경로로 리다이렉트 처리

### 🔗 TODO LIST

<img src="https://user-images.githubusercontent.com/87808288/230725413-93a37d3a-2253-42ba-b6cb-7952f798b018.gif" width="60%">

- /todo 경로 접속 시 할일 리스트의 목록을 렌더링

- TODO의 완료 여부는 `<input type=”checkbox />`를 통해 표현
    
    ```jsx
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 2</span>
      </label>
    </li>
    ```
    
- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 구현
  - 추가 button을 클릭 시 입력 input의 내용이 새로운 TODO로 추가
  - TODO를 추가한 뒤 새로고침을 해도 추가한 TODO가 목록에 렌더링

<img src="https://user-images.githubusercontent.com/87808288/230725460-c6d1a605-a7be-45cf-811c-890c6d0f8061.gif" width="60%">

- TODO 우측에 수정 버튼과 삭제 버튼
  - 삭제 버튼을 통해 해당 아이템이 삭제
  - 수정 버튼을 누르면 수정모드가 활성화

- 수정 모드
  - 제출 버튼과 취소 버튼을 구현
  - 제출 버튼을 클릭하면 수정한 내용을 제출해서 내용이 업데이트
  - 취소 버튼을 클릭하면 수정한 내용을 초기화하고, 수정 모드를 비활성화
