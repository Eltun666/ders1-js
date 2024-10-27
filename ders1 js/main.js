// 1) Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən
//  if-else if-else konstruksiyasını yaradın.

// let number = prompt("reqem daxil edin")
// if (number > 0 ){
//     console.log("Musbet eded");   
// }else if (number < 0){
//     console.log("Menfi eded");   
// }else{
//     console.log("sifirdir ");
// }



// 2) Müəyyən bir istifadəçi roluna
//  (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
//  qaytaran keçid-case strukturunu yazın.

// let isdifadecirolu = prompt ("Isdifadeci rolunu daxil edin")
// switch (isdifadecirolu) {
//     case "admin": 
//         console.log("Xos gedin admin"); break;
         
//     case "istifadeci":
//         console.log("Xos gedin istifadeci"); break;

//     case "qonaq":
//         console.log("Xos gedin qonaq"); break;   

//     default:
//         console.log("Bele bir rutbe yoxdur"); break;
// }



// 3) Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.


// let number = prompt ("Reqem daxil edin")
// if (number %2 == 0){
//     console.log("Reqem cutdur "+number);
// }else if (number %2 == 1){
//     console.log("Reqem tekdir "+number);    
// }else{
//     console.log("Bu reqem deyil");
// }



// 4)== və === operatorları arasındakı fərqi göstərən numune 
// yazın.

//  (===) Burda tipleri ferqlidir deye false olur

// let name1 = "10"
// var name2 = 10

// console.log(name1 == name2); 

// console.log(name1 === name2);

// 5)!== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.


// let number = 10

// if( number !== 10){
//     console.log("Eded 10 beraber deyil");
// }else{
//     console.log("Eded 10 beraberdir");  
// }





// 6)Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.

// let number = prompt("Reqem daxil edin")

// if( number > 5 , number < 10){
//     console.log("Eded 10 dan kicikdir ve 5 den boyukdur.");
// }else if(number < 5 , number > 10){
//     console.log("Eded ya 10 dan boyukdur,yada 5 den kicikdir!");
// }else{
//     console.log("Bu reqem deyil"); 
// }

// 7)Əgər varsa istifadəçi adı dəyişənini, əks halda
//  isə "Anonim"i qaytaran nullish coalescing  operatorundan 
//  istifadə edin.


// let istifadeciAdi = null;

// let netice = istifadeciAdi ?? "Anonimdir";
// console.log(netice);




// 8)Boolean dəyərinin tərsini qaytaran ifadə yazın.

// let deyer = true;
// let eksdeyer = !deyer
// console.log(eksdeyer);




// 9)Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

// let a = true;
// let b = true;
// if ( a && b ){
//     console.log("her iki sert dogrudur");   
// }else{
//     console.log("her iki sert dogru deyil");   
// }




// 10)İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 
// ||. ifadə yaratmaq.


// let shert1 = true;
// let shert2 = false;

// if (shert1 || shert2) {
//     console.log("En az biri dogrudu.");
// } else {
//     console.log("Sert dogru deyil");
// }




// 11)Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.

// let a = prompt("Reqem daxil edin")

// if( a > 0){
//     var b = "Musbet"
// }else{
//     var b = "menfi"
// }
// if (a %2==0){
//     var c = "cut"
// }else{
//     var c = "tek"
// }
// console.log(a+" "+b+" "+c);



// 12)İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.

// let ad = prompt("Adinizi daxil edin")
// let sifre = prompt("Sifreni daxil edin")
// if (ad == "Eltun"){
//     console.log("Xos geldiniz");
// }else{
//     alert("Ad sefdir")
// }
// if(sifre == 1234){
//     console.log("sifre dogrudur");
// }else{
//     alert("sifre sefdir")
// }





// 13)Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.



// let a = prompt("")

// switch (true) {
//     case a < 0:
//         console.log("Ədəd mənfidir.");
//         break;
//     case a == 0:
//         console.log("Ədəd sıfırdır.");
//         break;
//     default:
//         console.log("Ədəd müsbətdir.");
// }



// 1)fordan isdifade ederek yuxaridaki hisseni logda cixaran kod yazin
// *
// **
// ***
// ****
// *****

// let a = prompt("")
// let s ="*"
// let b =''
// for( let i = 0; i<a;i++){
//     console.log(b +=s); 
// }


// 2) fordan isdifade ederek yuxaridaki neticeni alan kod yazin
// *****
// ****
// ***
// **
// * 

// const symbol = '*'; 
// const a = prompt(""); 

// for (let i = a; i > 0; i--) {
//     let output = ''; 

//     for (let j = 0; j < i; j++) {
//         output += symbol;
//     }

//     console.log(output); 
// }




// 3)istifadeciden ad soyad ve yas kimi deyerler alin 
// ve sonda isdifadecinin dogum ilini qeyd edib loga veren kod yazin
// meselen "Ali Aliyev siz 1999 cu ilde anadan olmusuz"

// let ad = prompt("Ad daxil edin")
// let soyad = prompt("Soyad daxil edin")
// let yas = prompt("Yas daxil edin")

// let il = 2024-yas

// console.log(ad + " " + soyad + " siz " + il + " ilde anadan olmusunuz.");




// 4)100 e kimi reqemlerden fordan isdifade ederek 5 e bolunenleri 
// logda cixaran kod yazin

// let i = prompt("")

// for (let a = 1; i >= a; i--){
//     if (i%5==0){
//         console.log(i);
//     }
// }


// 5)2 deyisen yaradin username ve password adinda eger isdifadeci
// prompda her ikisini duzgun daxil ederse yeni username ile password dogru 
// olarsa logda onu salamlayan kod cixsin burda prompt ve logical operatorlardan
// isdifade edeceksiz 

// let a = prompt("Enter username")
// let b = prompt("Enter password")

// if (a =="Eltun"){
//     console.log("Xos geldin sahib");
// }else{
//     alert("Username is wrong")
// }

// if (b == 1234){
//     console.log("Sifre duzdur");
// }else{
//     alert("Password is wrong")
// }
