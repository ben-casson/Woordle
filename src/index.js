import './styles/style.scss';
import { themeButton } from './theme.js';


themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});


const helpButton = document.getElementById('help-button');
const helpMenuContainer = document.getElementById('help-container');
const closeHelpMenuButton = document.getElementById('close-help-menu-button');
const helpMenuExampleAnimationArray = [...document.querySelectorAll('.example-animate')];
const exampleLetterCorrect = document.getElementById('example-letter-correct');
const exampleLetterWrongSpot = document.getElementById('example-letter-wrong-spot');
const exampleLetterIncorrect = document.getElementById('example-letter-incorrect');

const correctWordTile = document.querySelectorAll('.correct-word-tile');
const correctWordTileArray = [...correctWordTile];

function makeTileLetterBlack(tile) {
    if (document.body.classList.contains('light')) {
        tile.style.color = 'black';
    }
}

function openHelpMenu() {
    helpMenuContainer.classList.add('open');
    helpMenuExampleAnimationArray.forEach((tile) => {
        makeTileLetterBlack(tile);
    });
    for (let example of helpMenuExampleAnimationArray) {
        example.classList.add('flip-out');
        example.classList.add('flip-in');
    }
    setTimeout(() => {
        makeTileGreen(exampleLetterCorrect);
        makeTileYellow(exampleLetterWrongSpot);
        makeTileGray(exampleLetterIncorrect);
    }, 500);
}

function closeHelpMenu() {
    helpMenuContainer.classList.remove('open');
}

function makeTileGreen(tile) {
    if (document.body.classList.contains('dark')) {
        tile.style.backgroundColor = '#538D4E';
    }
    else {
        tile.style.backgroundColor = '#6AAA64';
    }
    tile.style.color = 'white';
    tile.classList.add('animated');
}

function makeTileYellow(tile) {
    if (document.body.classList.contains('dark')) {
        tile.style.backgroundColor = '#B59F3B';
    }
    else {
        tile.style.backgroundColor = '#C9B458';
    }
    tile.style.color = 'white';
    tile.classList.add('animated');
}

function makeTileGray(tile) {
    if (document.body.classList.contains('dark')) {
        tile.style.backgroundColor = '#3A3A3C';
    }
    else {
        tile.style.backgroundColor = '#787C7E';
    }
    tile.style.color = 'white';
    tile.classList.add('animated');
}

helpButton.addEventListener('click', () => {
    helpMenuContainer.classList.remove('fadeout');
    openHelpMenu();
});

closeHelpMenuButton.addEventListener('click', () => {
    helpMenuContainer.classList.add('fadeout');
    setTimeout(() => {
        closeHelpMenu();
        for (let example of helpMenuExampleAnimationArray) {
            example.classList.remove('flip-in');
            example.classList.remove('flip-out');
        }
        exampleLetterCorrect.style.backgroundColor = 'transparent';
        exampleLetterCorrect.classList.remove('animated');
        exampleLetterWrongSpot.style.backgroundColor = 'transparent';
        exampleLetterWrongSpot.classList.remove('animated');
        exampleLetterIncorrect.style.backgroundColor = 'transparent';
        exampleLetterIncorrect.classList.remove('animated');
    }, 200);
});


