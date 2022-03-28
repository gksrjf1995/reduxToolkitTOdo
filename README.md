# Use Redux Tookkit & Thunk

## global state를 관리하기 위해 RTK를 사용

1. store , reducer , dispatch , useSelector

2. redux-tool-kit 개념 이해

3. redux Thunk 이해필요.

4. redux Thunk? app에서 관리가 필요한 state를 서버에서 가져 와 UI에 나타나고
   프론트의 event에도 반응하기 위해서
   ex) TODO APP에서 새로고침을 하면 모든 데이터가 초기화 상태로 돌아간다. => getTodo Thunk
   Data를 add해도 새로고침을 하면 추가한 데이터가 보이지않는다 => add Thunk , delete Thunk
