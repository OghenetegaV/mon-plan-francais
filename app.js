/* ============ Mon Plan Français — 90-day NCLC 9 planner (bilingual FR/EN) ============ */

var TOTAL_DAYS = 90;

/* ---------------- bilingual content pools (index-aligned) ---------------- */
var VOCAB_TOPICS = {
  fr: ["la société","l'emploi","l'éducation","l'environnement","la technologie","la santé","le gouvernement","l'économie","l'immigration","le logement","les transports","la famille","la culture","la criminalité","la justice","l'égalité","le travail","les sciences"],
  en: ["society","employment","education","environment","technology","health","government","economy","immigration","housing","transportation","family","culture","crime","justice","equality","work","science"]
};

var SPEAKING_PROMPTS = {
  fr: [
    "Les inégalités sociales augmentent-elles dans votre pays ?",
    "Le télétravail est-il bénéfique pour les employés ?",
    "Faut-il interdire les téléphones portables dans les écoles ?",
    "Les gouvernements en font-ils assez pour lutter contre le changement climatique ?",
    "L'intelligence artificielle va-t-elle remplacer les emplois humains ?",
    "Le système de santé public devrait-il être gratuit pour tous ?",
    "Le gouvernement devrait-il investir davantage dans les transports publics ?",
    "La mondialisation profite-t-elle réellement à tous les pays ?",
    "L'immigration est-elle une richesse pour un pays ?",
    "Le logement abordable devrait-il être un droit fondamental ?",
    "Faut-il interdire les voitures individuelles dans les centres-villes ?",
    "La structure familiale traditionnelle évolue-t-elle trop rapidement ?",
    "La mondialisation menace-t-elle les cultures locales ?",
    "Les peines de prison réduisent-elles réellement la criminalité ?",
    "L'accès à la justice est-il égal pour tous les citoyens ?",
    "L'égalité des sexes est-elle atteinte dans le monde du travail ?",
    "Faut-il réduire la semaine de travail à quatre jours ?",
    "La science devrait-elle avoir des limites éthiques ?"
  ],
  en: [
    "Are social inequalities increasing in your country?",
    "Is remote work beneficial for employees?",
    "Should phones be banned in schools?",
    "Are governments doing enough to fight climate change?",
    "Will artificial intelligence replace human jobs?",
    "Should public healthcare be free for everyone?",
    "Should the government invest more in public transportation?",
    "Does globalization really benefit every country?",
    "Is immigration an asset for a country?",
    "Should affordable housing be a fundamental right?",
    "Should private cars be banned from city centers?",
    "Is the traditional family structure changing too fast?",
    "Does globalization threaten local cultures?",
    "Do prison sentences really reduce crime?",
    "Is access to justice equal for all citizens?",
    "Has gender equality been achieved in the workplace?",
    "Should the work week be reduced to four days?",
    "Should science have ethical limits?"
  ]
};

/* ---------------- flashcard decks (fr term / en meaning / fr example) ---------------- */
/* deck index i (0-17) pairs with VOCAB_TOPICS[lang][i]; "connectors" is a standalone deck */
var FLASHCARD_DECKS = [
  { key:"topic0", cards:[
    {fr:"la société", en:"society", pron:"lah soh-syay-TAY", ex:"La société évolue rapidement avec les nouvelles technologies.", exEn:"Society is evolving quickly with new technologies."},
    {fr:"un citoyen", en:"a citizen", pron:"uhn see-twah-YEHN", ex:"Chaque citoyen a des droits et des devoirs.", exEn:"Every citizen has rights and responsibilities."},
    {fr:"l'inégalité", en:"inequality", pron:"lee-nay-gah-lee-TAY", ex:"Les inégalités sociales restent un défi majeur.", exEn:"Social inequalities remain a major challenge."},
    {fr:"la solidarité", en:"solidarity", pron:"lah soh-lee-dah-ree-TAY", ex:"La solidarité entre générations est essentielle.", exEn:"Solidarity between generations is essential."},
    {fr:"un enjeu", en:"a stake / an issue", pron:"uhn nahn-ZHUH", ex:"C'est un enjeu de société important.", exEn:"It's an important societal issue."},
    {fr:"la cohésion sociale", en:"social cohesion", pron:"lah koh-ay-zyohn soh-SYAHL", ex:"La cohésion sociale renforce la stabilité du pays.", exEn:"Social cohesion strengthens the country's stability."}
  ]},
  { key:"topic1", cards:[
    {fr:"un emploi", en:"a job", pron:"uhn nahn-PLWAH", ex:"Trouver un emploi stable n'est pas toujours facile.", exEn:"Finding a stable job isn't always easy."},
    {fr:"le chômage", en:"unemployment", pron:"luh shoh-MAHZH", ex:"Le taux de chômage a baissé cette année.", exEn:"The unemployment rate has dropped this year."},
    {fr:"un employeur", en:"an employer", pron:"uhn nahn-plwah-YUHR", ex:"L'employeur doit respecter le droit du travail.", exEn:"The employer must respect labor law."},
    {fr:"une candidature", en:"a job application", pron:"ewn kahn-dee-dah-TEWR", ex:"J'ai envoyé ma candidature la semaine dernière.", exEn:"I sent my application last week."},
    {fr:"le télétravail", en:"remote work", pron:"luh tay-lay-trah-VAHY", ex:"Le télétravail s'est généralisé depuis la pandémie.", exEn:"Remote work has become widespread since the pandemic."},
    {fr:"la formation professionnelle", en:"professional training", pron:"lah for-mah-syohn pro-feh-syo-NEHL", ex:"La formation professionnelle améliore l'employabilité.", exEn:"Professional training improves employability."}
  ]},
  { key:"topic2", cards:[
    {fr:"l'éducation", en:"education", pron:"lay-dew-kah-SYOHN", ex:"L'éducation est la clé du développement.", exEn:"Education is the key to development."},
    {fr:"un établissement scolaire", en:"a school institution", pron:"uhn nay-tah-blees-mahn skoh-LEHR", ex:"Cet établissement scolaire accueille 500 élèves.", exEn:"This school has 500 students."},
    {fr:"le décrochage scolaire", en:"dropping out of school", pron:"luh day-kroh-shahzh skoh-LEHR", ex:"Le décrochage scolaire inquiète les enseignants.", exEn:"School dropout worries teachers."},
    {fr:"une bourse d'études", en:"a scholarship", pron:"ewn boors day-TEWD", ex:"Elle a obtenu une bourse d'études à l'étranger.", exEn:"She got a scholarship to study abroad."},
    {fr:"l'apprentissage", en:"learning / apprenticeship", pron:"lah-prahn-tee-SAHZH", ex:"L'apprentissage des langues demande de la pratique.", exEn:"Learning languages requires practice."},
    {fr:"un diplôme", en:"a diploma", pron:"uhn dee-PLOHM", ex:"Il a obtenu son diplôme avec mention.", exEn:"He got his diploma with honors."}
  ]},
  { key:"topic3", cards:[
    {fr:"le réchauffement climatique", en:"global warming", pron:"luh ray-shohf-mahn klee-mah-TEEK", ex:"Le réchauffement climatique menace les écosystèmes.", exEn:"Global warming threatens ecosystems."},
    {fr:"une énergie renouvelable", en:"a renewable energy", pron:"ewn ay-nehr-zhee ruh-noo-vuh-LAHBL", ex:"Le pays investit dans les énergies renouvelables.", exEn:"The country is investing in renewable energy."},
    {fr:"la pollution", en:"pollution", pron:"lah poh-lew-SYOHN", ex:"La pollution de l'air affecte la santé publique.", exEn:"Air pollution affects public health."},
    {fr:"le développement durable", en:"sustainable development", pron:"luh day-vlohp-mahn dew-RAHBL", ex:"Le développement durable concilie économie et écologie.", exEn:"Sustainable development reconciles economy and ecology."},
    {fr:"une empreinte carbone", en:"a carbon footprint", pron:"ewn nahn-prant kar-BOHN", ex:"Réduire son empreinte carbone est devenu une priorité.", exEn:"Reducing your carbon footprint has become a priority."},
    {fr:"la biodiversité", en:"biodiversity", pron:"lah byoh-dee-vehr-see-TAY", ex:"La biodiversité décline à un rythme alarmant.", exEn:"Biodiversity is declining at an alarming rate."}
  ]},
  { key:"topic4", cards:[
    {fr:"l'intelligence artificielle", en:"artificial intelligence", pron:"lan-teh-lee-zhahns ar-tee-fee-SYEHL", ex:"L'intelligence artificielle transforme le monde du travail.", exEn:"Artificial intelligence is transforming the world of work."},
    {fr:"un algorithme", en:"an algorithm", pron:"uhn nal-goh-REETM", ex:"Cet algorithme analyse des millions de données.", exEn:"This algorithm analyzes millions of data points."},
    {fr:"la vie privée", en:"privacy", pron:"lah vee pree-VAY", ex:"La technologie soulève des questions de vie privée.", exEn:"Technology raises privacy concerns."},
    {fr:"une innovation", en:"an innovation", pron:"ewn nee-noh-vah-SYOHN", ex:"Cette innovation a révolutionné le secteur.", exEn:"This innovation revolutionized the sector."},
    {fr:"le numérique", en:"digital (technology)", pron:"luh new-may-REEK", ex:"La transition numérique s'accélère.", exEn:"The digital transition is accelerating."},
    {fr:"une donnée", en:"a piece of data", pron:"ewn doh-NAY", ex:"Les données personnelles doivent être protégées.", exEn:"Personal data must be protected."}
  ]},
  { key:"topic5", cards:[
    {fr:"le système de santé", en:"the healthcare system", pron:"luh sees-tehm duh sahn-TAY", ex:"Le système de santé public est sous pression.", exEn:"The public healthcare system is under pressure."},
    {fr:"un patient", en:"a patient", pron:"uhn pah-SYAHN", ex:"Le patient a été bien pris en charge.", exEn:"The patient was well taken care of."},
    {fr:"la prévention", en:"prevention", pron:"lah pray-vahn-SYOHN", ex:"La prévention reste la meilleure arme contre la maladie.", exEn:"Prevention remains the best weapon against illness."},
    {fr:"un traitement", en:"a treatment", pron:"uhn treht-MAHN", ex:"Ce traitement a montré de bons résultats.", exEn:"This treatment showed good results."},
    {fr:"l'accès aux soins", en:"access to care", pron:"lak-seh oh SWAN", ex:"L'accès aux soins reste inégal selon les régions.", exEn:"Access to care remains unequal across regions."},
    {fr:"le bien-être", en:"well-being", pron:"luh byahn-NEHTR", ex:"Le bien-être au travail est de plus en plus valorisé.", exEn:"Well-being at work is increasingly valued."}
  ]},
  { key:"topic6", cards:[
    {fr:"le gouvernement", en:"the government", pron:"luh goo-vehr-nuh-MAHN", ex:"Le gouvernement a annoncé de nouvelles mesures.", exEn:"The government announced new measures."},
    {fr:"une politique publique", en:"a public policy", pron:"ewn poh-lee-teek pew-BLEEK", ex:"Cette politique publique vise à réduire la pauvreté.", exEn:"This public policy aims to reduce poverty."},
    {fr:"un élu", en:"an elected official", pron:"uhn nay-LEW", ex:"Les élus locaux gèrent le budget municipal.", exEn:"Local elected officials manage the municipal budget."},
    {fr:"une réforme", en:"a reform", pron:"ewn ray-FORM", ex:"La réforme des retraites a suscité des débats.", exEn:"The pension reform sparked debates."},
    {fr:"le pouvoir", en:"power / authority", pron:"luh poo-VWAHR", ex:"La séparation des pouvoirs garantit la démocratie.", exEn:"The separation of powers guarantees democracy."},
    {fr:"un décret", en:"a decree", pron:"uhn day-KREH", ex:"Le décret entre en vigueur le mois prochain.", exEn:"The decree takes effect next month."}
  ]},
  { key:"topic7", cards:[
    {fr:"la croissance économique", en:"economic growth", pron:"lah krwah-sahns ay-koh-noh-MEEK", ex:"La croissance économique a ralenti cette année.", exEn:"Economic growth slowed down this year."},
    {fr:"l'inflation", en:"inflation", pron:"lan-flah-SYOHN", ex:"L'inflation pèse sur le pouvoir d'achat.", exEn:"Inflation weighs on purchasing power."},
    {fr:"un marché", en:"a market", pron:"uhn mar-SHAY", ex:"Le marché du travail reste tendu.", exEn:"The job market remains tight."},
    {fr:"une entreprise", en:"a company", pron:"ewn nahn-truh-PREEZ", ex:"Cette entreprise emploie 200 personnes.", exEn:"This company employs 200 people."},
    {fr:"la mondialisation", en:"globalization", pron:"lah mohn-dyah-lee-zah-SYOHN", ex:"La mondialisation a transformé les échanges commerciaux.", exEn:"Globalization has transformed trade."},
    {fr:"le pouvoir d'achat", en:"purchasing power", pron:"luh poo-vwahr dah-SHAH", ex:"Le pouvoir d'achat des ménages a diminué.", exEn:"Households' purchasing power has decreased."}
  ]},
  { key:"topic8", cards:[
    {fr:"un immigrant", en:"an immigrant", pron:"uhn nee-mee-GRAHN", ex:"Les immigrants contribuent à l'économie locale.", exEn:"Immigrants contribute to the local economy."},
    {fr:"l'intégration", en:"integration", pron:"lan-tay-grah-SYOHN", ex:"L'intégration passe souvent par la langue.", exEn:"Integration often happens through language."},
    {fr:"un réfugié", en:"a refugee", pron:"uhn ray-few-ZHYAY", ex:"Le pays a accueilli des milliers de réfugiés.", exEn:"The country welcomed thousands of refugees."},
    {fr:"un titre de séjour", en:"a residence permit", pron:"uhn TEETR duh say-ZHOOR", ex:"Il attend son titre de séjour depuis six mois.", exEn:"He's been waiting for his residence permit for six months."},
    {fr:"la diversité culturelle", en:"cultural diversity", pron:"lah dee-vehr-see-tay kewl-tew-REHL", ex:"La diversité culturelle enrichit la société.", exEn:"Cultural diversity enriches society."},
    {fr:"l'accueil", en:"reception / welcoming", pron:"lah-KUHY", ex:"L'accueil des nouveaux arrivants est essentiel.", exEn:"Welcoming newcomers is essential."}
  ]},
  { key:"topic9", cards:[
    {fr:"le logement", en:"housing", pron:"luh lohzh-MAHN", ex:"Le logement abordable manque dans les grandes villes.", exEn:"Affordable housing is lacking in big cities."},
    {fr:"un loyer", en:"rent", pron:"uhn lwah-YAY", ex:"Les loyers ont fortement augmenté cette année.", exEn:"Rents have gone up a lot this year."},
    {fr:"un locataire", en:"a tenant", pron:"uhn loh-kah-TEHR", ex:"Le locataire doit respecter le contrat de bail.", exEn:"The tenant must respect the lease agreement."},
    {fr:"un propriétaire", en:"a landlord / owner", pron:"uhn proh-pree-ay-TEHR", ex:"Le propriétaire est responsable des réparations.", exEn:"The landlord is responsible for repairs."},
    {fr:"la crise du logement", en:"the housing crisis", pron:"lah kreez dew lohzh-MAHN", ex:"La crise du logement touche surtout les jeunes.", exEn:"The housing crisis mostly affects young people."},
    {fr:"un quartier", en:"a neighborhood", pron:"uhn kar-TYAY", ex:"Ce quartier est en pleine rénovation.", exEn:"This neighborhood is being fully renovated."}
  ]},
  { key:"topic10", cards:[
    {fr:"les transports en commun", en:"public transportation", pron:"leh trahns-por ahn koh-MUHN", ex:"Les transports en commun réduisent la pollution.", exEn:"Public transportation reduces pollution."},
    {fr:"un embouteillage", en:"a traffic jam", pron:"uhn nahn-boo-teh-YAHZH", ex:"Les embouteillages coûtent du temps et de l'argent.", exEn:"Traffic jams cost time and money."},
    {fr:"une infrastructure", en:"an infrastructure", pron:"ewn an-frah-strewk-TEWR", ex:"Le pays investit dans ses infrastructures routières.", exEn:"The country is investing in its road infrastructure."},
    {fr:"la mobilité durable", en:"sustainable mobility", pron:"lah moh-bee-lee-tay dew-RAHBL", ex:"La mobilité durable devient une priorité urbaine.", exEn:"Sustainable mobility is becoming an urban priority."},
    {fr:"un trajet", en:"a trip / commute", pron:"uhn trah-ZHEH", ex:"Son trajet domicile-travail dure une heure.", exEn:"Their commute takes one hour."},
    {fr:"une voie ferrée", en:"a railway", pron:"ewn vwah feh-RAY", ex:"La voie ferrée relie les deux grandes villes.", exEn:"The railway connects the two major cities."}
  ]},
  { key:"topic11", cards:[
    {fr:"la structure familiale", en:"family structure", pron:"lah strewk-tewr fah-mee-LYAHL", ex:"La structure familiale a beaucoup évolué.", exEn:"Family structure has changed a lot."},
    {fr:"un parent", en:"a parent / relative", pron:"uhn pah-RAHN", ex:"Les parents jouent un rôle clé dans l'éducation.", exEn:"Parents play a key role in education."},
    {fr:"la garde d'enfants", en:"childcare", pron:"lah gahrd dahn-FAHN", ex:"La garde d'enfants reste coûteuse pour les familles.", exEn:"Childcare remains expensive for families."},
    {fr:"le congé parental", en:"parental leave", pron:"luh kohn-zhay pah-rahn-TAHL", ex:"Le congé parental est mieux partagé aujourd'hui.", exEn:"Parental leave is better shared today."},
    {fr:"un foyer", en:"a household", pron:"uhn fwah-YAY", ex:"Le revenu du foyer détermine l'accès à certaines aides.", exEn:"Household income determines access to certain benefits."},
    {fr:"la génération", en:"generation", pron:"lah zhay-nay-rah-SYOHN", ex:"Chaque génération a ses propres défis.", exEn:"Each generation has its own challenges."}
  ]},
  { key:"topic12", cards:[
    {fr:"le patrimoine culturel", en:"cultural heritage", pron:"luh pah-tree-mwahn kewl-tew-REHL", ex:"Le patrimoine culturel doit être préservé.", exEn:"Cultural heritage must be preserved."},
    {fr:"une œuvre", en:"a (creative) work", pron:"ewn UHVR", ex:"Cette œuvre a marqué l'histoire de l'art.", exEn:"This work marked the history of art."},
    {fr:"la diversité", en:"diversity", pron:"lah dee-vehr-see-TAY", ex:"La diversité culturelle se reflète dans la gastronomie.", exEn:"Cultural diversity is reflected in cuisine."},
    {fr:"un événement culturel", en:"a cultural event", pron:"uhn nay-vayn-mahn kewl-tew-REHL", ex:"La ville organise un grand événement culturel.", exEn:"The city is organizing a big cultural event."},
    {fr:"l'identité", en:"identity", pron:"lee-dahn-tee-TAY", ex:"La langue façonne l'identité d'un peuple.", exEn:"Language shapes a people's identity."},
    {fr:"la mondialisation culturelle", en:"cultural globalization", pron:"lah mohn-dyah-lee-zah-syohn kewl-tew-REHL", ex:"La mondialisation culturelle inquiète certains artistes.", exEn:"Cultural globalization worries some artists."}
  ]},
  { key:"topic13", cards:[
    {fr:"la criminalité", en:"crime (rate)", pron:"lah kree-mee-nah-lee-TAY", ex:"La criminalité a légèrement baissé cette année.", exEn:"The crime rate dropped slightly this year."},
    {fr:"un délit", en:"an offense", pron:"uhn day-LEE", ex:"Ce délit est puni par la loi.", exEn:"This offense is punishable by law."},
    {fr:"la sécurité", en:"security / safety", pron:"lah say-kew-ree-TAY", ex:"La sécurité publique est une priorité du gouvernement.", exEn:"Public safety is a government priority."},
    {fr:"une peine de prison", en:"a prison sentence", pron:"ewn pehn duh pree-ZOHN", ex:"Il a été condamné à une peine de prison.", exEn:"He was sentenced to prison."},
    {fr:"la récidive", en:"reoffending", pron:"lah ray-see-DEEV", ex:"Le taux de récidive reste préoccupant.", exEn:"The reoffending rate remains concerning."},
    {fr:"la prévention de la délinquance", en:"crime prevention", pron:"lah pray-vahn-syohn duh lah day-lan-KAHNS", ex:"La prévention de la délinquance commence tôt.", exEn:"Crime prevention starts early."}
  ]},
  { key:"topic14", cards:[
    {fr:"la justice", en:"justice", pron:"lah zhew-STEES", ex:"L'accès à la justice doit être garanti à tous.", exEn:"Access to justice must be guaranteed to everyone."},
    {fr:"un tribunal", en:"a court", pron:"uhn tree-bew-NAHL", ex:"L'affaire sera jugée devant le tribunal.", exEn:"The case will be tried in court."},
    {fr:"un avocat", en:"a lawyer", pron:"uhn nah-voh-KAH", ex:"L'avocat a plaidé la légitime défense.", exEn:"The lawyer argued self-defense."},
    {fr:"un procès", en:"a trial", pron:"uhn proh-SEH", ex:"Le procès a duré plusieurs semaines.", exEn:"The trial lasted several weeks."},
    {fr:"les droits de l'homme", en:"human rights", pron:"leh drwah duh LOHM", ex:"Les droits de l'homme sont universels.", exEn:"Human rights are universal."},
    {fr:"une loi", en:"a law", pron:"ewn LWAH", ex:"Cette loi entrera en vigueur en janvier.", exEn:"This law will take effect in January."}
  ]},
  { key:"topic15", cards:[
    {fr:"l'égalité des sexes", en:"gender equality", pron:"lay-gah-lee-tay deh SEHKS", ex:"L'égalité des sexes progresse lentement au travail.", exEn:"Gender equality is progressing slowly at work."},
    {fr:"la discrimination", en:"discrimination", pron:"lah dees-kree-mee-nah-SYOHN", ex:"La discrimination à l'embauche reste fréquente.", exEn:"Hiring discrimination remains common."},
    {fr:"l'équité", en:"fairness / equity", pron:"lay-kee-TAY", ex:"L'équité salariale est revendiquée depuis des années.", exEn:"Pay equity has been demanded for years."},
    {fr:"les droits", en:"rights", pron:"leh DRWAH", ex:"Les droits fondamentaux doivent être protégés.", exEn:"Fundamental rights must be protected."},
    {fr:"une minorité", en:"a minority", pron:"ewn mee-noh-ree-TAY", ex:"Les minorités sont souvent sous-représentées.", exEn:"Minorities are often underrepresented."},
    {fr:"la parité", en:"parity", pron:"lah pah-ree-TAY", ex:"La parité est loin d'être atteinte dans certains secteurs.", exEn:"Parity is far from achieved in some sectors."}
  ]},
  { key:"topic16", cards:[
    {fr:"les conditions de travail", en:"working conditions", pron:"leh kohn-dee-syohn duh trah-VAHY", ex:"Les conditions de travail se sont améliorées.", exEn:"Working conditions have improved."},
    {fr:"un salarié", en:"an employee", pron:"uhn sah-lah-RYAY", ex:"Le salarié a droit à des congés payés.", exEn:"The employee is entitled to paid leave."},
    {fr:"la semaine de travail", en:"the work week", pron:"lah suh-mehn duh trah-VAHY", ex:"Certains pays testent la semaine de quatre jours.", exEn:"Some countries are testing the four-day work week."},
    {fr:"l'équilibre vie pro-vie perso", en:"work-life balance", pron:"lay-kee-leebr vee proh vee pehr-SOH", ex:"L'équilibre vie pro-vie perso est un enjeu majeur.", exEn:"Work-life balance is a major issue."},
    {fr:"une négociation", en:"a negotiation", pron:"ewn nay-goh-syah-SYOHN", ex:"La négociation salariale a été difficile.", exEn:"The salary negotiation was difficult."},
    {fr:"le syndicat", en:"the (labor) union", pron:"luh san-dee-KAH", ex:"Le syndicat a organisé une grève.", exEn:"The union organized a strike."}
  ]},
  { key:"topic17", cards:[
    {fr:"une découverte", en:"a discovery", pron:"ewn day-koo-VEHRT", ex:"Cette découverte pourrait changer la médecine.", exEn:"This discovery could change medicine."},
    {fr:"la recherche scientifique", en:"scientific research", pron:"lah ruh-shersh syahn-tee-FEEK", ex:"La recherche scientifique nécessite des financements.", exEn:"Scientific research requires funding."},
    {fr:"une expérience", en:"an experiment", pron:"ewn ehk-spay-RYAHNS", ex:"Les résultats de l'expérience sont concluants.", exEn:"The experiment's results are conclusive."},
    {fr:"l'éthique", en:"ethics", pron:"lay-TEEK", ex:"L'éthique scientifique encadre certaines pratiques.", exEn:"Scientific ethics regulates certain practices."},
    {fr:"un chercheur", en:"a researcher", pron:"uhn shehr-SHUHR", ex:"Le chercheur a publié ses résultats récemment.", exEn:"The researcher recently published his results."},
    {fr:"une avancée technologique", en:"a technological advance", pron:"ewn nah-vahn-say tehk-noh-loh-ZHEEK", ex:"Cette avancée technologique suscite l'espoir.", exEn:"This technological advance inspires hope."}
  ]},
  { key:"connectors", cards:[
    {fr:"puisque", en:"since (cause)", pron:"PWEESK", ex:"Puisque vous êtes d'accord, nous pouvons continuer.", exEn:"Since you agree, we can continue."},
    {fr:"étant donné que", en:"given that", pron:"ay-tahn doh-nay KUH", ex:"Étant donné que le budget est limité, il faut prioriser.", exEn:"Given that the budget is limited, we must prioritize."},
    {fr:"en raison de", en:"due to", pron:"ahn reh-zohn DUH", ex:"Le vol a été annulé en raison du mauvais temps.", exEn:"The flight was canceled due to bad weather."},
    {fr:"grâce à", en:"thanks to", pron:"grahs AH", ex:"Grâce à cette réforme, l'accès aux soins s'est amélioré.", exEn:"Thanks to this reform, access to care has improved."},
    {fr:"par conséquent", en:"consequently", pron:"par kohn-say-KAHN", ex:"Par conséquent, les prix ont augmenté.", exEn:"Consequently, prices have gone up."},
    {fr:"ainsi", en:"thus", pron:"an-SEE", ex:"Ainsi, le projet a pu voir le jour.", exEn:"Thus, the project was able to come to life."},
    {fr:"de ce fait", en:"as a result", pron:"duh suh FEH", ex:"De ce fait, la demande a explosé.", exEn:"As a result, demand has exploded."},
    {fr:"donc", en:"so / therefore", pron:"DOHNK", ex:"Il pleut, donc nous restons à la maison.", exEn:"It's raining, so we're staying home."},
    {fr:"cependant", en:"however", pron:"suh-pahn-DAHN", ex:"Cependant, des progrès restent à faire.", exEn:"However, progress still needs to be made."},
    {fr:"toutefois", en:"nevertheless", pron:"toot-FWAH", ex:"Toutefois, la situation reste fragile.", exEn:"Nevertheless, the situation remains fragile."},
    {fr:"néanmoins", en:"nonetheless", pron:"nay-ahn-MWAN", ex:"Néanmoins, le projet a été un succès.", exEn:"Nonetheless, the project was a success."},
    {fr:"en revanche", en:"on the other hand", pron:"ahn ruh-VAHNSH", ex:"En revanche, les coûts ont augmenté.", exEn:"On the other hand, costs have increased."},
    {fr:"bien que", en:"although", pron:"byan KUH", ex:"Bien que ce soit difficile, elle a réussi.", exEn:"Although it's difficult, she succeeded."},
    {fr:"malgré", en:"despite", pron:"mahl-GRAY", ex:"Malgré les obstacles, il a persévéré.", exEn:"Despite the obstacles, he persevered."},
    {fr:"même si", en:"even if", pron:"mehm SEE", ex:"Même si c'est risqué, il faut essayer.", exEn:"Even if it's risky, you have to try."},
    {fr:"certes… mais…", en:"admittedly… but…", pron:"SEHRT... meh", ex:"Certes, c'est coûteux, mais c'est nécessaire.", exEn:"Admittedly, it's costly, but it's necessary."},
    {fr:"de plus", en:"moreover", pron:"duh PLEWS", ex:"De plus, ce plan réduit les coûts.", exEn:"Moreover, this plan reduces costs."},
    {fr:"en outre", en:"furthermore", pron:"ahn NOOTR", ex:"En outre, le délai a été raccourci.", exEn:"Furthermore, the deadline was shortened."},
    {fr:"par ailleurs", en:"besides", pron:"par ah-YUHR", ex:"Par ailleurs, une aide financière est prévue.", exEn:"Besides, financial aid is planned."},
    {fr:"en somme", en:"in short", pron:"ahn SOHM", ex:"En somme, la réforme a porté ses fruits.", exEn:"In short, the reform paid off."},
    {fr:"en définitive", en:"ultimately", pron:"ahn day-fee-nee-TEEV", ex:"En définitive, le bilan est positif.", exEn:"Ultimately, the outcome is positive."},
    {fr:"pour conclure", en:"to conclude", pron:"poor kohn-KLEWR", ex:"Pour conclure, cette approche mérite d'être développée.", exEn:"To conclude, this approach deserves to be developed."}
  ]}
];
function deckTitle(key, lang){
  if(key==='connectors') return T(lang).connectorsDeckName;
  var idx = parseInt(key.replace('topic',''),10);
  var pool = VOCAB_TOPICS[lang] || VOCAB_TOPICS.fr;
  var name = pool[idx];
  return name.charAt(0).toUpperCase() + name.slice(1);
}
function findDeck(key){
  for(var i=0;i<FLASHCARD_DECKS.length;i++){ if(FLASHCARD_DECKS[i].key===key) return FLASHCARD_DECKS[i]; }
  return null;
}

