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



//start word check with e
//----
//string to array
//loop over and check if element length is 5
//      check if word is in set
//      if passes both, add to set
//set to array ()
let wordsString = "Adult,Agent,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair,Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress,Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide,Heart,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Judge,Knife,Layer,Level,Light,Limit,Lunch,Major,March,Match,Metal,Model,Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Phase,Phone,Piece,Pilot,Pitch,Place,Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score,Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start,State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust,Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,Woman,World,Youth,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause,Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn,Leave,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound,Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Watch,Would,Write,Above,Acute,Alive,Aware,Awful,Basic,Black,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Daily,Early,Empty,Equal,Exact,Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light,Local,Loose,Lucky,Magic,Major,Minor,Moral,Naval,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal,Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague,Valid,Vital,White,Whole,Wrong,aback,abase,abate,abaya,abbey,abbot,abhor,abide,abode,abort,about,above,abyss,ached,aches,acids,acing,acorn,acres,acrid,acted,actor,acute,adage,adapt,added,adept,adios,admin,admit,adobe,adopt,adore,adorn,adult,aeons,aerie,afoot,afore,after,again,agape,agent,aggro,agile,agree,ahead,ahold,aided,aides,ailed,aimed,aired,aisle,alarm,album,alert,algae,alias,alibi,alien,align,alike,alive,allay,alley,allow,alloy,aloft,aloha,alone,along,aloof,aloud,alpha,altar,alter,amass,amaze,amber,ambit,amble,amend,amide,amino,amiss,among,amped,ample,amply,amuse,angel,anger,angle,angry,angst,anime,ankle,annex,antic,antsy,anvil,apart,apnea,apply,apron,aptly,arbor,ardor,areas,arena,argon,argue,arise,armed,armor,aroma,arose,array,arrow,arson,artsy,ascot,ashen,ashes,aside,asked,asker,askew,aspen,asses,asset,atlas,atoms,atone,attic,audio,audit,aught,aunts,auras,autos,avail,avert,avian,avoid,await,awake,award,aware,awash,awoke,axels,axiom,axles,azure,babel,backs,bacon,baddy,badge,bagel,baggy,baits,baked,baker,bakes,bands,banjo,banks,barbs,bards,bared,barge,barks,barns,baron,based,bases,basic,basil,basin,basis,basks,baste,batch,bathe,baths,batty,bawls,beach,beads,beady,beaks,beams,beamy,beans,beard,bears,beast,beats,beefs,beefy,beeps,beers,beets,befit,began,beget,begin,begun,beige,being,belch,bells,belly,below,belts,bench,bends,bendy,beret,berry,bests,betas,bible,bicep,bided,bides,bigot,biked,biker,bikes,bills,binds,binge,bingo,biome,bipod,birch,birds,birth,bison,biter,bites,bitsy,black,blade,blame,bland,blank,blast,blaze,bleak,bleed,bleep,blend,bless,blimp,blind,bling,blink,blips,bliss,blitz,bloat,blobs,block,blogs,bloke,blond,blood,bloom,bloop,blots,blown,blows,blued,blues,bluff,blunt,blurs,blurt,blush,board,boars,boast,boats,bobby,boded,bodes,boggy,bogus,boils,bolts,bombs,bonds,bones,bongo,bonus,booed,books,booms,boost,booth,boots,booze,bored,bores,borne,bossy,botch,bough,bound,bouts,bowed,bowls,boxed,boxer,boxes,brace,brags,braid,brain,brake,brand,brash,brass,brats,brave,bravo,brawl,brawn,bread,break,brews,bribe,brick,bride,brief,bring,brink,brisk,broad,broch,broil,broke,brood,brook,broom,broth,brown,brows,brush,brute,bucks,buddy,budge,buffs,buggy,build,built,bulbs,bulky,bulls,bully,bumps,bumpy,bunch,bunks,bunny,burly,burns,burnt,burps,burst,buyer,bytes,cabin,cable,cacao,cache,cacti,caddy,cadet,caged,cages,caked,cakes,calls,calms,camel,cameo,camps,campy,candy,canes,canoe,caped,capes,carbs,cards,cared,cares,cargo,carol,carry,carts,carve,cased,cases,caste,casts,catch,cater,cause,caved,caves,cease,cedar,cello,cells,cents,chain,chair,chalk,champ,chant,chaos,charm,chart,chase,chats,cheap,cheat,check,cheer,chefs,chess,chest,chews,chewy,chief,child,chill,chimp,china,chips,chirp,choir,chomp,chops,chord,chore,chose,chuck,chugs,chunk,churn,cider,cigar,cited,cites,civic,civil,clack,claim,clamp,clams,clang,clank,clans,claps,clash,clasp,class,claws,clean,clear,clerk,click,cliff,climb,cling,clink,clips,cloak,clock,clone,close,cloth,clots,cloud,clout,clove,clown,clubs,clued,clues,clump,clung,coach,coals,coast,coats,cobra,cocoa,coded,coder,codes,codex,coils,coins,colds,color,colts,combo,combs,comet,comfy,comic,comma,condo,cones,cooks,cools,coral,cords,corks,corny,corps,costs,couch,cough,could,count,coupe,court,cover,covet,cowls,crabs,crack,craft,crane,crank,crash,crave,crawl,craze,crazy,creak,cream,crept,crews,cribs,crime,crisp,crops,cross,crowd,crown,crows,crude,cruel,crumb,crush,crust,crypt,cubed,cubes,cubic,cuffs,cults,cupid,curbs,cured,cures,curls,curly,curry,curse,curve,curvy,cushy,cycle,cynic,czars,daily,dairy,daisy,damns,dance,dared,dares,darts,dated,dates,datum,dawns,dazed,deals,dealt,debit,debts,debug,debut,decaf,decal,decks,decoy,deeds,defer,deify,deign,deism,deist,deity,delay,delta,delve,demon,demos,denim,dense,depot,depth,derby,desks,deter,detox,dials,diary,diced,dices,dicey,diets,digit,dimes,dimly,dined,diner,dines,dings,dirty,disco,discs,disks,ditch,diver,dives,dizzy,dodge,dodgy,doggy,dogma,doing,dolls,dolor,dolts,donor,donut,doors,dopey,dorks,dorky,dorms,doses,doubt,dough,dozed,draft,drags,drain,drake,drama,drank,drape,drawn,draws,dream,dress,dried,dries,drift,drill,drink,drips,drive,droll,drone,drool,drops,drove,drown,drums,drunk,duals,ducks,ducts,duels,duets,dumps,dumpy,dunes,dunks,dusts,dusty,dutch,dwarf,dweeb,dwell,dwelt,eager,eagle,eared,earls,early,earns,earth,eased,easel,easer,eases,eaten,eater,eaves,ebbed,ebony,ebook,echos,eclat,edema,edged,edger,edges,edict,edify,edits,eejit,eerie,egged,egret,eider,eidos,eight,eject,ejido,eland,elbow,elder,elect,elegy,elide,elite,elope,elude,elute,elven,elves,email,embed,ember,emcee,emery,emirs,emits,emote,empty,enact,ended,endow,enema,enemy,enjoy,ennui,enoki,enrol,ensue,enter,entry,envoy,eosin,epics,epoch,epoxy,equal,equip,erase,erect,ergot,erode,erred,error,erupt,essay,ether,ethic,ethos,ethyl,etude,euros,evade,evens,event,every,evict,evils,evoke,ewers,exact,exalt,exams,excel,execs,exert,exile,exist,exits,expat,expel,expos,extol,extra,exude,exult,exurb,eying,eyrie,fable,faced,facer,faces,facet,facia,facts,faded,fader,fades,faery,fails,faint,fairs,fairy,faith,faked,faker,fakes,fakie,fakir,falls,famed,fancy,fangs,fanny,farce,fared,fares,farms,farts,fasts,fatal,fated,fates,fatso,fatty,fatwa,fault,fauna,fauns,favas,faves,favor,fawns,faxed,faxes,fazed,fazes,fears,feast,feats,fecal,feces,feeds,feels,feign,feint,fella,fells,felon,felts,femme,femur,fence,fends,feral,feria,ferns,ferny,ferry,fests,fetal,fetch,feted,fetes,fetid,fetus,feuds,fever,fewer,fiats,fiber,fibre,fiche,ficus,fiefs,field,fiend,fiery,fifes,fifth,fifty,fight,filch,filed,filer,files,filet,fills,filly,films,filmy,filth,final,finca,finch,finds,fined,finer,fines,finis,finks,fiord,fired,fires,firms,first,fishy,fists,fitly,fiver,fives,fixed,fixer,fixes,fizzy,fjord,flack,flags,flail,flair,flake,flaky,flame,flank,flans,flaps,flare,flash,flask,flats,flaws,flays,fleas,fleck,flees,fleet,flesh,flick,flier,flies,fling,float,flood,floor,flour,flown,flows,fluid,flyer,focal,focus,folks,fonts,foods,force,forms,forth,forty,forum,found,frame,fraud,fresh,fried,fries,front,frost,fruit,fuels,fully,funds,funny,gains,games,gamma,gases,gates,gauge,gears,genes,genre,ghost,giant,gifts,girls,given,gives,gland,glass,globe,glory,gloss,glove,glued,goals,goats,going,goods,grace,grade,grain,grams,grand,grant,grape,graph,grasp,grass,grave,great,greek,green,greet,grief,grill,grind,grips,gross,group,grove,grown,grows,guard,guess,guest,guide,guild,guilt,habit,hairs,halls,hands,handy,hangs,happy,harsh,hated,hates,haven,hawks,heads,heard,heart,heavy,hedge,heels,hello,helps,hence,herbs,highs,hills,hints,hired,hobby,holds,holes,holly,homes,honey,honor,hooks,hoped,hopes,horns,horse,hosts,hotel,hours,house,hover,human,humor,hurts,icons,ideal,ideas,idiot,image,imply,inbox,incur,index,indie,inner,input,intro,issue,items,jeans,jelly,jewel,joins,joint,jokes,judge,juice,juicy,jumps,keeps,kicks,kills,kinda,kinds,kings,knees,knife,knock,knots,known,knows,label,labor,lacks,lakes,lamps,lands,lanes,large,laser,lasts,later,laugh,layer,leads,leaks,learn,lease,least,leave,legal,lemon,level,lever,light,liked,likes,limbs,limit,lined,linen,liner,lines,links,lions,lists,lived,liver,lives,loans,lobby,local,locks,lodge,logic,logos,looks,loops,loose,lords,loses,loved,lover,loves,lower,loyal,lucky,lunar,lunch,lungs,lying,macro,magic,major,maker,makes,males,maple,march,marks,marry,masks,match,mates,maths,matte,maybe,mayor,meals,means,meant,meats,medal,media,meets,melee,menus,mercy,merge,merit,merry,messy,metal,meter,metro,micro,midst,might,miles,minds,mines,minor,minus,mixed,mixer,mixes,model,modem,modes,moist,money,month,moral,motor,mount,mouse,mouth,moved,moves,movie,music,myths,nails,naked,named,names,nasal,nasty,naval,needs,nerve,never,newer,newly,nexus,nicer,niche,night,ninja,ninth,noble,nodes,noise,noisy,norms,north,notch,noted,notes,novel,nurse,nylon,oasis,occur,ocean,offer,often,older,olive,omega,onion,onset,opens,opera,opted,optic,orbit,order,organ,other,ought,ounce,outer,owned,owner,oxide,packs,pages,pains,paint,pairs,panel,panic,pants,paper,parks,parts,party,pasta,paste,patch,paths,patio,pause,peace,peach,peaks,pearl,pedal,peers,penis,penny,perks,pests,petty,phase,phone,photo,piano,picks,piece,piles,pills,pilot,pinch,pipes,pitch,pixel,pizza,place,plain,plane,plans,plant,plate,plays,plaza,plots,plugs,poems,point,poker,polar,poles,polls,pools,porch,pores,ports,posed,poses,posts,pouch,pound,power,press,price,pride,prime,print,prior,prize,probe,promo,prone,proof,props,proud,prove,proxy,psalm,pulls,pulse,pumps,punch,pupil,puppy,purse,queen,query,quest,queue,quick,quiet,quilt,quite,quote,races,racks,radar,radio,rails,rainy,raise,rally,ranch,range,ranks,rapid,rated,rates,ratio,razor,reach,react,reads,ready,realm,rebel,refer,reign,relax,relay,renal,renew,reply,reset,resin,retro,rider,rides,ridge,rifle,right,rigid,rings,rinse,risen,rises,risks,risky,rival,river,roads,robot,rocks,rocky,rogue,roles,rolls,roman,rooms,roots,ropes,roses,rough,round,route,royal,rugby,ruins,ruled,ruler,rules,rural,sadly,safer,salad,sales,salon,sandy,satin,sauce,saved,saves,scale,scalp,scans,scare,scarf,scary,scene,scent,scoop,scope,score,scout,scrap,screw,seals,seams,seats,seeds,seeks,seems,sells,sends,sense,serum,serve,setup,seven,sewer,shade,shaft,shake,shall,shame,shape,share,shark,sharp,sheep,sheer,sheet,shelf,shell,shift,shine,shiny,ships,shirt,shock,shoes,shook,shoot,shops,shore,short,shots,shown,shows,sides,siege,sight,sigma,signs,silly,since,sites,sixth,sized,sizes,skies,skill,skins,skirt,skull,slate,slave,sleek,sleep,slept,slice,slide,slope,slots,small,smart,smell,smile,smoke,snack,snake,sneak,socks,soils,solar,solid,solve,songs,sonic,sorry,sorts,souls,sound,south,space,spare,spark,speak,specs,speed,spell,spend,spent,sperm,spice,spicy,spike,spine,spite,split,spoke,spoon,sport,spots,spray,spurs,squad,stack,staff,stage,stain,stake,stamp,stand,stark,stars,start,state,stats,stays,steak,steal,steam,steel,steep,steer,stems,steps,stick,stiff,still,stock,stole,stone,stood,stool,stops,store,storm,story,stove,strap,straw,strip,stuck,study,stuff,style,sucks,sugar,suite,suits,sunny,super,surge,sushi,swear,sweat,sweet,swept,swift,swing,swiss,sword,syrup,table,taken,takes,tales,talks,tanks,tapes,tasks,taste,tasty,taxes,teach,teams,tears,teens,teeth,tells,tempo,tends,tenth,tents,terms,tests,texts,thank,theft,their,theme,there,these,thick,thief,thigh,thing,think,third,those,three,threw,throw,thumb,tiger,tight,tiles,timer,times,tired,tires,title,toast,today,token,tones,tools,tooth,topic,torch,total,touch,tough,tours,towel,tower,towns,toxic,trace,track,tract,trade,trail,train,trait,trans,traps,trash,treat,trees,trend,trial,tribe,trick,tried,tries,trips,trout,truck,truly,trump,trunk,trust,truth,tubes,tumor,tuned,tunes,turbo,turns,tutor,tweet,twice,twins,twist,types,tyres,ultra,uncle,under,union,unite,units,unity,until,upper,upset,urban,urged,urine,usage,users,using,usual,vague,valid,value,valve,vapor,vault,vegan,veins,vents,venue,verse,video,views,villa,vinyl,viral,virus,visas,visit,vital,vivid,vocal,vodka,voice,volts,voted,voter,votes,wages,wagon,waist,walks,walls,wants,warns,waste,watch,water,watts,waves,wears,weeds,weeks,weigh,weird,wells,welsh,whale,wheat,wheel,where,which,while,white,whole,whose,wider,width,winds,wings,wired,wires,witch,wives,woman,women,woods,words,works,world,worms,worry,worse,worst,worth,would,wound,wrath,wrist,write,wrong,wrote,yacht,yards,years,yeast,yield,yours,zones";
let tempArray = wordsString.split(",");
const wordsSet = new Set();
for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].length === 5 && !wordsSet.has(tempArray[i])) {
        wordsSet.add(tempArray[i]);
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

//this is used upon first visit to site
function checkForEmptyLSArray() {
    if (localStorage.getItem("newWordsArrayLS") === null) {
        randomArrayShuffle(newWordsArray);
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArray));
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArray));
      }
}

let currentWord = "";
function getNewGameWord() {
    if (newWordsArrayLS.length === 0) {
        fillNewWordsArrayLS();
    }
    currentWord = newWordsArrayLS.pop();
    localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
    oldWordsArrayLS.push(currentWord);
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
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

window.onload = () => {
    if (oldWordsArrayLS === null) {openHelpMenu()}
    checkForEmptyLSArray();
    getNewGameWord();
}