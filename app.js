let hello = "Hello, World";

alert(hello);

// 整数を代入する
let int1 = 1;

// 負数を代入する
let int2 = -10;

// 小数点を代入する
let float1 = 3.14;

// 文字列を代入する
let str1 = 'JavaScriptを覚えよう';

alert(str1);


// 足し算
alert(4 + 3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);


// 文字列の結合
alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);


// 条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段')
} else{
  alert('みかんの値段がりんごより高い');
}
// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行


// 繰り返し処理
// while文は、条件式がtrueである間は繰り返し処理が実行される。回数は決まっていない。

// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。

// 1を基準に2を掛け続けた場合、何回で100を超えるか測定する
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do...while文
// 条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われる
do{
  最低1回は行われる処理
}while(条件式);

// for文：決められた回数の処理を繰り返す
// for ( 初期値; 条件式, 増減値 ){
//   繰り返し処理
// }

// 1から10まで足し算を行い、その結果を表示する処理
let i;
let num = 0;

for( i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
// 1「変数i」を宣言
// 2「変数num」を宣言し、初期値を「0」に設定
// 3 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
// 4 変数numに「num+i」を代入
// 5 アラートウィンドウに計算結果を表示