/* block ids/times/icons are language-neutral; labels come from T(lang).blockLabels */
var BLOCKS_WEEKDAY = [
  {id:"immersion", time:"6:30–7:00",   ic:"🎧"},
  {id:"vocab",     time:"7:00–8:00",   ic:"📝"},
  {id:"grammar",   time:"8:00–9:30",   ic:"📚"},
  {id:"listening", time:"9:30–11:00",  ic:"👂"},
  {id:"reading",   time:"11:00–12:00", ic:"📖"},
  {id:"speaking",  time:"1:00–2:30",   ic:"🗣️"},
  {id:"writing",   time:"2:30–3:30",   ic:"✍️"},
  {id:"examblock", time:"4:00–5:00",   ic:"⏱️"},
  {id:"errorlog",  time:"5:00–6:00",   ic:"🗂️"}
];
var BLOCKS_SUNDAY = [
  {id:"immersion", timeKey:"morning",   ic:"🎧"},
  {id:"review",    timeKey:"midday",    ic:"📚"},
  {id:"practice",  timeKey:"afternoon", ic:"🌸"}
];
var SKILL_CATS = [
  {id:"grammar",   ic:"📚"},
  {id:"vocab",     ic:"📝"},
  {id:"listening", ic:"👂"},
  {id:"reading",   ic:"📖"},
  {id:"speaking",  ic:"🗣️"},
  {id:"writing",   ic:"✍️"}
];

