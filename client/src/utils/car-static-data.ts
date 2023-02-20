const carBrands = [
	{
		name: "Ford",
		logo: "/brand-icons/ford.svg",
	},
	{
		name: "Chevrolet",
		logo: "/brand-icons/chevrolet.svg",
	},
	{
		name: "Toyota",
		logo: "/brand-icons/toyota.svg",
	},
	{
		name: "Honda",
		logo: "/brand-icons/honda.svg",
	},
	{
		name: "Nissan",
		logo: "/brand-icons/nissan.svg",
	},
	{
		name: "BMW",
		logo: "/brand-icons/bmw.svg",
	},
	{
		name: "Mercedes-Benz",
		logo: "/brand-icons/mercedes-benz.svg",
	},
	{
		name: "Audi",
		logo: "/brand-icons/audi.svg",
	},
	{
		name: "Volkswagen",
		logo: "/brand-icons/volkswagen.svg",
	},
	{
		name: "Porsche",
		logo: "/brand-icons/porsche.svg",
	},
];

const cars = [
	{
		_id: "6d486287-6216-423c-9fc8-03a3e78eba99",
		image: [
			"https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5658cc682daad077cb99f68btesla-model-x-conf-1.jpeg?quality=70&strip=all",
			"https://s2.glbimg.com/bxKk4V6MtlKk2v6jFV3fNXjUScc=/0x0:1400x788/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/r/f/MBpzOoQiGqFDA1AeL0yw/tesla-model-x-plaid-3.jpg",
			"https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5658cd5252657372a13b25a6tesla-model-x-1.jpeg?quality=70&strip=info&w=620&resize=1200,800",
		],
		brand: "Tesla, Inc.",
		price: "1.475.000",
		model: "Model X",
		year: 2022,
		description:
			"Com a maior potência e aceleração mais rápida de qualquer SUV, o Model X Plaid é o SUV de maior desempenho já construído. A arquitetura atualizada da bateria permite que as configurações Long Range e Plaid completem corridas consecutivas sem degradação do desempenho. Converse com um consultor da Tesla para saber mais sobre o Model X ou agende uma demonstração hoje mesmo.",
		owner: {
			avatar:
				"https://64.media.tumblr.com/a6a1c4ad5376aa28e92937f0420adf69/tumblr_o6x4lvTr8w1rpwm80o1_250.png",
			name: "Lenir Sales de Carvalho Guimarães",
			email: "lenir_sales@email.com",
			phone: "(83) 2644-6597",
		},
		brandIcon:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png",
		speed: "250 km/h",
	},

	{
		_id: "14f4b7d2-035c-49c7-9b95-e8ea3f6b434e",
		image: [
			"https://quatrorodas.abril.com.br/wp-content/uploads/2022/12/https___www.carscoops.com_wp-content_uploads_2022_09_2024-Ford-Mustang-00005-1024x689-1-e1671450320612.jpg?quality=70&strip=info&w=931&h=622&crop=1",
			"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/09/ford-mustang-2023-2814415.jpg",
			"https://carros2023.com.br/wp-content/uploads/2022/05/5-3.jpg",
		],
		brand: "Ford",
		price: "232.233+",
		model: "Mustang",
		year: 2023,
		description: "nem sei mano, ...",
		owner: {
			avatar:
				"https://64.media.tumblr.com/ab1fe1b7243cb064083a05db7b654514/1085a667c20c96cc-c7/s250x400/1f195ab66fb99039dbfada2841c064f12e39e90f.png",
			name: "Monique Vieira Junior Arlia",
			email: "monique.624-b@email.com",
			phone: "(46) 98925-9923",
		},
		brandIcon: "https://img.icons8.com/color/12x/ford.png",
		speed: "250 km/h",
	},
	{
		_id: "6c8bb083-e65d-4e47-ad27-c9c9aaea512e",
		image: [
			"https://i.ytimg.com/vi/Ik7opnzG-1Q/maxresdefault.jpg",
			"https://mundofixa.com/wp-content/uploads/2019/07/urus.jpg",
			"https://i.pinimg.com/originals/e8/85/97/e8859759d9785ac8cc1a7f9eab8f739d.jpg",
		],
		brand: "lamborghini",
		price: "1.190",
		model: "Lamborghini Urus",
		year: 2023,
		description:
			"O Lamborghini Urus 2023 não é apenas um SUV exótico com um distintivo de supercarro, é um supercarro com uma carcaça de SUV. Isso não é apenas evidente por seu V-8 biturbo de 4,0 litros que produz 657 cavalos de potência, mas também por seu desempenho impressionante em pistas de corrida famosas - caso em questão, o novo modelo Performante que quebrou o recorde de Pikes Peak SUV. Mais leve e veloz, é essa variante recém-introduzida que reforça o compromisso da Lamborghini em garantir que o Urus corresponda ao pedigree exótico da marca. Nas raras ocasiões em que exibe sua carroceria elaborada ou supera quase tudo na estrada, este Lambo de alta velocidade é a única coisa no showroom que pode puxar um trailer e transportar mais de duas pessoas - provavelmente muito ricas. Embora seu preço de um quarto de milhão de dólares o coloque fora do alcance da maioria de nós, meros mortais, e seu interior não seja tão especial quanto deveria ser por uma quantia tão grande, atualmente não há outro SUV como o Urus 2023.",
		owner: {
			avatar:
				"https://64.media.tumblr.com/62845597feac472606c05241d2aa9598/b19de0e4974ef21d-87/s250x400/715bd2fe36a6229892727c537708b5573d04d9df.png",
			name: "gabd.",
			email: "gabd@email.com",
			phone: "(11) 9999-9999 ",
		},
		brandIcon:
			"https://cdn.iconscout.com/icon/free/png-256/lamborghini-282390.png",
		speed: "305 km/h",
	},
];

export {carBrands, cars};
