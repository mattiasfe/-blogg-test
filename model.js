const model = {
    app: {
        currentPage: 'main',
        darkmode: false,
        editPage: false,
        


    },
    inputs: {
        surch: '',
        createPost: {
            img: '',
            header: '',
            article: '',
            planPost: ''
        }

    },
    data: {
        posts: [
            {   
                id: 1,
                header: 'Skandinavisk Design',
                img: "skandinavisk stil.jpg",
                article: `Et lyst og luftig rom med hvite vegger,
                        lyse tregulv og minimalistiske møbler i naturlige materialer 
                        som tre og ull. En stor, komfortabel grå sofa med et enkelt teppe 
                        i neutralt fargespekter, og et ikonisk designlampe (f.eks. PH-lampen) 
                        som gir varmt, indirekte lys. Grønne planter og en enkel hylle 
                        med bøker gir liv til rommet.`,
                showArticleText: false
                
            },
            {
                id: 2,
                header: 'Industriell Stil',
                img: "Industriell Stil.jpg",
                article: `Et åpent loft med eksponerte mursteinsvegger, betongulv og synlige
                        rør i taket. Møblene er robuste og laget av metall og reclaimed tre,
                        som et stort bord med stålben og lærstoler. Store vinduer uten
                        gardiner gir naturlig lys, og en stor, svart metallpendellampe henger
                        over spisebordet. En vintage sofa i lær og enkel dekor som gamle
                        skilt eller industrikart gir rommet karakter.`,
                showArticleText: false
            },
            {
                id: 3,
                header: 'Bohemisk (Boho) Stil',
                img: "Bohemisk (Boho) Stil.jpg",
                article: `Et fargerikt og teksturrikt rom med en blanding av mønstre
                        og materialer. En lav seng med en haug av puter i forskjellige 
                        størrelser og et teppeteppe med fransinger på gulvet. Veggene har 
                        veggtepper, vævede væv og plantehengere med drømmefangere. Gulvet 
                        er dekket av en stor, mønstret orientalsk matte, og et 
                        macramé-hylleblad holder bøker og små planter. Naturlig lys strømmer 
                        inn gjennom lette, gjennomsiktige gardiner`,
                showArticleText: false
                
            }
        ] 
    }
}