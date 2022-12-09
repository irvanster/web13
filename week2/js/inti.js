let variable = 'aokwokkow'
        
let formPulau = document.getElementById("pulau");
let kalimantanList = document.getElementById("provinsi-kalimantan");
let jawaList = document.getElementById("provinsi-jawa");
// console.log(formPulau.value)
formPulau.onchange = function () {
  console.log(formPulau.value);
  if (formPulau.value === "kalimantan") {
    let option = document.createElement("option");
    const kalimantanList = [
      {
        id: "61",
        name: "KALIMANTAN BARAT",
        alt_name: "KALIMANTAN BARAT",
        latitude: -0.13224,
        longitude: 111.09689,
      },
      {
        id: "62",
        name: "KALIMANTAN TENGAH",
        alt_name: "KALIMANTAN TENGAH",
        latitude: -1.49958,
        longitude: 113.29033,
      },
      {
        id: "63",
        name: "KALIMANTAN SELATAN",
        alt_name: "KALIMANTAN SELATAN",
        latitude: -2.94348,
        longitude: 115.37565,
      },
      {
        id: "64",
        name: "KALIMANTAN TIMUR",
        alt_name: "KALIMANTAN TIMUR",
        latitude: 0.78844,
        longitude: 116.242,
      },
      {
        id: "65",
        name: "KALIMANTAN UTARA",
        alt_name: "KALIMANTAN UTARA",
        latitude: 2.72594,
        longitude: 116.911,
      },
    ];

  
    for (let index = 0; index < kalimantanList.length; index++) {
      option.text = kalimantanList[index].name;
      option.value = kalimantanList[index].alt_name;
      provinsi.add(option);
    }
      // kalimantanList.map((item)=> {
      //     option.text = item.name;
      //     option.value = item.alt_name;
      //     formPulau.add(option);
      // })
  } else {
    jawaList.style.display = "block";
  }
  // if(formPulau.value === "kalimantan") {
  //     kalimantanList.style.display='block'
  //     kalimantanList.style.display='block'
  // }else {
  //     jawaList.style.display='block'
  // }
};

//   const tampilkanText = (value)=> {
//     alert(value)
//   }
const formInput = document.getElementById('textarea-input')
const previewText = document.getElementById('preview')
formInput.onchange = function() {
  previewText.innerHTML=`<p>${formInput.value}</p>`
}

