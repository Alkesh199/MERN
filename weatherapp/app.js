window.onload = ()=>{
    myFunction();
    
}

const myFunction = ()=>{
    const MY_KEY = "9693ed2f88534f4080952919240208";
    const searchBtn = document.querySelector("#searchButton");
    const inputEle = document.querySelector("#searchinput");
    const tempt = document.querySelector("#tempt");
    const loc = document.querySelector("#location");
    const span1 = document.querySelector("#span1");
    const span2 = document.querySelector("#span2");
    const span3 = document.querySelector("#span3");
    const weatherImg = document.querySelector("#weather-img");
    const weatherText = document.querySelector("#weather-text");
    searchBtn.addEventListener("click",()=>{
        inputHandler(inputEle.value);
    })
    
    const inputHandler = async (location)=>{
    const url = `http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${location}&aqi=yes`
    console.log("input location is",location);
    const response = await fetchData(url);
    // updateDom(response);
    }

    const updateDom= (data)=>{
        
            const {current,location} = data;
            console.log(data);
            const {condition,last_updated,temp_c} = current;
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            loc.textContent = location.name;
            tempt.textContent = temp_c;
            const date = location.localtime.split(" ")[0];
            span1.textContent =  location.localtime.split(" ")[1];
            span2.textContent = days[(new Date(date)).getDay()];
            span3.textContent =  date;
            weatherText.textContent = current.condition.text;
            weatherImg.setAttribute("src",current.condition.icon);

    }

    const fetchData = async(url)=>{
        try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(response);
        if(response.status ===200){
            updateDom(data);
        }
        else{
            alert("some error");
            inputEle.value = "";
        }
    }
    catch(error){
        alert("some error occured")
    }

    }
}
