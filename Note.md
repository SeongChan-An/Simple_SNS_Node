# 환경설정
1. 프로젝트 폴더 생성
2. express-generator 를 이용하여 기본 구조 생성
3. npm install --save-dev  
>nodemon  
서버 on/off 하지 않고 변경사항을 바로 확인하는데 도움을 줌

4. 아래 패키지 설치
    - multer
    - multer-s3 (AWS S3 활용을 위한)
    - mongoose (DB 관리)
    - socket.io (실시간채팅)
    - jsonwebtoken (회원가입 기능)
    - bcrypt (회원가입, 로그인)
    - aws-sdk (aws 접근)

## 유틸 프로그램
- POSTMAN
  : data 전송을 통해 현재 서버의 통신 상태 확인
- MongoDB Compass
  : 데이터의 저장, 업데이트, 삭제 확인

## AWS S3
1. AWS 홈페이지 접속
2. 계정 연결
3. S3 검색
4. Create bucket   
 **⚠주의사항⚠**  
**AWS S3는 사용량 만큼 과금되는 상품으로**   
**처음 계정 생성시 12개월 동안 약 5GB, get 요청 20000건, put 요청 2000건으로**  
**요금 청구가 되지 않도록 주의..**
5. name 설정 시 고유해야 한다.
6. IAM 검색하여 AWS S3 접근 권한 생성
7. IAM > 사용자(Users) > 사용자 추가 (Add User)
8. 이름 설정, 유형 선택 (프로그래밍 방식 엑세스/Access key - Programmatic access)
9. 권한설정 - 기존 정책 직접 연결 - AmazonS3FullAccess 검색
10. 태그 skip 
11. 생성
12 엑세스 키 ID와 비밀 엑세스 키를 보관 (유출 주의 !!!)

## 기타 참고 내용
- locals : [locals 비교](https://rat2.tistory.com/18)
