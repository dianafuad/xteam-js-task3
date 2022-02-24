var states = {
  Afghanistan: {
    name: "Afghanistan",
    phone_code: "93",
    capital: "Kabul",
    currency: "AFN",
    region: "Asia",
    translations: {
      kr: "아프가니스탄",
      br: "Afeganistão",
      pt: "Afeganistão",
      nl: "Afghanistan",
      hr: "Afganistan",
      fa: "افغانستان",
      de: "Afghanistan",
      es: "Afganistán",
      fr: "Afghanistan",
      ja: "アフガニスタン",
      it: "Afghanistan",
      cn: "阿富汗",
    },
    states: {
      Badakhshan: {
        id: 3901,
        name: "Badakhshan",
        state_code: "BDS",
      },
      Bamyan: {
        id: 3872,
        name: "Bamyan",
        state_code: "BAM",
      },
      Daykundi: {
        id: 3892,
        name: "Daykundi",
        state_code: "DAY",
      },
      Farah: {
        id: 3899,
        name: "Farah",
        state_code: "FRA",
      },
    },
  },
  AlandIslands: {
    name: "Aland Islands",
    phone_code: "+358-18",
    capital: "Mariehamn",
    currency: "EUR",
    region: "Europe",
    translations: {
      kr: "올란드 제도",
      br: "Ilhas de Aland",
      pt: "Ilhas de Aland",
      nl: "Ålandeilanden",
      hr: "Ålandski otoci",
      fa: "جزایر الند",
      de: "Åland",
      es: "Alandia",
      fr: "Åland",
      ja: "オーランド諸島",
      it: "Isole Aland",
      cn: "奥兰群岛",
    },
    states: {},
  },
  Albania: {
    name: "Albania",
    phone_code: "355",
    capital: "Tirana",
    currency: "ALL",
    region: "Europe",
    translations: {
      kr: "알바니아",
      br: "Albânia",
      pt: "Albânia",
      nl: "Albanië",
      hr: "Albanija",
      fa: "آلبانی",
      de: "Albanien",
      es: "Albania",
      fr: "Albanie",
      ja: "アルバニア",
      it: "Albania",
      cn: "阿尔巴尼亚",
    },
    states: {
      BeratCounty: {
        id: 603,
        name: "Berat County",
        state_code: "01",
      },
      HasDistrict: {
        id: 600,
        name: "Has District",
        state_code: "HA",
      },
      TropojëDistrict: {
        id: 636,
        name: "Tropojë District",
        state_code: "TP",
      },
      VlorëCounty: {
        id: 634,
        name: "Vlorë County",
        state_code: "12",
      },
      VlorëDistrict: {
        id: 613,
        name: "Vlorë District",
        state_code: "VL",
      },
    },
  },
  Algeria: {
    name: "Algeria",
    phone_code: "213",
    capital: "Algiers",
    currency: "DZD",
    region: "Africa",
    translations: {
      kr: "알제리",
      br: "Argélia",
      pt: "Argélia",
      nl: "Algerije",
      hr: "Alžir",
      fa: "الجزایر",
      de: "Algerien",
      es: "Argelia",
      fr: "Algérie",
      ja: "アルジェリア",
      it: "Algeria",
      cn: "阿尔及利亚",
    },
    states: {
      Adrar: {
        id: 1118,
        name: "Adrar",
        state_code: 01,
      },
      AïnDefla: {
        id: 1119,
        name: "Aïn Defla",
        state_code: "44",
      },
      Tlemcen: {
        id: 1107,
        name: "Tlemcen",
        state_code: "13",
      },
      Touggourt: {
        id: 4911,
        name: "Touggourt",
        state_code: "55",
      },
    },
  },
  AmericanSamoa: {
    name: "AmericanSamoa",
    phone_code: "+1-684",
    capital: "Pago Pago",
    currency: "USD",
    region: "Oceania",
    translations: {
      kr: "아메리칸사모아",
      br: "Samoa Americana",
      pt: "Samoa Americana",
      nl: "Amerikaans Samoa",
      hr: "Američka Samoa",
      fa: "ساموآی آمریکا",
      de: "Amerikanisch-Samoa",
      es: "Samoa Americana",
      fr: "Samoa américaines",
      ja: "アメリカ領サモア",
      it: "Samoa Americane",
      cn: "美属萨摩亚",
    },
    states: {},
  },
  Andorra: {
    name: "Andorra",
    phone_code: "376",
    capital: "Andorra la Vella",
    currency: "EUR",
    region: "Europe",
    translations: {
      kr: "안도라",
      br: "Andorra",
      pt: "Andorra",
      nl: "Andorra",
      hr: "Andora",
      fa: "آندورا",
      de: "Andorra",
      es: "Andorra",
      fr: "Andorre",
      ja: "アンドラ",
      it: "Andorra",
      cn: "安道尔",
    },
    states: {
      AndorralaVella: {
        id: 488,
        name: "Andorra la Vella",
        state_code: "07",
      },
      Canillo: {
        id: 489,
        name: "Canillo",
        state_code: "02",
      },
      Encamp: {
        id: 487,
        name: "Encamp",
        state_code: "03",
      },
      SantJuliàdeLòria: {
        id: 490,
        name: "SantJuliàdeLòria",
        state_code: "06",
      },
    },
  },
};