/* ---------------- i18n dictionary ---------------- */
var DICT = {
  fr: {
    locale: "fr-FR",
    heroTitle: "Mon Plan Français 🥐",
    heroSub: "90 jours vers NCLC 9",
    heroTag: "Un programme intensif de 7h/jour vers le TEF/TCF Canada — écoute, lecture, oral, écrit, tous poussés vers le niveau C1.",
    examAria: "Choix de l'examen",
    langAria: "Langue de l'interface",
    startLabel: "Jour 1 :",
    startLockHint: "Modifiable une seule fois — se débloque à nouveau une fois le plan de 90 jours terminé (anti-triche).",
    statToday: "Aujourd'hui",
    statPhase: "Phase actuelle",
    statStreak: "Série en cours",
    statProgress: "Progression totale",
    notStarted: "Pas encore commencé",
    planDone: "Plan terminé ! 🎉",
    dayWord: "Jour",
    dayUnit: "jour",
    reality: "Repère honnête : viser NCLC 9 dans les 4 compétences en partant de zéro en 90 jours est extrêmement ambitieux. C'est jouable avec 6–8h/jour de travail concentré, mais rien ne le garantit — visez donc au-dessus du seuil pendant vos simulations, pas tout juste dessus.",
    phaseNames: {phase1:"Construire les bases", phase2:"Accélération B2", phase3:"Poussée C1", phase4:"Mode Guerre d'Examen"},
    daysWord: "Jours",
    legendLabels: {phase1:"Bases", phase2:"Accélération B2", phase3:"Poussée C1", phase4:"Guerre d'examen"},
    calTitle: "Calendrier des 90 jours",
    calHint: "Cliquez un jour pour voir le programme détaillé",
    weekdays: ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],
    closeAria: "Fermer",
    skillsTitle: "Progression par compétence",
    skillsHint: "Basé sur les blocs cochés jusqu'à aujourd'hui",
    notebookTitle: "Le carnet d'erreurs",
    notebookHint: "Non négociable — chaque faute devient une leçon",
    noteCats: {
      listening: {label:"Erreurs d'écoute", ph:"contractions, liaisons, expressions manquées…"},
      reading:   {label:"Erreurs de lecture", ph:"vocabulaire, inférence, distracteurs…"},
      speaking:  {label:"Erreurs à l'oral", ph:"grammaire, prononciation, hésitations…"},
      writing:   {label:"Erreurs à l'écrit", ph:"connecteurs, accords, structure…"}
    },
    cycle: ["APPRENDRE","COMPRENDRE","PRODUIRE","ÊTRE CORRIGÉ","RÉPÉTER"],
    hours: [["1.5h","écoute"],["1.5h","oral"],["1h","lecture"],["1h","écrit"],["1h","grammaire"],["1h","vocab/prononciation"]],
    footNote: "Choisissez un seul examen (TEF ou TCF) tôt et entraînez-vous spécifiquement pour lui — les formats ne sont pas identiques.",
    savedFlag: "Enregistré ✓",
    skillLabels: {grammar:"Grammaire", vocab:"Vocabulaire", listening:"Écoute", reading:"Lecture", speaking:"Oral", writing:"Écrit"},
    blockLabels: {immersion:"Immersion", vocab:"Vocabulaire + prononciation", grammar:"Grammaire", listening:"Atelier d'écoute", reading:"Lecture", speaking:"Expression orale", writing:"Expression écrite", examblock:"Bloc examen", errorlog:"Carnet d'erreurs + révision", review:"Révision grammaire & vocab", practice:"Pratique libre"},
    timeLabels: {morning:"Matin", midday:"Midi", afternoon:"Après-midi"},
    dayPanelTitle: "Jour",
    dayPanelAria: "Programme du jour",
    connectorsDeckName: "Connecteurs logiques",
    navLabels: { plan:"Plan", test:"Test", results:"Résultats", tcf:"TCF", notebook:"Carnet" },
    navAria: "Navigation principale",
    auth: {
      splashLoading: "Chargement de votre plan…",
      loginTitle: "Connexion",
      loginHint: "Retrouvez votre plan sur n'importe quel appareil",
      emailLabel: "Adresse e-mail",
      passwordLabel: "Mot de passe",
      loginButton: "Se connecter",
      loggingIn: "Connexion…",
      noAccount: "Pas encore de compte ?",
      signupLink: "Créer un compte",
      forgotLink: "Mot de passe oublié ?",
      signupTitle: "Créer un compte",
      signupHint: "Votre progression sera liée à cette adresse e-mail",
      confirmPasswordLabel: "Confirmer le mot de passe",
      signupButton: "Créer mon compte",
      signingUp: "Création…",
      haveAccount: "Déjà un compte ?",
      loginLink: "Se connecter",
      passwordMismatch: "Les mots de passe ne correspondent pas.",
      passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères.",
      forgotTitle: "Mot de passe oublié",
      forgotHint: "On vous envoie un lien pour le réinitialiser",
      forgotButton: "Envoyer le lien",
      sending: "Envoi…",
      backToLogin: "← Retour à la connexion",
      forgotSentTitle: "E-mail envoyé ✓",
      forgotSentMsg: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe.",
      checkEmailTitle: "Vérifiez votre boîte mail",
      checkEmailMsg: "Nous avons envoyé un lien de confirmation à {email}. Cliquez dessus pour activer votre compte.",
      backToLoginButton: "Retour à la connexion",
      resetTitle: "Nouveau mot de passe",
      resetHint: "Choisissez un nouveau mot de passe pour votre compte",
      newPasswordLabel: "Nouveau mot de passe",
      resetButton: "Mettre à jour le mot de passe",
      updating: "Mise à jour…",
      showPassword: "Afficher le mot de passe",
      hidePassword: "Masquer le mot de passe",
      signedInAs: "Connecté(e) en tant que",
      logout: "Se déconnecter",
      profileMenuAria: "Menu du compte",
      replayTour: "Revoir la visite guidée",
      changeDay1: "Changer le Jour 1",
      day1Title: "Choisis ton Jour 1",
      day1Hint: "C'est la date de départ de ton plan de 90 jours — choisis-la bien !",
      day1Confirm: "Valider",
      configErrorTitle: "Configuration manquante",
      configErrorMsg: "Ce site n'est pas encore connecté à une base de données. Renseignez SUPABASE_URL et SUPABASE_ANON_KEY dans supabase-config.js.",
      genericError: "Une erreur est survenue. Réessayez."
    },
    catAria: "Mascotte",
    themeToLight: "Passer au thème clair",
    themeToDark: "Passer au thème sombre",
    tour: {
      calendar: "Voici ton calendrier de 90 jours — touche un jour pour voir son programme détaillé.",
      test: "Clique ici pour réviser tes fiches de vocabulaire et faire un quiz.",
      results: "Retrouve ici l'historique de tous tes quiz.",
      profile: "Ton compte, la relecture de cette visite et la déconnexion sont ici.",
      cat: "Et moi, je suis toujours là pour t'encourager — touche-moi !",
      next: "Suivant",
      skip: "Passer",
      done: "C'est parti ! 🎉"
    },
    fcTitle: "Test",
    fcHint: "Révisez le vocabulaire par thème, puis testez-vous",
    fcDeckAria: "Choisir un thème",
    fcEmpty: "Choisissez un thème ci-dessus pour commencer",
    fcFlipHint: "Touchez la carte pour voir la traduction",
    listenAria: "Écouter la prononciation",
    fcCounter: "Carte",
    fcPrev: "◀ Précédent",
    fcNext: "Suivant ▶",
    fcShuffle: "🔀 Mélanger",
    fcStartQuiz: "Lancer le quiz",
    fcBest: "Meilleur score",
    quizProgress: "Question",
    quizCorrect: "Bonne réponse ! ✓",
    quizWrongPrefix: "Faux — la bonne réponse était :",
    quizNext: "Question suivante",
    quizSeeResults: "Voir les résultats",
    quizResultsTitle: "Résultats",
    quizScoreOf: "sur",
    quizRetake: "🔁 Recommencer",
    quizBack: "← Retour aux fiches",
    quizPromptFr2En: "Que signifie « {w} » ?",
    quizPromptEn2Fr: "Comment dit-on « {w} » en français ?",
    quizTierGreat: "Excellent ! 🌟",
    quizTierGood: "Bien joué ! 🎉",
    quizTierOk: "Pas mal, continuez ! 🙂",
    quizTierLow: "Courage, on retente ! 💪",
    results: {
      title: "Résultats",
      hint: "Historique de tous vos quiz",
      empty: "Aucun quiz pour le moment — lancez-en un dans l'onglet Test !",
      totalLabel: "Quiz complétés",
      avgLabel: "Score moyen",
      bestLabel: "Meilleur score"
    },
    tcf: {
      title: "Calculateur de niveau TCF Canada",
      hint: "Entrez votre score brut pour chaque compétence — chacune est notée indépendamment, sans moyenne.",
      skillNames: { listening:"Écoute (CO)", reading:"Lecture (CE)", speaking:"Oral (EO)", writing:"Écrit (EE)" },
      scoreRangeHint: { listening:"Échelle : 0–699", reading:"Échelle : 0–699", speaking:"Échelle : 0–20", writing:"Échelle : 0–20" },
      scorePh: "Score",
      notEntered: "—",
      belowCefr: "< B2",
      belowNclc: "< NCLC 7",
      ptsWord: "pts",
      tableHeaders: { skill:"Compétence", score:"Score TCF", cefr:"CECR", nclc:"NCLC/CLB", points:"Points" },
      totalRow: "TOTAL",
      overallTitle: "Résultat global",
      lowestLevel: "Niveau NCLC le plus bas",
      highestLevel: "Niveau NCLC le plus élevé",
      allFourPrefix: "atteint dans les 4 compétences",
      yes: "OUI",
      no: "NON",
      totalPointsLabel: "Total des points linguistiques TCF",
      outOf24: "sur 24",
      fillAllHint: "Entrez les 4 scores ci-dessus pour voir le résultat global."
    }
  },
  en: {
    locale: "en-US",
    heroTitle: "Tia's French Plan 🥐",
    heroSub: "90 Days to NCLC 9",
    heroTag: "An intensive 7h/day program toward TEF/TCF Canada — listening, reading, speaking and writing, all pushed toward C1 level.",
    examAria: "Exam choice",
    langAria: "Interface language",
    startLabel: "Day 1:",
    startLockHint: "Editable once — unlocks again after you finish the 90-day plan (to prevent cheating).",
    statToday: "Today",
    statPhase: "Current phase",
    statStreak: "Current streak",
    statProgress: "Overall progress",
    notStarted: "Not started yet",
    planDone: "Plan complete! 🎉",
    dayWord: "Day",
    dayUnit: "day",
    reality: "Honest reality check: aiming for NCLC 9 in all four skills from a standing start in 90 days is extremely ambitious. It's achievable with 6–8h/day of focused work, but nothing guarantees it — so aim above the threshold in your practice tests, not right on it.",
    phaseNames: {phase1:"Build the Basics", phase2:"B2 Acceleration", phase3:"C1 Push", phase4:"Exam War Mode"},
    daysWord: "Days",
    legendLabels: {phase1:"Basics", phase2:"B2 Acceleration", phase3:"C1 Push", phase4:"Exam war mode"},
    calTitle: "90-Day Calendar",
    calHint: "Click a day to see the detailed schedule",
    weekdays: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    closeAria: "Close",
    skillsTitle: "Progress by skill",
    skillsHint: "Based on blocks checked off so far",
    notebookTitle: "The mistake notebook",
    notebookHint: "Non-negotiable — every mistake becomes a lesson",
    noteCats: {
      listening: {label:"Listening mistakes", ph:"contractions, liaisons, missed expressions…"},
      reading:   {label:"Reading mistakes", ph:"vocabulary, inference, distractors…"},
      speaking:  {label:"Speaking mistakes", ph:"grammar, pronunciation, hesitations…"},
      writing:   {label:"Writing mistakes", ph:"connectors, agreement, structure…"}
    },
    cycle: ["LEARN","UNDERSTAND","PRODUCE","GET CORRECTED","REPEAT"],
    hours: [["1.5h","listening"],["1.5h","speaking"],["1h","reading"],["1h","writing"],["1h","grammar"],["1h","vocab/pronunciation"]],
    footNote: "Pick a single exam (TEF or TCF) early and train specifically for it — their formats are not identical.",
    savedFlag: "Saved ✓",
    skillLabels: {grammar:"Grammar", vocab:"Vocabulary", listening:"Listening", reading:"Reading", speaking:"Speaking", writing:"Writing"},
    blockLabels: {immersion:"Immersion listening", vocab:"Vocabulary + pronunciation", grammar:"Grammar", listening:"Listening lab", reading:"Reading", speaking:"Speaking", writing:"Writing", examblock:"Exam block", errorlog:"Error log + vocab review", review:"Grammar & vocab review", practice:"Free practice"},
    timeLabels: {morning:"Morning", midday:"Midday", afternoon:"Afternoon"},
    dayPanelTitle: "Day",
    dayPanelAria: "Day schedule for",
    connectorsDeckName: "Logical connectors",
    navLabels: { plan:"Plan", test:"Test", results:"Results", tcf:"TCF", notebook:"Notebook" },
    navAria: "Main navigation",
    auth: {
      splashLoading: "Loading your plan…",
      loginTitle: "Log in",
      loginHint: "Pick up your plan on any device",
      emailLabel: "Email address",
      passwordLabel: "Password",
      loginButton: "Log in",
      loggingIn: "Logging in…",
      noAccount: "Don't have an account?",
      signupLink: "Create one",
      forgotLink: "Forgot your password?",
      signupTitle: "Create an account",
      signupHint: "Your progress will be tied to this email address",
      confirmPasswordLabel: "Confirm password",
      signupButton: "Create account",
      signingUp: "Creating…",
      haveAccount: "Already have an account?",
      loginLink: "Log in",
      passwordMismatch: "Passwords don't match.",
      passwordTooShort: "Password must be at least 6 characters.",
      forgotTitle: "Forgot password",
      forgotHint: "We'll email you a link to reset it",
      forgotButton: "Send reset link",
      sending: "Sending…",
      backToLogin: "← Back to login",
      forgotSentTitle: "Email sent ✓",
      forgotSentMsg: "Check your inbox for a link to reset your password.",
      checkEmailTitle: "Check your email",
      checkEmailMsg: "We sent a confirmation link to {email}. Click it to activate your account.",
      backToLoginButton: "Back to login",
      resetTitle: "New password",
      resetHint: "Choose a new password for your account",
      newPasswordLabel: "New password",
      resetButton: "Update password",
      updating: "Updating…",
      showPassword: "Show password",
      hidePassword: "Hide password",
      signedInAs: "Signed in as",
      logout: "Log out",
      profileMenuAria: "Account menu",
      replayTour: "Replay the guided tour",
      changeDay1: "Change Day 1",
      day1Title: "Pick your Day 1",
      day1Hint: "This is the start date of your 90-day plan — choose it carefully!",
      day1Confirm: "Confirm",
      configErrorTitle: "Missing configuration",
      configErrorMsg: "This site isn't connected to a database yet. Fill in SUPABASE_URL and SUPABASE_ANON_KEY in supabase-config.js.",
      genericError: "Something went wrong. Please try again."
    },
    catAria: "Mascot",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    tour: {
      calendar: "This is your 90-day calendar — tap any day to see its detailed schedule.",
      test: "Tap here to review your flashcards and take a quiz.",
      results: "Find the history of every quiz you've taken here.",
      profile: "Your account, replaying this tour, and logout all live here.",
      cat: "And I'm always here if you need encouragement — tap me!",
      next: "Next",
      skip: "Skip",
      done: "Let's go! 🎉"
    },
    fcTitle: "Test",
    fcHint: "Review vocabulary by theme, then test yourself",
    fcDeckAria: "Choose a theme",
    fcEmpty: "Choose a theme above to get started",
    fcFlipHint: "Tap the card to see the translation",
    listenAria: "Listen to the pronunciation",
    fcCounter: "Card",
    fcPrev: "◀ Previous",
    fcNext: "Next ▶",
    fcShuffle: "🔀 Shuffle",
    fcStartQuiz: "Start quiz",
    fcBest: "Best score",
    quizProgress: "Question",
    quizCorrect: "Correct! ✓",
    quizWrongPrefix: "Incorrect — the right answer was:",
    quizNext: "Next question",
    quizSeeResults: "See results",
    quizResultsTitle: "Results",
    quizScoreOf: "out of",
    quizRetake: "🔁 Retake quiz",
    quizBack: "← Back to flashcards",
    quizPromptFr2En: "What does “{w}” mean?",
    quizPromptEn2Fr: "How do you say “{w}” in French?",
    quizTierGreat: "Amazing! 🌟",
    quizTierGood: "Great job! 🎉",
    quizTierOk: "Not bad, keep going! 🙂",
    quizTierLow: "Keep practicing! 💪",
    results: {
      title: "Results",
      hint: "History of all your quiz attempts",
      empty: "No quizzes yet — take one in the Test tab!",
      totalLabel: "Quizzes taken",
      avgLabel: "Average score",
      bestLabel: "Best score"
    },
    tcf: {
      title: "TCF Canada Grading Calculator",
      hint: "Enter your raw score for each skill — each one is graded independently, with no averaging.",
      skillNames: { listening:"Listening (CO)", reading:"Reading (CE)", speaking:"Speaking (EO)", writing:"Writing (EE)" },
      scoreRangeHint: { listening:"Scale: 0–699", reading:"Scale: 0–699", speaking:"Scale: 0–20", writing:"Scale: 0–20" },
      scorePh: "Score",
      notEntered: "—",
      belowCefr: "< B2",
      belowNclc: "< NCLC 7",
      ptsWord: "pts",
      tableHeaders: { skill:"Skill", score:"TCF Score", cefr:"CEFR", nclc:"NCLC/CLB", points:"Points" },
      totalRow: "TOTAL",
      overallTitle: "Overall Result",
      lowestLevel: "Lowest NCLC level",
      highestLevel: "Highest NCLC level",
      allFourPrefix: "achieved in all four skills",
      yes: "YES",
      no: "NO",
      totalPointsLabel: "Total TCF language points",
      outOf24: "out of 24",
      fillAllHint: "Enter all 4 scores above to see the overall result."
    }
  }
};
function T(lang){ return DICT[lang] || DICT.fr; }

/* ---------------- date helpers ---------------- */
function parseISO(s){ var p=s.split('-').map(Number); return new Date(p[0],p[1]-1,p[2]); }
function addDays(d,n){ var r=new Date(d); r.setDate(r.getDate()+n); return r; }
function startOfDay(d){ var r=new Date(d); r.setHours(0,0,0,0); return r; }
function dateForDay(startISO,dayNum){ return addDays(parseISO(startISO),dayNum-1); }
function diffDaysFrom(startISO,other){ var a=startOfDay(parseISO(startISO)), b=startOfDay(other); return Math.round((b-a)/86400000); }

