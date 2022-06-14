import './styles/style.scss';
import { themeButton } from './theme.js';


themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});


const helpButton = document.getElementById('help-button');
const helpMenuContainer = document.getElementById('help-container');
const closeHelpMenuButton = document.getElementById('close-help-menu-button');

function openHelpMenu() {
    helpMenuContainer.classList.add('open');
}

function closeHelpMenu() {
    helpMenuContainer.classList.remove('open');
}

helpButton.addEventListener('click', () => {
    helpMenuContainer.classList.remove('fadeout');
    openHelpMenu();
});

closeHelpMenuButton.addEventListener('click', () => {
    helpMenuContainer.classList.add('fadeout');
    setTimeout(() => {
        closeHelpMenu();
    }, 200);
    //add fadeout class
});


//on page load - display instructions if local storage is empty



//start word check with o
//----
//string to array
//loop over and check if element length is 5
//      check if word is in set
//      if passes both, add to set
//set to array ()
let wordsString = "Adult,Agent,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair,Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress,Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide,Heart,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Judge,Knife,Layer,Level,Light,Limit,Lunch,Major,March,Match,Metal,Model,Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Phase,Phone,Piece,Pilot,Pitch,Place,Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score,Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start,State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust,Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,World,Youth,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause,Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn,Leave,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound,Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Watch,Would,Write,Above,Acute,Alive,Aware,Awful,Basic,Black,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Daily,Early,Empty,Equal,Exact,Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light,Local,Loose,Lucky,Magic,Major,Minor,Moral,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal,Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague,Valid,Vital,White,Whole,Wrong,abbey,abhor,abide,abode,about,above,abyss,acorn,acres,acrid,acted,actor,acute,adage,adapt,added,adept,adios,admin,admit,adobe,adopt,adore,adorn,adult,aerie,after,again,agape,agent,aggro,agile,agree,ahead,ahold,aided,aides,ailed,aimed,aisle,alarm,album,alert,algae,alibi,alien,align,alike,alive,allay,alley,allow,alloy,aloft,aloha,alone,along,aloof,aloud,alpha,altar,alter,amass,amaze,amber,ambit,amble,amend,amide,amino,amiss,among,amped,ample,amply,amuse,angel,angle,angry,angst,anime,ankle,annex,antic,antsy,anvil,apart,apnea,apply,apron,arbor,ardor,areas,arena,argon,argue,arise,armor,aroma,arose,array,arrow,arson,artsy,ascot,ashen,ashes,aside,asked,askew,asset,atlas,attic,audio,audit,aught,aunts,auras,autos,avail,avert,avian,avoid,await,awake,award,aware,awash,awoke,axels,axiom,axles,azure,babel,bacon,baddy,badge,bagel,baggy,baits,baked,baker,bakes,bands,banjo,banks,barbs,bards,bared,barge,barks,barns,baron,based,bases,basic,basil,basin,basis,basks,baste,batch,bathe,baths,batty,bawls,beach,beard,beast,beefy,befit,began,begin,begun,beige,being,belch,bells,belly,below,belts,bench,bends,bendy,beret,berry,bible,bicep,binge,bingo,biome,bipod,birch,birth,bison,black,blade,blame,bland,blank,blast,blaze,bleak,bleed,bleep,blend,bless,blimp,blind,bling,blink,blips,bliss,blitz,bloat,blobs,block,blogs,bloke,blond,blood,bloom,bloop,blots,blown,blows,blued,blues,bluff,blunt,blurs,blurt,blush,board,boars,boast,boats,bobby,boded,bodes,boggy,bogus,boils,bolts,bombs,bonds,bones,bongo,bonus,booed,books,booms,boost,booth,boots,booze,bored,bores,borne,bossy,botch,bough,bound,bouts,bowed,boxed,boxer,boxes,brace,brags,braid,brain,brake,brand,brash,brass,brats,brave,bravo,brawl,brawn,bread,break,brews,bribe,brick,bride,brief,bring,brink,brisk,broad,broch,broil,broke,brood,brook,broom,broth,brown,brush,brute,buddy,budge,buffs,buggy,build,built,bumpy,bunch,bunks,bunny,burnt,burst,buyer,cabin,cable,cacao,cache,cacti,caddy,cadet,caged,caked,cakes,calls,calms,camel,cameo,camps,campy,candy,canes,canoe,caped,carbs,cards,cared,cares,cargo,carol,carry,carve,cased,cases,caste,casts,catch,cater,cause,caved,caves,cease,cedar,cello,cells,chain,chair,chalk,champ,chant,chaos,charm,chart,chase,cheap,cheat,check,cheer,chess,chest,chewy,chief,child,chill,chimp,china,chips,chirp,choir,chomp,chops,chord,chore,chose,chuck,chugs,chunk,churn,cider,cigar,cites,civic,civil,clack,claim,clamp,clams,clang,clank,clash,clasp,class,claws,clean,clear,clerk,click,cliff,climb,cling,clink,clips,cloak,clock,clone,close,cloth,clots,cloud,clout,clove,clown,clump,clung,coach,coast,coats,cobra,cocoa,coded,coder,codes,codex,color,colts,combo,combs,comet,comfy,comic,comma,condo,cones,cooks,cools,coral,cords,corks,corny,couch,cough,could,count,coupe,court,cover,covet,cowls,crabs,crack,craft,crane,crank,crash,crave,crawl,creak,cream,crept,crews,cribs,crime,crisp,cross,crowd,crown,crude,cruel,crumb,crush,crust,crypt,cubed,cubes,cubic,cuffs,cults,cupid,curbs,cured,cures,curls,curly,curry,curse,curve,curvy,cushy,cycle,cynic,czars,daily,dairy,daisy,damns,dance,dared,dares,darts,datum,dawns,dazed,dealt,debit,debug,debut,decaf,decal,decoy,defer,deify,deign,deism,deist,deity,delay,delta,delve,demon,denim,dense,depot,depth,derby,desks,deter,detox,dials,diary,diced,dices,dicey,diets,digit,dimes,dimly,dined,diner,dines,dings,dirty,disco,discs,disks,ditch,diver,dives,dizzy,dodge,dodgy,doggy,dogma,doing,dolls,dolor,dolts,donor,donut,dopey,dorks,dorky,dorms,doses,doubt,dough,dozed,draft,drags,drain,drake,drama,drank,drape,drawn,draws,dream,dress,dried,dries,drift,drill,drink,drips,drive,droll,drone,drool,drove,drown,drums,drunk,duals,ducks,ducts,duels,duets,dumps,dumpy,dunes,dunks,dusts,dusty,dutch,dwarf,dweeb,dwell,dwelt,eager,eagle,early,earns,earth,easel,easer,eases,ebony,ebook,edify,eight,eject,elbow,elder,elect,elite,elude,elves,email,embed,ember,emits,emote,empty,enact,ended,enemy,enjoy,ennui,ensue,enter,entry,envoy,epoch,epoxy,equal,equip,erase,erect,erode,error,erupt,essay,ether,ethic,ethos,euros,evade,event,every,evict,evils,evoke,exact,exalt,exams,excel,exert,exile,exist,exits,expel,extol,extra,exude,exult,fable,faced,faces,facet,facts,faded,fades,fails,faint,fairs,fairy,faith,faked,faker,fakes,falls,fancy,fangs,farce,farms,farts,fasts,fatal,fates,fault,favor,fazed,fazes,fears,feast,feats,feeds,feels,feign,felon,femur,fence,feral,fetch,feuds,fever,fewer,fiber,field,fiend,fiery,fifth,fifty,fight,filed,filer,files,films,filmy,filth,final,finds,fined,finer,fines,fired,fires,firms,first,fishy,fists,fixed,fixer,fixes,fizzy,flack,flags,flail,flair,flake,flaky,flame,flank,flaps,flare,flash,flask,fleas,flick,flies,fling,float,flood,floor,flour,flown,flows,fluid,focal,focus,folks,fonts,force,forms,forth,forty,forum,found,frame,fraud,fresh,fried,fries,front,frost,fruit,fuels,fully,funds,funny,gains,games,gamma,gates,gauge,gears,genes,genre,ghost,giant,gifts,given,gives,gland,glass,globe,glory,gloss,glove,glued,goals,goats,going,goods,grace,grade,grain,grams,grand,grant,grape,graph,grasp,grass,grave,great,greek,green,greet,grief,grill,grind,grips,group,grove,grown,grows,guard,guess,guest,guide,guild,guilt,habit,halls,hands,handy,hangs,happy,harsh,hated,hates,haven,hawks,heads,heard,heart,heavy,hedge,hello,helps,hence,herbs,hills,hints,hired,hobby,holds,holes,homes,honey,honor,horse,hotel,house,hover,human,humor,ideal,image,imply,inbox,incur,index,indie,inner,input,intro,issue,jelly,jewel,joint,judge,juice,juicy,kinda,knife,knock,known,label,labor,large,laser,later,laugh,layer,learn,lease,least,leave,legal,lemon,level,lever,light,limit,linen,liner,liver,lobby,local,lodge,logic,logos,loose,lower,loyal,lucky,lunar,lunch,lying,macro,magic,major,maple,march,marry,match,matte,maybe,mayor,meals,means,meant,meats,medal,media,meets,melee,menus,mercy,merge,merit,merry,messy,metal,meter,metro,micro,midst,might,minor,minus,mixer,model,moist,money,month,moral,motor,mouse,mouth,movie,music,nerve,never,newer,nexus,niche,night,ninja,ninth,noble,noise,noisy,north,notch,novel,nurse,nylon,oasis,occur,ocean,offer,often,olive,omega,onion,onset,opera,optic,orbit,order,organ,other,ought,ounce,outer,owner,oxide,paint,panic,paper,party,pasta,paste,patch,patio,pause,peace,peach,pearl,pedal,penny,petty,phase,phone,photo,piano,piece,pilot,pinch,pitch,pixel,pizza,place,plain,plane,plant,plate,plaza,point,poker,polar,porch,pouch,pound,power,press,price,pride,prime,print,prior,prize,probe,promo,prone,proof,proud,prove,proxy,psalm,pulse,punch,pupil,puppy,purse,queen,query,quest,queue,quick,quiet,quilt,quite,quote,radar,radio,raise,rally,ranch,range,rapid,ratio,razor,reach,react,ready,realm,rebel,refer,reign,relax,relay,renew,reply,reset,resin,retro,ridge,rifle,right,rigid,rinse,risky,rival,river,robot,rocky,rogue,rough,round,route,royal,rugby,ruins,rural,sadly,salad,sandy,satin,sauce,scale,scalp,scare,scarf,scary,scene,scent,scoop,scope,score,scout,scrap,screw,sense,serve,setup,seven,sewer,shade,shake,shall,shape,share,shark,sharp,sheep,sheet,shelf,shell,shift,shine,shiny,ships,shirt,shock,shoes,shore,short,shown,siege,sight,sigma,silly,since,sixth,skill,skirt,skull,slate,sleep,slept,slice,slide,slope,small,smart,smile,smoke,snack,snake,sneak,solar,solid,solve,sonic,sorry,sound,south,space,spare,spark,speak,speed,spell,spend,spent,spice,spicy,spike,spine,spite,split,spoke,spoon,sport,spray,squad,stack,staff,stage,stain,stamp,stand,stark,start,state,steak,steal,steam,steel,steep,stick,stiff,still,stock,stole,stone,stood,stool,store,storm,story,stove,strap,straw,strip,stuck,study,stuff,style,sugar,suite,sunny,super,surge,sushi,swear,sweat,sweet,swept,swift,swing,swiss,sword,syrup,table,taste,tasty,teach,teeth,tempo,tenth,thank,theft,their,theme,there,these,thick,thief,thing,think,third,those,three,threw,throw,thumb,tiger,tight,timer,title,toast,today,token,tooth,topic,torch,total,touch,tough,towel,tower,toxic,trace,track,tract,trade,trail,train,trait,treat,trend,trial,tribe,trick,trout,truck,truly,trunk,trust,truth,turbo,tutor,tweet,twice,twist,ultra,uncle,under,union,unite,unity,until,upper,upset,urban,usage,usual,vague,valid,value,valve,vapor,vault,vegan,venue,verse,video,villa,vinyl,viral,virus,visit,vital,vivid,vocal,vodka,voice,wagon,waist,waste,watch,water,weigh,weird,welsh,whale,wheat,wheel,where,which,while,white,whole,whose,width,witch,world,worry,worse,worst,worth,would,wound,wrath,wrist,write,wrong,yacht,yield";

