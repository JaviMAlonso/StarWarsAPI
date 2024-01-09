//////////////////////////////////////////////////////////////
//Este codigo es el bueno, para cargar los cards directamente
/////////////////////////////////////////////////////////////
const busqueda = document.getElementById("busqueda");
const inputNombre = document.getElementById("nombre");
const divResultados = document.querySelector(".resultados");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".boton");
const radioButtons = document.getElementsByName("opcion");
const personajes = document.querySelector("#personajes");
const planetas = document.querySelector("#planetas");
const especies = document.querySelector("#especies");
const plantillaPersonajes = document.querySelector("#template-card.templatePersonajes").content;
const plantillaPlanetas = document.querySelector("#template-card.templatePlanetas").content;
const plantillaEspecies = document.querySelector("#template-card.templateEspecies").content;
const urlCharacters = "https://akabab.github.io/starwars-api/api/all.json";
const urlPlanets = "https://swapi.dev/api/planets/";

let arrayFotosPersonajes = [
    [id = 1, nombre = "Luke Skywalker", foto = "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"],
    [id = 2, nombre = "C-3PO", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png"],
    [id = 3, nombre = "R2-D2", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png"],
    [id = 4, nombre = "Darth Vader", foto = "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg"],
    [id = 5, nombre = "Leia Organa", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png"],
    [id = 6, nombre = "Owen Lars", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png"],
    [id = 7, nombre = "Beru Whitesun lars", foto = "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png"],
    [id = 8, nombre = "R5-D4", foto = "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png"],
    [id = 9, nombre = "Biggs Darklighter", foto = "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png"],
    [id = 10, nombre = "Obi-Wan Kenobi", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg"],
    [id = 11, nombre = "Anakin Skywalker", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png"],
    [id = 12, nombre = "Wilhuff Tarkin", foto = "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg"],
    [id = 13, nombre = "Chewbacca", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png"],
    [id = 14, nombre = "Han Solo", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png"],
    [id = 15, nombre = "Greedo", foto = "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg"],
    [id = 16, nombre = "Jabba Desilijic Tiure", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png"],
    [id = 18, nombre = "Wedge Antilles", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 19, nombre = "Jek Tono Porkins", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png"],
    [id = 20, nombre = "Yoda", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"],
    [id = 21, nombre = "Palpatine", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png"],
    [id = 22, nombre = "Boba Fett", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png"],
    [id = 23, nombre = "IG-88", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png"],
    [id = 24, nombre = "Bossk", foto = "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png"],
    [id = 25, nombre = "Lando Calrissian", foto = "https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png"],
    [id = 26, nombre = "Lobot", foto = "https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg"],
    [id = 27, nombre = "Ackbar", foto = "https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png"],
    [id = 28, nombre = "Mon Mothma", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/b7/MP-MonMothma.png"],
    [id = 29, nombre = "Arvel Crynyd", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg"],
    [id = 30, nombre = "Wicket Systri Warrick", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png"],
    [id = 31, nombre = "Nien Nunb", foto = "https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png"],
    [id = 32, nombre = "Qui-Gon Jinn", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg"],
    [id = 33, nombre = "Nute Gunray", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png"],
    [id = 34, nombre = "Finis Valorum", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png"],
    [id = 35, nombre = "Padmé Amidala", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg"],
    [id = 36, nombre = "Jar Jar Binks", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg"],
    [id = 37, nombre = "Roos Tarpals", foto = "https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg"],
    [id = 38, nombre = "Rugor Nass", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bossnass.jpg"],
    [id = 39, nombre = "Ric Olié", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png"],
    [id = 40, nombre = "Watto", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg"],
    [id = 41, nombre = "Sebulba", foto = "https://vignette.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png"],
    [id = 42, nombre = "Quarsh Panaka", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png"],
    [id = 43, nombre = "Shmi Skywalker", foto = "https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg"],
    [id = 44, nombre = "Darth Maul", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png"],
    [id = 45, nombre = "Bib Fortuna", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png"],
    [id = 46, nombre = "Ayla Secura", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg"],
    [id = 47, nombre = "Ratts Tyerell", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg"],
    [id = 48, nombre = "Dud Bolt", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png"],
    [id = 49, nombre = "Gasgano", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg"],
    [id = 50, nombre = "Ben Quadinaros", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Cropped_Quadinaros.png"],
    [id = 51, nombre = "Mace Windu", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/58/Mace_ROTS.png"],
    [id = 52, nombre = "Ki-Adi-Mundi", foto = "https://vignette.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg"],
    [id = 53, nombre = "Kit Fisto", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png"],
    [id = 54, nombre = "Eeth Koth", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png"],
    [id = 55, nombre = "Adi Gallia", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg"],
    [id = 56, nombre = "Saesee Tiin", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/68/Saesee_Tiin_Card_Trader.jpg"],
    [id = 57, nombre = "Yarael Poof", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/66/Yarael_Poof_Canon.jpeg"],
    [id = 58, nombre = "Plo Koon", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png"],
    [id = 59, nombre = "Mas Amedda", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png"],
    [id = 60, nombre = "Gregar Typho", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg"],
    [id = 61, nombre = "Cordé", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png"],
    [id = 62, nombre = "Cliegg Lars", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg"],
    [id = 63, nombre = "Poggle the Lesser", foto = "https://vignette.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png"],
    [id = 64, nombre = "Luminara Unduli", foto = "https://vignette.wikia.nocookie.net/starwars/images/2/21/LuminaraHS-SWE_%28new%29.png"],
    [id = 65, nombre = "Barriss Offee", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg"],
    [id = 66, nombre = "Dormé", foto = "https://vignette.wikia.nocookie.net/starwars/images/1/18/Dormesenate.jpg"],
    [id = 67, nombre = "Dooku", foto = "https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg"],
    [id = 68, nombre = "Bail Prestor Organa", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg"],
    [id = 69, nombre = "Jango Fett", foto = "https://vignette.wikia.nocookie.net/starwars/images/5/56/JangoInfobox.png"],
    [id = 70, nombre = "Zam Wesell", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg"],
    [id = 71, nombre = "Dexter Jettster", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg"],
    [id = 72, nombre = "Lama Su", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg"],
    [id = 73, nombre = "Taun We", foto = "https://vignette.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg"],
    [id = 74, nombre = "Jocasta Nu", foto = "https://vignette.wikia.nocookie.net/starwars/images/1/15/Jocasta_Nu_SWE.png"],
    [id = 75, nombre = "R4-P17", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/6b/R4-P17.jpg"],
    [id = 76, nombre = "Wat Tambor", foto = "https://vignette.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png"],
    [id = 77, nombre = "San Hill", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg"],
    [id = 78, nombre = "Shaak Ti", foto = "https://vignette.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png"],
    [id = 79, nombre = "Grievous", foto = "https://vignette.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg"],
    [id = 80, nombre = "Tarfful", foto = "https://vignette.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png"],
    [id = 81, nombre = "Raymus Antilles", foto = "https://vignette.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png"],
    [id = 82, nombre = "Sly Moore", foto = "https://vignette.wikia.nocookie.net/starwars/images/e/ec/SlyMooreIsWatchingYouPoop-OfficialPix.jpg"],
    [id = 83, nombre = "Tion Medon", foto = "https://vignette.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg"],
    [id = 84, nombre = "Finn", foto = "https://vignette.wikia.nocookie.net/starwars/images/a/af/Finn_TLJ_Collector%27s_Edition.png"],
    [id = 85, nombre = "Rey", foto = "https://vignette.wikia.nocookie.net/starwars/images/f/f8/ReyTLJEntertainmentWeeklyNovember.png"],
    [id = 86, nombre = "Poe Dameron", foto = "https://vignette.wikia.nocookie.net/starwars/images/7/79/Poe_Dameron_TLJ.png"],
    [id = 87, nombre = "BB8", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png"],
    [id = 88, nombre = "Captain Phasma", foto = "https://vignette.wikia.nocookie.net/starwars/images/0/02/Phasma.png"],
]

let arrayFotosPlanetas = [
    [id = 1, nombre = "Tatooine", foto = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest/scale-to-width-down/350?cb=20131214162357"],
    [id = 2, nombre = "Alderaan", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest/scale-to-width-down/350?cb=20100723184830"],
    [id = 3, nombre = "Yavin IV", foto = "https://static.wikia.nocookie.net/esstarwars/images/a/a0/Eaw_Yavin4.jpg/revision/latest/scale-to-width-down/350?cb=20080127231835"],
    [id = 4, nombre = "Hoth", foto = "https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest/scale-to-width-down/350?cb=20170802030704"],
    [id = 5, nombre = "Dagobah", foto = "https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest/scale-to-width-down/350?cb=20061117132132"],
    [id = 6, nombre = "Bespin", foto = "https://static.wikia.nocookie.net/esstarwars/images/1/11/Bespin-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170924173926"],
    [id = 7, nombre = "Endor", foto = "https://static.wikia.nocookie.net/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170629180854"],
    [id = 8, nombre = "Naboo", foto = "https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest/scale-to-width-down/350?cb=20190928214307"],
    [id = 9, nombre = "Coruscant", foto = "https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png/revision/latest/scale-to-width-down/350?cb=20221030204600"],
    [id = 10, nombre = "Kamino", foto = "https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png/revision/latest/scale-to-width-down/350?cb=20160913200828"],
    [id = 11, nombre = "Geonosis", foto = "https://static.wikia.nocookie.net/esstarwars/images/6/6d/Geonosis_AotC.png/revision/latest/scale-to-width-down/350?cb=20161025214407"],
    [id = 12, nombre = "Utapau", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/4f/Utapau.jpg/revision/latest/scale-to-width-down/350?cb=20061116203814"],
    [id = 13, nombre = "Mustafar", foto = "https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest/scale-to-width-down/350?cb=20201111174744"],
    [id = 14, nombre = "Kashyyyk", foto = "https://static.wikia.nocookie.net/esstarwars/images/8/8a/Kashyyk_Ghost_Raid.png/revision/latest/scale-to-width-down/350?cb=20160914094510"],
    [id = 15, nombre = "Polis Massa", foto = "https://static.wikia.nocookie.net/esstarwars/images/d/d2/Polis_Massa_surface.jpg/revision/latest/scale-to-width-down/350?cb=20181109014358"],
    [id = 16, nombre = "Mygeeto", foto = "https://static.wikia.nocookie.net/esstarwars/images/e/e5/Mygeeto_GE2.jpg/revision/latest/scale-to-width-down/350?cb=20200412204725"],
    [id = 17, nombre = "Felucia", foto = "https://static.wikia.nocookie.net/esstarwars/images/e/e5/Mygeeto_GE2.jpg/revision/latest/scale-to-width-down/350?cb=20200412204725"],
    [id = 18, nombre = "Cato Neimoidia", foto = "https://static.wikia.nocookie.net/esstarwars/images/c/c0/CatoNeimoidia-SS.png/revision/latest/scale-to-width-down/350?cb=20160913101123"],
    [id = 19, nombre = "Saleucami", foto = "https://static.wikia.nocookie.net/esstarwars/images/8/89/Saleucami-TD.png/revision/latest/scale-to-width-down/350?cb=20160615150725"],
    [id = 20, nombre = "Stewjon", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 21, nombre = "Eriadu", foto = "https://static.wikia.nocookie.net/esstarwars/images/7/75/Eriadu_AoRGMT.png/revision/latest/scale-to-width-down/350?cb=20231010181149"],
    [id = 22, nombre = "Corellia", foto = "https://static.wikia.nocookie.net/esstarwars/images/d/d7/Corellia-SWCT.png/revision/latest/scale-to-width-down/350?cb=20190128020739"],
    [id = 23, nombre = "Rodia", foto = "https://static.wikia.nocookie.net/esstarwars/images/c/c3/Rodia_canon.png/revision/latest/scale-to-width-down/350?cb=20160814195410"],
    [id = 24, nombre = "Nal Hutta", foto = "https://static.wikia.nocookie.net/esstarwars/images/0/0d/NalHutta-HFZ.png/revision/latest/scale-to-width-down/350?cb=20160814155301"],
    [id = 25, nombre = "Dantooine", foto = "https://static.wikia.nocookie.net/esstarwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest/scale-to-width-down/350?cb=20200120203120"],
    [id = 26, nombre = "Bestine IV", foto = "https://static.wikia.nocookie.net/esstarwars/images/7/7d/Bestine-TFABG.jpg/revision/latest/scale-to-width-down/350?cb=20190807014702"],
    [id = 27, nombre = "Ord Mantell", foto = "https://static.wikia.nocookie.net/esstarwars/images/3/36/Ord_Mantell_EotECR.png/revision/latest/scale-to-width-down/350?cb=20220910133848"],
    [id = 28, nombre = "Unkown", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 29, nombre = "Trandosha", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/40/Trandosha-PL.png/revision/latest/scale-to-width-down/350?cb=20171020014948"],
    [id = 30, nombre = "Socorro", foto = "https://static.wikia.nocookie.net/esstarwars/images/7/79/Socorro.png/revision/latest/scale-to-width-down/350?cb=20191221194045"],
    [id = 31, nombre = "Mon Cala", foto = "https://static.wikia.nocookie.net/esstarwars/images/2/24/Mon_Cala_SWCT.png/revision/latest/scale-to-width-down/350?cb=20180315101157"],
    [id = 32, nombre = "Chandrila", foto = "https://static.wikia.nocookie.net/esstarwars/images/f/f6/A_New_Dawn-SWP.jpg/revision/latest/scale-to-width-down/350?cb=20170801225524"],
    [id = 33, nombre = "Sullust", foto = "https://static.wikia.nocookie.net/esstarwars/images/7/72/Sullust_DICE.png/revision/latest/scale-to-width-down/350?cb=20171007152431"],
    [id = 34, nombre = "Toydaria", foto = "https://static.wikia.nocookie.net/esstarwars/images/d/d6/Toydaria-TCW.png/revision/latest/scale-to-width-down/350?cb=20160814194303"],
    [id = 35, nombre = "Malastare", foto = "https://static.wikia.nocookie.net/esstarwars/images/0/08/Malastare_landscape.png/revision/latest/scale-to-width-down/350?cb=20180408235029"],
    [id = 36, nombre = "Dathomir", foto = "https://static.wikia.nocookie.net/esstarwars/images/3/34/DathomirJFO.jpg/revision/latest/scale-to-width-down/350?cb=20200222141602"],
    [id = 37, nombre = "Ryloth", foto = "https://static.wikia.nocookie.net/esstarwars/images/b/b7/Ryloth_Rebels.png/revision/latest/scale-to-width-down/350?cb=20160601130228"],
    [id = 38, nombre = "Aleen Minor", foto = "https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg/revision/latest?cb=20070630172856"],
    [id = 39, nombre = "Vulpter", foto = "https://static.wikia.nocookie.net/esstarwars/images/b/b8/Aargau-TFABG.jpg/revision/latest?cb=20201110231922"],
    [id = 40, nombre = "Troiken", foto = "https://static.wikia.nocookie.net/esstarwars/images/c/ce/Troiken.jpg/revision/latest/scale-to-width-down/350?cb=20200411133325"],
    [id = 41, nombre = "Tund", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/4f/Tund_FFG.png/revision/latest/scale-to-width-down/350?cb=20180201203248"],
    [id = 42, nombre = "Haruun Kal", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 43, nombre = "Cerea", foto = "https://static.wikia.nocookie.net/esstarwars/images/8/80/Cerea_-_sw_galactic_atlas.png/revision/latest?cb=20170617145302"],
    [id = 44, nombre = "Glee Anselm", foto = "https://static.wikia.nocookie.net/esstarwars/images/b/ba/Glee_Anselm_fuel_log.png/revision/latest?cb=20170731025619"],
    [id = 45, nombre = "Iridonia", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/47/Iridonia_FFG.png/revision/latest/scale-to-width-down/350?cb=20170805183018"],
    [id = 46, nombre = "Tholoth", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 47, nombre = "Iktotch", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 48, nombre = "Quermia", foto = "https://static.wikia.nocookie.net/esstarwars/images/3/39/Quermia_Atlas.png/revision/latest/scale-to-width-down/350?cb=20171001021608"],
    [id = 49, nombre = "Dorin", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 50, nombre = "Champala", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 51, nombre = "Mirial", foto = "https://static.wikia.nocookie.net/esstarwars/images/6/6a/Ruuria-TFABG.jpg/revision/latest/scale-to-width-down/350?cb=20190825213223"],
    [id = 52, nombre = "Serenno", foto = "https://static.wikia.nocookie.net/esstarwars/images/b/b2/Serenno-Massacre.png/revision/latest/scale-to-width-down/350?cb=20140624074217"],
    [id = 53, nombre = "Concord Dawn", foto = "https://static.wikia.nocookie.net/esstarwars/images/8/84/Concord_Dawn_system.png/revision/latest/scale-to-width-down/350?cb=20201206201814"],
    [id = 54, nombre = "Zolan", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 55, nombre = "Ojom", foto = "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg"],
    [id = 56, nombre = "Skako", foto = "https://static.wikia.nocookie.net/esstarwars/images/c/cd/Skako.jpg/revision/latest?cb=20131013091711"],
    [id = 57, nombre = "Muunilinst", foto = "https://static.wikia.nocookie.net/esstarwars/images/4/49/JaemusMuunilinstEntralla_ROarticle.jpg/revision/latest?cb=20170629191228"],
    [id = 58, nombre = "Shili", foto = "https://static.wikia.nocookie.net/esstarwars/images/0/04/Shili_and_balnab_-_sw_galactic_atlas.png/revision/latest/scale-to-width-down/350?cb=20171206014447"],
    [id = 59, nombre = "Kalee", foto = "https://static.wikia.nocookie.net/esstarwars/images/0/08/KaleePlanet.jpg/revision/latest/scale-to-width-down/350?cb=20220415160459"],
    [id = 60, nombre = "Umbara", foto = "https://static.wikia.nocookie.net/starwars/images/8/82/Umbara_TVE.png/revision/latest?cb=20211110071751"],
]

async function getCharactersByName(name) {
    const urlFetch = urlCharacters + "?name=" + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

async function getPlanetsByName(id) {
    const urlFetch = urlPlanets + "?id=" + id;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

async function getSpeciesByName(name) {
    const urlFetch = urlSpecies + "?name=" + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

// para los botones de personaje, planeta, especie
function obtenerIdRadioSeleccionado() {
    // Iterar sobre los radio buttons
    for (var i = 0; i < radioButtons.length; i++) {
        // Verificar si el radio button está seleccionado
        if (radioButtons[i].checked) {
            // Obtener y mostrar el ID del radio button seleccionado
            var idSeleccionado = radioButtons[i].id;
            console.log('ID del radio button seleccionado: ' + idSeleccionado + '/');
            break;  // Detener el bucle una vez que se encuentra el radio button seleccionado
            //se me ha ocurrido para llamar a todos los personajes usar un bucle como este y que vaya mirando
            //tanto la api como el array de fotos
        }
    }
}
// para los botones de personaje, planeta, especie
botones.forEach(boton => {
    boton.addEventListener("click", function () {
        // se obtiene el valor del botón escogido
        const valorBoton = this.value;
        obtenerIdRadioSeleccionado()
        // Verifica cuál botón está seleccionado y muestra el valor correspondiente
        if (valorBoton === "people") {
            console.log("Botón de Personajes seleccionado");
            document.addEventListener("click", () => {
                divResultados.innerHTML = ""
                getCharactersByName().then(characters => {
                    console.log(characters);
                    pintarPersonajes(characters);
                });
            });
        } else if (valorBoton === "planets") {
            divResultados.innerHTML = ""
            console.log("Botón de Planetas seleccionado");
            document.addEventListener("click", () => {
                getPlanetsByName().then(planets => {
                    console.log(planets);
                    pintarPlanetas(planets);
                });
            });
        } else if (valorBoton === "species") {
            divResultados.innerHTML = ""
            console.log("Botón de Especies seleccionado");

        }
    });
});


function pintarPersonajes(personajes) {

    personajes.forEach(personaje => {
        // Clona la plantilla antes de asignar valores
        const clone = plantillaPersonajes.cloneNode(true);

        clone.querySelector("h4").textContent = personaje.name;
        clone.querySelector(".especie span").textContent = personaje.species;
        if (Number(personaje.born) < 0) {
            const bornValue = Math.abs(Number(personaje.born));
            clone.querySelector(".born span").textContent = bornValue + " BBY"; // Otra cosa que quieres escribir
        } else {
            clone.querySelector(".born span").textContent = personaje.born + " ABY";
        }
        clone.querySelector(".planeta a").textContent = personaje.homeworld;
        clone.querySelector(".genero span").textContent = personaje.gender;
        clone.querySelector("img").setAttribute("src", personaje.image);
        clone.querySelector("img").setAttribute("alt", personaje.name);
        clone.querySelector(".planeta a").setAttribute("href", "https://starwars.fandom.com/wiki/" + personaje.homeworld);

        fragment.appendChild(clone);
    });

    divResultados.appendChild(fragment);
}

function pintarPlanetas(planetas) {
    // Limpia el contenido actual de divResultados
    const fragment = document.createDocumentFragment();

    for (let i = 1; i < 61; i++) {
        const contadorPlaneta = getPlanetsByName(i);
        const planeta = contadorPlaneta.id;
        let idAPI = getPlanetsByName(i).id;
        console.log("ID API: " + idAPI)
        planetas.forEach(planeta => {
            let idArray = planeta[0]
            console.log(planeta[2])
            console.log("ID array: " + idArray)
            if (idAPI === idArray) {
                // Clona la plantilla antes de asignar valores
                const clone = plantillaPlanetas.cloneNode(true);

                clone.querySelector("h4").textContent = planeta.name;
                clone.querySelector(".climate span").textContent = planeta.climate;
                clone.querySelector(".terrain span").textContent = planeta.terrain;
                clone.querySelector(".population span").textContent = planeta.population;
                clone.querySelector("img").setAttribute("src", planeta.image);
                clone.querySelector("img").setAttribute("alt", planeta.name);

                fragment.appendChild(clone);
            }
        });
    }

    // Agrega el fragmento al div de resultados
    divResultados.appendChild(fragment);
}

//     planetas.forEach(planeta => {
//         // Clona la plantilla antes de asignar valores
//         const clone = plantillaPlanetas.cloneNode(true);

//         clone.querySelector("h4").textContent = planeta.name;
//         clone.querySelector(".climate span").textContent = planeta.climate;
//         clone.querySelector(".terrain span").textContent = planeta.terrain;
//         clone.querySelector(".population span").textContent = planeta.population;
//         clone.querySelector("img").setAttribute("src", planeta.image);
//         clone.querySelector("img").setAttribute("alt", planeta.name);

//         fragment.appendChild(clone);
//     });

//     // Agrega el fragmento al div de resultados
//     divResultados.appendChild(fragment);
// }


function pintarEspecies(especies) {
    // Limpia el contenido actual de divResultados
    const fragment = document.createDocumentFragment();

    especies.forEach(especie => {
        // Clona la plantilla antes de asignar valores
        const clone = plantillaEspecies.cloneNode(true);

        clone.querySelector("h4").textContent = especie.name;
        clone.querySelector(".classification span").textContent = especie.classification;
        clone.querySelector(".designation span").textContent = especie.designation;
        clone.querySelector(".average_lifespan span").textContent = especie.average_lifespan;
        clone.querySelector(".homeworld a").textContent = especie.homeworld;
        clone.querySelector(".language span").textContent = especie.language;

        fragment.appendChild(clone);
    });

    // Agrega el fragmento al div de resultados
    divResultados.appendChild(fragment);
}

// Llama a getCharactersByName al cargar la página
// document.addEventListener("click", () => {
//     // getCharactersByName().then(characters => {
//     //     console.log(characters);
//     //     pintarPersonajes(characters);
//     // });

//     getPlanetsByName().then(planets => {
//         console.log(planets);
//         pintarPlanetas(planets);
//     });


// });

async function getTodosLosPlanetas() {
    const urlPlanets = 'https://swapi.dev/api/planets/';
    let arrayPlanetasAPI = []; // El array vacío que quieres llenar

    for (let id = 1; ; id++) {
        const response = await fetch(`${urlPlanets}${id}`);
        const data = await response.json();

        if (data.results.length === 0) {
            // Si no hay más resultados, sal del bucle
            break;
        }

        // Agrega los planetas de la página actual al array
        arrayPlanetasAPI = arrayPlanetasAPI.concat(data.results);
    }

    return arrayPlanetasAPI;
}

// Llamada a la función y manejo del resultado
getTodosLosPlanetas()
    .then((result) => {
        console.log(result); // Aquí tendrás el array lleno con datos de todos los planetas
    })
    .catch((error) => {
        console.error('Error:', error);
    });


busqueda.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombre.value.trim();
    getCharactersByName(name)
        .then(characters => {
            console.log(characters)
            pintarPersonajes(characters);
        });
});
