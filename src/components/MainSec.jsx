import React , {useState , useEffect} from 'react'
import { Container , Row  } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
 import Prayer from './prayer'

const MainSec = () => {

    const handleCityChange = (event) => {
		const cityObject = avilableCities.find((city) => {
			return city.apiName == event.target.value;
		});
		console.log("the new value is ", event.target.value);
		setSelectedCity(cityObject);
	};


      const [timings, setTimings] = useState({
	
	});


    const [selectedCity, setSelectedCity] = useState({
		displayName: "القاهرة ",
		apiName: "Cairo",
	});


    const avilableCities = [
		{
			displayName: "القاهرة",
			apiName: "Cairo",
		},
		{
			displayName: "الاسكندرية",
			apiName: "Alexandria",
		},
		{
			displayName: "  الجيزة",
			apiName: "Giza",
		},
        {
			displayName: "طنطا",
			apiName: "Tanta",
		},
        {
			displayName: "اسوان",
			apiName: "Aswan",
		},
        {
			displayName: "المنيا",
			apiName: "Menia",
		},
        {
			displayName: "الدقهلية",
			apiName: "	Dakahlia",
		},
        {
			displayName: "بورسعيد",
			apiName: "Porsaid",
		},
        {
			displayName: "البحر الأحمر",
			apiName: "RedSea	",
		},
        {
			displayName: " البحيرة",
			apiName: "Beheira	",
		},
        {
			displayName: "الفيوم ",
			apiName: "Faiyum	",
		},
        {
			displayName: "الغربية ",
			apiName: "Gharbia	",
		},
        {
			displayName: "الإسماعيلية ",
			apiName: "Ismailia	",
		},
        {
			displayName: "المنُوفيّة ",
			apiName: "Monufia	",
		},
        {
			displayName: "القليوبية ",
			apiName: "Qalyubia	",
		},
        {
			displayName: "الأقصر ",
			apiName: "Luxor	",
		},
        {
			displayName: "الوادي الجديد",
			apiName: "New Valley		",
		},
        {
			displayName: "السويس ",
			apiName: "Suez	",
		},
        {
			displayName: "الشرقية ",
			apiName: "Al Sharqia		",
		},
        {
			displayName: "أسيوط ",
			apiName: "Asyut		",
		},
        {
			displayName: "بني سويف",
			apiName: "Beni Suef		",
		},
        {
			displayName: "دمياط ",
			apiName: "Damietta		",
		},
        {
			displayName: "جنوب سيناء ",
			apiName: "South Sinai		",
		},
        {
			displayName: "كفر الشيخ ",
			apiName: "Kafr el-Sheikh			",
		},
        {
			displayName: "مطروح ",
			apiName: "Matrouh		",
		},
        {
			displayName: "قنا ",
			apiName: "Qena		",
		},
        {
			displayName: "	شمال سيناء ",
			apiName: "North Sinai		",
		},
        {
			displayName: "سوهاج ",
			apiName: "Sohag		",
		},
	];


    const prayersArray = [
		{ key: "Fajr", displayName: "الفجر" },
		{ key: "Dhuhr", displayName: "الظهر" },
		{ key: "Asr", displayName: "العصر" },
		{ key: "Sunset", displayName: "المغرب" },
		{ key: "Isha", displayName: "العشاء" },
	];

    const getTimings = async () => {
		console.log("calling the api");
		const response = await axios.get(
			`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${selectedCity.apiName}`
		);
		setTimings(response.data.data.timings);
	};
    useEffect(() => {
		getTimings();
	}, [selectedCity]);


	

  return (
    <>
    
   <Container  className='prayer mt-3 mb-3  d-flex justify-content-between'>
     
        
      <h1>{selectedCity.displayName}</h1>
       

       
          <FormControl style={{width:"35vw" }}>
        <InputLabel id="demo-simple-select-label"><span className='city' > المحافظة</span></InputLabel>
        <Select
         className='citydis'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="المحافظة"
          onChange={handleCityChange}
        >
          {avilableCities.map((city) => {
							return (
								<MenuItem
									value={city.apiName}
									key={city.apiName}
								>
									{city.displayName}
								</MenuItem>
							);
						})}
        </Select>
      </FormControl>
       
     
   </Container>
    
        <Container  className='prayer '>
           <Row>

             <Prayer 
             src="https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
             name="الفجر"
             time={timings.Fajr}
             
             />

             <Prayer
              src='https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921'
              time={timings.Dhuhr}
             name="الضهر" 
             />

             <Prayer
             src='https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf'
             time={timings.Asr}
             name="العصر" 
             />

             <Prayer 
             src='https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5'
             time={timings.Sunset}
             name="المغرب" 
             />

             <Prayer 
             src='https://wepik.com/api/image/ai/9a07bc25-1200-4873-8743-1c370e9eff4d'
             time={timings.Isha}
             name="العشاء" 
             />

           </Row>
        </Container>
    
    
    
    </>
  )
}

export default MainSec