/* ---------------- plan content by day ---------------- */
function phaseOf(day, lang){
  var t = T(lang);
  if(day<=30) return {n:1, cls:"p1", key:"phase1", name:t.phaseNames.phase1, range:t.daysWord+" 1–30"};
  if(day<=60) return {n:2, cls:"p2", key:"phase2", name:t.phaseNames.phase2, range:t.daysWord+" 31–60"};
  if(day<=75) return {n:3, cls:"p3", key:"phase3", name:t.phaseNames.phase3, range:t.daysWord+" 61–75"};
  return {n:4, cls:"p4", key:"phase4", name:t.phaseNames.phase4, range:t.daysWord+" 76–90"};
}
function weekOf(day){ return Math.ceil(day/7); }
function grammarFor(day, lang){
  var w=weekOf(day);
  if(lang==='en'){
    if(w<=2) return "Articles, gender, pronouns, être/avoir/aller/faire + key irregulars, present tense, negation, questions";
    if(w<=4) return "Passé composé, imparfait, plus-que-parfait, futur simple/proche, conditional, direct/indirect object pronouns, y/en";
    if(w<=6) return "Subjunctive, si-clauses, passive voice, reported speech, cause/consequence/concession";
    if(w<=8) return "Complex sentence construction — spontaneous production of advanced structures";
    return "Error correction — every mistake in your log becomes a lesson";
  }
  if(w<=2) return "Articles, genre, pronoms, être/avoir/aller/faire + irréguliers clés, présent, négation, questions";
  if(w<=4) return "Passé composé, imparfait, plus-que-parfait, futur simple/proche, conditionnel, pronoms COD/COI, y/en";
  if(w<=6) return "Subjonctif, phrases avec si, voix passive, discours rapporté, cause/conséquence/concession";
  if(w<=8) return "Construction de phrases complexes — production spontanée de structures avancées";
  return "Correction d'erreurs — chaque faute de votre carnet devient une leçon";
}
function vocabFor(day, lang){
  var pool = VOCAB_TOPICS[lang] || VOCAB_TOPICS.fr;
  var topic = pool[(day-1)%pool.length];
  return lang==='en'
    ? "Theme: " + topic + " — 30–40 words/expressions, learned in full sentences"
    : "Thème : " + topic + " — 30–40 mots/expressions, appris en phrases";
}
function readingFor(day, lang){
  if(lang==='en'){
    if(day<=30) return "Simple texts — short news items, ads, notices, emails";
    if(day<=60) return "Newspapers, opinion pieces, interviews, social issues";
    return "C1 level — editorials, government, economic and scientific texts";
  }
  if(day<=30) return "Textes simples — actualités courtes, annonces, notices, courriels";
  if(day<=60) return "Journaux, articles d'opinion, entretiens, sujets de société";
  return "Niveau C1 — éditoriaux, textes gouvernementaux, économiques et scientifiques";
}
function writingFor(day, lang){
  var w=weekOf(day);
  if(lang==='en'){
    if(w<=2) return "Structured response, 80–120 words";
    if(w<=4) return "Structured response, 120–180 words";
    if(w<=6) return "Structured response, 180–250 words";
    return "Full exam-style response, timed";
  }
  if(w<=2) return "Réponse structurée, 80–120 mots";
  if(w<=4) return "Réponse structurée, 120–180 mots";
  if(w<=6) return "Réponse structurée, 180–250 mots";
  return "Réponse complète style examen, sous contrainte de temps";
}
function speakingFor(day, lang){
  var pool = SPEAKING_PROMPTS[lang] || SPEAKING_PROMPTS.fr;
  var prompt = pool[(day-1)%pool.length];
  return lang==='en'
    ? "Today's topic: \u201c" + prompt + "\u201d — state position → argument → example → concession → conclusion"
    : "Sujet du jour : « " + prompt + " » — position → argument → exemple → concession → conclusion";
}
function examLabel(state){ return state.examTarget || "TEF"; }
function examBlockFor(day, weekdayJs, state, lang){
  var ex = examLabel(state);
  if(lang==='en'){
    switch(weekdayJs){
      case 1: return ex+" — Listening section, timed practice";
      case 2: return ex+" — Reading section, timed practice";
      case 3: return ex+" — Speaking simulation (both tasks)";
      case 4: return ex+" — Writing simulation, timed";
      case 5: return ex+" — Listening + Reading combo";
      case 6: return ex+" — full mini mock exam (4 skills)";
      default: return ex+" — free review";
    }
  }
  switch(weekdayJs){
    case 1: return ex+" — section Écoute, entraînement chronométré";
    case 2: return ex+" — section Lecture, entraînement chronométré";
    case 3: return ex+" — simulation Expression orale (les deux tâches)";
    case 4: return ex+" — simulation Expression écrite, chronométrée";
    case 5: return ex+" — combo Écoute + Lecture";
    case 6: return ex+" — mini examen blanc complet (4 compétences)";
    default: return ex+" — révision libre";
  }
}
function detailFor(blockId, day, weekdayJs, state, lang){
  if(lang==='en'){
    switch(blockId){
      case "immersion": return "Native audio, no subtitles — don't translate, let your ear adjust to real speed";
      case "vocab": return vocabFor(day, lang);
      case "grammar": return grammarFor(day, lang);
      case "listening": return "Intensive listening (dictation) → natural listening → timed "+examLabel(state)+" drill + error analysis";
      case "reading": return readingFor(day, lang);
      case "speaking": return speakingFor(day, lang);
      case "writing": return writingFor(day, lang);
      case "examblock": return examBlockFor(day, weekdayJs, state, lang);
      case "errorlog": return "Log every mistake (listening / reading / speaking / writing) and rewrite it correctly";
      case "review": return "Go back over this week's grammar points and vocabulary";
      case "practice": return "Free, light practice — no new material, consolidate what you've learned";
      default: return "";
    }
  }
  switch(blockId){
    case "immersion": return "Audio natif sans sous-titres — ne traduisez pas, laissez l'oreille s'habituer au débit réel";
    case "vocab": return vocabFor(day, lang);
    case "grammar": return grammarFor(day, lang);
    case "listening": return "Écoute intensive (dictée) → écoute naturelle → drill "+examLabel(state)+" chronométré + analyse des erreurs";
    case "reading": return readingFor(day, lang);
    case "speaking": return speakingFor(day, lang);
    case "writing": return writingFor(day, lang);
    case "examblock": return examBlockFor(day, weekdayJs, state, lang);
    case "errorlog": return "Consignez chaque erreur (écoute / lecture / oral / écrit) et reformulez-la correctement";
    case "review": return "Repassez les points de grammaire et le vocabulaire de la semaine";
    case "practice": return "Pratique libre et légère — pas de nouvelle matière, consolidez ce qui est acquis";
    default: return "";
  }
}
function blocksForWeekday(weekdayJs){ return weekdayJs===0 ? BLOCKS_SUNDAY : BLOCKS_WEEKDAY; }

/* ---------------- state ---------------- */
function defaultState(){
  return { startDate: "2026-09-12", startDateChangedOnce: false, onboardingSeen: false, examTarget: "TEF", lang: "fr", theme: "system", tasks: {}, notes: { listening:"", reading:"", speaking:"", writing:"" }, quizScores: {}, quizHistory: [], tcfScores: { listening:null, reading:null, speaking:null, writing:null } };
}
/* merges a raw state blob (as loaded from Supabase) over the defaults, so any field
   added to the app after a user's row was first created still gets a sane fallback */
function mergeState(parsed){
  parsed = parsed || {};
  var d = defaultState();
  return Object.assign(d, parsed, {
    notes: Object.assign(d.notes, parsed.notes||{}),
    quizScores: Object.assign(d.quizScores, parsed.quizScores||{}),
    quizHistory: parsed.quizHistory || d.quizHistory,
    tcfScores: Object.assign(d.tcfScores, parsed.tcfScores||{})
  });
}

var STATE = defaultState();
var uiOpenDay = null;
var uiActiveTab = 'plan';
var saveTimer = null;
var uiShowDay1Modal = false;
var uiProfileMenuOpen = false;
var uiTourStep = null; // index into TOUR_STEPS, or null when no tour is running
var uiCatMood = 'idle';
var uiCatBubbleOpen = false;
var uiCatBubbleMsg = '';
var catMoodTimer = null;

