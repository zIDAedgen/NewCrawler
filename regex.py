'''
PY[^PY]{0, 10}
'''
import re




#1.Location : The 'plus' house has class = _3fbupa, this will be a label to check whether a house is a plus one
#2.status
#3.introduction
#4.Amenities: _iq8x9is 2 to 15
from bs4 import BeautifulSoup

with open('./htmls/19.html') as pg0:
    soup_pg0 = BeautifulSoup(pg0, 'lxml')




path = './0.html'
txt = './urls.txt'
htmlfile = open(path, 'r', encoding='utf-8')
htmlhandle = htmlfile.read()
urls = []


def get_urls():
    soup = BeautifulSoup(htmlhandle, 'lxml')
    l = soup.find_all(class_ = '_16lonkd')
    print(len(l))
    for i in range(len(l)):
        print('id')
        print(l[i]['href'].split('/')[-1])
        print("img source")
        print('img' + l[i].img['src'])
        print()
'''
def write_into_file():
    with open(txt, 'w') as f:
        for url in urls:
            f.write("%s\n" % url)
'''



get_urls()


nameString = "GillHermosa SinclairBeacher PaulAndrea BrowneBowen RalphDouglas YuleLouis JuddMyra ToursNicholas BirdClark BloomfieldJoshua LondonUla LandonDerrick LeightonJonas WebsterCara WillNicola HazlittEartha LucyBlithe CoffeyRae MacPhersonLarry Aled(k)Herman JerryEmma PriestleyRudolf GarciaArchibald KingsleyGustave II.Leif GallacherByron MaryClyde EisenhowerJerry ArabellaCaroline IvanGemma JessieGeorgia RhysErin ArchibaldRaymond JuliaMurphy FordArlene FlynnErnest CharlesBeatrice HarrodLynnJean CarterLisa WhitmanJessie RoseEdith WarrenPenelope AlbertJeremy WillardGeorge GroteElvira HarrimanKaren MelvilleZona WhitMerle Wyld(e)Tyler DaltonJesse DoyleHugh GrayAfra OscarLesley Mat(h)ildaVincent BethuneRose LowellAlma CharleyStan Lindberg(h)Bonnie DuBoisMiriam GeoffreyDonna YoungDarcy NancyZero LawsonMichell AddisonEden RussellNewman NahumHunter GilbertNovia BobbyMarvin Sara(h)Peter JonathanPandora NorthIra IV.Webb MargeryAgatha TonyDeniseLou WhittierAugustine RomeoHiram MaloryLewis DeQuinceyVicky LouiseDonahue HamletAlexander ElsieLiz CarlRod KeppelCatherine DunbarHugo LindsayHubery BernardAthena JennyRex ConradIda GosseWill AttleeAbraham RogerSophia LeacockReg SheridanMerlin MarkAbbott PeterNelly FingerMatthew WellsCandice HaydnJoyce BrownSigrid AlickVerne EzekielLilith III.Page WhiteheadGeraldine HuxleyBess WilliamCleveland LucasYetta GreenDiana BrightGrover YeatesBurnell BecherDevin MooreGale SimonGuy MarcellusFord MichelsonBing JackRosemary CecilliaDick StevensonAnastasia FitzGeraldCamille PulitzerTom SanderGilbert BarrieDave PrittDoreen NicholasOscar ElectraIsaac ClareKim EmilyEllis PriceWarner TimothyHazel GeorgeVeromcaLance Wyclif(fe)Uriah CroftSean BloorCaesar RobesonYork AdamsGloria BelleJared OnionsBorg BenjaminAntonio LynchMarlon RoyPayne PullanReginald HaggaiDarlene NoelGavin WildeEdmund SonmerfieldAbigail Jenkin(s)Otto Nichol(s)Clarence BlumeNeil BellocVito AndersonRock TurnerKerwin TolandAdairJune RaphaelChad MasefieldMorton NickBert DrydenPrudence CarolineWanda AugustineDarren WilsonShirley RolandQuincy BensonEileen QuillerHilda BarnardLaura BrookCherry BeckSusan WatNathan WaltonSpring BroadBart IrvingMoses LuciusFreda ClaraBradley BeerbohmColbertIsabel DoraLen FastAmos Burne-JonesSharon MorseAgnes EipsteinArmand MarloweVivien FeltonZachary FunkJacqueline SassoonZoeBarry JoanVictoria ToynbeeClement MortonXaviera EugeneJulie MoultonParker TrumanEverley MarshallTyrone BobMay TrollpoeThera PerkinAlvis ChristianaEnid LouisaHenry RuthTroy HarperMolly FrancesOlivia PansyMavis NortonTruman GeordieClara ConanCash JoeLorraine CissieFaitheMarsh HansenKitty BettyGill LewisTodd PaterJamie AnneSandra KelvinCharles ChristWerner MosesWebster MoreWade HodgeTobey DewarMiles CarnegieBurton KatteNatividad ArnoldMaggie BertramVerna WagnerStephanie StilwellFanny MartinVictor HuttCecil ToutAlexia HubbardHamiltion NewmanMiranda HarveyHilary JacksonBrook AleranderArmstrong WodehousMabel KatrineBard HooverBertram LizzieEden TaylorMatt FinnZebulon ZechariahMartha KelsenMonica WallisFay EllisRachel RaglanWalter MollLyndon SharpLeona ShakespeareSamantha SaulLynn CoverdaleFerdinand SaxtonDominic HewlettIrma DeliaMadge GreshamChristine BloomerChristopher LongmanRuth EuphemiaRodney RosaBennett EdenColin DanVeronica StracheyPolly KiplingEdwina JeremyDempsey JeremiahChapman DarwinAdam WarnerCarl MatthewQuinn PitmanViolet MalanBrian LattimoreDuke ThorndikeWendell"
nameSets = nameString.split(" ")
print(len(nameSets))
