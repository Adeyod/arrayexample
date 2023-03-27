let states = [{
  name: 'Lagos State',
  headQtrs: 'Ikeja',
  estimatedPopulation: '15,946,000',
  LGA: "ikeja"
},{
  name: 'Oyo State',
  headQtrs: 'Ibadan',
  estimatedPopulation: '7,840,864'
},{
  name: 'Ogun State',
headQtrs: 'Abeokuta',
estimatedPopulation: '6,379,500'
},{
  name: 'Osun State',
  headQtrs: 'Osogbo',
  estimatedPopulation: '4,435,800'
},{
  name: 'Ondo State',
  headQtrs: 'Akure',
  estimatedPopulation: '3,460,877'
},{
  name: 'Ekiti State',
  headQtrs: 'Ado-Ekiti',
  estimatedPopulation: '3,292,200'
}]
let displayContainer = document.getElementById("display_container")


function lagosInfo(name) {
 const lagosData = states.filter(state => state.name === 'Lagos State');
//  displayContainer.textContent = lagosData 
 displayContainer.innerHTML += lagosData[0].name
//  console.log(lagosData)
}

function oyoInfo() {
  const oyoData = states.filter(state => state.name === 'Oyo State');
  displayContainer.innerHTML += oyoData 
  // console.log(oyoData)
 }

 function ogunInfo() {
  const ogunData = states.filter(state => state.name === 'Ogun State');
  displayContainer.innerHTML += ogunData 
  // console.log(ogunData)
 }

 function osunInfo() {
  const osunData = states.filter(state => state.name === 'Osun State');
  displayContainer.innerHTML += osunData 
  // console.log(osunData)
 }

 function ondoInfo() {
  const ondoData = states.filter(state => state.name === 'Ondo State');
  displayContainer.innerHTML += ondoData 
  // console.log(ondoData)
 }

 function ekitiInfo() {
  const ekitiData = states.filter(state => state.name === 'Ekiti State');
  displayContainer.innerHTML += ekitiData 
  // console.log(ekitiData)
 }






// study and research on filter method
// study and research on local storage or session storage