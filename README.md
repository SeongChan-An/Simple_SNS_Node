# CRUD 실습 (간단한 SNS 기능)

## Node 기초
참조 : [Practice_Node.js](https://github.com/SeongChan-An/Practice_Node.js)  
README.md, Note.md, Note2.md, Note3.md 참조

## 환경설정 
링크 참조 : [Note.md](./Note.md)

## 주요기능
- 로그인/로그아웃
- 게시물저장, 수정, 삭제
- 사진 업로드
- 실시간 채팅
  - websocket을 이용

### **-게시물 저장, 수정, 삭제**
이용되는 기술
- mongoose
- multer package
- multer-s3
- aws-sdk (aws 접근)

>**-app.js file**  
indexRouter 를 통해 기본경로("/")에서 index.js 파일을 가리키도록 연결시켜준다.

> **-routes 폴더**  
routes 폴더에서 index.js 파일에서 항목(게시물, 로그인)에 따라 파일을 연결시켜준다.  
각 폴더내의 index 파일들에서 각 카테고리의 상세기능에 대해 컨트롤러와 연결시켜준다.

> **-Controller**  
기본적으로 어떤 값, 세부적인 동작에 대한 코드를 이곳에서 작성한다.

### **- 사진 저장**
AWS S3를 이용하여 bucket 공간에 사진을 관리할 수 있도록 하였다.  
multer.js 파일 참고

### **-회원가입, 로그인, 로그아웃**
session 저장할 내용이 많을 경우 서버의 과부하가 올 수 있음.
cookie를 통해 관리할 수도 있으나 cookie는 보안상 취약하다.

>Json Web Token ?  
토큰형태의 문자를 활용해서 클라이언트에 상태를 저장하여 인증에서 활용한다.

>syntax  
aaaaa.bbbbb.cccccc  
a : header, 토큰의 유형(JWT)과 암호화 알고리즘 포함  
b : payload, 토큰에 담을 정보를 포함  
c : signature, secret key를 포함하여 암호화

#### workflow
1. 클라이언트가 id, pw를 서버에 전달
2. id, pw를 secret key를 통해 JWT 토큰을 만든다(암호화)
3. 만들어진 토큰을 클라이언트에게 전달
4. 클라이언트는 해당 값을 cookie 또는 localStroage 같은 브라우저 저장공간에 보관한다.
5. 클라이언트가 어떤 특정한 행위를 할 때 토큰을 함께 전달한다.
6. 서버가 토큰을 확인하고 응답한다.

참고   
- 쿠키 vs 로컬스토리지 : [0307kwon님 velog](https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie)

### **-실시간 채팅**
실시간 채팅 구현의 어려움
- 기존 통신은 클라이언트가 서버에 요청을 해야지만 서버에서 응답을 보내주는 흐름이 정해져있었다.
WebSocket의 등장으로 서버가 요청없이 클라이언트에 데이터를 줄 수 있게 되었다.

