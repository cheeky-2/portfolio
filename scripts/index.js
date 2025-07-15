const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})
const project1 = new Swiper('#project_swiper',{
    /* scrollbar:{el:'#project_swiper~.swiper-scrollbar'}, */
    navigation:{
        nextEl:'#project_swiper~.swiper-button-next',
        prevEl:'#project_swiper~.swiper-button-prev',
    }
})
/* SNS 프로젝트 */
const snsSwiper = new Swiper('#sns_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{delay:0,},
    speed:20000,
    loop:true,
})
const bnrSwiper = new Swiper('#bnr_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{delay:0,},
    speed:10000,
    loop:true,
})
const detailSwiper = new Swiper('#detail_swiper',{
    effect:'fade',
    direction:'vertical',
    slidesPerView:1,
    autoplay:{delay:2000,},
    speed:1000,
    loop:true,
})
// SNS 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const designProject = document.querySelectorAll('.container .contents .swiper .swiper-wrapper .swiper-slide');
const popup = document.querySelector('.popup_bg');
for(let design of designProject){
    design.addEventListener('click',()=>{
        popup.children[0].children[0].src = design.children[0].src;
        popup.style.display = 'inline-block';
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 enable()
    })
}
popup.addEventListener('click',()=>{
    popup.style.display = 'none';
    wrap.mousewheel.enable();
})
// 내비게이션 클릭 시 해당 위치 수직 스와이프로 이동
const nav = document.querySelectorAll('nav a');
// 수직 스와이프 이동 함수
//수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click',(e)=>{
        e.preventDefault(); //a의 href기본기능막기
        wrap.slideTo(idx, 1000)
    })
})
const menuBtn = document.querySelector('nav button');
for(let i of nav){
    menuBtn.addEventListener('click',()=>{
        /* if(i.style.opacity = 0){
            i.style.opacity = 1;
            i.style = 'pointer-events:none';
            i.style.transition = 'all 1s';
        } */
    })
}
const descriptions = document.querySelectorAll('.skill li em');
const descriptionsIcon = document.querySelectorAll('.skill li span');
descriptionsIcon.forEach((obj, idx)=>{
    obj.addEventListener('click',()=>{
        const visible = descriptions[idx].style.display === 'block';
        descriptions.forEach(description=>description.style.display='none');
        if(!visible){
            descriptions[idx].style.display='block';
        }
    })
})