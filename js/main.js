var zodiacs = [

	{
		zodiacName: 'aquarius',
		image: 'images/aquarius.png',
		description: '<span>Strengths:</span> Progressive, original, independent, hunaitarian.<br><span>Weaknesses:</span> Runs from emotional expression, temperamental, uncompromising, aloof.<br><span>Aquarius Likes:</span> Fun with friends, helping others, fighting for causes, intellectual conversation, a good listenr.<br><span>Aquarius dislikes:</span> Limitations, broken promises, beling lonely, dull or boring situations, people who disagree with them.'
	},
	
	{
		zodiacName: 'cancer',
		image: 'images/cancer.png',
		description:'<span>Strengths:</span> Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive.<br><span>Weaknesses:</span> Moody, pessimistic, suspicious, manipulative, insecure.<br><span>Cancer Likes:</span> Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends.<br><span>Cancer Dislikes:</span> Strangers, any criticism of mom, revealing of personal life.'
	},
	
	{
		zodiacName: 'leo',
		image: 'images/leo.png',
		description:'<span>Strengths:</span> Creative, passionate, generous, warm-hearted, cheerful, humorous.<br><span>Weaknesses:</span> Arrogant, stubborn, self-centered, lazy, inflexible.<br><span>Leo Likes:</span>Theater, taking holidays, being admired, expensive things, bright colors, fun with friends.<br><span>Leo Dislikes:</span>Being ignored, facing difficult reality, not being treated like a king or queen. '
	},

	{
		zodiacName: 'virgo',
	    image:'images/virgo.png',
	    description: '<span>Strengths:</span> Loyal, analytical, kind, hardworking, practical.<br><span>Weaknesses:</span> Shyness, worry, overly critical of self and others, all work and no play.<br><span>Virgo Likes:</span> Animals, healthy food, books, nature, cleanliness.<br><span>Virgo Dislikes:</span> Rudeness, asking for help, taking center stage.'
	},

	{
		zodiacName: 'scorpio',
		image:'images/scorpio.png',
		description:'<span>Strengths:</span> Resourceful, brave, passionate, stubborn, a true friend. <br><span>Weaknesses:</span> Distrusting, jealous, secretive, violent<br><span>Scorpio likes:</span> Truth, facts, being right, longtime friends, teasing, a grand passion<br><span>Scorpio dislikes:</span> Dishonesty, revealing, passive people.'
	},

	{
		zodiacName: 'pisces',
		image:'image/pisces/png',
		description: '<span>Strengths:</span> Compassionate, artistic, intuitive, gentle, wise, musical. <br><span>Weaknesses:</span> Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr. <br><span>Pisces Likes:</span> Being alone, sleeping, music, romance, visual media, swimming, spiritual themes.<br><span>Pisces dislikes:</span> Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind.'
	},

	{
		zodiacName: 'gemini',
		image:'images/gemini.png',
		description:'<span>Strengths:</span> Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.<br><span>Weaknesses:</span> Nervous, incosistent, indecisive.<br><span>Gemini Likes:</span> Music, books, magazines, chats with nearly anyone, short trips around the town.<br><span>Gemini dislikes:</span> Being alone, being confined, repetition and routine.'
	},

	{
		zodiacName:'capricorn',
		image:'images/capricorn.png',
		description: '<span>Strengths:</span> Responsible, disciplined, self-control, good managers.<br><span>Weaknesses:</span> Know-it-all, unforgiving, condescending, expecting the worst.<br><span>Capricorn Likes:</span> Family, tradition, music, understated status, quality craftsmanship<br><span>Capricorn Dislikes:</span> Almost everything at some point'
	},

	{
		zodiacName: 'aries',
		image:'images/aries.png',
		description: '<span>Strengths:</span> Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.<br><span>Weaknesses:</span> Impatient, moody, short-tempered, impulsive, aggressive. <br><span>Aries Likes:</span> Comfortable clothes, taking on leadership roles, physical challenges, individual sports.<br><span>Aries dislikes:</span> Inactivity, delays, work that does not use ones talents'
	},

	{
		zodiacName:'sagattarius',
		image:'images/sagattarius.png',
		description:'<span>Strengths:</span> Generous, idealistic, great sense of humor<br><span>Weaknesses:</span> Promises more than can deliver, very impatient, will say anything no matter how undiplomatic.<br><span>Sagittarius likes:</span> Freedom, travel, philosophy, being outdoors.<br><span>Sagittarius dislikes:</span> Clingy people, being constrained, off-the-wall thearies, details'
	},

	{
		zodiacName:'taurus',
		image:'images/taurus.png',
		description:'<span>Strengths:</span> Reliable, patient, practical, devoted, responsible, stable. <br></span>Weaknesses:</span>Stubborn, possessive, uncompromising.<br><span>Taurus likes:</span> Gradening, cooking, music, romance, high quality clothes, working with hands.<br><span>Taurus dislikes:</span> Sudden changes, complications, insecurities of any kind, synthetic fabris'
	},

	{
		zodiacName:'libra',
		image:'images/libra.png',
		description:'<span>Strengths:</span> Cooperative, diplomatic, gracious, fair-minded, social.<br><span>Weaknesses:</span> Indecisive, avoids confrontations, will carry a grudge, self-pity.<br><span>Libra likes:</span> Harmony, gentleness, sharing with others, the outdoors.<br><span>Libra dislikes:</span> Violence, injustice, loudmouths, conformity.'
	}
]


function getInput() {

	var userInput = document.getElementById('zodiacInput').value.toLowerCase();

	var h1 = document.getElementById('hiddenzodiac')
	var img = document.getElementById('hiddenimg')
	var p = document.getElementById('hiddendescription')


	for( i = 0; i < zodiacs.length; i++ ){
		if(userInput == zodiacs[i].zodiacName){
			h1.innerHTML = zodiacs[i].zodiacName;
			img.src = zodiacs[i].image;
			p.innerHTML = zodiacs[i].description;
			return
	}
}

}//getinput()funtion


//i want to make my page scroll down 
