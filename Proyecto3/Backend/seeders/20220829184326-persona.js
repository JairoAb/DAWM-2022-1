'use strict';

let personas = [
	{
		"correo": "zina.pardo60@gmail.com",
		"nombre": "Don",
		"apellido": "Banner",
		"telefono": "+33-1115-951-977",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-06-14"
	},
	{
		"correo": "janicebeltran882@fundraising.com",
		"nombre": "Salvador",
		"apellido": "Mccutcheon",
		"telefono": "+46-6127-204-547",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-01-12"
	},
	{
		"correo": "stephen81@gmail.com",
		"nombre": "Logan",
		"apellido": "Shephard",
		"telefono": "+260-7866-099-069",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-04-13"
	},
	{
		"correo": "wynona264@gmail.com",
		"nombre": "Brett",
		"apellido": "Mccune",
		"telefono": "+967-3056-303-506",
		"sexo": "femenino",
		"fecha_nacimiento": "2021-10-27"
	},
	{
		"correo": "valorie29@lie.com",
		"nombre": "Kizzie",
		"apellido": "Cochran",
		"telefono": "+353-8324-731-446",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-01-10"
	},
	{
		"correo": "marie9@like.com",
		"nombre": "Bradly",
		"apellido": "Douglas",
		"telefono": "+62-7548-497-531",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-05-30"
	},
	{
		"correo": "fay50@gmail.com",
		"nombre": "Karlyn",
		"apellido": "Carrera",
		"telefono": "+36-3384-836-790",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-06-27"
	},
	{
		"correo": "martha.doll@gmail.com",
		"nombre": "Frederica",
		"apellido": "Akers",
		"telefono": "+595-1414-274-754",
		"sexo": "femenino",
		"fecha_nacimiento": "2014-12-19"
	},
	{
		"correo": "yesenia51537@gmail.com",
		"nombre": "Johanna",
		"apellido": "Callahan",
		"telefono": "+852-4047-355-513",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-12-29"
	},
	{
		"correo": "latanya.sauls51@demographic.com",
		"nombre": "Venessa",
		"apellido": "Whitehurst",
		"telefono": "+598-6425-588-706",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-02-02"
	},
	{
		"correo": "marilyn41718@yahoo.com",
		"nombre": "Moses",
		"apellido": "Hartnett",
		"telefono": "+37-4763-914-958",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-06-13"
	},
	{
		"correo": "vera5788@yahoo.com",
		"nombre": "Starla",
		"apellido": "Cary",
		"telefono": "+504-6597-924-604",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-08-09"
	},
	{
		"correo": "margherita.dougherty@rugby.toya.hokkaido.jp",
		"nombre": "Priscila",
		"apellido": "Burke-Dutton",
		"telefono": "+45-7712-008-300",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-06-11"
	},
	{
		"correo": "thurman_west@shortly.com",
		"nombre": "Tiffani",
		"apellido": "Proctor",
		"telefono": "+973-0989-453-547",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-12-30"
	},
	{
		"correo": "cindy.warren@yahoo.com",
		"nombre": "Grant",
		"apellido": "Lane",
		"telefono": "+350-2283-522-067",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-06-08"
	},
	{
		"correo": "miriam-denham3@hotmail.com",
		"nombre": "Edmundo",
		"apellido": "Schweitzer",
		"telefono": "+33-0038-071-838",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-07-03"
	},
	{
		"correo": "walton-dominquez6938@gmail.com",
		"nombre": "Simona",
		"apellido": "Bowler",
		"telefono": "+505-9260-719-745",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-08-08"
	},
	{
		"correo": "ellan_horvath45@arbitrary.foz.br",
		"nombre": "Kimber",
		"apellido": "Gilmore-Bruton",
		"telefono": "+264-4880-816-135",
		"sexo": "femenino",
		"fecha_nacimiento": "2015-10-16"
	},
	{
		"correo": "loriannschilling@pd.com",
		"nombre": "Bennett",
		"apellido": "Colley",
		"telefono": "+358-3936-288-340",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-09-25"
	},
	{
		"correo": "kieshataber2@gb.com",
		"nombre": "Wanetta",
		"apellido": "Heath",
		"telefono": "+593-5274-990-081",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-02-07"
	},
	{
		"correo": "cynthia.crowell@hotmail.com",
		"nombre": "Kristal",
		"apellido": "Sharkey",
		"telefono": "+41-7981-225-401",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-09-14"
	},
	{
		"correo": "eleanore1@gmail.com",
		"nombre": "Fae",
		"apellido": "Hendrix",
		"telefono": "+352-1803-184-554",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-08-29"
	},
	{
		"correo": "robin_scoggins66@branch.football",
		"nombre": "Lonnie",
		"apellido": "Holmes",
		"telefono": "+54-7298-287-404",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-07-27"
	},
	{
		"correo": "nohemi-clanton-oakley@adjacent.com",
		"nombre": "Armand",
		"apellido": "Trevino",
		"telefono": "+596-9715-745-363",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-10-04"
	},
	{
		"correo": "hopehannah15780@gmail.com",
		"nombre": "Luella",
		"apellido": "Zimmerman",
		"telefono": "+81-3821-782-494",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-04-11"
	},
	{
		"correo": "karrenpitt30337@sequences.com",
		"nombre": "Rod",
		"apellido": "Roque",
		"telefono": "+44-5867-373-801",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-10-29"
	},
	{
		"correo": "calandra-clanton656@sigma.com",
		"nombre": "Gabriel",
		"apellido": "Hawes",
		"telefono": "+65-7624-191-513",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-01-20"
	},
	{
		"correo": "caryl1030@obtained.com",
		"nombre": "Lorie",
		"apellido": "Bryan",
		"telefono": "+212-4360-434-598",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-10-13"
	},
	{
		"correo": "bari_gregory163@yahoo.com",
		"nombre": "Samatha",
		"apellido": "Mattson",
		"telefono": "+91-6094-229-737",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-04-10"
	},
	{
		"correo": "imogene-carmona9106@alerts.com",
		"nombre": "Kimberli",
		"apellido": "Wisniewski",
		"telefono": "+62-5897-573-836",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-03-28"
	},
	{
		"correo": "tawana0079@deny.com",
		"nombre": "Ronda",
		"apellido": "Bowser",
		"telefono": "+268-9487-630-403",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-01-16"
	},
	{
		"correo": "janee.cottle0026@hotmail.com",
		"nombre": "Grace",
		"apellido": "Kovach",
		"telefono": "+218-3614-713-526",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-09-08"
	},
	{
		"correo": "margotsargent981@numbers.com",
		"nombre": "Soo",
		"apellido": "Tolley",
		"telefono": "+689-7793-386-297",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-11-19"
	},
	{
		"correo": "britni-deloach-gladden694@somewhat.com",
		"nombre": "Hyun",
		"apellido": "Humes",
		"telefono": "+266-4609-623-215",
		"sexo": "femenino",
		"fecha_nacimiento": "2018-07-28"
	},
	{
		"correo": "anton.trevino@mills.com",
		"nombre": "Nathan",
		"apellido": "Krieger",
		"telefono": "+41-9447-198-759",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-05-16"
	},
	{
		"correo": "luvenia-noonan@gmail.com",
		"nombre": "Kyung",
		"apellido": "Janssen",
		"telefono": "+41-2369-343-060",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-11-24"
	},
	{
		"correo": "nestor4185@yahoo.com",
		"nombre": "Jere",
		"apellido": "Newton",
		"telefono": "+350-5038-177-349",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-11-24"
	},
	{
		"correo": "chancenew@yahoo.com",
		"nombre": "Josephine",
		"apellido": "Piper",
		"telefono": "+34-0612-854-068",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-02-29"
	},
	{
		"correo": "eldora-cote@diesel.com",
		"nombre": "Lauran",
		"apellido": "Apple",
		"telefono": "+90-6768-692-510",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-01-21"
	},
	{
		"correo": "farrah4@yahoo.com",
		"nombre": "Kacey",
		"apellido": "England",
		"telefono": "+350-9181-619-057",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-01-22"
	},
	{
		"correo": "kayla281@protest.com",
		"nombre": "Pam",
		"apellido": "Fanning",
		"telefono": "+965-5859-902-721",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-05-17"
	},
	{
		"correo": "earlean.wagoner1@yahoo.com",
		"nombre": "Tressie",
		"apellido": "Rivers",
		"telefono": "+98-0533-400-604",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-04-19"
	},
	{
		"correo": "irene-bean@closely.com",
		"nombre": "Junita",
		"apellido": "Mckinley",
		"telefono": "+675-9825-501-401",
		"sexo": "masculino",
		"fecha_nacimiento": "2015-01-24"
	},
	{
		"correo": "ocie-merchant61983@gmail.com",
		"nombre": "Charmaine",
		"apellido": "Parish",
		"telefono": "+91-8652-227-373",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-06-14"
	},
	{
		"correo": "patsy.christmas@yahoo.com",
		"nombre": "Alayna",
		"apellido": "Gallant",
		"telefono": "+502-0183-719-569",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-09-28"
	},
	{
		"correo": "logan9@yahoo.com",
		"nombre": "Herminia",
		"apellido": "Daigle",
		"telefono": "+81-3794-584-735",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-11-27"
	},
	{
		"correo": "manie-neuman-roach21@relatives.com",
		"nombre": "Beau",
		"apellido": "Jorgenson",
		"telefono": "+36-5227-343-666",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-02-21"
	},
	{
		"correo": "merlinbritton@amongst.com",
		"nombre": "Shellie",
		"apellido": "Gregory",
		"telefono": "+234-2747-224-730",
		"sexo": "femenino",
		"fecha_nacimiento": "2016-09-13"
	},
	{
		"correo": "santina_horst824@exercises.coal.museum",
		"nombre": "Jane",
		"apellido": "Lawton",
		"telefono": "+91-9126-948-104",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-10-08"
	},
	{
		"correo": "dennawhitson@gmail.com",
		"nombre": "Keith",
		"apellido": "Saucier",
		"telefono": "+263-3373-718-511",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-07-19"
	},
	{
		"correo": "evangelina_jeter2@yahoo.com",
		"nombre": "Selena",
		"apellido": "Amaya",
		"telefono": "+32-0990-532-021",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-03-07"
	},
	{
		"correo": "kenna-tuck24@carolina.com",
		"nombre": "Raisa",
		"apellido": "Knight",
		"telefono": "+39-7113-610-940",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-08-29"
	},
	{
		"correo": "jeanetta66301@supervision.com",
		"nombre": "Terrie",
		"apellido": "Sherrod",
		"telefono": "+599-3397-141-689",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-07-13"
	},
	{
		"correo": "raleigh.nestor@roy.com",
		"nombre": "Brynn",
		"apellido": "Gass",
		"telefono": "+505-3360-030-105",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-01-17"
	},
	{
		"correo": "ingrid.hartnett@hotmail.com",
		"nombre": "Cherlyn",
		"apellido": "Loper",
		"telefono": "+599-9828-810-763",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-03-06"
	},
	{
		"correo": "dorene42@proprietary.com",
		"nombre": "Opal",
		"apellido": "Herndon",
		"telefono": "+255-0539-862-817",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-06-28"
	},
	{
		"correo": "epifania-moody713@yahoo.com",
		"nombre": "Zenaida",
		"apellido": "Alonso",
		"telefono": "+256-4533-004-343",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-01-17"
	},
	{
		"correo": "stacey_decker46436@subsequently.com",
		"nombre": "Nolan",
		"apellido": "Mclemore",
		"telefono": "+964-6413-950-340",
		"sexo": "femenino",
		"fecha_nacimiento": "2016-02-14"
	},
	{
		"correo": "fannie.fisk3@jul.com",
		"nombre": "Armando",
		"apellido": "Trout",
		"telefono": "+231-8621-053-012",
		"sexo": "masculino",
		"fecha_nacimiento": "2015-04-21"
	},
	{
		"correo": "phuongortega@yahoo.com",
		"nombre": "Katherin",
		"apellido": "Reddy",
		"telefono": "+675-3796-882-185",
		"sexo": "masculino",
		"fecha_nacimiento": "2015-10-02"
	},
	{
		"correo": "kaitlin.vallejo@gmail.com",
		"nombre": "Natacha",
		"apellido": "Segura",
		"telefono": "+673-6606-870-887",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-12-23"
	},
	{
		"correo": "argentina.sorrell7@gmail.com",
		"nombre": "Joelle",
		"apellido": "Heller",
		"telefono": "+58-7433-266-078",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-07-03"
	},
	{
		"correo": "rosaria-majors@contributions.com",
		"nombre": "Charlesetta",
		"apellido": "Marvin",
		"telefono": "+971-2957-995-442",
		"sexo": "femenino",
		"fecha_nacimiento": "2021-11-03"
	},
	{
		"correo": "enid0067@queensland.com",
		"nombre": "Deana",
		"apellido": "Ernst",
		"telefono": "+55-9179-482-566",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-12-07"
	},
	{
		"correo": "toshiko6@micro.com",
		"nombre": "Estell",
		"apellido": "Dunaway",
		"telefono": "+82-2174-374-831",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-09-16"
	},
	{
		"correo": "roseanne013@iraq.limanowa.pl",
		"nombre": "Elmo",
		"apellido": "Mclaurin",
		"telefono": "+966-2882-293-251",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-08-19"
	},
	{
		"correo": "keravan2@injuries.amica",
		"nombre": "Delinda",
		"apellido": "Mcvay",
		"telefono": "+213-2184-206-936",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-02-10"
	},
	{
		"correo": "lovella6427@geology.com",
		"nombre": "Gricelda",
		"apellido": "Miller",
		"telefono": "+509-1702-495-693",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-01-10"
	},
	{
		"correo": "nelly-ison6716@flat.hirono.fukushima.jp",
		"nombre": "Tyree",
		"apellido": "Stephen",
		"telefono": "+241-8519-998-750",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-04-12"
	},
	{
		"correo": "carlie558@gmail.com",
		"nombre": "Maryjane",
		"apellido": "Fry",
		"telefono": "+351-8849-526-755",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-10-29"
	},
	{
		"correo": "colette_gallegos796@marketing.parma.it",
		"nombre": "Cedric",
		"apellido": "Christ",
		"telefono": "+231-7790-493-529",
		"sexo": "masculino",
		"fecha_nacimiento": "2015-07-24"
	},
	{
		"correo": "linette-stowers41@meter.zhytomyr.ua",
		"nombre": "Farrah",
		"apellido": "Langford",
		"telefono": "+263-5690-543-348",
		"sexo": "masculino",
		"fecha_nacimiento": "2015-07-07"
	},
	{
		"correo": "daysi28987@gmail.com",
		"nombre": "Aurora",
		"apellido": "Santos",
		"telefono": "+34-3217-157-936",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-02-27"
	},
	{
		"correo": "shielamanns07@hotmail.com",
		"nombre": "Suk",
		"apellido": "Arndt-Hatfield",
		"telefono": "+592-2991-782-493",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-05-04"
	},
	{
		"correo": "lanette447@yahoo.com",
		"nombre": "Meg",
		"apellido": "Lord",
		"telefono": "+42-6469-382-991",
		"sexo": "femenino",
		"fecha_nacimiento": "2020-10-18"
	},
	{
		"correo": "kiley-sherwood5636@yahoo.com",
		"nombre": "Cody",
		"apellido": "Teal",
		"telefono": "+264-8891-357-711",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-03-06"
	},
	{
		"correo": "jeanninedang01153@yahoo.com",
		"nombre": "Marilu",
		"apellido": "Poland",
		"telefono": "+504-1728-248-025",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-03-12"
	},
	{
		"correo": "giselle9@beverage.com",
		"nombre": "Nickolas",
		"apellido": "Zhang",
		"telefono": "+37-2445-456-842",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-01-26"
	},
	{
		"correo": "anissa.oconnor@purse.com",
		"nombre": "Tamica",
		"apellido": "Spann",
		"telefono": "+357-9300-859-917",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-12-03"
	},
	{
		"correo": "kenneth034@vienna.com",
		"nombre": "Denita",
		"apellido": "Lowe",
		"telefono": "+968-5167-981-039",
		"sexo": "femenino",
		"fecha_nacimiento": "2015-06-10"
	},
	{
		"correo": "heidy00233@gmail.com",
		"nombre": "Terrie",
		"apellido": "Grooms",
		"telefono": "+593-7768-022-025",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-06-16"
	},
	{
		"correo": "chase2865@hotmail.com",
		"nombre": "Hanna",
		"apellido": "Loera",
		"telefono": "+358-3439-110-182",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-11-21"
	},
	{
		"correo": "zula9103@gmail.com",
		"nombre": "Trudie",
		"apellido": "Chamberlin",
		"telefono": "+42-8326-301-935",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-07-11"
	},
	{
		"correo": "chiekohughes472@yahoo.com",
		"nombre": "Marybelle",
		"apellido": "Maples",
		"telefono": "+256-0988-226-644",
		"sexo": "masculino",
		"fecha_nacimiento": "2022-08-09"
	},
	{
		"correo": "rozella100@yahoo.com",
		"nombre": "Leonel",
		"apellido": "Mayer",
		"telefono": "+39-5466-767-121",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-01-26"
	},
	{
		"correo": "alonzo_grimes@hotmail.com",
		"nombre": "Kirby",
		"apellido": "Mathias",
		"telefono": "+225-8555-215-864",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-12-08"
	},
	{
		"correo": "brittny-manson14@gmail.com",
		"nombre": "Tyrell",
		"apellido": "Hines",
		"telefono": "+54-3790-459-738",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-02-26"
	},
	{
		"correo": "eilene7803@hotmail.com",
		"nombre": "Maricruz",
		"apellido": "Haskins",
		"telefono": "+598-6649-247-942",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-10-26"
	},
	{
		"correo": "evelianorris@hotmail.com",
		"nombre": "Richie",
		"apellido": "Stein",
		"telefono": "+43-5276-758-496",
		"sexo": "femenino",
		"fecha_nacimiento": "2020-12-17"
	},
	{
		"correo": "suzie_selby8190@recognized.com",
		"nombre": "Lourdes",
		"apellido": "Banda",
		"telefono": "+49-2206-339-685",
		"sexo": "masculino",
		"fecha_nacimiento": "2018-06-13"
	},
	{
		"correo": "lourie-beeson@yahoo.com",
		"nombre": "Kathern",
		"apellido": "Smyth",
		"telefono": "+504-8636-389-639",
		"sexo": "masculino",
		"fecha_nacimiento": "2017-12-19"
	},
	{
		"correo": "maritamuncy@ou.com",
		"nombre": "Ryann",
		"apellido": "Brown",
		"telefono": "+965-2248-791-498",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-07-04"
	},
	{
		"correo": "goldie.lowry7732@cuisine.com",
		"nombre": "Adrienne",
		"apellido": "Lang",
		"telefono": "+593-7789-151-096",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-09-19"
	},
	{
		"correo": "alishia053@gmail.com",
		"nombre": "Deloise",
		"apellido": "Cain",
		"telefono": "+508-8154-266-947",
		"sexo": "masculino",
		"fecha_nacimiento": "2016-09-15"
	},
	{
		"correo": "edyth082@brief.com",
		"nombre": "Tama",
		"apellido": "Stowers",
		"telefono": "+45-6347-131-017",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-09-22"
	},
	{
		"correo": "kelsey.newsom@gmail.com",
		"nombre": "Laci",
		"apellido": "Clark",
		"telefono": "+33-7195-795-023",
		"sexo": "masculino",
		"fecha_nacimiento": "2021-08-13"
	},
	{
		"correo": "launa_adamson-scherer@classifieds.com",
		"nombre": "Isidro",
		"apellido": "Wilde-Medeiros",
		"telefono": "+231-2006-331-857",
		"sexo": "masculino",
		"fecha_nacimiento": "2014-07-29"
	},
	{
		"correo": "domenicabrady@gmail.com",
		"nombre": "Antonietta",
		"apellido": "Rainey",
		"telefono": "+503-6692-006-332",
		"sexo": "masculino",
		"fecha_nacimiento": "2020-01-29"
	},
	{
		"correo": "marietta73@yahoo.com",
		"nombre": "Eleanore",
		"apellido": "Hampton",
		"telefono": "+684-8557-749-590",
		"sexo": "masculino",
		"fecha_nacimiento": "2019-04-13"
	},
	{
		"correo": "denita1672@banner.com",
		"nombre": "Mellie",
		"apellido": "Addison",
		"telefono": "+508-0361-941-428",
		"sexo": "femenino",
		"fecha_nacimiento": "2021-01-21"
	}
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Persona', personas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Persona', null, {});
  }
};
