const words = [
    { en: "host", ru: "принимать", def: "be responsible for running an event", def_ru: "отвечать за проведение мероприятия" },
    { en: "commission", ru: "поручать", def: "send or officially charge someone or some group to do something", def_ru: "направлять или официально поручать кому-то выполнение чего-то" },
    { en: "turnover", ru: "оборот", def: "the amount of money taken as sales transacted in a given period", def_ru: "сумма денег, полученная от продаж за определенный период" },
    { en: "monopoly", ru: "монополия", def: "an exclusive control over the trade or production of a commodity or service through exclusive possession", def_ru: "исключительный контроль над торговлей или производством товара или услуги через исключительное владение" },
    { en: "bid", ru: "ставка", def: "an attempt, effort, or pursuit (of a goal)", def_ru: "попытка, усилие или стремление (к цели)" },
    { en: "branch out", ru: "расширяться", def: "to expand", def_ru: "расширяться" },
    { en: "sustainable", ru: "устойчивый", def: "able to meet the current demand for a resource without depleting the future supply", def_ru: "способный удовлетворять текущий спрос на ресурс без истощения будущих запасов" },
    { en: "boycott", ru: "бойкот", def: "a refusal to buy or use goods and services", def_ru: "отказ от покупки или использования товаров и услуг" },
    { en: "undercut", ru: "демпинговать", def: "sell (something) at a lower price, or to work for lower wages, than a competitor", def_ru: "продавать (что-то) по более низкой цене или работать за меньшую зарплату, чем конкурент" },
    { en: "value", ru: "оценивать", def: "to estimate the monetary worth of something", def_ru: "оценивать денежную стоимость чего-либо" },
    { en: "outrageous", ru: "возмутительный", def: "shocking", def_ru: "шокирующий" },
    { en: "get an edge over sb", ru: "получить преимущество", def: "gain an advantage", def_ru: "получить преимущество" },
    { en: "collaborative", ru: "сотрудничающий", def: "cooperative; working together", def_ru: "кооперативный; работающий вместе" },
    { en: "estimate", ru: "оценка", def: "an approximation of a number based on reasonable assumptions", def_ru: "приблизительная оценка числа, основанная на разумных предположениях" },
    { en: "boost", ru: "увеличивать", def: "increase", def_ru: "увеличивать" },
    { en: "profile", ru: "профиль", def: "an outline of an object when viewed from one side", def_ru: "очертание объекта при взгляде сбоку" },
    { en: "board", ru: "совет директоров", def: "a group of people who manage the business of an organization", def_ru: "группа людей, управляющая бизнесом организации" },
    { en: "transformation", ru: "преобразование", def: "a marked change", def_ru: "значительное изменение" },
    { en: "catalyst", ru: "катализатор", def: "someone or something that encourages progress or change", def_ru: "кто-то или что-то, что способствует прогрессу или изменению" },
    { en: "grant", ru: "грант", def: "a sum of money or other payment given for a particular purpose", def_ru: "сумма денег или другой платеж, предоставленный для конкретной цели" },
    { en: "prestigious", ru: "престижный", def: "having a highly favorable reputation, of high standing, commanding respect", def_ru: "имеющий благоприятную репутацию, занимающий высокое положение, вызывающий уважение" },
    { en: "corruption", ru: "коррупция", def: "dishonest or illegal actions", def_ru: "нечестные или незаконные действия" },
    { en: "fast-paced", ru: "быстро развивающийся", def: "happening very quickly", def_ru: "происходящий очень быстро" },
    { en: "moving", ru: "трогательный", def: "causing strong feelings of sadness or sympathy", def_ru: "вызывающий сильные чувства печали или сочувствия" },
    { en: "out of tune", ru: "не в тон", def: "not singing the correct notes", def_ru: "поющий неверные ноты" },
    { en: "mediocre", ru: "посредственный", def: "average, ordinary, undistinguished", def_ru: "средний, заурядный, непримечательный" },
    { en: "disappointment", ru: "разочарование", def: "the feeling that comes when one's hopes are not met", def_ru: "чувство, возникающее, когда надежды не оправдываются" },
    { en: "cabaret", ru: "кабаре", def: "entertainment held in a nightclub or restaurant while the audience eats or drinks at tables", def_ru: "развлечение в ночном клубе или ресторане, пока зрители едят или пьют за столиками" },
    { en: "gig", ru: "концерт", def: "a performance of pop or rock music", def_ru: "выступление с поп- или рок-музыкой" },
    { en: "tie the knot", ru: "пожениться", def: "to get married", def_ru: "вступить в брак" },
    { en: "falling-out", ru: "ссора или разногласие", def: "quarrel or disagreement", def_ru: "ссора или разногласие" },
    { en: "make a go", ru: "попытаться сделать что-то успешным", def: "try to make something succeed", def_ru: "попытаться сделать что-то успешным" },
    { en: "trial separation", ru: "пробное раздельное проживание (для принятия решения о разводе)", def: "a couple lives apart for a period of time in order to decide whether or not to separate permanently", def_ru: "период раздельного проживания пары, чтобы решить, разводиться ли окончательно" },
    { en: "golden anniversary", ru: "золотая годовщина (50 лет брака)", def: "the day when people celebrate 50 years of marriage", def_ru: "день празднования 50-летия брака" },
    { en: "come to terms", ru: "прийти к соглашению, договориться", def: "to reach an agreement; make an arrangement", def_ru: "достичь соглашения; прийти к договоренности" },
    { en: "inherit", ru: "унаследовать", def: "to receive something from someone after that person's death", def_ru: "получить что-то в наследство после смерти другого человека" },
    { en: "fly the nest", ru: "покинуть родительский дом, начать жить самостоятельно", def: "leave home to live independently", def_ru: "покинуть дом, чтобы жить самостоятельно" },
    { en: "get-together", ru: "неформальная встреча или собрание", def: "an informal meeting or social occasion", def_ru: "неофициальная встреча или социальное мероприятие" },
    { en: "premature", ru: "преждевременный", def: "too early; happening or arriving before the proper time", def_ru: "слишком ранний; произошедший или наступивший раньше положенного времени" },
];

let showDefinition = false;
let showRussian = false;

function toggleLanguage() {
    showRussian = !showRussian;
    renderCards();
}

function renderCards() {
    document.querySelectorAll('.card').forEach(e => e.remove());
    words.forEach((word) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = showDefinition ? (showRussian ? word.def_ru : word.def) : (showRussian ? word.ru : word.en);
        card.onclick = () => {
            showDefinition = !showDefinition;
            renderCards();
        };
        document.querySelector('.container').appendChild(card);
    });
}

renderCards();
