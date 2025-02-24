package simulation

import (
	_ "github.com/simimpact/srsim/internal/character/arlan"
	_ "github.com/simimpact/srsim/internal/character/blade"
	_ "github.com/simimpact/srsim/internal/character/bronya"
	_ "github.com/simimpact/srsim/internal/character/clara"
	_ "github.com/simimpact/srsim/internal/character/danheng"
	_ "github.com/simimpact/srsim/internal/character/dummy"
	_ "github.com/simimpact/srsim/internal/character/gepard"
	_ "github.com/simimpact/srsim/internal/character/march7th"
	_ "github.com/simimpact/srsim/internal/character/natasha"
	_ "github.com/simimpact/srsim/internal/character/pela"
	_ "github.com/simimpact/srsim/internal/character/qingque"
	_ "github.com/simimpact/srsim/internal/character/sampo"
	_ "github.com/simimpact/srsim/internal/character/silverwolf"
	_ "github.com/simimpact/srsim/internal/character/sushang"
	_ "github.com/simimpact/srsim/internal/enemy/dummy"
	_ "github.com/simimpact/srsim/internal/global"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/cornucopia"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/echoesofthecoffin"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/finefruit"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/multiplication"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/perfecttiming"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/postopconversation"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/quidproquo"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/sharedfeeling"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/timewaitsfornoone"
	_ "github.com/simimpact/srsim/internal/lightcone/abundance/warmthshortenscoldnights"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/asecretvow"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/collapsingsky"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/mutualdemise"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/nowheretorun"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/onthefallofanaeon"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/shatteredhome"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/somethingirreplaceable"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/themoleswelcomeyou"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/theunreachableside"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/underthebluesky"
	_ "github.com/simimpact/srsim/internal/lightcone/destruction/woofwalktime"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/beforedawn"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/databank"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/geniusesrepose"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/nightonthemilkyway"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/passkey"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/thebirthoftheself"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/theseriousnessofbreakfast"
	_ "github.com/simimpact/srsim/internal/lightcone/erudition/todayisanotherpeacefulday"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/carvethemoonweavetheclouds"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/chorus"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/dancedancedance"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/memoriesofthepast"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/meshingcogs"
	_ "github.com/simimpact/srsim/internal/lightcone/harmony/planetaryrendezvous"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/adversarial"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/arrows"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/cruisinginthestellarsea"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/dartingarrow"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/inthenight"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/onlysilenceremains"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/returntodarkness"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/riverflowsinspring"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/sleeplikethedead"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/subscribeformore"
	_ "github.com/simimpact/srsim/internal/lightcone/hunt/swordplay"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/beforethetutorialmissionstarts"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/eyesoftheprey"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/fermata"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/goodnightandsleepwell"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/hiddenshadow"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/incessantrain"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/inthenameoftheworld"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/loop"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/patienceisallyouneed"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/resolutionshinesaspearlsofsweat"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/void"
	_ "github.com/simimpact/srsim/internal/lightcone/nihility/wewillmeetagain"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/amber"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/dayoneofmynewlife"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/defense"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/landauschoice"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/momentofvictory"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/pioneering"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/thisisme"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/trendoftheuniversalmarket"
	_ "github.com/simimpact/srsim/internal/lightcone/preservation/wearewildfire"
	_ "github.com/simimpact/srsim/internal/relic/cavern/genius"
	_ "github.com/simimpact/srsim/internal/relic/cavern/hunterofglacialforest"
	_ "github.com/simimpact/srsim/internal/relic/cavern/musketeer"
	_ "github.com/simimpact/srsim/internal/relic/cavern/puritypalace"
	_ "github.com/simimpact/srsim/internal/relic/cavern/wanderingcloud"
	_ "github.com/simimpact/srsim/internal/relic/planar/belobog"
	_ "github.com/simimpact/srsim/internal/relic/planar/pangalactic"
	_ "github.com/simimpact/srsim/internal/relic/planar/rutilant"
	_ "github.com/simimpact/srsim/internal/relic/planar/salsotto"
	_ "github.com/simimpact/srsim/internal/relic/planar/space"
	_ "github.com/simimpact/srsim/internal/relic/planar/talia"
	_ "github.com/simimpact/srsim/internal/relic/planar/vonwacq"
)
