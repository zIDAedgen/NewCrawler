const puppeteer = require("puppeteer");
const fs = require("fs");
var url = "https://www.airbnb.com.au/rooms/13903327?previous_page_section_name=1000";
var address = ['https://www.airbnb.com.au/rooms/13903327?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/28392821?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13625403?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/12329261?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/3741609?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5040216?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3458853?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4761290?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5241137?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/945947?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1980443?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4476058?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16368472?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/25382235?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3434201?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11308212?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19457940?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6721644?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5631158?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/5185223?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/159786?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21100512?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19942828?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/22209417?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9493528?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/736236?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/11088697?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13478334?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5731239?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20875228?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/2694793?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13914356?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5113065?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/165610?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6824051?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11927367?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/6119839?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9516096?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/15652957?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6308017?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9911464?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/16876209?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19124953?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13927764?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7581286?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/17451815?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2645446?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19440195?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8071832?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4326462?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2341023?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21571698?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/767295?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/75702?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/264985?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2723435?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13337250?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2595738?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14174034?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10799704?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14078603?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/775331?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3239512?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/389876?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14345247?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7550751?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1160234?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4441047?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7847788?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/18113497?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13902107?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/3265015?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1115555?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/535709?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/421524?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11267389?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9842497?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16427160?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18780109?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4927328?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20154690?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4076976?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19073683?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10752424?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/29222569?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18902045?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/20316122?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16182585?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/15989484?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11261113?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10635998?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/12077533?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14843983?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/5015514?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21699925?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/12254769?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2660952?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19912813?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3934710?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4959516?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7877731?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/71825?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/267797?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4647524?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/20236306?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6470930?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/17914785?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14775141?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/7935975?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4959111?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5299546?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/5751561?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6284500?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2615252?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6078197?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2479538?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/405432?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17434542?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/13751219?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/706964?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5127367?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6579975?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11555065?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/27973581?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/22598610?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/13889119?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/21166422?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6480594?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6368328?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/18510438?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8522977?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19893148?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16356298?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10547782?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/725541?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7271078?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/880854?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5234127?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3769179?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16761617?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1260635?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16794277?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7583885?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6927543?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16676697?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/15794371?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9070254?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1641927?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9795209?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10269529?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/2469175?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/6837442?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9205098?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1808700?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4869080?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/449488?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4874403?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/23327963?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18022776?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4360407?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/29318635?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8053902?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16325871?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20241083?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11971748?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/26340496?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5983198?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9215874?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9614398?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5661425?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/12973417?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14982398?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20788945?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20982803?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9246012?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16425468?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21285893?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21266695?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14790877?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/701670?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11719775?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7483213?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1243792?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16123508?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/27718720?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/19540014?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2765971?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14772772?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/22064469?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/995744?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/10711571?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/227541?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2132235?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2489590?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20215941?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16366019?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17450918?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9698870?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/9945151?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20680724?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4439559?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4158645?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/15241675?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/23357643?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1841023?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/23831539?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6251100?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/19481367?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2160836?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/19012009?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6457769?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4535176?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1135581?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16149108?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4999661?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/5642007?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/958493?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8374146?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/2811738?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9564366?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18162367?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8506353?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/10732560?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/17686726?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13403157?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4311241?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/27819050?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/7368072?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9317094?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17812130?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14921287?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3013026?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9352316?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/15327450?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3242127?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4008182?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/24681173?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13348044?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1881084?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13866481?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/11449214?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/16247711?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/847003?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10549815?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17946780?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2680151?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/22307228?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8977284?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1903284?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/870762?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/819991?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/17406235?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16244226?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11423777?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/15092541?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4918690?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2554286?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/130970?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/10105225?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20001482?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2008885?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/9202537?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/5280894?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2283934?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1057015?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/15819215?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1016415?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/8604399?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/16160751?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/6375572?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17608866?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18420825?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1925052?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/3364413?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/27385752?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/5978687?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/15314015?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14980436?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/898906?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14301051?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1547664?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/15424010?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/20961345?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/17640830?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/16520152?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4441323?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21177784?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/1152131?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18978622?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/4465081?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2278934?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/20984031?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21518592?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/18512152?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/7228713?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/plus/1684050?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2777854?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/21146880?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2033057?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/2521892?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/13529946?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/59595?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/11911483?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/14392082?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/4027095?previous_page_section_name=1000', 'https://www.airbnb.com.au/rooms/9052171?previous_page_section_name=1000']
//console.log(address.length);

async function run(url, datas) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle2" });
	// hacky defensive move but I don't know a better way:
	// wait a bit so that the browser finishes executing JavaScript
	await page.waitFor(1 * 1000);
	const html = await page.content();
	var num = datas;
	fs.writeFileSync(`${datas}.html`, html);
	num += 1;
	await browser.close();
}


for (var i = 75; i < 85; i++) {
	run(address[i], i);
}