let tempArray = wordsString.split(",");
const wordsSet = new Set();
// for (let i = 0; i < tempArray.length; i++) {
//     if (tempArray[i].length === 5 && !wordsSet.has(tempArray[i])) {
//         wordsSet.add(tempArray[i]);
//     }
// }
for (let word of tempArray) {
    if (word.length === 5 && !wordsSet.has(word)) {
        wordsSet.add(word);
    }
}

let newWordsArray = [...wordsSet];
let oldWordsArray = [];
let newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
let oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));

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



// let currentWord = "";
// function getNewGameWord() {
//     if (newWordsArrayLS.length === 0) {
//         fillNewWordsArrayLS();
//     }
//     currentWord = newWordsArrayLS.pop();
//     console.log(currentWord);
//     localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
//     oldWordsArrayLS.push(currentWord);
//     localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
// }

//moves all old words back to newWordsArrayLS when there are no more new words 
function fillNewWordsArrayLS() {
    oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
    randomArrayShuffle(oldWordsArrayLS);
    localStorage.setItem('newWordsArrayLS', JSON.stringify(oldWordsArrayLS));
    newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
    oldWordsArrayLS = [];
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
}

// let gameExists = false;

const Game = () => {
    let currentWord = "";
    // gameExists = true;
    const setNewGameWord = () => {
        if (newWordsArrayLS.length === 0) {
            fillNewWordsArrayLS();
        }
        currentWord = newWordsArrayLS.pop();
        // console.log(currentWord);
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
        oldWordsArrayLS.push(currentWord);
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
    };
    const getCurrentWord = () => {
        return currentWord;
    };
    return {currentWord, setNewGameWord, getCurrentWord};
};
   
const wordleGame = Game();

//this is used upon first visit to site
function checkForEmptyLSArray() {
    if (localStorage.getItem("newWordsArrayLS") === null) {
        randomArrayShuffle(newWordsArray);
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArray));
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArray));
        newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
        oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
        wordleGame.setNewGameWord();
        console.log(wordleGame.getCurrentWord());
      }
}

//skip current word and use a new one
const skipButton = document.getElementById('skip-button');
function skipWord() {
    wordleGame.setNewGameWord();
}
skipButton.addEventListener('click', () => {
    skipWord();
    console.log(wordleGame.getCurrentWord());
});

window.onload = () => {
    if (oldWordsArrayLS === null) {openHelpMenu()}
    checkForEmptyLSArray();
}


// console.log(wordleGame.getCurrentWord());
//      returns 'empty string'