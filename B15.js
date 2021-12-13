var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
	  rotate: 50,
	  stretch: 0,
	  depth: 100,
	  modifier: 1,
	  slideShadows: true,
	},
	pagination: {
	  el: ".swiper-pagination",
	},
  });
  let open = document.querySelector('#open')
  let close = document.querySelector('#close')
  let menu = document.querySelector('nav')
	close.addEventListener("click", function(){
		menu.style.right="1000px"
  })
 open.addEventListener("click", function(){
	menu.style.right="0px"
})
// Có bồ
let Truc = document.querySelector('#Truc')
Truc.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})

let Thu = document.querySelector('#Thu')
Thu.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Tam = document.querySelector('#Tam')
Tam.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Tran = document.querySelector('#Tran')
Tran.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Thư = document.querySelector('#Thư')
Thư.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Nghi = document.querySelector('#Nghi')
Nghi.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Linh = document.querySelector('#Linh')
Linh.addEventListener("click", function(){
let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk nhưng tiếc quá em nó có bồ r ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})

// không bồ
let Ma = document.querySelector('#Ma');
Ma.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
	let dk = prompt('Anh giàu hay nghèo')
	if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Như = document.querySelector('#Như');
Như.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Loan = document.querySelector('#Loan');
Loan.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Phuong = document.querySelector('#Phuong');
Phuong.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Thao = document.querySelector('#Thao');
Thao.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Yen = document.querySelector('#Yen');
Yen.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Anh = document.querySelector('#Anh');
Anh.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Ly = document.querySelector('#Ly');
Ly.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Kim = document.querySelector('#Kim');
Kim.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let LAnh = document.querySelector('#LAnh');
LAnh.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Thoa = document.querySelector('#Thoa');
Thoa.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Van = document.querySelector('#Van');
Van.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Uyen = document.querySelector('#Uyen');
Uyen.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
let Ngoc = document.querySelector('#Ngoc');
Ngoc.addEventListener("click", function(){
	let age = parseInt(prompt('Anh bao nhiêu tuổi'))
let dk = prompt('Anh giàu hay nghèo')
if(age >= 18){
	if(dk == 'giàu' || dk=='Giàu' || dk == 'GIÀU'){
		alert('Ok anh đủ đk click tên em ib em nhe :))) ')
	}else{
		alert('Nghèo cút :)))')
	}
}else{
	alert('Chưa đủ tuổi thì lo học đi mua mua ** :))')
}
})
// end girls
//  Boys  
let Bao = document.querySelector('#Bao');
Bao.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Học cấp 3 mua mặt hàng này thì toán,lý,hóa, anh 8+, còn đh ai cntt thì cứ quăng đề qua là được :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Thanh = document.querySelector('#Thanh');
Thanh.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('A có bồ r nhma nếu e có nhu cầu mượn xài đỡ thì click tên a mình ib :)))')
		alert('Khuyến cáo: Nếu có mượn thì xin cân nhắc vì mặt hàng này đã qua chỉnh sửa do đi độ xe đêm khuya :)))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Nhan = document.querySelector('#Nhan');
Nhan.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('A có bồ r nhma nếu e có nhu cầu mượn xài đỡ thì click tên a mình ib :)))')
		alert('Khuyến cáo dành cho bạn gái hiện tại và những bạn có ý định mượn xài: Mặt hàng này là diễn viên Hollywood ngoài mồm thì ôi nhớ Ngọc quá nhưng trong đt thì là ... :)))) ')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Trung = document.querySelector('#Trung');
Trung.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: với giọng cười có tần số lên đến 20.000 Hz đủ để chọc lủng màng nhĩ của bạn thì mặt hàng này được khuyên dùng cho cô gái nào bị khiếm khuyết về thính giác :)))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let TNam = document.querySelector('#TNam');
TNam.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo:Mặt hàng này có tính văn nghệ và khả năng múa đỉnh cao, có thể tham khảo ở Liveshow tỉ đô và đặc biệt kinh nghiệm chinh chiến khi phao bài của sản phẩm này là tuyệt đối khi chưa lần nào nó bị bắt cả nên mua về r hỏi từ từ :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Tuong = document.querySelector('#Tuong');
Tuong.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Mặt hàng này độ md thì không cần bàn cãi, khả năng phao bài thuộc dạng top1 top2, đặc biệt hát hay và cũng hay hát\nĐặc biệt khả năng tiên tri đề thi của sản phẩm này là điểm mà shop chúng tôi tự hào nhất :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Lam = document.querySelector('#Lam');
Lam.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Mặt hàng này chơi thân với mặt hàng MNghia nên chim không giống lông cũng giống cánh :))), đặc biệt k nên đi chơi cùng sản phẩm này vào ban đêm vì có thể bạn sẽ mất vị trí của anh ta nếu gần đó k có cái đèn nào :))))))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let MNghia = document.querySelector('#MNghia');
MNghia.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('A có bồ r nhma nếu e có nhu cầu mượn xài đỡ thì click tên a mình ib :)))');
		alert('Khuyến cáo: Không nên sử dụng mặt hàng này vì tuy nó thiểu năng nhưng bù lại được cái md :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let QVu = document.querySelector('#QVu');
QVu.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Độ md của mặ hàng này là infinity :)))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let HAnh = document.querySelector('#HAnh');
HAnh.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('A có bồ r nhma nếu e có nhu cầu mượn xài đỡ thì click tên a mình ib :)))')
    }else{
        alert('Thanh kiu goodbye :))')
    }
})
let ATu = document.querySelector('#ATu');
ATu.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Không nên sử dụng mặt hàng này vì nó chỉ thích gái 2D mất cảm giác với người thật, chủ shop nhét nó vào cho đủ danh sách thôi :)))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let TNghia = document.querySelector('#TNghia');
TNghia.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Cẩn thận vì mặt hàng này thích sờ mó vùng nhạy cảm :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let NVu = document.querySelector('#NVu');
NVu.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
	alert('Khuyến cáo: Mặt hàng này là du học sinh đến từ Châu Phi, kiến thức uyên bác, và đặc biệt khi vào ban đêm tắt hết đèn thì anh ta có khả năng tàng hình khi anh ta ngậm mồm vào :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let HiMi = document.querySelector('#HiMi');
HiMi.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Nếu bạn là một cô gái muốn giảm cân thì xin chúc mừng bạn đã chọn đúng còn nếu bạn là một người bình thường thì lạy chúa đừng, đừng mua nó về r chửi shop :))) \nĐặc biệt: có giọng cười có tần số lên đến 20.000Hz, đi ỉa nửa tiếng là ít và ngửi được mùi thức ăn cách 20km để ăn chực :)))'
		)
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Luat = document.querySelector('#Luat');
Luat.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Ai thi vẽ thì mua mặt hàng này bao xịn nha :)))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let HiHuu = document.querySelector('#HiHuu');
HiHuu.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
	alert('Khuyến cáo: Cái tên nói hết r :))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let TThanh = document.querySelector('#TThanh');
TThanh.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: biệt danh Bà già còn tại sao thì liên hệ chủ web để biết thêm thông tin chi tiết :))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let Duc = document.querySelector('#Duc');
Duc.addEventListener('click', function(){
	let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
	if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
		alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
		alert('Khuyến cáo: Ông cụ tổ truyện chữ, chúa tể manga ai đam mê đọc truyện thì mua còn không thì thôi chứ ngoài truyện ra thì nó chỉ biết đi net thôi :)))))')
	}else{
		alert('Thanh kiu goodbye :))')
	}
})
let An = document.querySelector('#An');
An.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    }else{
        alert('Thanh kiu goodbye :))')
    }
});
let VMinh = document.querySelector('#VMinh');
VMinh.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    	alert('Khuyến cáo: đối với cô gái nào thích cảm giác mạnh thì vâng đây là mặt hàng phù hợp ở shop chúng tôi vì nó vừa chạy xe vừa ngủ gật còn ai còn yêu đời thì thôi bỏ đi chứ mua về mà để nó chở đi chơi thì đến cái nịt cũng chả còn :)))')
	}else{
        alert('Thanh kiu goodbye :))')
    }
});
let MQuang = document.querySelector('#MQuang');
MQuang.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    	alert('Khuyến cáo: phải có tình yêu mãnh liệt với đảng :)))')
	}else{
        alert('Thanh kiu goodbye :))')
    }
});
let HQuang = document.querySelector('#HQuang');
HQuang.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    	alert('Khuyến cáo: độ md tăng dần theo thời gian quen nhau :)))')
	}else{
        alert('Thanh kiu goodbye :))')
    }
});
let PNam = document.querySelector('#PNam');
PNam.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    	alert('Đẹp trai,nhà giàu, mua về không làm vẫn có ăn, đây là một trong những mặt hàng lành lặn nhất của shop chúng tôi :)))')
	}else{
        alert('Thanh kiu goodbye :))')
    }
});
let Lan = document.querySelector('#Lan');
Lan.addEventListener('click', function(){
    let dk = prompt('E có ngại khi bạn trai bị thiểu năng không :)) \n (Trloi: Có hoặc Không nha bấm bậy k ra gì đâu :)))')
    if(dk=='Không'|| dk=='không'|| dk=='KHÔNG'){
        alert('Nếu e k ngại với độ thiểu năng của a thì click tên a mình ib :))))')
    	alert('Mua về thích làm gì thì làm nó hiền lắm :))))')
	}else{
        alert('Thanh kiu goodbye :))')
    }
});
// Limited
let Kiet = document.querySelector('#Kiet');
Kiet.addEventListener('click', function(){
	alert('Dám bấm mua thì mắt của bạn đủ học thiết kế đồ họa  r :)))');
})
let VTu = document.querySelector('#VTu');
VTu.addEventListener('click', function(){
	alert('Dám bấm mua thì mắt của bạn đủ học thiết kế đồ họa  r :)))');
})
let Milinda = document.querySelector('#Milinda');
Milinda.addEventListener('click', function(){
	alert('Hàng chất lượng cao lai giữa HiMi và Linda do web lấy cái mình của Linda và nhét cái đầu của HiMi vào :)))');
})
let Luac = document.querySelector('#Luac');
Luac.addEventListener('click', function(){
	alert('Mặt hàng này cũng qua chỉnh sửa bằng công nghệ hiện đại nhma mắc quá nên shop chỉ sửa mỗi cái mặt thôi còn từ cái cổ trở xuống thì shop chịu :)))');
})




























