/* ---------------- auth (Supabase) ---------------- */
var supabaseClient = null;
try{
  if(window.supabase && typeof SUPABASE_URL !== 'undefined' && SUPABASE_URL.indexOf('YOUR-PROJECT') === -1){
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}catch(e){ supabaseClient = null; }
var uiAuthView = 'splash'; // splash | config-error | login | signup | check-email | forgot | forgot-sent | reset-password | app
var uiAuthUser = null;     // { id, email }
var uiAuthError = '';
var uiAuthBusy = false;
var uiAuthForm = { email: '' }; // remembered across error re-renders; password is never stored, only read at submit time

/* ephemeral flashcard/quiz UI state — not persisted, resets on reload */
var uiDeckKey = null;
var uiCardOrder = [];
var uiCardIndex = 0;
var uiCardFlipped = false;
var uiQuiz = null; // {questions, idx, score, answered, selected, finished}

function shuffleArr(arr){
  var a = arr.slice();
  for(var i=a.length-1; i>0; i--){
    var j = Math.floor(Math.random()*(i+1));
    var tmp = a[i]; a[i]=a[j]; a[j]=tmp;
  }
  return a;
}
/* ---------------- text-to-speech: prefer a feminine voice ---------------- */
var cachedVoices = [];
function refreshVoices(){
  try{ cachedVoices = window.speechSynthesis.getVoices() || []; }catch(e){ cachedVoices = []; }
}
try{
  if('speechSynthesis' in window){
    refreshVoices();
    window.speechSynthesis.addEventListener ? window.speechSynthesis.addEventListener('voiceschanged', refreshVoices) : (window.speechSynthesis.onvoiceschanged = refreshVoices);
  }
}catch(e){}
var FEMALE_VOICE_HINTS = [
  'female','femme','féminin','feminin',
  'amelie','amélie','audrey','céline','celine','chantal','charlotte','marie','julie','elise','élise','virginie','claire','léa','lea','manon','pauline','hortense','caroline','flora','emmanuelle',
  'victoria','samantha','karen','moira','tessa','fiona','zira','susan','hazel','salli','joanna','kimberly','kendra','ivy','emma','ava','allison','sara','sarah','anna','ellen','nicky','vicki','paulina','monica','veena','serena','martha','catherine','linda','heather','olivia','aria','jenny','michelle'
];
var MALE_VOICE_HINTS = [
  'male','homme','masculin',
  'thomas','nicolas','henri','guillaume','paul','antoine','mathieu',
  'daniel','george','david','mark','fred','alex','aaron','james','ryan','guy','brian','eric','justin','liam','tom','christopher','sean'
];
function pickVoice(langCode){
  if(!cachedVoices.length) refreshVoices();
  if(!cachedVoices.length) return null;
  var wantLang = (langCode || 'fr-FR').toLowerCase();
  var langPrefix = wantLang.split('-')[0];
  var sameLang = cachedVoices.filter(function(v){ return v.lang && v.lang.toLowerCase().indexOf(langPrefix) === 0; });
  /* Never fall back to a voice in the wrong language just because its name sounds female —
     an English voice reading French text pronounces every word like English. If this device
     has no French voice installed, leave the utterance's own `lang` tag to do its best rather
     than force a wrong-language voice onto it. */
  if(!sameLang.length) return null;
  function scoreVoice(v){
    var name = (v.name || '').toLowerCase();
    if(FEMALE_VOICE_HINTS.some(function(h){ return name.indexOf(h) !== -1; })) return 2;
    if(MALE_VOICE_HINTS.some(function(h){ return name.indexOf(h) !== -1; })) return 0;
    return 1;
  }
  var best = sameLang[0], bestScore = -1;
  sameLang.forEach(function(v){
    var s = scoreVoice(v);
    if(s > bestScore){ bestScore = s; best = v; }
  });
  return best || null;
}
function speak(text, langCode){
  try{
    if(!text || !('speechSynthesis' in window)) return;
    if(!cachedVoices.length) refreshVoices();
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = langCode || 'fr-FR';
    u.rate = 0.92;
    u.pitch = 1.05;
    var v = pickVoice(langCode);
    if(v) u.voice = v;
    window.speechSynthesis.speak(u);
  }catch(e){}
}

/* ---------------- interactive UI sound effects (Web Audio, no assets needed) ---------------- */
var audioCtx = null;
function getAudioCtx(){
  if(!audioCtx){
    try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ audioCtx = null; }
  }
  return audioCtx;
}
function playTone(freq, duration, opts){
  try{
    var ctx = getAudioCtx();
    if(!ctx) return;
    if(ctx.state === 'suspended') ctx.resume();
    opts = opts || {};
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = opts.type || 'sine';
    osc.frequency.value = freq;
    var vol = opts.volume!=null ? opts.volume : 0.15;
    var now = ctx.currentTime;
    var start = now + (opts.delay||0);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(vol, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }catch(e){}
}
function playFlipSound(){ playTone(700, 0.09, {type:'triangle', volume:0.09}); }
function playClickSound(){ playTone(520, 0.05, {type:'square', volume:0.05}); }
function playCorrectSound(){
  playTone(523.25, 0.14, {type:'sine', volume:0.16});
  playTone(783.99, 0.2, {type:'sine', volume:0.16, delay:0.1});
}
function playWrongSound(){ playTone(180, 0.32, {type:'sawtooth', volume:0.11}); }
function playFanfareSound(){
  playTone(523.25, 0.16, {type:'sine', volume:0.15});
  playTone(659.25, 0.16, {type:'sine', volume:0.15, delay:0.13});
  playTone(783.99, 0.28, {type:'sine', volume:0.16, delay:0.26});
}

/* ---------------- confetti burst (pure CSS/JS, no assets) ---------------- */
var CONFETTI_COLORS = ['var(--accent-pink)','var(--accent-blue)','var(--accent-green)','var(--accent-amber)'];
function burstConfetti(){
  try{
    var layer = document.createElement('div');
    layer.className = 'confetti-layer';
    var count = 60;
    for(var i=0;i<count;i++){
      var el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = (Math.random()*100)+'vw';
      el.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      el.style.animationDelay = (Math.random()*0.35)+'s';
      el.style.animationDuration = (1.5 + Math.random()*1.2)+'s';
      el.style.setProperty('--rot', ((Math.random()*720)-360)+'deg');
      el.style.setProperty('--drift', ((Math.random()*180)-90)+'px');
      if(Math.random()<0.5) el.style.borderRadius = '50%';
      layer.appendChild(el);
    }
    document.body.appendChild(layer);
    setTimeout(function(){ layer.remove(); }, 3200);
  }catch(e){}
}
/* score tiers shared by the quiz results view and the results history tab */
function quizTier(pct){
  if(pct>=90) return 'great';
  if(pct>=70) return 'good';
  if(pct>=50) return 'ok';
  return 'low';
}
var CONFETTI_THRESHOLD = 70;

function buildQuiz(deck, count){
  var pool = shuffleArr(deck.cards);
  var chosen = pool.slice(0, Math.min(count, pool.length));
  return chosen.map(function(card){
    var dir = Math.random() < 0.5 ? 'fr2en' : 'en2fr';
    var correct = dir==='fr2en' ? card.en : card.fr;
    var promptWord = dir==='fr2en' ? card.fr : card.en;
    var distractorPool = deck.cards.filter(function(c){ return c!==card; });
    var distractors = shuffleArr(distractorPool).slice(0,3).map(function(c){ return dir==='fr2en' ? c.en : c.fr; });
    var choices = shuffleArr([correct].concat(distractors));
    return { dir: dir, promptWord: promptWord, choices: choices, correct: correct };
  });
}

/* ---------------- derived stats (language-neutral) ---------------- */
function isDayDone(state, day){
  var wd = dateForDay(state.startDate, day).getDay();
  var blocks = blocksForWeekday(wd);
  var done = state.tasks[day] || [];
  return blocks.every(function(b){ return done.indexOf(b.id) !== -1; });
}
function dayFraction(state, day){
  var wd = dateForDay(state.startDate, day).getDay();
  var blocks = blocksForWeekday(wd);
  var done = state.tasks[day] || [];
  var n = 0; blocks.forEach(function(b){ if(done.indexOf(b.id)!==-1) n++; });
  return n + "/" + blocks.length;
}
function dayCompletionRatio(state, day){
  var wd = dateForDay(state.startDate, day).getDay();
  var blocks = blocksForWeekday(wd);
  var done = state.tasks[day] || [];
  var n = 0; blocks.forEach(function(b){ if(done.indexOf(b.id)!==-1) n++; });
  return blocks.length ? n/blocks.length : 0;
}
function currentDayIndex(state){
  var d = diffDaysFrom(state.startDate, new Date()) + 1;
  return d;
}
function isPlanCompleted(state){ return currentDayIndex(state) > TOTAL_DAYS; }
/* the start date can be set once freely; after that it's locked until the 90-day plan
   has run its course, so people can't nudge Day 1 around to dodge missed-day tracking */
function isStartDateLocked(state){ return !!state.startDateChangedOnce && !isPlanCompleted(state); }
/* good = fully checked off; almost = past day, at least half done; missed = past day, mostly skipped */
function dayStatus(state, day, todayIdx){
  if(isDayDone(state, day)) return 'good';
  if(day < todayIdx) return dayCompletionRatio(state, day) >= 0.5 ? 'almost' : 'missed';
  return null;
}
var DAY_STATUS_BADGE = { good:'🎉', almost:'😅', missed:'😢' };
function computeStreak(state){
  var idx = currentDayIndex(state);
  var start = Math.min(idx, TOTAL_DAYS);
  if(start < 1) return 0;
  var streak = 0;
  for(var day = start; day >= 1; day--){
    if(isDayDone(state, day)){ streak++; } else { break; }
  }
  return streak;
}
function computeOverallPct(state){
  var idx = Math.max(0, Math.min(currentDayIndex(state), TOTAL_DAYS));
  if(idx===0) return 0;
  var totalBlocks=0, doneBlocks=0;
  for(var day=1; day<=idx; day++){
    var wd = dateForDay(state.startDate, day).getDay();
    var blocks = blocksForWeekday(wd);
    var done = state.tasks[day] || [];
    totalBlocks += blocks.length;
    blocks.forEach(function(b){ if(done.indexOf(b.id)!==-1) doneBlocks++; });
  }
  return totalBlocks ? Math.round(doneBlocks/totalBlocks*100) : 0;
}
function computeSkillProgress(state){
  var idx = Math.max(0, Math.min(currentDayIndex(state), TOTAL_DAYS));
  var res = {};
  SKILL_CATS.forEach(function(s){ res[s.id] = {done:0,total:0}; });
  for(var day=1; day<=idx; day++){
    var wd = dateForDay(state.startDate, day).getDay();
    if(wd===0) continue; // Sunday not counted toward fixed skill categories
    var done = state.tasks[day] || [];
    SKILL_CATS.forEach(function(s){
      res[s.id].total++;
      if(done.indexOf(s.id)!==-1) res[s.id].done++;
    });
  }
  return res;
}

/* ---------------- TCF Canada grading system ---------------- */
var TCF_SCALES = {
  listening: { min:0, max:699, tiers:[
    {lo:458,hi:502, cefr:'B2',  nclc:7,  pts:3},
    {lo:503,hi:522, cefr:'B2+', nclc:8,  pts:4},
    {lo:523,hi:548, cefr:'C1',  nclc:9,  pts:5},
    {lo:549,hi:699, cefr:'C2',  nclc:10, pts:6}
  ]},
  reading: { min:0, max:699, tiers:[
    {lo:453,hi:498, cefr:'B2',  nclc:7,  pts:3},
    {lo:499,hi:523, cefr:'B2+', nclc:8,  pts:4},
    {lo:524,hi:548, cefr:'C1',  nclc:9,  pts:5},
    {lo:549,hi:699, cefr:'C2',  nclc:10, pts:6}
  ]},
  speaking: { min:0, max:20, tiers:[
    {lo:10,hi:11, cefr:'B2',  nclc:7,  pts:3},
    {lo:12,hi:13, cefr:'B2+', nclc:8,  pts:4},
    {lo:14,hi:15, cefr:'C1',  nclc:9,  pts:5},
    {lo:16,hi:20, cefr:'C2',  nclc:10, pts:6}
  ]},
  writing: { min:0, max:20, tiers:[
    {lo:10,hi:11, cefr:'B2',  nclc:7,  pts:3},
    {lo:12,hi:13, cefr:'B2+', nclc:8,  pts:4},
    {lo:14,hi:15, cefr:'C1',  nclc:9,  pts:5},
    {lo:16,hi:20, cefr:'C2',  nclc:10, pts:6}
  ]}
};
var TCF_SKILL_ORDER = ["listening","reading","speaking","writing"];

/* Grades ONE competency in isolation against its own table — never averaged with the others. */
function gradeTcfSkill(skillKey, rawScore){
  if(rawScore===null || rawScore===undefined || rawScore==='' || isNaN(rawScore)) return null;
  var score = Number(rawScore);
  var scale = TCF_SCALES[skillKey];
  for(var i=0;i<scale.tiers.length;i++){
    var tier = scale.tiers[i];
    if(score>=tier.lo && score<=tier.hi){
      return { score:score, cefr:tier.cefr, nclcNum:tier.nclc, pts:tier.pts, below:false };
    }
  }
  if(score < scale.tiers[0].lo) return { score:score, cefr:null, nclcNum:6, pts:0, below:true };
  var last = scale.tiers[scale.tiers.length-1];
  return { score:score, cefr:last.cefr, nclcNum:last.nclc, pts:last.pts, below:false };
}
/* Sums the 4 independent grades and checks NCLC-in-all-four thresholds ("at least" semantics). */
function computeTcfResult(scores){
  scores = scores || {};
  var perSkill = {}, total = 0, allGraded = true;
  TCF_SKILL_ORDER.forEach(function(k){
    var g = gradeTcfSkill(k, scores[k]);
    perSkill[k] = g;
    if(g){ total += g.pts; } else { allGraded = false; }
  });
  var lowest = null, highest = null;
  var achieved = {7:false, 8:false, 9:false, 10:false};
  if(allGraded){
    var nums = TCF_SKILL_ORDER.map(function(k){ return perSkill[k].nclcNum; });
    lowest = Math.min.apply(null, nums);
    highest = Math.max.apply(null, nums);
    [7,8,9,10].forEach(function(th){ achieved[th] = nums.every(function(n){ return n>=th; }); });
  }
  return { perSkill:perSkill, total:total, allGraded:allGraded, lowest:lowest, highest:highest, achieved:achieved };
}
function tcfNclcLabel(nclcNum, t){
  if(nclcNum===null || nclcNum===undefined) return t.tcf.notEntered;
  if(nclcNum===6) return t.tcf.belowNclc;
  return "NCLC " + nclcNum;
}
function tcfCefrLabel(g, t){
  if(!g) return t.tcf.notEntered;
  if(g.below) return t.tcf.belowCefr;
  return g.cefr;
}
function renderTcfBadges(skillKey, g, t){
  var tt = t.tcf;
  return '<span class="tcf-badge cefr">'+esc(tcfCefrLabel(g,t))+'</span>'
    +'<span class="tcf-badge nclc">'+esc(tcfNclcLabel(g?g.nclcNum:null,t))+'</span>'
    +'<span class="tcf-badge pts">'+(g?g.pts:0)+' '+esc(tt.ptsWord)+'</span>';
}
function renderTcfProgression(skillKey, g){
  var scale = TCF_SCALES[skillKey];
  return '<div class="tcf-progress-track">'+scale.tiers.map(function(tier){
    var active = !!(g && !g.below && g.nclcNum===tier.nclc);
    return '<div class="tcf-seg'+(active?' active':'')+'"><div class="tcf-seg-lvl">NCLC '+tier.nclc+'</div><div class="tcf-seg-pts">'+tier.pts+'pt'+(tier.pts>1?'s':'')+'</div></div>';
  }).join('')+'</div>';
}
function renderTcfSkillCard(skillKey, scores, lang){
  var t = T(lang), tt = t.tcf;
  var scale = TCF_SCALES[skillKey];
  var g = gradeTcfSkill(skillKey, scores[skillKey]);
  var val = (scores[skillKey]===null || scores[skillKey]===undefined) ? '' : scores[skillKey];
  return ''
  +'<div class="tcf-skill-card">'
    +'<div class="tcf-skill-head"><span class="tcf-skill-name">'+esc(tt.skillNames[skillKey])+'</span><span class="tcf-skill-scale">'+esc(tt.scoreRangeHint[skillKey])+'</span></div>'
    +'<div class="tcf-input-row">'
      +'<input type="number" inputmode="numeric" class="tcf-score-input" min="'+scale.min+'" max="'+scale.max+'" step="1" placeholder="'+esc(tt.scorePh)+'" value="'+esc(val)+'" data-action="tcf-score" data-skill="'+skillKey+'">'
      +'<span class="tcf-badges" id="tcf-badges-'+skillKey+'">'+renderTcfBadges(skillKey,g,t)+'</span>'
    +'</div>'
    +'<div id="tcf-prog-'+skillKey+'">'+renderTcfProgression(skillKey,g)+'</div>'
  +'</div>';
}
function renderTcfTableBody(result, t){
  var tt = t.tcf;
  var rows = TCF_SKILL_ORDER.map(function(k){
    var g = result.perSkill[k];
    var raw = STATE.tcfScores ? STATE.tcfScores[k] : null;
    var scoreDisp = (raw===null || raw===undefined) ? tt.notEntered : raw;
    return '<tr><td>'+esc(tt.skillNames[k])+'</td><td class="tabular">'+esc(scoreDisp)+'</td><td>'+esc(tcfCefrLabel(g,t))+'</td><td>'+esc(tcfNclcLabel(g?g.nclcNum:null,t))+'</td><td class="tabular">'+(g?g.pts:'—')+'</td></tr>';
  }).join('');
  return rows + '<tr class="tcf-total-row"><td>'+esc(tt.totalRow)+'</td><td></td><td></td><td></td><td class="tabular">'+result.total+' / 24</td></tr>';
}
function renderTcfOverall(result, t){
  var tt = t.tcf;
  var inner;
  if(result.allGraded){
    var thresholdRows = [7,8,9,10].map(function(th){
      var yes = result.achieved[th];
      var isNine = th===9;
      return '<div class="tcf-overall-row'+(isNine?' highlight':'')+'">'
        +'<span>NCLC '+th+' — '+esc(tt.allFourPrefix)+(isNine?' ★':'')+'</span>'
        +'<span class="tcf-badge-yn '+(yes?'yes':'no')+'">'+(yes?esc(tt.yes):esc(tt.no))+'</span>'
      +'</div>';
    }).join('');
    inner = ''
      +'<h3>'+esc(tt.overallTitle)+'</h3>'
      +'<div class="tcf-overall-row"><span>'+esc(tt.lowestLevel)+'</span><span class="tabular">'+esc(tcfNclcLabel(result.lowest,t))+'</span></div>'
      +'<div class="tcf-overall-row"><span>'+esc(tt.highestLevel)+'</span><span class="tabular">'+esc(tcfNclcLabel(result.highest,t))+'</span></div>'
      +thresholdRows
      +'<div class="tcf-overall-row total"><span>'+esc(tt.totalPointsLabel)+'</span><span class="tabular">'+result.total+' '+esc(tt.outOf24)+'</span></div>';
  } else {
    inner = '<div class="tcf-overall-empty">'+esc(tt.fillAllHint)+'</div>';
  }
  return '<div class="tcf-overall" id="tcf-overall-block">'+inner+'</div>';
}
function renderTcfCalculator(state){
  var lang = state.lang || 'fr';
  var t = T(lang), tt = t.tcf;
  var scores = state.tcfScores || {};
  var result = computeTcfResult(scores);
  var cards = TCF_SKILL_ORDER.map(function(k){ return renderTcfSkillCard(k, scores, lang); }).join('');
  return ''
  +'<div class="section">'
    +'<div class="section-head"><h2>'+esc(tt.title)+'</h2><span class="hint">'+esc(tt.hint)+'</span></div>'
    +'<div class="tcf-grid">'+cards+'</div>'
    +'<div class="tcf-table-wrap"><table class="tcf-table"><thead><tr>'
      +'<th>'+esc(tt.tableHeaders.skill)+'</th><th>'+esc(tt.tableHeaders.score)+'</th><th>'+esc(tt.tableHeaders.cefr)+'</th><th>'+esc(tt.tableHeaders.nclc)+'</th><th>'+esc(tt.tableHeaders.points)+'</th>'
    +'</tr></thead><tbody id="tcf-table-body">'+renderTcfTableBody(result,t)+'</tbody></table></div>'
    +renderTcfOverall(result, t)
  +'</div>';
}
/* Partial DOM refresh (no full re-render) so the number inputs keep focus while typing. */
function updateTcfUI(){
  var lang = STATE.lang || 'fr';
  var t = T(lang);
  var scores = STATE.tcfScores || {};
  var result = computeTcfResult(scores);
  TCF_SKILL_ORDER.forEach(function(k){
    var g = result.perSkill[k];
    var badgeEl = document.getElementById('tcf-badges-'+k);
    if(badgeEl) badgeEl.innerHTML = renderTcfBadges(k, g, t);
    var progEl = document.getElementById('tcf-prog-'+k);
    if(progEl) progEl.innerHTML = renderTcfProgression(k, g);
  });
  var tbody = document.getElementById('tcf-table-body');
  if(tbody) tbody.innerHTML = renderTcfTableBody(result, t);
  var overallEl = document.getElementById('tcf-overall-block');
  if(overallEl) overallEl.outerHTML = renderTcfOverall(result, t);
}

/* ---------------- render: body content ---------------- */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* ---------------- splash + auth screens ---------------- */
function preAuthLang(){
  try{ return (navigator.language||'fr').toLowerCase().indexOf('fr')===0 ? 'fr' : 'en'; }catch(e){ return 'fr'; }
}
function renderSplash(){
  var t = T(preAuthLang()).auth;
  return ''
  +'<div class="splash-screen">'
    +renderThemeToggleButton('screen-theme-toggle')
    +'<div class="splash-logo">🥐</div>'
    +'<h1 class="splash-title">Tia\'s French Plan</h1>'
    +'<div class="splash-spinner" aria-hidden="true"></div>'
    +'<div class="splash-loading">'+esc(t.splashLoading)+'</div>'
  +'</div>';
}
function renderAuthCard(inner){
  return '<div class="auth-screen">'+renderThemeToggleButton('screen-theme-toggle')+'<div class="auth-card">'+inner+'</div></div>';
}
function renderAuthError(){
  return uiAuthError ? '<div class="auth-error">'+esc(uiAuthError)+'</div>' : '';
}
/* a password input with a 👁️ show/hide toggle; the toggle flips input.type via direct DOM
   manipulation (see 'auth-toggle-password' in onRootClick) rather than a full render(), since
   this app re-renders by replacing innerHTML wholesale and password fields carry no value
   attribute — a render() while typing would silently wipe whatever was typed */
function passwordField(id, label, autocomplete, t){
  return '<label class="auth-label" for="'+id+'">'+esc(label)+'</label>'
    +'<div class="auth-password-wrap">'
      +'<input type="password" class="auth-input" id="'+id+'" autocomplete="'+autocomplete+'">'
      +'<button type="button" class="auth-eye" data-action="auth-toggle-password" data-target="'+id+'" aria-label="'+esc(t.showPassword)+'">👁️</button>'
    +'</div>';
}
function renderLogin(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">🥐</div>'
    +'<h2>'+esc(t.loginTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.loginHint)+'</p>'
    +renderAuthError()
    +'<label class="auth-label" for="auth-email">'+esc(t.emailLabel)+'</label>'
    +'<input type="email" class="auth-input" id="auth-email" autocomplete="email" value="'+esc(uiAuthForm.email)+'">'
    +passwordField('auth-password', t.passwordLabel, 'current-password', t)
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-login"'+(uiAuthBusy?' disabled':'')+'>'+esc(uiAuthBusy ? t.loggingIn : t.loginButton)+'</button>'
    +'<div class="auth-links"><button type="button" class="auth-link" data-action="auth-goto" data-view="forgot">'+esc(t.forgotLink)+'</button></div>'
    +'<div class="auth-switch">'+esc(t.noAccount)+' <button type="button" class="auth-link strong" data-action="auth-goto" data-view="signup">'+esc(t.signupLink)+'</button></div>'
  );
}
function renderSignup(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">🥐</div>'
    +'<h2>'+esc(t.signupTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.signupHint)+'</p>'
    +renderAuthError()
    +'<label class="auth-label" for="auth-email">'+esc(t.emailLabel)+'</label>'
    +'<input type="email" class="auth-input" id="auth-email" autocomplete="email" value="'+esc(uiAuthForm.email)+'">'
    +passwordField('auth-password', t.passwordLabel, 'new-password', t)
    +passwordField('auth-password-confirm', t.confirmPasswordLabel, 'new-password', t)
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-signup"'+(uiAuthBusy?' disabled':'')+'>'+esc(uiAuthBusy ? t.signingUp : t.signupButton)+'</button>'
    +'<div class="auth-switch">'+esc(t.haveAccount)+' <button type="button" class="auth-link strong" data-action="auth-goto" data-view="login">'+esc(t.loginLink)+'</button></div>'
  );
}
function renderForgot(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">🥐</div>'
    +'<h2>'+esc(t.forgotTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.forgotHint)+'</p>'
    +renderAuthError()
    +'<label class="auth-label" for="auth-email">'+esc(t.emailLabel)+'</label>'
    +'<input type="email" class="auth-input" id="auth-email" autocomplete="email" value="'+esc(uiAuthForm.email)+'">'
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-forgot"'+(uiAuthBusy?' disabled':'')+'>'+esc(uiAuthBusy ? t.sending : t.forgotButton)+'</button>'
    +'<div class="auth-switch"><button type="button" class="auth-link" data-action="auth-goto" data-view="login">'+esc(t.backToLogin)+'</button></div>'
  );
}
function renderForgotSent(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">📬</div>'
    +'<h2>'+esc(t.forgotSentTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.forgotSentMsg)+'</p>'
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-goto" data-view="login">'+esc(t.backToLoginButton)+'</button>'
  );
}
function renderCheckEmail(){
  var t = T(preAuthLang()).auth;
  var msg = t.checkEmailMsg.replace('{email}', uiAuthForm.email || '');
  return renderAuthCard(''
    +'<div class="auth-logo">📬</div>'
    +'<h2>'+esc(t.checkEmailTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(msg)+'</p>'
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-goto" data-view="login">'+esc(t.backToLoginButton)+'</button>'
  );
}
function renderResetPassword(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">🔑</div>'
    +'<h2>'+esc(t.resetTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.resetHint)+'</p>'
    +renderAuthError()
    +passwordField('auth-new-password', t.newPasswordLabel, 'new-password', t)
    +'<button type="button" class="fc-btn primary auth-submit" data-action="auth-reset"'+(uiAuthBusy?' disabled':'')+'>'+esc(uiAuthBusy ? t.updating : t.resetButton)+'</button>'
  );
}
function renderConfigError(){
  var t = T(preAuthLang()).auth;
  return renderAuthCard(''
    +'<div class="auth-logo">⚠️</div>'
    +'<h2>'+esc(t.configErrorTitle)+'</h2>'
    +'<p class="auth-hint">'+esc(t.configErrorMsg)+'</p>'
  );
}
function renderAuthScreen(){
  switch(uiAuthView){
    case 'splash': return renderSplash();
    case 'config-error': return renderConfigError();
    case 'signup': return renderSignup();
    case 'check-email': return renderCheckEmail();
    case 'forgot': return renderForgot();
    case 'forgot-sent': return renderForgotSent();
    case 'reset-password': return renderResetPassword();
    default: return renderLogin();
  }
}