let wordsString = "Adult,Agent,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair,Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress,Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide,Heart,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Judge,Knife,Layer,Level,Light,Limit,Lunch,Major,March,Match,Metal,Model,Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Phase,Phone,Piece,Pilot,Pitch,Place,Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score,Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start,State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust,Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,World,Youth,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause,Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn,Leave,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound,Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Watch,Would,Write,Above,Acute,Alive,Aware,Awful,Basic,Black,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Daily,Early,Empty,Equal,Exact,Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light,Local,Loose,Lucky,Magic,Major,Minor,Moral,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal,Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague,Valid,Vital,White,Whole,Wrong,abbey,abhor,abide,abode,about,above,abyss,acorn,acrid,actor,acute,adage,adapt,adept,admin,admit,adobe,adopt,adore,adorn,adult,aerie,after,again,agent,aggro,agile,agree,ahead,aisle,alarm,album,alert,algae,alibi,alien,align,alike,alive,allay,alley,allow,alloy,aloft,aloha,alone,along,aloof,aloud,alpha,altar,alter,amass,amaze,amber,ambit,amble,amend,amide,amino,amiss,among,amped,ample,amply,amuse,angel,angle,angry,angst,anime,ankle,annex,antic,antsy,anvil,apart,apnea,apply,apron,arbor,ardor,areas,arena,argon,argue,arise,armor,aroma,arose,array,arrow,arson,ascot,aside,asked,askew,asset,atlas,attic,audio,audit,aught,aunts,avail,avert,avian,avoid,await,awake,award,aware,awash,awoke,axiom,azure,babel,bacon,baddy,badge,bagel,baggy,banjo,barge,baron,basic,basil,basin,basis,batch,bathe,batty,beach,beard,beast,befit,began,begin,begun,beige,belch,belly,below,bench,berry,bible,bicep,binge,bingo,biome,bipod,birch,birth,bison,black,blade,blame,bland,blank,blast,blaze,bleak,bleed,bleep,blend,bless,blimp,blind,bling,blink,bliss,blitz,bloat,blobs,block,blogs,bloke,blond,blood,bloom,bluff,blunt,blurt,blush,board,boast,bobby,boggy,bogus,bongo,bonus,boost,booth,borne,botch,bough,bound,boxer,brace,braid,brain,brake,brand,brash,brass,brave,bravo,brawl,brawn,bread,break,brews,bribe,brick,bride,brief,bring,brink,brisk,broad,broch,broil,broke,brood,brook,broom,broth,brown,brush,brute,buddy,budge,buggy,build,built,bumpy,bunch,bunny,burnt,burst,buyer,cabin,cable,cacao,cache,cacti,caddy,cadet,camel,cameo,campy,candy,canoe,cargo,carry,carve,cases,caste,catch,cater,cause,caved,cease,cedar,cello,chain,chair,chalk,champ,chant,chaos,charm,chart,chase,cheap,cheat,check,cheer,chess,chest,chewy,chief,child,chill,chimp,china,chips,chirp,choir,chomp,chord,chore,chose,chuck,chunk,churn,cider,cigar,cites,civic,civil,clack,claim,clamp,clang,clank,clash,clasp,class,clean,clear,clerk,click,cliff,climb,cling,clink,cloak,clock,clone,close,cloth,cloud,clout,clove,clown,clump,clung,coach,coast,cobra,cocoa,coded,coder,codes,codex,color,combo,comet,comfy,comic,comma,condo,cones,coral,couch,cough,could,count,coupe,court,cover,covet,crack,craft,crane,crank,crash,crave,crawl,creak,cream,crept,crime,crisp,cross,crowd,crown,crude,crumb,crush,crust,crypt,cubic,cupid,curly,curry,curse,curve,curvy,cycle,daily,dairy,daisy,damns,dance,datum,dealt,debit,debug,debut,decaf,decal,decoy,defer,deify,deign,deism,deist,deity,delay,delta,delve,demon,denim,dense,depot,depth,derby,deter,detox,diary,dicey,digit,dimes,dimly,diner,dirty,disco,ditch,dizzy,dodge,dodgy,dogma,doing,dolor,donor,donut,doubt,dough,draft,drain,drake,drama,drank,drape,drawn,dream,dress,drift,drill,drink,drive,droll,drone,drool,drove,drown,drunk,dumpy,dusty,dutch,dwarf,dwell,eager,eagle,early,earth,easel,easer,ebony,ebook,eight,eject,elbow,elder,elect,elite,elude,elves,email,embed,ember,emote,empty,enact,ended,enemy,enjoy,ennui,ensue,enter,entry,envoy,epoch,epoxy,equal,equip,erase,erect,erode,error,erupt,essay,ether,ethic,ethos,evade,event,every,evict,evoke,exact,exalt,excel,exert,exile,exist,expel,extol,extra,exude,exult,fable,facet,faded,faint,fairy,faith,fancy,farce,fault,favor,feast,feign,felon,femur,fence,fetch,fever,fewer,fiber,field,fiend,fiery,fifth,fifty,fight,filer,filth,final,first,flack,flail,flair,flake,flame,flank,flare,flash,flask,flick,fling,float,flood,floor,flour,flown,fluid,focal,focus,force,forms,forth,forty,forum,found,frame,fraud,fresh,front,frost,fruit,fully,funny,gamma,gauge,genre,ghost,giant,given,gland,glass,globe,glory,gloss,glove,going,goods,grace,grade,grain,grand,grant,grape,graph,grasp,grass,grave,great,greek,green,greet,grief,grill,grind,group,grove,grown,guard,guess,guest,guide,guild,guilt,habit,happy,harsh,haven,heard,heart,heavy,hedge,hello,hence,hobby,honey,honor,horse,hotel,house,hover,human,humor,ideal,image,imply,inbox,incur,index,indie,inner,input,intro,issue,jelly,jewel,joint,judge,juice,juicy,kinda,knife,knock,known,label,labor,large,laser,later,laugh,layer,learn,lease,least,leave,legal,lemon,level,lever,light,limit,linen,liner,liver,lobby,local,lodge,logic,logos,loose,lower,loyal,lucky,lunar,lunch,lying,macro,magic,major,maple,march,marry,match,matte,maybe,mayor,meant,medal,media,melee,mercy,merge,merit,merry,messy,metal,meter,metro,micro,midst,might,minor,minus,mixer,model,moist,money,month,moral,motor,mouse,mouth,movie,music,nerve,never,newer,nexus,niche,night,ninja,ninth,noble,noise,noisy,north,notch,novel,nurse,nylon,oasis,occur,ocean,offer,often,olive,omega,onion,onset,opera,optic,orbit,order,organ,other,ought,ounce,outer,owner,oxide,paint,panic,paper,party,pasta,paste,patch,patio,pause,peace,peach,pearl,pedal,penny,petty,phase,phone,photo,piano,piece,pilot,pinch,pitch,pixel,pizza,place,plain,plane,plant,plate,plaza,point,poker,polar,porch,pouch,pound,power,press,price,pride,prime,print,prior,prize,probe,promo,prone,proof,proud,prove,proxy,psalm,pulse,punch,pupil,puppy,purse,queen,query,quest,queue,quick,quiet,quilt,quite,quote,radar,radio,raise,rally,ranch,range,rapid,ratio,razor,reach,react,ready,realm,rebel,refer,reign,relax,relay,renew,reply,reset,resin,retro,ridge,rifle,right,rigid,rinse,risky,rival,river,robot,rocky,rogue,rough,round,route,royal,rugby,ruins,rural,sadly,salad,sandy,satin,sauce,scale,scalp,scare,scarf,scary,scene,scent,scoop,scope,score,scout,scrap,screw,sense,serve,setup,seven,sewer,shade,shake,shall,shape,share,shark,sharp,sheep,sheet,shelf,shell,shift,shine,shiny,shirt,shock,shoes,shore,short,shown,siege,sight,sigma,silly,since,sixth,skill,skirt,skull,slate,sleep,slept,slice,slide,slope,small,smart,smile,smoke,snack,snake,sneak,solar,solid,solve,sonic,sorry,sound,south,space,spare,spark,speak,speed,spell,spend,spent,spice,spicy,spike,spine,spite,split,spoke,spoon,sport,spray,squad,stack,staff,stage,stain,stamp,stand,stark,start,state,steak,steal,steam,steel,steep,stick,stiff,still,stock,stole,stone,stood,stool,store,storm,story,stove,strap,straw,strip,stuck,study,stuff,style,sugar,suite,sunny,super,surge,sushi,swear,sweat,sweet,swept,swift,swing,swiss,sword,syrup,table,taste,tasty,teach,teeth,tempo,tenth,thank,theft,their,theme,there,these,thick,thief,thing,think,third,those,three,threw,throw,thumb,tiger,tight,timer,title,toast,today,token,tooth,topic,torch,total,touch,tough,towel,tower,toxic,trace,track,tract,trade,trail,train,trait,treat,trend,trial,tribe,trick,trout,truck,truly,trunk,trust,truth,turbo,tutor,tweet,twice,twist,ultra,uncle,under,union,unite,unity,until,upper,upset,urban,usage,usual,vague,valid,value,valve,vapor,vault,vegan,venue,verse,video,villa,vinyl,viral,virus,visit,vital,vivid,vocal,vodka,voice,wagon,waist,waste,watch,water,weigh,weird,welsh,whale,wheat,wheel,where,which,while,white,whole,whose,width,witch,world,worry,worse,worst,worth,would,wound,wrath,wrist,write,wrong,yacht,yield";

