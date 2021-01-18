
function Food({name,img}){
  return <div>
    <h1> I Love {name}</h1>
    <img src={img} />
  </div>
}

const foodILike = [
  {
    name:"Donkatsu",
    img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogthumb2.naver.net%2FMjAxODA4MDhfMTg3%2FMDAxNTMzNjk3Nzg2NjAz.q9DpvrWKX4xHix1mt3l8_miXkZVPNdIByeUSvcfkhQ8g.pMSUSBFUPaaVhC5vM_Dks5FNa-dpnbVVIy6OGamJrQsg.JPEG.song2017new%2Foutput_3954888146.jpg%3Ftype%3Dw2&f=1&nofb=1"
  },
  {
    name:"Taeyeon",
    img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newscj.com%2Fnews%2Fphoto%2F202009%2Fnewscj_%25EC%25B2%259C%25EC%25A7%2580%25EC%259D%25BC%25EB%25B3%25B4_780010_816167_1853.jpg&f=1&nofb=1"
  }
]

function renderFood(dish){
  return <Food name={dish.name} img={dish.img}/>
}

function App() {
  return (
    <div className="App">
     {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
