const model = {
    app: {
        currentPage: ['main', 'furnitureView'],
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
        ], 
        furniture: [
            {
                id: 1,
                header: 'Eames Lounge Chair',
                img: "Eames Lounge Chair.jpg",
                article: `En ikonisk lenestol i mid-century modern-stil, 
                        designet av Charles og Ray Eames. Den har en elegant, 
                        kurvet form med en skallignende stolbase av formpresset 
                        finér, vanligvis i valnøtt eller teak. Stolbenene er i 
                        lær med polstring i diamanter, og den har ofte en matching 
                        fotpalle. Den står på en fem-armet metallfot med mørke trekkuler, 
                        noe som gir den en luftig, flytende estetikk.`,
                showArticleText: false
            },
            {
                id: 2,
                header: 'Wegner’s The Chair (Y-stolen)',
                img: "Wegner’s The Chair.jpg",
                article: `Designet av Hans J. Wegner, denne danske klassikeren 
                        er kjent for sin enkle, men raffinerte form. Den har en 
                        solid trekonstruksjon (ofte i eik eller teak) med en håndsveisede 
                        rygg som danner en elegant "Y"-form. Setet er av lær eller tekstil, 
                        og stolen har ofte fire svakt buede ben som gir den en stabil, 
                        men lett utforming`,
                showArticleText: false
            },
            {
                id: 3,
                header: 'Barcelona Chair (av Ludwig Mies van der Rohe)',
                img: "Barcelona Chair.jpg",
                article: `En luksuriøs og minimalistisk stol designet for den 
                        internasjonale utstillingen i Barcelona i 1929. Den har en sleek, 
                        rektangulær ramme av polert rustfritt stål som danner en elegant 
                        X-form under setet. Putene er av premium lær, ofte i svart eller 
                        hvit, med kvadratiske sømmer som gir den en sofistikert, 
                        strukturell look. Stolens design er både enkelt og monumentalt, 
                        med en lav profil som gjør den perfekt for moderne stuer og 
                        kontorer`,
                showArticleText: false
            }
        ]
    }
}