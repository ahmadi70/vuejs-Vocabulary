const app = new Vue({
	el: "#app",
	data:{
		vocabulary: [
		{word: "well-being", meaning: "سلامتی - صحت", others: ["health", "vigor", "fitness", "soundness", "strength"]},
		{word: "blow out", meaning: "خاموش کردن (آتش)", others: ["extinguish", "put out", "quench"]},
		{word: "dwindle", meaning: "کاهش یافتن", others: ["decrease", "decline", "diminish", "drop", "fade", "lessen"]},
		{word: "vary", meaning: "فرق داشتن", others: ["differ", "diverge", "fluctuate"]},
		{word: "stab", meaning: "سوراخ کردن", others: ["pierce", "penetrate", "perforate"]},
		{word: "outweigh", meaning: "متمایز بودن", others: ["stand out", "excel", "surpass", "previal over"]},
		{word: "health", meaning: "سلامتی - صحت", others: ["well-being", "vigor", "fitness", "soundness", "strength"]},
		{word: "realize", meaning: "پی بردن به", others: ["recognize", "understand", "perceive", "figure out", "fathom"]},
		{word: "argument", meaning: "جروبحث - مناقشه", others: ["debate", "disagreement", "dispute", "controversy"]},
		{word: "insert", meaning: "در خود جا دادن", others: ["embed", "fix", "implant", "entrench", "root"]},
		{word: "vigor", meaning: "سلامتی - صحت", others: ["health", "well-being", "fitness", "soundness", "strength"]},
		{word: "change", meaning: "تحول کردن", others: ["evolve", "grow", "advance", "expand", "mature"]},
		{word: "advocate", meaning: "طرفداری کردن", others: ["support", "sponsor", "underwrite", "espouse"]},
		{word: "quench", meaning: "خاموش کردن (آتش)", others: ["blow out", "put out", "extinguish"]},
		{word: "soundness", meaning: "سلامتی - صحت", others: ["health", "well-being", "vigor", "fitness", "strength"]},
		{word: "perforate", meaning: "سوراخ کردن", others: ["pierce", "penetrate", "stab"]},
		{word: "underwrite", meaning: "طرفداری کردن", others: ["support", "sponsor", "espouse", "advocate"]},
		{word: "figure out", meaning: "پی بردن به", others: ["understand", "realize", "recognize", "perceive", "fathom"]},
		{word: "impair", meaning: "آسیب زدن", others: ["damage", "harm", "hurt", "injure", "weaken", "ruin"]},
		{word: "controversy", meaning: "جروبحث - مناقشه", others: ["debate", "argument", "disagreement", "dispute"]},
		{word: "drop", meaning: "کاهش یافتن", others: ["decrease", "decline", "diminish", "dwindle", "fade", "lessen"]},
		{word: "damage", meaning: "آسیب زدن", others: ["harm", "hurt", "injure", "weaken", "ruin", "impair"]},
		{word: "strength", meaning: "سلامتی - صحت", others: ["health", "well-being", "vigor", "fitness", "soundness"]},
		{word: "understand", meaning: "پی بردن به", others: ["realize", "recognize", "perceive", "figure out", "fathom"]},
		{word: "weaken", meaning: "آسیب زدن", others: ["damage", "harm", "hurt", "injure", "ruin", "impair"]},
		{word: "devour", meaning: "خوردن (بسرعت) ", others: ["eat", "swallow", "gobble", "consume"]},
		{word: "perceive", meaning: "پی بردن به", others: ["understand", "realize", "recognize", "figure out", "fathom"]},
		{word: "courteous", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultivated", "cultured", "civil", "well-bred", "urbane"]},
		{word: "support", meaning: "طرفداری کردن", others: ["sponsor", "espouse", "advocate", "underwrite"]},
		{word: "implant", meaning: "در خود جا دادن", others: ["embed", "fix", "insert", "entrench", "root"]},
		{word: "evolve", meaning: "تحول کردن", others: ["change", "grow", "advance", "expand", "mature"]},
		{word: "weaken", meaning: "بدترکردن", others: ["worsen", "wane", "depreciate", "deteriorate"]},
		{word: "espouse", meaning: "طرفداری کردن", others: ["support", "sponsor", "underwrite", "advocate"]},
		{word: "civil", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultivated", "cultured", "courteous", "well-bred", "urbane"]},
		{word: "embed", meaning: "در خود جا دادن", others: ["insert", "fix", "implant", "entrench", "root"]},
		{word: "advance", meaning: "تحول کردن", others: ["change", "grow", "evolve", "expand", "mature"]},
		{word: "cultured", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultivated", "civil", "courteous", "well-bred", "urbane"]},
		{word: "put out", meaning: "خاموش کردن (آتش)", others: ["blow out", "quench", "extinguish"]},
		{word: "fathom", meaning: "پی بردن به", others: ["understand", "realize", "recognize", "figure out", "perceive"]},
		{word: "well-bred", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultivated", "civil", "courteous", "cultured", "urbane"]},
		{word: "remarkably", meaning: "خیلی زیاد", others: ["very", "incredibly", "extremely", "enormously", "tremendously", "exceedingly", "exceptionally"]},
		{word: "wane", meaning: "بدترکردن", others: ["worsen", "weaken", "depreciate", "deteriorate"]},
		{word: "effect", meaning: "تاثیر - گمان - تشخیص", others: ["impression", "impact", "influence", "feeling", "belief"]},
		{word: "cultivated", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultured", "civil", "courteous", "well-bred", "urbane"]},
		{word: "gobble", meaning: "خوردن (بسرعت) ", others: ["eat", "swallow", "devour", "consume"]},
		{word: "sponser", meaning: "طرفداری کردن", others: ["support", "espouse", "underwrite", "advocate"]},
		{word: "impression", meaning: "تاثیر - گمان - تشخیص", others: ["effect", "impact", "influence", "feeling", "belief"]},
		{word: "pierce", meaning: "سوراخ کردن", others: ["perforate", "penetrate", "stab"]},
		{word: "worsen", meaning: "بدترکردن", others: ["wane", "weaken", "depreciate", "deteriorate"]},
		{word: "recognize", meaning: "پی بردن به", others: ["understand", "realize", "fathom", "figure out", "perceive"]},
		{word: "urbane", meaning: "باملاحظه - باادب", others: ["polite", "respectful", "deferential", "cultured", "civil", "courteous", "well-bred", "cultivated"]},
		{word: "penetrate", meaning: "سوراخ کردن", others: ["perforate", "pierce", "stab"]},
		{word: "extinguish", meaning: "خاموش کردن (آتش)", others: ["blow out", "quench", "put out"]},
		{word: "differ", meaning: "فرق داشتن", others: ["vary", "diverge", "fluctuate"]},
		{word: "realm", meaning: "عرصه - ساحه - منطقه", others: ["domain", "area", "country", "kingdom", "sphere"]},
		{word: "expand", meaning: "تحول کردن", others: ["change", "grow", "evolve", "advance", "mature"]},
		{word: "eat", meaning: "خوردن (بسرعت) ", others: ["gobble", "swallow", "devour", "consume"]},
		{word: "polite", meaning: "باملاحظه - باادب", others: ["urbane", "respectful", "deferential", "cultured", "civil", "courteous", "well-bred", "cultivated"]},
		{word: "domain", meaning: "عرصه - ساحه - منطقه", others: ["realm", "area", "country", "kingdom", "sphere"]},
		{word: "surpass", meaning: "متمایز بودن", others: ["stand out", "excel", "outweigh", "previal over"]},
		{word: "root", meaning: "در خود جا دادن", others: ["insert", "fix", "implant", "entrench", "embed"]},
		{word: "resist", meaning: "تاکید کردن - مقاومت کردن", others: ["persist", "insist", "persevere"]},
		{word: "depreciate", meaning: "بدترکردن", others: ["wane", "weaken", "worsen", "deteriorate"]},
		{word: "area", meaning: "عرصه - ساحه - منطقه", others: ["domain", "realm", "country", "kingdom", "sphere"]},
		{word: "deteriorate", meaning: "بدترکردن", others: ["wane", "weaken", "worsen", "depreciate"]},
		{word: "unproductive", meaning: "غیرحاصل خیز", others: ["barren", "arid", "infertile", "not arable", "sterile"]},
		{word: "award", meaning: "جایزه", others: ["gift", "prize", "grant", "trophy"]},
		{word: "abrupt", meaning: "ناگهانی", others: ["sudden", "unexpected", "quick", "sharp"]},
		{word: "deferential", meaning: "باملاحظه - باادب", others: ["polite", "urbane", "respectful", "cultured", "civil", "courteous", "well-bred", "cultivated"]},
		{word: "kingdom", meaning: "عرصه - ساحه - منطقه", others: ["domain", "realm", "country", "area", "sphere"]},
		{word: "grant", meaning: "جایزه", others: ["gift", "prize", "award", "trophy"]},
		{word: "consume", meaning: "خوردن (بسرعت) ", others: ["gobble", "swallow", "devour", "eat"]},
		{word: "barren", meaning: "غیرحاصل خیز", others: ["unproductive", "arid", "infertile", "not arable", "sterile"]},
		{word: "impact", meaning: "تاثیر - گمان - تشخیص", others: ["effect", "impression", "influence", "feeling", "belief"]},
		{word: "respectful", meaning: "باملاحظه - باادب", others: ["polite", "urbane", "deferential", "cultured", "civil", "courteous", "well-bred", "cultivated"]},
		{word: "sudden", meaning: "ناگهانی", others: ["abrupt", "unexpected", "quick", "sharp"]},
		{word: "boost", meaning: "تقویت کردن", others: ["Augment", "strengthen", "improve", "enhance", "reinforce"]},
		{word: "swallow", meaning: "خوردن (بسرعت) ", others: ["eath", "devour", "gobble", "consume"]},
		{word: "prevail over", meaning: "متمایز بودن", others: ["stand out", "excel", "outweigh", "surpass"]},
		{word: "sharp", meaning: "ناگهانی", others: ["abrupt", "unexpected", "quick", "sudden"]},
		{word: "diverge", meaning: "فرق داشتن", others: ["vary", "differ", "fluctuate"]},
		{word: "decline", meaning: "کاهش یافتن", others: ["decrease", "drop", "diminish", "dwindle", "fade", "lessen"]},
		{word: "attention", meaning: "تبلیغات", others: ["publicity", "advertisement", "advertising"]},
		{word: "incursion", meaning: "سیل - یورش", others: ["influx", "migration", "invasion", "outpour", "exodus"]},
		{word: "influence", meaning: "تاثیر - گمان - تشخیص", others: ["effect", "impression", "impact", "feeling", "belief"]},
		{word: "trophy", meaning: "جایزه", others: ["gift", "prize", "award", "grant"]},
		{word: "sterile", meaning: "غیرحاصل خیز", others: ["unproductive", "arid", "infertile", "not arable", "barren"]},
		{word: "decrease", meaning: "کاهش یافتن", others: ["decline", "drop", "diminish", "dwindle", "fade", "lessen"]},
		{word: "enormously", meaning: "خیلی زیاد", others: ["very", "incredibly", "extremely", "remarkably", "tremendously", "exceedingly", "exceptionally"]},
		{word: "debate", meaning: "جروبحث - مناقشه", others: ["controversy", "argument", "disagreement", "dispute"]},
		{word: "augment", meaning: "تقویت کردن", others: ["boost", "strengthen", "improve", "enhance", "reinforce"]},
		{word: "diminish", meaning: "کاهش یافتن", others: ["decrease", "drop", "decline", "dwindle", "fade", "lessen"]},
		{word: "exceedingly", meaning: "خیلی زیاد", others: ["very", "incredibly", "extremely", "remarkably", "tremendously", "enormously", "exceptionally"]},
		{word: "persevere", meaning: "تاکید کردن - مقاومت کردن", others: ["persist", "insist", "resist"]},
		{word: "lessen", meaning: "کاهش یافتن", others: ["decrease", "drop", "decline", "dwindle", "fade", "diminish"]},
		{word: "exodus", meaning: "سیل - یورش", others: ["influx", "migration", "invasion", "outpour", "incursion"]},
		{word: "fluctuate", meaning: "فرق داشتن", others: ["vary", "differ", "diverge"]},
		{word: "excel", meaning: "متمایز بودن", others: ["stand out", "prevail over", "outweigh", "surpass"]},
		{word: "publicity", meaning: "تبلیغات", others: ["attention", "advertisement", "advertising"]},
		{word: "feeling", meaning: "تاثیر - گمان - تشخیص", others: ["effect", "impression", "impact", "influence", "belief"]},
		{word: "strengthen", meaning: "تقویت کردن", others: ["boost", "augment", "improve", "enhance", "reinforce"]},
		{word: "tremendously", meaning: "خیلی زیاد", others: ["very", "incredibly", "extremely", "remarkably", "exceedingly", "enormously", "exceptionally"]},
		{word: "advertisement", meaning: "تبلیغات", others: ["attention", "publicity", "advertising"]},
		{word: "influx", meaning: "سیل - یورش", others: ["exodus", "migration", "invasion", "outpour", "incursion"]},
		{word: "fade", meaning: "کاهش یافتن", others: ["decrease", "drop", "decline", "dwindle", "lessen", "diminish"]},
		{word: "harm", meaning: "آسیب زدن", others: ["damage", "weaken", "hurt", "injure", "ruin", "impair"]},
		{word: "country", meaning: "عرصه - ساحه - منطقه", others: ["domain", "realm", "kingdom", "area", "sphere"]},
		{word: "prize", meaning: "جایزه", others: ["gift", "grant", "award", "trophy"]},
		{word: "migration", meaning: "سیل - یورش", others: ["exodus", "influx", "invasion", "outpour", "incursion"]},
		{word: "improve", meaning: "تقویت کردن", others: ["boost", "augment", "strengthen", "enhance", "reinforce"]},
		{word: "advertising", meaning: "تبلیغات", others: ["attention", "publicity", "advertisement"]},
		{word: "invasion", meaning: "سیل - یورش", others: ["exodus", "influx", "migration", "outpour", "incursion"]},
		{word: "incredibly", meaning: "خیلی زیاد", others: ["very", "tremendously", "extremely", "remarkably", "exceedingly", "enormously", "exceptionally"]},
		{word: "enhance", meaning: "تقویت کردن", others: ["boost", "augment", "strengthen", "improve", "reinforce"]},
		{word: "belief", meaning: "تاثیر - گمان - تشخیص", others: ["effect", "impression", "impact", "influence", "feeling"]},
		{word: "dispute", meaning: "جروبحث - مناقشه", others: ["controversy", "argument", "disagreement", "debate"]},
		{word: "very", meaning: "خیلی زیاد", others: ["tremendously", "incredibly", "extremely", "remarkably", "exceedingly", "enormously", "exceptionally"]},
		{word: "arid", meaning: "غیرحاصل خیز", others: ["unproductive", "sterile", "infertile", "not arable", "barren"]},
		{word: "reinforce", meaning: "تقویت کردن", others: ["boost", "augment", "strengthen", "improve", "enhance"]},
		{word: "exceptionally", meaning: "خیلی زیاد", others: ["very", "incredibly", "extremely", "remarkably", "exceedingly", "enormously", "tremendously"]},
		{word: "injure", meaning: "آسیب زدن", others: ["damage", "weaken", "hurt", "harm", "ruin", "impair"]},
		{word: "persist", meaning: "تاکید کردن - مقاومت کردن", others: ["persevere", "insist", "resist"]},
		{word: "stand out", meaning: "متمایز بودن", others: ["excel", "prevail over", "outweigh", "surpass"]},
		{word: "outpour", meaning: "سیل - یورش", others: ["exodus", "influx", "migration", "invasion", "incursion"]},
		{word: "fix", meaning: "در خود جا دادن", others: ["insert", "root", "implant", "entrench", "embed"]},
		{word: "quick", meaning: "ناگهانی", others: ["abrupt", "unexpected", "sharp", "sudden"]},
		{word: "infertile", meaning: "غیرحاصل خیز", others: ["unproductive", "arid", "sterile", "not arable", "barren"]},
		{word: "sphere", meaning: "عرصه - ساحه - منطقه", others: ["domain", "realm", "kingdom", "area", "country"]},
		{word: "extremely", meaning: "خیلی زیاد", others: ["very", "incredibly", "tremendously", "remarkably", "exceedingly", "enormously", "exceptionally"]},
		{word: "unexpected", meaning: "ناگهانی", others: ["abrupt", "sharp", "quick", "sudden"]},
		{word: "hurt", meaning: "آسیب زدن", others: ["damage", "weaken", "injure", "harm", "ruin", "impair"]},
		{word: "entrench", meaning: "در خود جا دادن", others: ["insert", "fix", "implant", "root", "embed"]},
		{word: "disagreement", meaning: "جروبحث - مناقشه", others: ["controversy", "argument", "dispute", "debate"]},
		{word: "gift", meaning: "جایزه", others: ["prize", "grant", "award", "trophy"]},
		{word: "mature", meaning: "تحول کردن", others: ["change", "grow", "evolve", "advance", "expand"]},
		{word: "insist", meaning: "تاکید کردن - مقاومت کردن", others: ["persevere", "persist", "resist"]},
		{word: "ruin", meaning: "آسیب زدن", others: ["damage", "weaken", "hurt", "harm", "injure", "impair"]},
		{word: "not arable", meaning: "غیرحاصل خیز", others: ["unproductive", "arid", "infertile", "sterile", "barren"]},
		{word: "grow", meaning: "تحول کردن", others: ["change", "expand", "evolve", "advance", "mature"]},
		{word: "fitness", meaning: "سلامتی - صحت", others: ["well-being", "vigor", "health", "soundness", "strength"]}
		],
		number: 1,
		index: 0,
		show: false
	},
	methods:{
		next(){
			
			if(this.number==this.vocabulary.length && this.show){
				return this.index = 0, this.number=1, this.show = !this.show
			}
			if(this.show){
				return this.index+=1, this.number+=1, this.show = !this.show
			}
			return this.show = !this.show;
		},
		back(){
			if(this.index==0){
				return this.index = 0, this.number=1
			}
			return this.index-=1, this.number-=1, this.show = true
		},
		agian(){
			return this.index = 0, this.number=1, this.show = false 
		}
	},
	computed: {
		word(){
			return this.vocabulary[this.index].word
		},
		meaning(){
			return this.vocabulary[this.index].meaning
		},
    others(){
			return this.vocabulary[this.index].others
		},
		nextBtn(){
			if(this.number == this.vocabulary.length){
				return "Again"
			}
			return "Next"
		},
		total(){
			return this.vocabulary.length
		}
	}
})