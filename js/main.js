'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  
  open.addEventListener('click',() =>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

// // 見出しをふんわり出す
// const heading = document.querySelector('#heading');

// const keyframes = {
//   opacity:[0,1],
//   translate:['0 20px',0],
// };
// const options = {
//   duration:2000,
//   easing:'ease',
// };
// heading.animate(keyframes,options);

  // 監視
const headings = document.querySelectorAll('.head');

const options = {
  threshold: 1
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .head に到達したら発動。複数あるから forEach 使うよ。
headings.forEach(head => {
  observer.observe(head);
});

// 要素が表示されたら実行する動作
function showElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add('active');
    }
  });
};
}