// array of countries objects
let countries_arr = [
  states.Afghanistan,
  states.AlandIslands,
  states.Albania,
  states.Algeria,
  states.Andorra,
  states.AmericanSamoa,
];




// select all (value)class from html to fill it
const countryValues = document.querySelectorAll(".value");

/**
 *Input -->       get  all (value) classes which is the second colum from html country
 *Process -->     fill them with equalivent data from the countries_arr
 *Output-->       the home page is full with data 
 * When Callled?  Onload the page
 */
function fillHtml() {
  

  for (let i = 0; i < countries_arr.length; i++) {
    let stateValues = Object.values(countries_arr[i]);

    for (let j = 0; j < 4; j++) {
      countryValues[i].children[j].textContent = stateValues[j];
    //to skip j=1 which is the country code  
      if (j >= 1) {
        countryValues[i].children[j].textContent = stateValues[j + 1];
      }
    }
  }
}

/**
 *Input -->       get the current URL 
 *Process -->     get the country id from the url and fill it 
 *Output-->       desplay the selected country in new page
 * When Callled?  Onload the page (flight-selectedpage)
 */
function displaySelected() {
  let url = new URL(document.URL);
  let searchParams = new URLSearchParams(url.search);
  let counryID = searchParams.get("countryID");
  let data = getSelectedCountry_obj(counryID);

  document.getElementById("name").innerHTML = data[0];
  document.getElementById("capital").innerHTML = data[1];
  document.getElementById("cur").innerHTML = data[2];
  document.getElementById("region").innerHTML = data[3];
}

// function displaySelected(countryId) {
//   document.getElementById("selected").innerHTML =    document.getElementById(countryId).innerHTML;
// }

/**
 *Input -->       id of selected country
 *Process -->     get its data from  countries_arr[] and assign it to new arr
 *Output-->        return the new array of selected country data
 * When Callled?  by displaySelected() function
 */
function getSelectedCountry_obj(id) {
    let selected_obj = countries_arr[id - 1];
    let selected_Data = [];
    selected_Data.push(selected_obj.name);
    selected_Data.push(selected_obj.capital);
    selected_Data.push(selected_obj.currency);
    selected_Data.push(selected_obj.region);
    return selected_Data;
  }
 
  
/**
 *Input -->      the chosen birthday by the user
 *Process -->     calculate the user age
 *Output-->      the age label is displyed
 * When Callled?  oninput the birthday date
 */
function calAge() {

  let date = document.getElementById("birthday").value;
  let dateArr = date.split("-");
  let today = new Date();
  let currentYear = today.getFullYear();
  let age = currentYear - dateArr[0];
  document.getElementById("age").style.display = "block";
  document.getElementById("age").innerHTML = `You are ${age} years old`;
  document.getElementById("age").value = age;
}


/**
 *Input -->     get the form values
 *Process -->   disply it in an alert
 *Output-->     alert
 * When Callled?  onclock form button
 */
function showSummery() {
  let selectedCountry = getSelectedCountry_values();
  let name =
    document.getElementById("f-name").value +
    " " +
    document.getElementById("l-name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  let county = document.getElementById("user-country").value;
  alert(`country:
    ${selectedCountry[0]} ${selectedCountry[1]} ${selectedCountry[2]} ${selectedCountry[3]}
customer:
    ${name}
    ${email}
    ${age}
    ${county}`);
}

/**
 *Input -->       get the form values of selected country from html
 *Process -->     assign it to new array
 *Output-->       return the aray
 * When Callled?  by  showSummery() function
 */

function getSelectedCountry_values() {
    let countryValues = document.getElementById("selected").children[1].children;
    let output = [];
    for (const item of countryValues) {
      output.push(item.textContent);
    }
    return output;
  }