let tempArray = wordsString.split(",");
const wordsSet = new Set();
wordsSet.forEach((word) => {
    word = word.toLowerCase();
});

for (let word of tempArray) {
    if (word.length === 5 && !wordsSet.has(word)) {
        word = word.toLowerCase();
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


//moves all old words back to newWordsArrayLS when there are no more new words 
function fillNewWordsArrayLS() {
    oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
    randomArrayShuffle(oldWordsArrayLS);
    localStorage.setItem('newWordsArrayLS', JSON.stringify(oldWordsArrayLS));
    newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
    oldWordsArrayLS = [];
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
}



const Game = () => {
    let currentWord = "";
    // let currentRow = 
    const setNewGameWord = () => {
        // for (let i in correctWordTileArray) {
        //     correctWordTileArray[i].innerHTML = oldWordsArrayLS[oldWordsArrayLS.length - 1].toUpperCase().charAt(i);
        // }
        if (newWordsArrayLS.length === 0) {
            fillNewWordsArrayLS();
        }
        currentWord = newWordsArrayLS.pop();
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
        oldWordsArrayLS.push(currentWord);
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
        console.log(currentWord);
        removeTileAnimationClasses();
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
        for (let i in correctWordTileArray) {
            correctWordTileArray[i].innerHTML = wordleGame.getCurrentWord().toUpperCase().charAt(i);
        }
        console.log(wordleGame.getCurrentWord());
      }
    else {
        wordleGame.currentWord = oldWordsArrayLS[oldWordsArrayLS.length - 1];
        for (let i in correctWordTileArray) {
            correctWordTileArray[i].innerHTML = wordleGame.currentWord.toUpperCase().charAt(i);
        }
    }
}


const GameRow = (number) => {
    let rowElement = document.querySelector(`.game-row${number}`);
    let rowNumber = number;
    let rowWord = '';
    let filled = false;
    let isCurrentRow = false;
    return {rowElement, rowNumber, rowWord, filled, isCurrentRow};
}
const gameRow1Object = Object.create(GameRow('1'));
gameRow1Object.isCurrentRow = true;
const gameRow2Object = Object.create(GameRow('2'));
const gameRow3Object = Object.create(GameRow('3'));
const gameRow4Object = Object.create(GameRow('4'));
const gameRow5Object = Object.create(GameRow('5'));
const gameRow6Object = Object.create(GameRow('6'));
const gameRowObjects = [gameRow1Object, gameRow2Object, gameRow3Object, gameRow4Object, gameRow5Object, gameRow6Object];

const keyboardButtonsArray = [...document.querySelectorAll('.letter-button')];
const enterButton = document.getElementById('enter-button');
const deleteButton = document.getElementById('delete-button');

const skipButton = document.getElementById('skip-button');

const skipWordModal = document.getElementById('skip-word-modal');
const confirmSkipButton = document.getElementById('skip-yes-button');
const cancelSkipButton = document.getElementById('skip-no-button');
const correctWordTileCover = document.querySelectorAll('.tile-cover');
const correctWordTileArrayCover = [...correctWordTileCover];
cancelSkipButton.addEventListener('click', () => {
    skipWordModal.style.display = 'none';
});

function skipWord() {
    // let arr = wordleGame.getCurrentWord().split('');
    // console.log(arr);
    for (let i = 0; i < 5; i++) {
        // correctWordTileArray[i].innerHTML = arr[i];
        // console.log(i + ' - ' + arr[i]);
        correctWordTileArrayCover[i].classList.add('remove-cover');
        correctWordTileArray[i].classList.add('bounce');
    }
    setTimeout(() => {
        clearRows();
        removeKeyboardButtonColor();
        // confirmSkipButton.disabled = false;
        enableButton(confirmSkipButton);
        enableButton(cancelSkipButton);
        // wordleGame.setNewGameWord();
        skipWordModal.style.display = 'none';
        // correctWordTileCover.classList.remove('remove-cover');
        for (let i = 0; i < 5; i++) {
            correctWordTileArrayCover[i].classList.remove('remove-cover');
            correctWordTileArray[i].classList.remove('bounce');
        }
        [...document.querySelectorAll('.game-tile')].forEach((tile) => {
            tile.style.backgroundColor = 'transparent';
            if (document.body.classList.contains('dark')) {
                tile.style.color = 'white';
                // tile.style.border = '2px solid #3A3A3C';
            }
            else {
                tile.style.color = 'black';
                // tile.style.border = '2px solid #D3D6DA';
            }
            tile.classList.add('empty-tile');
            tile.classList.remove('white-text');
            tile.classList.remove('no-border');
            tile.classList.add('default-text-color');
        });
    }, 3500);
}

function disableButton(button) {
    button.disabled = true;
    button.classList.add('disabled-button');
}

function enableButton(button) {
    button.disabled = false;
    button.classList.remove('disabled-button');
}

confirmSkipButton.addEventListener('click', () => {
    // clearRows();
    // skipWordModal.style.display = 'none';
    // for (let i in correctWordTileArray) {
    //         correctWordTileArray[i].innerHTML = wordleGame.getCurrentWord().toUpperCase().charAt(i);
    // }
    wordleGame.setNewGameWord();
    disableButton(confirmSkipButton);
    disableButton(cancelSkipButton);
    // confirmSkipButton.disabled = true;
    // cancelSkipButton.disabled = true;
    skipWord();
    //update stats
});

skipButton.addEventListener('click', () => {
    // skipWord(); move to 'yes' button inside skip modal
    // console.log(wordleGame.getCurrentWord());
    skipWordModal.style.display = 'flex';
    wordleGame.currentWord = oldWordsArrayLS[oldWordsArrayLS.length - 1];
    for (let i in correctWordTileArray) {
        correctWordTileArray[i].innerHTML = wordleGame.currentWord.toUpperCase().charAt(i);
    }
    
});


function deleteLetter() {
    loop1:
    for (let row of gameRowObjects) {
        if (row.isCurrentRow === true) {
            const rowTilesArray = [...document.querySelector(`.game-row${row.rowNumber}`).children];
            for (let i = rowTilesArray.length - 1; i >= 0; i--) {
                if (rowTilesArray[i].textContent !== '') {
                    row.rowWord = row.rowWord.slice(0, i);
                    rowTilesArray[i].textContent = '';
                    rowTilesArray[i].classList.remove('active-tile');
                    row.filled = false;
                    break loop1;
                }    
            }
        }
    }        
}

deleteButton.addEventListener('click', () => {
    deleteLetter();
});

function animateSelectedLetter(tile) {
    tile.style.animation = 'none';
    tile.classList.add('popIn');
    tile.style.animation = 'PopIn 100ms';   // linear 0ms 1 normal forwards
    tile.animationFillMode = 'none';
    setTimeout(() => {
        tile.classList.remove('popIn');
        tile.classList.add('active-tile');  
        tile.style.animation = 'none';
    }, 100);
}


function displayTileLetter(letter) {
    loop1:
    for (let row of gameRowObjects) {
        if (row.filled === false && row.isCurrentRow === true) {
            const rowTilesArray = [...document.querySelector(`.game-row${row.rowNumber}`).children];
            for (let tile of rowTilesArray) {
                removeTileAnimationClasses();
                if (tile.textContent === '') {
                    tile.textContent = letter;
                    // console.log(letter.dataset.key);
                    tile.classList.remove('empty-tile');
                    animateSelectedLetter(tile);
                    row.rowWord = "" + row.rowWord + letter.toLowerCase();
                    if (tile === rowTilesArray[rowTilesArray.length - 1]) {
                        row.filled = true;
                    }
                    break loop1;
                }
            }
        }
    }
}

keyboardButtonsArray.forEach((letter) => {
    letter.addEventListener('click', (e) => {
        displayTileLetter(letter.dataset.key);
        e.stopImmediatePropagation();
    });
});


function clearRows() {
    for (let row of gameRowObjects) {
        row.rowWord = '';
        row.filled = false;
        row.isCurrentRow = false;
        const rowTilesArray = [...document.querySelector(`.game-row${row.rowNumber}`).children];
            for (let tile of rowTilesArray) {
                tile.textContent = '';
                tile.classList.remove('active-tile');
                tile.classList.remove('green-background');
                tile.classList.remove('yellow-background');
                tile.classList.remove('dark-gray-background');
            }
    }
    gameRow1Object.isCurrentRow = true;
}

const statisticsButton = document.getElementById('statistics-button');
const statisticsModal = document.getElementById('statistics-container');
const statisticsCloseButton = document.getElementById('statistics-close-button');
const newWordButton = document.getElementById('new-word-button');

statisticsButton.addEventListener('click', () => {
    // statisticsModal.style.display = 'flex';
    statisticsModal.classList.remove('close');
    statisticsModal.classList.add('open');
    newWordButton.style.display = 'none';
    setTimeout(() => {
        statisticsCloseButton.style.display = 'block';
    }, 225);
});

statisticsCloseButton.addEventListener('click', () => {
    // statisticsModal.style.display = 'none';
    statisticsModal.classList.add('close');
    setTimeout(() => {
        statisticsModal.classList.remove('open');
    }, 200);
});

newWordButton.addEventListener('click', () => {
    clearRows();
    removeKeyboardButtonColor();
    wordleGame.setNewGameWord();
    statisticsModal.classList.add('close');
    setTimeout(() => {
        statisticsModal.classList.remove('open');
    }, 200);
    // removeTileAnimationClasses();
    [...document.querySelectorAll('.game-tile')].forEach((tile) => {
        tile.style.backgroundColor = 'transparent';
        if (document.body.classList.contains('dark')) {
            tile.style.color = 'white';
            // tile.style.border = '2px solid #3A3A3C';
        }
        else {
            tile.style.color = 'black';
            // tile.style.border = '2px solid #D3D6DA';
        }
        tile.classList.add('empty-tile');
        tile.classList.remove('white-text');
        tile.classList.remove('no-border');
        tile.classList.add('default-text-color');
    });
});
// function submitIncompleteWord() {

// }

// function submitIncorrectWord() {

// }

function submitCorrectWord() {
    //update stats
    //display stats with 'new word' button
    setTimeout(() => {
        statisticsCloseButton.style.display = 'none';
        statisticsModal.classList.remove('close');
        statisticsModal.classList.add('open');
        setTimeout(() => {
            newWordButton.style.display = 'block';
        }, 225);
    }, 3000);
}

function removeTileAnimationClasses() {
    for (let row of gameRowObjects) {
        const rowTilesArray = [...document.querySelector(`.game-row${row.rowNumber}`).children];
        for (let tile of rowTilesArray) {
            tile.classList.remove('win');
            tile.classList.remove('incorrect');
        } 
    }
}

function addKeyboardButtonColor(tile, color) {
    for (let key of keyboardButtonsArray) {
        if (key.innerHTML == tile.innerHTML.toUpperCase()) {
            setTimeout(key.classList.add('white-text'), 1100);
            if (color == 'yellow' && key.classList.contains('green-background')) {
                continue;
            }
            else {
                //remove yellow class because it overrides green class in css due to cascading 
                key.classList.remove(`yellow-background`);
                setTimeout(key.classList.add(`${color}-background`), 1100);
            }
        }
    }
}

function removeKeyboardButtonColor() {
    for (let key of keyboardButtonsArray) {
            key.classList.remove(`green-background`);
            key.classList.remove(`yellow-background`);
            key.classList.remove(`dark-gray-background`);
            key.classList.remove('white-text');
    }
}

function flipSubmittedTile(tile, number) {
        if (tile.innerHTML === oldWordsArrayLS[oldWordsArrayLS.length - 1].charAt(number)) {
            tile.classList.add('green-background');
            addKeyboardButtonColor(tile, 'green');
        }
        else if (oldWordsArrayLS[oldWordsArrayLS.length - 1].includes(tile.innerHTML)) {
            tile.classList.add('yellow-background');
            addKeyboardButtonColor(tile, 'yellow');
        }
        else {
            tile.classList.add('dark-gray-background');
            addKeyboardButtonColor(tile, 'dark-gray');
        }
        tile.classList.remove('default-text-color');
        tile.classList.add('white-text');
        tile.classList.remove('empty-tile');
        tile.classList.add('no-border');
}

function sumbitWord() {
    loop1:
    for (let row of gameRowObjects) {
        if (row.isCurrentRow) {
            const rowTilesArray = [...document.querySelector(`.game-row${row.rowNumber}`).children];
            if (row.rowWord.length === 5) {
                    //loop through tiles
                    //check if tile.textcontent === oldWordsArrayLS[oldWordsArrayLS.length - 1].charAt(j)
                    let flipDelay = 0;
                    for (let j = 0; j < rowTilesArray.length; j++) {
                        rowTilesArray[j].classList.add('win');
                        rowTilesArray[j].style.animation = `Flip 400ms linear ${flipDelay}ms 1 normal forwards`;
                        flipDelay += 200;
                    }
                    
                    // flipSubmittedTile(rowTilesArray[0], 0);
                    setTimeout(() => {
                        flipSubmittedTile(rowTilesArray[0], 0);
                    }, 200);
                    setTimeout(() => {
                        flipSubmittedTile(rowTilesArray[1], 1);
                    }, 400);
                    setTimeout(() => {
                        flipSubmittedTile(rowTilesArray[2], 2);
                    }, 600);
                    setTimeout(() => {
                        flipSubmittedTile(rowTilesArray[3], 3);
                    }, 800);
                    setTimeout(() => {
                        flipSubmittedTile(rowTilesArray[4], 4);
                    }, 1000);
                    // setTimeout(() => {
                    //     for (let k = 0; k < rowTilesArray.length; k++) {
                    //         rowTilesArray[k].classList.remove('flip-in');
                    //     }
                    // }, 2500);
                    
                    //row.rowWord == wordleGame.currentWord || 
                    if (row.rowWord == oldWordsArrayLS[oldWordsArrayLS.length - 1]) {
                        //animate word then..
                        for (let tile of rowTilesArray) {
                            tile.classList.remove('win');
                            tile.classList.remove('incorrect');
                        } 
                        
                        
                        for (let tile of rowTilesArray) {
                            // tile.style.animationDuration = '1000ms';
                            // tile.style.animationDelay = delay + 'ms';
                            tile.classList.add('win');
                            console.log('hi');
                        } 
                        
                        setTimeout(() => {
                            let delay = 0;
                            const winClassArr = [...document.querySelectorAll('.win')];
                            for (let l = 0; l < rowTilesArray.length; l++) {
                                winClassArr[l].style.animation = `Bounce 1000ms linear ${delay}ms 1 normal forwards`;
                                delay += 125;
                            } 
                            for (let i = 0; i < rowTilesArray.length; i++) {
                                // tile.classList.add('win');
                                // console.log('hi');
                                rowTilesArray[i].classList.remove('win');
                                rowTilesArray[i].classList.add('win');
                            } 
                        }, 1150);
                        submitCorrectWord();
                        console.log('Winner winner chicken dinner!');
                    }
                    else {
                        //incorrect word
                        console.log('incorrect word');
                        for (let i = 0; i < gameRowObjects.length; i++) {
                            if (i < 5) {
                                if (gameRowObjects[i].isCurrentRow) {
                                    gameRowObjects[i].isCurrentRow = false;
                                    gameRowObjects[i + 1].isCurrentRow = true;
                                    break loop1;
                                }
                            }
                            else {
                                //player loses game, display modal
                            }
                        }
                    }
            }
            else {
                //not enough letters
                for (let tile of rowTilesArray) {
                    tile.classList.add('incorrect');
                    tile.style.animation = 'Shake 600ms';
                } 
                setTimeout(function() {
                    for (let tiles of rowTilesArray) {
                        tiles.classList.remove('incorrect');
                        tiles.style.animation = 'none';
                    }   
                }, 600);
            }
        }
    }
}

enterButton.addEventListener('click', () => {
    sumbitWord();
});



window.addEventListener('keyup', event => {
    let keyLetter = event.key;
    if (!statisticsModal.classList.contains('open') 
        && !helpMenuContainer.classList.contains('open') 
        && skipWordModal.style.display !== 'flex') {
        //check if key is lowercase letter 
        if (keyLetter.charCodeAt(0) >= 97 
            && keyLetter.charCodeAt(0) <= 122
            && keyLetter !== " ") {

            displayTileLetter(keyLetter);
        }
        else if (keyLetter === 'Backspace' || keyLetter === 'Delete') {
            deleteLetter();
        }
        else if (keyLetter === 'Enter') {sumbitWord()}
    }
});


window.onload = () => {
    if (oldWordsArrayLS === null) {openHelpMenu()}
    checkForEmptyLSArray();
}