/* ---------------- light/dark theme ---------------- */
function resolvedTheme(){
  if(STATE.theme === 'light' || STATE.theme === 'dark') return STATE.theme;
  try{ return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'; }catch(e){ return 'light'; }
}
function applyTheme(){
  if(STATE.theme === 'light' || STATE.theme === 'dark'){
    document.documentElement.setAttribute('data-theme', STATE.theme);
  } else {
    document.documentElement.removeAttribute('data-theme'); // follow system (prefers-color-scheme)
  }
}
function renderThemeToggleButton(extraClass){
  var lang = STATE.lang || 'fr';
  var t = T(lang);
  var current = resolvedTheme();
  var icon = current === 'dark' ? '☀️' : '🌙';
  var label = current === 'dark' ? t.themeToLight : t.themeToDark;
  return '<button type="button" class="theme-toggle'+(extraClass?' '+extraClass:'')+'" data-action="toggle-theme" aria-label="'+esc(label)+'">'+icon+'</button>';
}

/* ---------------- cat companion (CSS/SVG mascot) ---------------- */
var CAT_MESSAGES = {
  fr: {
    idle: ["Prêt à apprendre un peu de français aujourd'hui ?", "Un petit quiz te dit ?", "Miaou ! Je suis là si tu as besoin d'un coup de patte."],
    happy: ["Bravo, continue comme ça !", "Ta série est en feu ! 🔥", "Je suis fier de toi !"],
    excited: ["INCROYABLE ! Quel score !", "Wouah, tu déchires !", "On célèbre ça ! 🎉"],
    sad: ["Pas grave, on retente demain.", "Chaque erreur est une leçon.", "Je crois en toi, allez !"],
    sleepy: ["Il est tard... on continue demain ?", "Zzz... pense à te reposer aussi."]
  },
  en: {
    idle: ["Ready to learn some French today?", "Fancy a quick quiz?", "Meow! I'm here if you need a paw."],
    happy: ["Nice work, keep it up!", "Your streak is on fire! 🔥", "I'm proud of you!"],
    excited: ["AMAZING! What a score!", "Wow, you're crushing it!", "Let's celebrate! 🎉"],
    sad: ["No worries, try again tomorrow.", "Every mistake is a lesson.", "I believe in you, let's go!"],
    sleepy: ["It's getting late... continue tomorrow?", "Zzz... remember to rest too."]
  }
};
function pickCatMessage(mood, lang){
  var pool = (CAT_MESSAGES[lang]||CAT_MESSAGES.fr)[mood] || (CAT_MESSAGES[lang]||CAT_MESSAGES.fr).idle;
  return pool[Math.floor(Math.random()*pool.length)];
}
function computeIdleCatMood(state){
  var todayIdx = currentDayIndex(state);
  if(todayIdx >= 2 && todayIdx <= TOTAL_DAYS+1){
    if(dayStatus(state, todayIdx-1, todayIdx) === 'missed') return 'sad';
  }
  var hour = new Date().getHours();
  if(hour >= 23 || hour < 5) return 'sleepy';
  if(computeStreak(state) >= 3) return 'happy';
  return 'idle';
}
/* sets a temporary mood (e.g. reacting to a quiz result), then fades back to the
   ambient idle mood computed from streak/day status after `ms` milliseconds */
function pulseCatMood(mood, ms){
  clearTimeout(catMoodTimer);
  uiCatMood = mood;
  catMoodTimer = setTimeout(function(){ uiCatMood = computeIdleCatMood(STATE); render(); }, ms || 4500);
}
function renderCatSVG(mood){
  var eyes, mouth, extra = '';
  switch(mood){
    case 'happy':
      eyes = '<path d="M28 46 Q34 38 40 46" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><path d="M60 46 Q66 38 72 46" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      mouth = '<path d="M40 58 Q50 68 60 58" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      extra = '<circle cx="24" cy="55" r="5" fill="var(--accent-pink)" opacity="0.55"/><circle cx="76" cy="55" r="5" fill="var(--accent-pink)" opacity="0.55"/>';
      break;
    case 'excited':
      eyes = '<path d="M27 40 L34 47 M34 40 L27 47" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><path d="M66 40 L73 47 M73 40 L66 47" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      mouth = '<ellipse cx="50" cy="60" rx="9" ry="7" fill="var(--ink)"/>';
      extra = '<path d="M15 20 L18 26 M85 20 L82 26 M50 8 L50 15" stroke="var(--accent-amber)" stroke-width="3" stroke-linecap="round"/>';
      break;
    case 'sad':
      eyes = '<path d="M28 44 Q34 50 40 44" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><path d="M60 44 Q66 50 72 44" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      mouth = '<path d="M40 62 Q50 54 60 62" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      extra = '<path d="M32 60 L30 68 M68 60 L70 68" stroke="var(--accent-blue)" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>';
      break;
    case 'sleepy':
      eyes = '<path d="M27 45 L41 45" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><path d="M59 45 L73 45" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      mouth = '<path d="M45 58 Q50 62 55 58" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
      extra = '<text x="70" y="26" font-size="13" fill="var(--ink-faint)" font-family="Nunito, sans-serif" font-weight="800">z</text><text x="79" y="18" font-size="9" fill="var(--ink-faint)" font-family="Nunito, sans-serif" font-weight="800">z</text>';
      break;
    default: // idle
      eyes = '<circle cx="34" cy="45" r="4.5" fill="var(--ink)" class="cat-blink"/><circle cx="66" cy="45" r="4.5" fill="var(--ink)" class="cat-blink"/>';
      mouth = '<path d="M42 58 Q50 64 58 58" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>';
  }
  return ''
  +'<svg viewBox="0 0 100 100" class="cat-svg cat-mood-'+mood+'" aria-hidden="true">'
    +'<path d="M20 30 L28 8 L38 26 Z" fill="var(--accent-pink-soft)" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>'
    +'<path d="M80 30 L72 8 L62 26 Z" fill="var(--accent-pink-soft)" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>'
    +'<circle cx="50" cy="52" r="38" fill="var(--surface)" stroke="var(--ink)" stroke-width="2.5"/>'
    +eyes + mouth + extra
  +'</svg>';
}
function renderCatCompanion(){
  var lang = STATE.lang || 'fr';
  var t = T(lang);
  return ''
  +'<div class="cat-companion">'
    +(uiCatBubbleOpen ? '<div class="cat-bubble">'+esc(uiCatBubbleMsg)+'</div>' : '')
    +'<button type="button" class="cat-avatar" data-action="cat-tap" aria-label="'+esc(t.catAria)+'">'+renderCatSVG(uiCatMood)+'</button>'
  +'</div>';
}

/* ---------------- top bar (profile / logout / settings) ---------------- */
function renderTopBar(){
  var lang = STATE.lang || 'fr';
  var t = T(lang);
  var email = uiAuthUser ? uiAuthUser.email : '';
  var initial = email ? email.charAt(0).toUpperCase() : '?';
  var locked = isStartDateLocked(STATE);
  return ''
  +'<header class="top-bar">'
    +'<div class="top-brand">🥐 <span>'+esc(t.heroSub)+'</span></div>'
    +'<div class="top-profile">'
      +renderThemeToggleButton()
      +'<button type="button" class="profile-avatar" data-action="toggle-profile-menu" aria-label="'+esc(t.auth.profileMenuAria)+'">'+esc(initial)+'</button>'
      +(uiProfileMenuOpen ? (''
        +'<div class="profile-menu">'
          +'<div class="profile-email">'+esc(email)+'</div>'
          +'<button type="button" class="profile-menu-item" data-action="restart-tour">🐱 '+esc(t.auth.replayTour)+'</button>'
          +'<button type="button" class="profile-menu-item"'+(locked?' disabled':'')+' data-action="open-day1-modal">📅 '+esc(t.auth.changeDay1)+'</button>'
          +'<button type="button" class="profile-menu-item danger" data-action="auth-logout">🚪 '+esc(t.auth.logout)+'</button>'
        +'</div>'
      ) : '')
    +'</div>'
  +'</header>';
}

/* ---------------- Day 1 picker modal ---------------- */
function renderDay1Modal(){
  var lang = STATE.lang || 'fr';
  var t = T(lang);
  var today = new Date();
  var iso = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  var val = STATE.startDate || iso;
  return ''
  +'<div class="overlay day1-overlay">'
    +'<div class="panel day1-modal" role="dialog" aria-modal="true" aria-label="'+esc(t.auth.day1Title)+'">'
      +'<div class="day1-icon">📅</div>'
      +'<h3>'+esc(t.auth.day1Title)+'</h3>'
      +'<p class="auth-hint">'+esc(t.auth.day1Hint)+'</p>'
      +'<input type="date" id="day1-input" class="auth-input" value="'+esc(val)+'">'
      +'<button type="button" class="fc-btn primary auth-submit" data-action="confirm-day1">'+esc(t.auth.day1Confirm)+'</button>'
    +'</div>'
  +'</div>';
}

/* ---------------- guided tour ---------------- */
var TOUR_STEPS = [
  { target: '[data-tour="calendar"]', key: 'calendar' },
  { target: '[data-tab="test"]', key: 'test' },
  { target: '[data-tab="results"]', key: 'results' },
  { target: '.profile-avatar', key: 'profile' },
  { target: '.cat-avatar', key: 'cat' }
];
function startTour(){ uiActiveTab = 'plan'; uiTourStep = 0; render(); } // step 1 targets the calendar, which only exists on the Plan tab
function renderTourOverlay(){
  if(uiTourStep === null) return '';
  var lang = STATE.lang || 'fr';
  var t = T(lang).tour;
  var step = TOUR_STEPS[uiTourStep];
  var isLast = uiTourStep === TOUR_STEPS.length - 1;
  return ''
  +'<div class="tour-layer">'
    // .tour-dismiss is a plain full-screen tap target so anywhere outside the tooltip closes the
    // tour; .tour-backdrop's darkened area is only a box-shadow (a visual "curtain" around the
    // spotlight cutout), which is never hit-testable, so it can't carry the tap handler itself
    +'<div class="tour-dismiss" data-action="tour-skip"></div>'
    +'<div class="tour-backdrop" id="tour-backdrop"></div>'
    +'<div class="tour-tooltip" id="tour-tooltip">'
      +'<div class="tour-cat">'+renderCatSVG('excited')+'</div>'
      +'<div class="tour-msg">'+esc(t[step.key])+'</div>'
      +'<div class="tour-actions">'
        +'<button type="button" class="auth-link" data-action="tour-skip">'+esc(t.skip)+'</button>'
        +'<button type="button" class="fc-btn primary" data-action="tour-next">'+esc(isLast ? t.done : t.next)+'</button>'
      +'</div>'
    +'</div>'
  +'</div>';
}
/* Positions the spotlight cutout + tooltip against the current step's target. Everything here is
   clamped to the viewport: on narrow/short mobile screens a target can be taller than the screen
   (e.g. the whole calendar grid), which previously produced a spotlight almost as big as the
   viewport and pushed the tooltip's Skip/Next buttons off-screen entirely. */
function positionTour(){
  if(uiTourStep === null) return;
  var step = TOUR_STEPS[uiTourStep];
  var target = document.querySelector(step.target);
  var backdrop = document.getElementById('tour-backdrop');
  var tooltip = document.getElementById('tour-tooltip');
  if(!target || !backdrop || !tooltip) return;
  var vw = window.innerWidth, vh = window.innerHeight;
  var r = target.getBoundingClientRect();
  var pad = 8;
  var sx = Math.max(4, r.left - pad);
  var sy = Math.max(4, r.top - pad);
  var sw = Math.min(r.width + pad*2, vw - sx - 4);
  var sh = Math.min(r.height + pad*2, vh - sy - 4);
  backdrop.style.setProperty('--sx', sx+'px');
  backdrop.style.setProperty('--sy', sy+'px');
  backdrop.style.setProperty('--sw', Math.max(0,sw)+'px');
  backdrop.style.setProperty('--sh', Math.max(0,sh)+'px');

  var rTop = Math.max(0, Math.min(r.top, vh));
  var rBottom = Math.max(0, Math.min(r.bottom, vh));
  var spaceBelow = vh - rBottom, spaceAbove = rTop;
  var placeAbove = spaceBelow < 190 && spaceAbove > 190;
  var top = placeAbove ? (rTop - 12) : (rBottom + 12);
  tooltip.style.transform = placeAbove ? 'translate(-50%, -100%)' : 'translate(-50%, 0)';
  tooltip.style.top = top + 'px';
  tooltip.style.left = Math.max(150, Math.min(vw-150, r.left + r.width/2)) + 'px';
  // second pass once the browser has laid the tooltip out: pull it fully back on-screen if it still overflows
  requestAnimationFrame(function(){
    var tr = tooltip.getBoundingClientRect();
    var dy = 0;
    if(tr.top < 8) dy = 8 - tr.top;
    else if(tr.bottom > vh - 8) dy = (vh - 8) - tr.bottom;
    if(dy) tooltip.style.top = (top + dy) + 'px';
  });
}

function renderHero(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var idx = currentDayIndex(state);
  var dayLabel = idx < 1 ? t.notStarted : (idx > TOTAL_DAYS ? t.planDone : t.dayWord+" "+idx);
  var ph = phaseOf(Math.max(1, Math.min(idx, TOTAL_DAYS)), lang);
  var streak = computeStreak(state);
  var pct = computeOverallPct(state);
  return ''
  +'<section class="hero">'
    +'<div class="hero-top">'
      +'<div><h1>'+t.heroTitle+'</h1>'
      +'<div class="sub">'+esc(t.heroSub)+'</div>'
      +'<p class="tag">'+esc(t.heroTag)+'</p></div>'
      +'<div class="controls">'
        +'<div class="exam-toggle" role="group" aria-label="'+esc(t.examAria)+'">'
          +'<button type="button" data-action="set-exam" data-exam="TEF" class="'+(state.examTarget==='TEF'?'active':'')+'">TEF Canada</button>'
          +'<button type="button" data-action="set-exam" data-exam="TCF" class="'+(state.examTarget==='TCF'?'active':'')+'">TCF Canada</button>'
        +'</div>'
        +'<div class="exam-toggle" role="group" aria-label="'+esc(t.langAria)+'">'
          +'<button type="button" data-action="set-lang" data-lang="fr" class="'+(lang==='fr'?'active':'')+'">FR</button>'
          +'<button type="button" data-action="set-lang" data-lang="en" class="'+(lang==='en'?'active':'')+'">EN</button>'
        +'</div>'
      +'</div>'
    +'</div>'
    +(function(){
      var locked = isStartDateLocked(state);
      return '<div class="start-row"><label for="start-date-input">'+esc(t.startLabel)+'</label>'
        +'<input id="start-date-input" type="date" value="'+esc(state.startDate)+'" data-action="set-start"'+(locked?' disabled':'')+'>'
        +(locked?'<span class="start-lock" title="'+esc(t.startLockHint)+'">🔒</span>':'')
      +'</div>'
      +(locked?'<div class="start-lock-note">🔒 '+esc(t.startLockHint)+'</div>':'');
    })()
    +'<div class="stats">'
      +'<div class="stat"><div class="k">'+esc(t.statToday)+'</div><div class="v tabular">'+dayLabel+(idx>=1&&idx<=TOTAL_DAYS?' <small>/ 90</small>':'')+'</div></div>'
      +'<div class="stat phase"><div class="k">'+esc(t.statPhase)+'</div><div class="v">'+esc(ph.name)+'</div></div>'
      +'<div class="stat"><div class="k">'+esc(t.statStreak)+'</div><div class="v tabular">🔥 '+streak+' <small>'+esc(t.dayUnit)+(streak===1?'':'s')+'</small></div></div>'
      +'<div class="stat"><div class="k">'+esc(t.statProgress)+'</div><div class="v tabular">'+pct+'<small>%</small></div></div>'
    +'</div>'
    +'<div class="callout"><span class="ic">💡</span><span>'+esc(t.reality)+'</span></div>'
  +'</section>';
}

function renderLegend(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  return ''
  +'<div class="section">'
    +'<div class="phase-legend">'
      +'<span class="chip p1"><span class="dot"></span>'+t.daysWord+' 1–30 · '+esc(t.legendLabels.phase1)+'</span>'
      +'<span class="chip p2"><span class="dot"></span>'+t.daysWord+' 31–60 · '+esc(t.legendLabels.phase2)+'</span>'
      +'<span class="chip p3"><span class="dot"></span>'+t.daysWord+' 61–75 · '+esc(t.legendLabels.phase3)+'</span>'
      +'<span class="chip p4"><span class="dot"></span>'+t.daysWord+' 76–90 · '+esc(t.legendLabels.phase4)+'</span>'
    +'</div>'
  +'</div>';
}

function renderCalendar(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var todayIdx = currentDayIndex(state);
  // figure leading blanks so day 1 aligns under its real weekday (Mon-first grid)
  var day1Weekday = dateForDay(state.startDate,1).getDay(); // 0=Sun..6=Sat
  var leadBlanks = (day1Weekday===0) ? 6 : day1Weekday-1;
  var flat = [];
  for(var i=0;i<leadBlanks;i++){ flat.push('<button type="button" class="day empty" tabindex="-1" aria-hidden="true"></button>'); }
  for(var day=1; day<=TOTAL_DAYS; day++){
    var ph = phaseOf(day, lang);
    var done = isDayDone(state, day);
    var isToday = (day===todayIdx);
    var status = dayStatus(state, day, todayIdx);
    var badge = status ? DAY_STATUS_BADGE[status] : '';
    var cls = 'day '+ph.cls+(done?' done':'')+(status?' '+status:'')+(isToday?' today':'');
    flat.push('<button type="button" class="'+cls+'" data-action="open-day" data-day="'+day+'">'
      +(badge?'<span class="day-badge" aria-hidden="true">'+badge+'</span>':'')
      +'<span class="num tabular">'+day+'</span>'
      +'<span class="frac tabular">'+esc(dayFraction(state,day))+'</span>'
      +'</button>');
  }
  var rowsHtml = '';
  for(var r=0; r<flat.length; r+=7){
    rowsHtml += '<div class="cal-week">' + flat.slice(r, r+7).join('') + '</div>';
  }
  return ''
  +'<div class="section">'
    +'<div class="section-head" data-tour="calendar"><h2>'+esc(t.calTitle)+'</h2><span class="hint">'+esc(t.calHint)+'</span></div>'
    +'<div class="cal-scroll"><div class="cal">'
      +'<div class="cal-weekdays">'+t.weekdays.map(function(h){return '<span>'+esc(h)+'</span>';}).join('')+'</div>'
      +rowsHtml
    +'</div></div>'
  +'</div>';
}

function renderPanel(state, day){
  if(!day) return '';
  var lang = state.lang || 'fr';
  var t = T(lang);
  var wd = dateForDay(state.startDate, day).getDay();
  var blocks = blocksForWeekday(wd);
  var done = state.tasks[day] || [];
  var ph = phaseOf(day, lang);
  var dateStr = dateForDay(state.startDate, day).toLocaleDateString(t.locale, {weekday:'long', day:'numeric', month:'long'});
  var blockRows = blocks.map(function(b){
    var checked = done.indexOf(b.id)!==-1;
    var timeStr = b.time || t.timeLabels[b.timeKey];
    var label = t.blockLabels[b.id];
    return '<label class="block'+(checked?' checked':'')+'">'
      +'<input type="checkbox" data-action="toggle-block" data-day="'+day+'" data-block="'+b.id+'" '+(checked?'checked':'')+'>'
      +'<span class="ic">'+b.ic+'</span>'
      +'<span class="txt"><div class="time">'+esc(timeStr)+'</div><div class="lbl">'+esc(label)+'</div><div class="det">'+esc(detailFor(b.id, day, wd, state, lang))+'</div></span>'
      +'</label>';
  }).join('');
  return ''
  +'<div class="overlay" data-action="close-overlay">'
    +'<div class="panel" role="dialog" aria-modal="true" aria-label="'+esc(t.dayPanelAria)+' '+day+'">'
      +'<div class="panel-head"><div><h3>'+esc(t.dayPanelTitle)+' '+day+'</h3><div class="meta">'+esc(dateStr)+'</div></div>'
      +'<button type="button" class="close" data-action="close-panel" aria-label="'+esc(t.closeAria)+'">✕</button></div>'
      +'<span class="phase-badge chip '+ph.cls+'">'+esc(ph.name)+' · '+esc(ph.range)+'</span>'
      +'<div class="block-list">'+blockRows+'</div>'
    +'</div>'
  +'</div>';
}

function renderSkills(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var prog = computeSkillProgress(state);
  var colorFor = { grammar:"var(--accent-blue)", vocab:"var(--accent-pink)", listening:"var(--accent-green)", reading:"var(--accent-amber)", speaking:"var(--accent-pink)", writing:"var(--accent-blue)" };
  var tiles = SKILL_CATS.map(function(s){
    var p = prog[s.id]; var pct = p.total ? Math.round(p.done/p.total*100) : 0;
    return '<div class="skill"><div class="top"><span>'+s.ic+' '+esc(t.skillLabels[s.id])+'</span><span class="pct tabular">'+pct+'%</span></div>'
      +'<div class="bar"><span style="width:'+pct+'%; background:'+colorFor[s.id]+';"></span></div></div>';
  }).join('');
  return ''
  +'<div class="section">'
    +'<div class="section-head"><h2>'+esc(t.skillsTitle)+'</h2><span class="hint">'+esc(t.skillsHint)+'</span></div>'
    +'<div class="skills">'+tiles+'</div>'
  +'</div>';
}

function renderFlashcards(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var deckButtons = FLASHCARD_DECKS.map(function(d){
    var scoreEntry = state.quizScores[d.key];
    var best = scoreEntry ? scoreEntry.best : null;
    return '<button type="button" class="deck-pill'+(uiDeckKey===d.key?' active':'')+'" data-action="select-deck" data-deck="'+d.key+'">'
      +esc(deckTitle(d.key, lang))+(best!=null?'<span class="best">'+best+'%</span>':'')
      +'</button>';
  }).join('');

  var body;
  if(!uiDeckKey){
    body = '<div class="fc-empty">'+esc(t.fcEmpty)+'</div>';
  } else if(uiQuiz){
    body = renderQuiz(state, lang, t);
  } else {
    body = renderFlashcardViewer(state, lang, t);
  }

  return ''
  +'<div class="section">'
    +'<div class="section-head"><h2>'+esc(t.fcTitle)+'</h2><span class="hint">'+esc(t.fcHint)+'</span></div>'
    +'<div class="deck-scroll"><div class="deck-row" role="group" aria-label="'+esc(t.fcDeckAria)+'">'+deckButtons+'</div></div>'
    +body
  +'</div>';
}

function renderFlashcardViewer(state, lang, t){
  var deck = findDeck(uiDeckKey);
  if(!deck) return '';
  if(uiCardOrder.length !== deck.cards.length){ uiCardOrder = deck.cards.map(function(_,i){ return i; }); uiCardIndex = 0; }
  var cardIdx = uiCardOrder[uiCardIndex];
  var card = deck.cards[cardIdx];
  var scoreEntry = state.quizScores[uiDeckKey];
  var best = scoreEntry ? scoreEntry.best : null;
  return ''
  +'<div class="fc-wrap">'
    +'<div class="fc-counter tabular">'+esc(t.fcCounter)+' '+(uiCardIndex+1)+' / '+deck.cards.length+'</div>'
    +'<div class="flashcard'+(uiCardFlipped?' flipped':'')+'" data-action="flip-card">'
      +'<div class="flashcard-inner">'
        +'<div class="flashcard-face front">'
          +'<div class="fc-row"><div class="word">'+esc(card.fr)+'</div>'
            +'<button type="button" class="speak-btn" data-action="speak" data-lang="fr-FR" data-text="'+esc(card.fr)+'" aria-label="'+esc(t.listenAria)+'">🔊</button></div>'
          +'<div class="pron">/ '+esc(card.pron)+' /</div>'
          +'<div class="fc-ex-row"><div class="ex">'+esc(card.ex)+'</div>'
            +'<button type="button" class="speak-btn small" data-action="speak" data-lang="fr-FR" data-text="'+esc(card.ex)+'" aria-label="'+esc(t.listenAria)+'">🔊</button></div>'
          +'<div class="hint">'+esc(t.fcFlipHint)+'</div>'
        +'</div>'
        +'<div class="flashcard-face back">'
          +'<div class="fc-row"><div class="word">'+esc(card.en)+'</div></div>'
          +'<div class="ex">'+esc(card.exEn)+'</div>'
          +'<div class="hint">'+esc(t.fcFlipHint)+'</div>'
        +'</div>'
      +'</div>'
    +'</div>'
    +'<div class="fc-controls">'
      +'<button type="button" class="fc-btn" data-action="card-prev">'+esc(t.fcPrev)+'</button>'
      +'<button type="button" class="fc-btn" data-action="shuffle-deck">'+esc(t.fcShuffle)+'</button>'
      +'<button type="button" class="fc-btn" data-action="card-next">'+esc(t.fcNext)+'</button>'
    +'</div>'
    +'<button type="button" class="fc-btn primary" data-action="start-quiz">'+esc(t.fcStartQuiz)+' ('+deck.cards.length+')</button>'
    +(best!=null ? '<div class="fc-best">'+esc(t.fcBest)+': '+best+'%</div>' : '')
  +'</div>';
}

function renderQuiz(state, lang, t){
  if(uiQuiz.finished){
    var pct = Math.round(uiQuiz.score/uiQuiz.questions.length*100);
    var tier = quizTier(pct);
    var tierMsg = { great:t.quizTierGreat, good:t.quizTierGood, ok:t.quizTierOk, low:t.quizTierLow }[tier];
    return ''
    +'<div class="quiz-wrap"><div class="quiz-results tier-'+tier+'">'
      +'<h3>'+esc(t.quizResultsTitle)+'</h3>'
      +'<div class="score tabular">'+pct+'%</div>'
      +'<div class="tier-msg">'+esc(tierMsg)+'</div>'
      +'<div>'+uiQuiz.score+' '+esc(t.quizScoreOf)+' '+uiQuiz.questions.length+'</div>'
      +'<div class="fc-controls" style="margin-top:16px;">'
        +'<button type="button" class="fc-btn primary" data-action="quiz-retake">'+esc(t.quizRetake)+'</button>'
        +'<button type="button" class="fc-btn" data-action="quiz-back">'+esc(t.quizBack)+'</button>'
      +'</div>'
    +'</div></div>';
  }
  var q = uiQuiz.questions[uiQuiz.idx];
  var promptTemplate = q.dir==='fr2en' ? t.quizPromptFr2En : t.quizPromptEn2Fr;
  var promptText = promptTemplate.replace('{w}', q.promptWord);
  var choicesHtml = q.choices.map(function(choice){
    var cls = 'quiz-choice';
    var disabledAttr = uiQuiz.answered ? 'disabled' : '';
    if(uiQuiz.answered){
      if(choice===q.correct) cls += ' correct';
      else if(choice===uiQuiz.selected) cls += ' wrong';
    }
    return '<button type="button" class="'+cls+'" '+disabledAttr+' data-action="quiz-answer" data-choice="'+esc(choice)+'">'+esc(choice)+'</button>';
  }).join('');
  var isLast = uiQuiz.idx === uiQuiz.questions.length-1;
  return ''
  +'<div class="quiz-wrap">'
    +'<div class="quiz-progress tabular">'+esc(t.quizProgress)+' '+(uiQuiz.idx+1)+' / '+uiQuiz.questions.length+'</div>'
    +'<div class="quiz-q"><div class="prompt-row"><div class="prompt">'+esc(promptText)+'</div>'
      +'<button type="button" class="speak-btn" data-action="speak" data-lang="'+(q.dir==='fr2en'?'fr-FR':'en-US')+'" data-text="'+esc(q.promptWord)+'" aria-label="'+esc(t.listenAria)+'">🔊</button></div>'
      +'<div class="quiz-choices">'+choicesHtml+'</div>'
    +'</div>'
    +(uiQuiz.answered ? '<div class="quiz-next-row"><button type="button" class="fc-btn primary" data-action="quiz-next">'+esc(isLast ? t.quizSeeResults : t.quizNext)+'</button></div>' : '')
  +'</div>';
}

function renderResults(state){
  var lang = state.lang || 'fr';
  var t = T(lang), tr = t.results;
  var history = (state.quizHistory || []).slice().reverse();
  var total = history.length;
  var avg = total ? Math.round(history.reduce(function(s,h){ return s+h.pct; },0)/total) : 0;
  var best = 0; history.forEach(function(h){ if(h.pct>best) best=h.pct; });
  var summary = ''
    +'<div class="results-summary">'
      +'<div class="results-stat"><div class="v tabular">'+total+'</div><div class="k">'+esc(tr.totalLabel)+'</div></div>'
      +'<div class="results-stat"><div class="v tabular">'+avg+'%</div><div class="k">'+esc(tr.avgLabel)+'</div></div>'
      +'<div class="results-stat"><div class="v tabular">'+best+'%</div><div class="k">'+esc(tr.bestLabel)+'</div></div>'
    +'</div>';
  var body;
  if(!total){
    body = '<div class="results-empty">'+esc(tr.empty)+'</div>';
  } else {
    var tierEmoji = { great:'🌟', good:'🎉', ok:'🙂', low:'💪' };
    body = '<div class="results-list">'+history.map(function(h){
      var tier = quizTier(h.pct);
      var dateStr = new Date(h.date).toLocaleDateString(t.locale, {day:'numeric', month:'short', year:'numeric'});
      return '<div class="result-row tier-'+tier+'">'
        +'<span class="result-emoji">'+tierEmoji[tier]+'</span>'
        +'<div class="result-info"><div class="result-deck">'+esc(deckTitle(h.deck, lang))+'</div><div class="result-date">'+esc(dateStr)+'</div></div>'
        +'<div class="result-score tabular">'+h.pct+'%</div>'
      +'</div>';
    }).join('')+'</div>';
  }
  return ''
  +'<div class="section">'
    +'<div class="section-head"><h2>'+esc(tr.title)+'</h2><span class="hint">'+esc(tr.hint)+'</span></div>'
    +summary + body
  +'</div>';
}

function renderNotebook(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var order = ["listening","reading","speaking","writing"];
  var cards = order.map(function(id){
    var c = t.noteCats[id];
    return '<div class="card-note"><div class="head">🗂️ '+esc(c.label)+'</div>'
      +'<textarea data-action="note" data-cat="'+id+'" placeholder="'+esc((lang==='en'?'e.g. ':'Ex. ')+c.ph)+'">'+esc(state.notes[id]||'')+'</textarea></div>';
  }).join('');
  return ''
  +'<div class="section">'
    +'<div class="section-head"><h2>'+esc(t.notebookTitle)+'</h2><span class="hint">'+esc(t.notebookHint)+'</span></div>'
    +'<div class="notebook">'+cards+'</div>'
  +'</div>';
}

function renderFooter(state){
  var lang = state.lang || 'fr';
  var t = T(lang);
  return ''
  +'<div class="footer">'
    +'<div class="cycle">'+t.cycle.map(esc).join(' <b>→</b> ')+'</div>'
    +'<div class="hours-legend">'+t.hours.map(function(h){ return '<span><b>'+esc(h[0])+'</b> '+esc(h[1])+'</span>'; }).join('')+'</div>'
    +'<p class="note">'+esc(t.footNote)+'</p>'
  +'</div>';
}

var NAV_TABS = [
  {id:'plan', ic:'🏠'},
  {id:'test', ic:'🎯'},
  {id:'results', ic:'🏆'},
  {id:'tcf', ic:'🎓'},
  {id:'notebook', ic:'🗂️'}
];
function renderBottomNav(activeTab, lang){
  var t = T(lang);
  return ''
  +'<nav class="bottom-nav" role="navigation" aria-label="'+esc(t.navAria)+'">'
    +NAV_TABS.map(function(tb){
      var isRaised = tb.id === 'test';
      var iconHtml = isRaised ? '<span class="nav-ic-wrap"><span class="nav-ic">'+tb.ic+'</span></span>' : '<span class="nav-ic">'+tb.ic+'</span>';
      return '<button type="button" class="nav-btn'+(isRaised?' nav-btn-raised':'')+(activeTab===tb.id?' active':'')+'" data-action="set-tab" data-tab="'+tb.id+'">'
        +iconHtml+'<span class="nav-lbl">'+esc(t.navLabels[tb.id])+'</span>'
      +'</button>';
    }).join('')
  +'</nav>';
}
function bodyContentHTML(state, openDay){
  var lang = state.lang || 'fr';
  var t = T(lang);
  var tab = uiActiveTab || 'plan';
  var main = '';
  if(tab==='plan') main = renderHero(state) + renderLegend(state) + renderCalendar(state) + renderSkills(state) + renderFooter(state);
  else if(tab==='test') main = renderFlashcards(state);
  else if(tab==='results') main = renderResults(state);
  else if(tab==='tcf') main = renderTcfCalculator(state);
  else if(tab==='notebook') main = renderNotebook(state);
  return renderTopBar()
    + main
    + (openDay ? renderPanel(state, openDay) : '')
    + (uiShowDay1Modal ? renderDay1Modal() : '')
    + renderCatCompanion()
    + renderBottomNav(tab, lang)
    + renderTourOverlay()
    + '<div class="save-flag" id="save-flag">'+esc(t.savedFlag)+'</div>';
}

/* ---------------- persistence (Supabase, per signed-in user) ---------------- */
function flagSaved(){
  var el = document.getElementById('save-flag');
  if(!el) return;
  el.classList.add('show');
  setTimeout(function(){ el.classList.remove('show'); }, 1400);
}
async function saveUserPlan(){
  if(!supabaseClient || !uiAuthUser) return;
  try{
    var res = await supabaseClient.from('plans').upsert({ user_id: uiAuthUser.id, state: STATE, updated_at: new Date().toISOString() });
    if(res.error) throw res.error;
    flagSaved();
  }catch(e){}
}
function scheduleSave(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveUserPlan, 700);
}
async function loadUserPlan(userId){
  try{
    var res = await supabaseClient.from('plans').select('state').eq('user_id', userId).maybeSingle();
    if(res.error) throw res.error;
    if(res.data && res.data.state){
      STATE = mergeState(res.data.state);
    } else {
      STATE = defaultState();
      await supabaseClient.from('plans').insert({ user_id: userId, state: STATE });
    }
  }catch(e){
    STATE = defaultState();
  }
}
async function enterApp(user){
  uiAuthUser = { id: user.id, email: user.email };
  await loadUserPlan(user.id);
  uiAuthError = '';
  uiAuthBusy = false;
  uiAuthView = 'app';
  uiCatMood = computeIdleCatMood(STATE);
  uiShowDay1Modal = !STATE.startDateChangedOnce;
  render();
  if(!uiShowDay1Modal && !STATE.onboardingSeen) startTour();
}
async function initAuthFlow(){
  render(); // paints the splash screen immediately
  if(!supabaseClient){
    uiAuthView = 'config-error';
    render();
    return;
  }
  try{
    var sessionRes = await supabaseClient.auth.getSession();
    var session = sessionRes.data && sessionRes.data.session;
    if(session && session.user){
      await enterApp(session.user);
    } else {
      uiAuthView = 'login';
      render();
    }
  }catch(e){
    uiAuthView = 'login';
    render();
  }
  supabaseClient.auth.onAuthStateChange(function(event, session){
    if(event === 'PASSWORD_RECOVERY'){ uiAuthView = 'reset-password'; render(); return; }
    if(event === 'SIGNED_IN' && session && session.user && uiAuthView !== 'app'){ enterApp(session.user); }
    if(event === 'SIGNED_OUT'){
      uiAuthUser = null; STATE = defaultState(); uiAuthView = 'login';
      uiShowDay1Modal = false; uiProfileMenuOpen = false; uiTourStep = null; uiCatMood = 'idle'; uiCatBubbleOpen = false;
      render();
    }
  });
}
async function doLogin(){
  if(!supabaseClient || uiAuthBusy) return;
  var email = (document.getElementById('auth-email')||{}).value || '';
  var password = (document.getElementById('auth-password')||{}).value || '';
  email = email.trim();
  uiAuthForm.email = email;
  if(!email || !password) return;
  uiAuthBusy = true; uiAuthError = ''; render();
  try{
    var res = await supabaseClient.auth.signInWithPassword({ email: email, password: password });
    if(res.error) throw res.error;
    // onAuthStateChange fires SIGNED_IN and enterApp() takes it from here
  }catch(e){
    uiAuthBusy = false;
    uiAuthError = (e && e.message) || T(preAuthLang()).auth.genericError;
    render();
  }
}
async function doSignup(){
  if(!supabaseClient || uiAuthBusy) return;
  var t = T(preAuthLang()).auth;
  var email = ((document.getElementById('auth-email')||{}).value || '').trim();
  var password = (document.getElementById('auth-password')||{}).value || '';
  var confirm = (document.getElementById('auth-password-confirm')||{}).value || '';
  uiAuthForm.email = email;
  if(!email || !password) return;
  if(password.length < 6){ uiAuthError = t.passwordTooShort; render(); return; }
  if(password !== confirm){ uiAuthError = t.passwordMismatch; render(); return; }
  uiAuthBusy = true; uiAuthError = ''; render();
  try{
    var res = await supabaseClient.auth.signUp({ email: email, password: password });
    if(res.error) throw res.error;
    uiAuthBusy = false;
    if(!(res.data && res.data.session)){
      uiAuthView = 'check-email'; // email confirmation required before a session exists
      render();
    }
    // if a session came back immediately (confirmation disabled), onAuthStateChange -> enterApp() handles it
  }catch(e){
    uiAuthBusy = false;
    uiAuthError = (e && e.message) || t.genericError;
    render();
  }
}
async function doForgotPassword(){
  if(!supabaseClient || uiAuthBusy) return;
  var t = T(preAuthLang()).auth;
  var email = ((document.getElementById('auth-email')||{}).value || '').trim();
  uiAuthForm.email = email;
  if(!email) return;
  uiAuthBusy = true; uiAuthError = ''; render();
  try{
    var res = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
    if(res.error) throw res.error;
    uiAuthBusy = false;
    uiAuthView = 'forgot-sent';
    render();
  }catch(e){
    uiAuthBusy = false;
    uiAuthError = (e && e.message) || t.genericError;
    render();
  }
}
async function doResetPassword(){
  if(!supabaseClient || uiAuthBusy) return;
  var t = T(preAuthLang()).auth;
  var password = (document.getElementById('auth-new-password')||{}).value || '';
  if(!password) return;
  if(password.length < 6){ uiAuthError = t.passwordTooShort; render(); return; }
  uiAuthBusy = true; uiAuthError = ''; render();
  try{
    var res = await supabaseClient.auth.updateUser({ password: password });
    if(res.error) throw res.error;
    var sessionRes = await supabaseClient.auth.getSession();
    var session = sessionRes.data && sessionRes.data.session;
    uiAuthBusy = false;
    if(session && session.user){ await enterApp(session.user); }
    else { uiAuthView = 'login'; render(); }
  }catch(e){
    uiAuthBusy = false;
    uiAuthError = (e && e.message) || t.genericError;
    render();
  }
}
async function doLogout(){
  if(!supabaseClient) return;
  try{ await supabaseClient.auth.signOut(); }catch(e){}
  // onAuthStateChange's SIGNED_OUT branch resets STATE and switches back to the login view
}

