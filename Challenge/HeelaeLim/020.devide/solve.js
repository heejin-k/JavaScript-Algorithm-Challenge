/*
# 문제20 : 몫과 나머지.

공백으로 구분하여 두 숫자가 주어집니다.
두 번째 숫자로 첫 번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

```jsx
**입출력**

입력 : 10 2
출력 : 5 0
```
*/

function Divide(){
    let Str = prompt();
    let arr = Str.split(' ');
    console.log(`${arr[0]/arr[1]} ${arr[0]%arr[1]}`);
}

Divide();
