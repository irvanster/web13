//switch case dan if else

// 1. if digunakan untuk dinamis
// 2. untuk multiple statement
// 3. bisa bersarang/nested

//switchCase
// 1. static
// 2. untuk single statement
// 3. tidak bisa

//if else

const umur = 5;

//if itu cocok untuk yang dinamis
// dan juga bisa menggunakan else if / multiple percabangan
if (umur > 18 || umur == 9) {
  console.log("boleh masuk");
} else if (umur == 5) {
  console.log("boleh tapi dengan pengawasan orang tua.");
} else {
  console.log("tidak boleh masuk");
}

//switchcase

const gender = "l";
const ENUM_OF_PRIVILAGE = "l";

// switch (gender) {
//     case 'l':
//         console.log('boleh masuk')
//         break;

//     default:
//         console.log('tidak boleh masuk')
//         break;
// }

//fungsi break = return, artinya ketika ga ada break, maka case2 didalamnya tidak berjalan sesuai (menjalankan semua kondisinya)
switch (ENUM_OF_PRIVILAGE) {
  case "ADMIN":
    console.log("boleh masuk");
    break;
  case "OPERATOR":
    console.log("boleh masuk");
    break;

  case "NGADEMIN":
    console.log("boleh masuk");
    break;
  case "NGADEMIN":
    console.log("boleh masuk");
    break;

  default:
    console.log("tidak boleh masuk");
    break;
}

//ngga efektif ketika pake if
// if (ENUM_OF_PRIVILAGE === "ADMIN") {
//     console.log('boleh masuk')
// }else if(ENUM_OF_PRIVILAGE === "OPERATOR") {
//     console.log('boleh masuk')
// }else if(ENUM_OF_PRIVILAGE=="NGADEMIN") {
//     console.log('aokad')
// }

//ternary operator
// ternary operator digunakan untuk simplified, secara penggunaan itu hal kecil oke, tapi ketika hal besar jangan
//secara peforma juga ketika makin besar, makin berat.
//untuk hal2 kecil, maksimal 3

//ifelse
// const activePage = "home";
// <nav>
//   <p class={`nav navbar-top ${activePage == "home" ? "active" : ""}`}>Home</p>
//   <p class={`nav navbar-top ${activePage == "about" ? "active" : ""}`}>About</p>
//   <p class={`nav navbar-top ${activePage == "product" ? "active" : ""}`}>
//     Product
//   </p>
// </nav>;


// const activePage = "home";

// function onActivePage(activePage, pembanding) {
//     if(activePage == pembanding) {
//         return "active"
//     }else {
//         return ""
//     }
//     // if(activePage == "home" || activePage =="about" || activePage=="product") {
//     //     return "active"
//     // }
//     // if(activePage === "home") {
//     //     return "active"
//     // }else if(activePage =="about") {
//     //     return "active"
//     // }else {
//     //     return ""
//     // }
// }
// <nav>
//   <p class={`nav navbar-top ${onActivePage(activePage, 'home')}`}>Home</p>
//   <p class={`nav navbar-top ${onActivePage(activePage, 'about')}`}>About</p>
//   <p class={`nav navbar-top ${onActivePage(activePage, 'product')}`}>
//     Product
//   </p>
// </nav>;


// const products = [
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "hot" },
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "terlaris" },
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "popular" },
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "trending" },
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "trending" },
//   { title: "Barang Keren", img: "http://gambar.com/png", type: "terbaru" },
// ];

// products.map((item) => {
//   return (
//     <div>
//       <img src={item.img} />
//       <h3>{item.title}</h3>
//       {item.type == "hot" ? (
//         <>
//           <badge class="hot-badge">{item.type}</badge>
//           <fire>🔥</fire>
//         </>
//       ) : item.type == "terlaris" ? (
//         <badge class="best-badge">{item.type}</badge>
//       ) : item.type == "trending" ? (
//         <badge class="trending-badge">{item.type}</badge>
//       ) : (
//         <badge class="latest-badge">{item.type}</badge>
//       )}
//     </div>
//   );
// });




// item.type == "hot" ? 'HOT PRODUCT':'TERBARU'

// item.type == "hot"
//   ? "HOT PRODUCT"
//   : item.type == "terlaris"
//   ? "TERLARIS PRODUCT"
//   : item.type == "trending"
//   ? "TRENDING PRODUCT"
//   : "TERBARU PRODUCT";




//short Logic


const jenis = ""
const ENUM_OF_PRIVILAGES = ""

// console.log(jenis || 'P')
console.log(ENUM_OF_PRIVILAGES || 'user') //user //null/string kosong -> kosong||user
//nullish coalsing
console.log(ENUM_OF_PRIVILAGES ?? 'user') // "" diatas //null/string -> "", null || null||""-> undefined


const data = {
    title: 'product hp',
    harga: 'Rp 50.000',
}

console.log(data.type ?? 'hp') //ketika undefined nullish

const profile = {
    // img: null,
    // img: '',
    name: 'Rp 50.000',
}

console.log(profile.img ?? 'htpps://gambarburung.png') 
console.log(profile.img || 'htpps://gambarburung.png') 
// null/undefined -> nulish

// "", 0, false  -> logical OR ||