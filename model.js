const model = {
    app: {
        currentPage: 'admin',
        
        darkmode: false,
        editPage: false,
        


    },
    inputs: {
        currentCategory: '',
        surch: '',
        createPost: {
            img: '',
            header: '',
            article: '',
            planPost: ''
        },
        adminLoginPage: {
            username: '',
            password: ''
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
                category: "Interior Designs",
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
                category: "Interior Designs",
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
                        category: "Interior Designs",
                        showArticleText: false
                        
                    },
                    {
                        id: 4,
                        header: 'Eames Lounge Chair',
                        img: "Eames Lounge Chair.jpg",
                        article: `En ikonisk lenestol i mid-century modern-stil, 
                                designet av Charles og Ray Eames. Den har en elegant, 
                                kurvet form med en skallignende stolbase av formpresset 
                                finér, vanligvis i valnøtt eller teak. Stolbenene er i 
                                lær med polstring i diamanter, og den har ofte en matching 
                                fotpalle. Den står på en fem-armet metallfot med mørke trekkuler, 
                                noe som gir den en luftig, flytende estetikk.`,
                        category: "Furniture",       
                        showArticleText: false
                    },
                    {
                        id: 5,
                        header: 'Wegner’s The Chair (Y-stolen)',
                        img: "Wegner’s The Chair.jpg",
                        article: `Designet av Hans J. Wegner, denne danske klassikeren 
                                er kjent for sin enkle, men raffinerte form. Den har en 
                                solid trekonstruksjon (ofte i eik eller teak) med en håndsveisede 
                                rygg som danner en elegant "Y"-form. Setet er av lær eller tekstil, 
                                og stolen har ofte fire svakt buede ben som gir den en stabil, 
                                men lett utforming`,
                        category: "Furniture",
                        showArticleText: false
                    },
                    {
                        id: 6,
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
                        category: "Furniture",
                        showArticleText: false
                    },
                    {
                        id: 7,
                        header: 'Pallet Coffee Table',
                        img: "Pallet Coffee Table.jpg",
                        article: `Materials Needed:

                                    1 wooden pallet (sandpapered & cleaned)

                                    4 hairpin legs or wooden blocks for legs

                                    Screws & drill

                                    Paint or wood stain (optional)

                                    Glass top (optional for a smoother surface)
                                    How to Make It:

                                    Sand the pallet to remove rough edges.

                                    Paint or stain it to match your decor.

                                    Attach the legs to the bottom corners using screws.

                                    (Optional) Add a glass top for a polished look.

                                    Bonus: Add casters for a movable table`,
                        category: "DIY Ideas",
                        showArticleText: false
                    },
                    {
                        id: 8,
                        header: 'Cinder Block Bookshelf',
                        img: "Cinder Block Bookshelf.jpg",
                        article: `Materials Needed:

                                    4-6 cinder blocks

                                    3-4 wooden planks (cut to desired length)

                                    Spray paint (optional for colorful blocks)

                                    Decorative tape or fabric (optional for plank detailing)

                                    How to Make It:

                                    Arrange cinder blocks vertically or horizontally as the base.

                                    Insert wooden planks into the holes to create shelves.

                                    Customize by painting the blocks or wrapping the planks in fabric.

                                    Bonus: Use it as a room divider or outdoor plant stand!`,
                        category: "DIY Ideas",
                        showArticleText: false
                    },
                    {
                        id: 9,
                        header: 'Rope & Wood Side Table',
                        img: "Rope & Wood Side Table.jpg",
                        article: `Materials Needed:

                                    3 wooden circles or squares (for top, middle, and base)

                                    4-6 thick cotton ropes (for legs)

                                    Wood glue & clamps

                                    Drill

                                    How to Make It:

                                    Drill holes at the corners of each wooden piece.

                                    Thread the rope through the holes, knotting underneath each piece to create tension.

                                    Secure with glue for extra stability.

                                    Bonus: Add a small plant or lamp for a boho-chic look!`,
                        category: "DIY Ideas",
                        showArticleText: false
                    }
        ], 
        categorys: [
            {name: 'Interior Designs', onPage: false},
            {name: 'DIY Ideas', onPage: false},
            {name: 'Furniture', onPage: false},
            {name: 'All Posts', onPage: true},
            
        ],
        accounts: {
            username: 'Mattias',
            password: '123'
        }
    }
}