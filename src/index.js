import './styles/style.scss';
import { themeButton } from './theme.js';
// import { newWordsArray, randomArrayShuffle } from './script.js';







themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});

// const siteContainer = document.getElementById("site-container");
// siteContainer.style.height = window.innerHeight + "px";
// window.addEventListener('resize', () => {
//     siteContainer.style.height = window.innerHeight + "px";
// });


//document.style is undefined
// document.style.height = window.innerHeight + "px";
// document.style.width = window.innerWidth + "px";

//on page load - display instructions if local storage is empty




let newWordsList = "Adult,Agent,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair,Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress,Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Frank,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide,Heart,Henry,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Jones,Judge,Knife,Laura,Layer,Level,Lewis,Light,Limit,Lunch,Major,March,Match,Metal,Model,Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Peter,Phase,Phone,Piece,Pilot,Pitch,Place,Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score,Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Simon,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start,State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust,Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,Woman,World,Youth,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause,Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn,Leave,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound,Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Waste,Watch,Worry,Would,Write,Above,Acute,Alive,Aware,Awful,Basic,Black,Blind,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Crazy,Daily,Early,Empty,Equal,Exact,Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light,Local,Loose,Lucky,Magic,Major,Minor,Moral,Naked,Nasty,Naval,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal,Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague,Valid,Vital,White,Whole,Wrong";
let newWordsArray = newWordsList.split(",");
let oldWordsArray = [];

function randomArrayShuffle(array) {
    let currentIndex = array.length;
    let tempValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

if (localStorage.getItem("newWordsArrayLS") === null) {
    randomArrayShuffle(newWordsArray);
    localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArray));
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArray));
  }

let currentWord = "";
function getNewGameWord() {
    let newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
    currentWord = newWordsArrayLS.pop();
    localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
    let oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
    oldWordsArrayLS.push(currentWord);
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
}

window.onload = () => {
    getNewGameWord();
}