/* ---------------- render + events ---------------- */
function render(){
  document.documentElement.setAttribute('lang', STATE.lang || 'fr');
  applyTheme();
  var root = document.getElementById('root');
  root.innerHTML = uiAuthView !== 'app' ? renderAuthScreen() : bodyContentHTML(STATE, uiOpenDay);
  if(uiAuthView === 'app' && uiTourStep !== null) positionTour();
}

function onRootClick(e){
  if(uiProfileMenuOpen && !e.target.closest('[data-action="toggle-profile-menu"]') && !e.target.closest('.profile-menu')){
    uiProfileMenuOpen = false; render();
    return;
  }
  var t = e.target.closest('[data-action]');
  if(!t) return;
  var action = t.getAttribute('data-action');
  if(action==='toggle-profile-menu'){ uiProfileMenuOpen = !uiProfileMenuOpen; render(); return; }
  if(action==='restart-tour'){ uiProfileMenuOpen = false; startTour(); return; }
  if(action==='open-day1-modal'){ uiProfileMenuOpen = false; uiShowDay1Modal = true; render(); return; }
  if(action==='confirm-day1'){
    var day1Val = (document.getElementById('day1-input')||{}).value;
    if(day1Val){
      STATE.startDate = day1Val;
      STATE.startDateChangedOnce = true;
      uiShowDay1Modal = false;
      scheduleSave();
      if(!STATE.onboardingSeen) startTour(); else render();
    }
    return;
  }
  if(action==='toggle-theme'){
    STATE.theme = resolvedTheme() === 'dark' ? 'light' : 'dark';
    render();
    scheduleSave();
    return;
  }
  if(action==='cat-tap'){
    uiCatBubbleOpen = !uiCatBubbleOpen;
    if(uiCatBubbleOpen){ uiCatBubbleMsg = pickCatMessage(uiCatMood, STATE.lang||'fr'); playTone(880,0.05,{type:'sine',volume:0.06}); }
    render();
    return;
  }
  if(action==='tour-next' || action==='tour-skip'){
    if(action==='tour-next' && uiTourStep < TOUR_STEPS.length-1){ uiTourStep++; }
    else { uiTourStep = null; STATE.onboardingSeen = true; scheduleSave(); }
    render();
    return;
  }
  if(action==='auth-goto'){ uiAuthView = t.getAttribute('data-view'); uiAuthError = ''; render(); return; }
  if(action==='auth-login'){ doLogin(); return; }
  if(action==='auth-signup'){ doSignup(); return; }
  if(action==='auth-forgot'){ doForgotPassword(); return; }
  if(action==='auth-reset'){ doResetPassword(); return; }
  if(action==='auth-logout'){ doLogout(); return; }
  if(action==='auth-toggle-password'){
    var input = document.getElementById(t.getAttribute('data-target'));
    if(input){
      var tt = T(preAuthLang()).auth;
      var showingText = input.type === 'text';
      input.type = showingText ? 'password' : 'text';
      t.textContent = showingText ? '👁️' : '🙈';
      t.setAttribute('aria-label', showingText ? tt.showPassword : tt.hidePassword);
    }
    return;
  }
  if(action==='speak'){
    e.stopPropagation();
    speak(t.getAttribute('data-text'), t.getAttribute('data-lang'));
    return;
  }
  if(action==='set-tab'){
    var newTab = t.getAttribute('data-tab');
    uiProfileMenuOpen = false;
    if(newTab !== uiActiveTab){ uiActiveTab = newTab; playClickSound(); render(); }
    return;
  }
  if(action==='open-day'){ uiOpenDay = parseInt(t.getAttribute('data-day'),10); render(); }
  else if(action==='close-panel' || action==='close-overlay'){
    if(action==='close-overlay' && e.target !== t) return; // only backdrop itself
    uiOpenDay = null; render();
  }
  else if(action==='set-exam'){ STATE.examTarget = t.getAttribute('data-exam'); render(); scheduleSave(); }
  else if(action==='set-lang'){ STATE.lang = t.getAttribute('data-lang'); render(); scheduleSave(); }
  else if(action==='select-deck'){
    uiDeckKey = t.getAttribute('data-deck');
    uiCardOrder = []; uiCardIndex = 0; uiCardFlipped = false; uiQuiz = null;
    render();
  }
  else if(action==='flip-card'){
    uiCardFlipped = !uiCardFlipped;
    playFlipSound();
    t.classList.toggle('flipped', uiCardFlipped); // toggle in place so the CSS 3D transition actually plays
  }
  else if(action==='card-prev' || action==='card-next'){
    var deck0 = findDeck(uiDeckKey);
    if(deck0){
      var len0 = deck0.cards.length;
      uiCardIndex = action==='card-prev' ? (uiCardIndex - 1 + len0) % len0 : (uiCardIndex + 1) % len0;
      uiCardFlipped = false;
      playClickSound();
      render();
    }
  }
  else if(action==='shuffle-deck'){
    var deck1 = findDeck(uiDeckKey);
    if(deck1){
      uiCardOrder = shuffleArr(deck1.cards.map(function(_,i){ return i; }));
      uiCardIndex = 0; uiCardFlipped = false;
      playClickSound();
      render();
    }
  }
  else if(action==='start-quiz' || action==='quiz-retake'){
    var deck2 = findDeck(uiDeckKey);
    if(deck2){
      uiQuiz = { questions: buildQuiz(deck2, Math.min(8, deck2.cards.length)), idx:0, score:0, answered:false, selected:null, finished:false };
      render();
    }
  }
  else if(action==='quiz-answer'){
    if(uiQuiz && !uiQuiz.answered){
      var choice = t.getAttribute('data-choice');
      var q = uiQuiz.questions[uiQuiz.idx];
      uiQuiz.answered = true;
      uiQuiz.selected = choice;
      if(choice === q.correct){ uiQuiz.score++; playCorrectSound(); } else { playWrongSound(); }
      speak(choice, q.dir==='fr2en' ? 'en-US' : 'fr-FR'); // read the tapped answer aloud
      render();
    }
  }
  else if(action==='quiz-next'){
    if(uiQuiz){
      if(uiQuiz.idx < uiQuiz.questions.length - 1){
        uiQuiz.idx++; uiQuiz.answered = false; uiQuiz.selected = null;
        playClickSound();
      } else {
        uiQuiz.finished = true;
        var pct = Math.round(uiQuiz.score / uiQuiz.questions.length * 100);
        var prev = STATE.quizScores[uiDeckKey] || { best:0, attempts:0 };
        STATE.quizScores[uiDeckKey] = { best: Math.max(prev.best||0, pct), attempts: (prev.attempts||0)+1 };
        if(!STATE.quizHistory) STATE.quizHistory = [];
        STATE.quizHistory.push({ deck: uiDeckKey, pct: pct, score: uiQuiz.score, total: uiQuiz.questions.length, date: new Date().toISOString() });
        playFanfareSound();
        if(pct >= CONFETTI_THRESHOLD) burstConfetti();
        var tier = quizTier(pct);
        pulseCatMood(tier==='great'||tier==='good' ? 'excited' : (tier==='low' ? 'sad' : 'happy'), 5000);
        scheduleSave();
      }
      render();
    }
  }
  else if(action==='quiz-back'){ uiQuiz = null; render(); }
}
function onRootChange(e){
  var t = e.target;
  if(t.matches('[data-action="toggle-block"]')){
    var day = t.getAttribute('data-day');
    var block = t.getAttribute('data-block');
    var arr = STATE.tasks[day] || [];
    var idx = arr.indexOf(block);
    if(t.checked && idx===-1) arr.push(block);
    if(!t.checked && idx!==-1) arr.splice(idx,1);
    STATE.tasks[day] = arr;
    render();
    scheduleSave();
  } else if(t.matches('[data-action="set-start"]')){
    if(isStartDateLocked(STATE)){ render(); return; } // belt-and-suspenders in case a disabled input still fired
    if(t.value){ STATE.startDate = t.value; STATE.startDateChangedOnce = true; render(); scheduleSave(); }
  }
}
function onRootInput(e){
  var t = e.target;
  if(t.id === 'auth-email'){
    uiAuthForm.email = t.value; // remembered silently; no render() so the field keeps focus while typing
    return;
  }
  if(t.matches('[data-action="note"]')){
    STATE.notes[t.getAttribute('data-cat')] = t.value;
    scheduleSave();
  } else if(t.matches('[data-action="tcf-score"]')){
    var skill = t.getAttribute('data-skill');
    var v = t.value;
    if(!STATE.tcfScores) STATE.tcfScores = { listening:null, reading:null, speaking:null, writing:null };
    STATE.tcfScores[skill] = (v==='' ? null : Number(v));
    updateTcfUI();
    scheduleSave();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('root').addEventListener('click', onRootClick);
  document.getElementById('root').addEventListener('change', onRootChange);
  document.getElementById('root').addEventListener('input', onRootInput);
  try{
    var darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    darkMedia.addEventListener('change', function(){
      if(STATE.theme !== 'light' && STATE.theme !== 'dark') render(); // only matters while following the system setting
    });
  }catch(e){}
  initAuthFlow();
});
