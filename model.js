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
                article: `Lorem ipsum dolor sit amet, consectetur
                            dipiscing elit. Duis scelerisque dolor mauris, vel consectetur 
                            dui tempor bibendum. Nullam dictum nec nisl at aliquam. Nullam eu 
                             lectus pretium, semper erat vitae, ullamcorper orci. Nam nec libero 
                             sit amet sem iaculis molestie. Nam non nunc a felis congue placerat non 
                             et orci. In quis dictum ipsum. Nulla congue lectus magna, vel cursus ante 
                             volutpat id. Sed vel felis arcu.`,
                showArticleText: false
                
            },
            {
                id: 2,
                header: 'Industriell Stil',
                img: "Industriell Stil.jpg",
                article: `Lorem ipsum dolor sit amet, consectetur
                            dipiscing elit. Duis scelerisque dolor mauris, vel consectetur 
                            dui tempor bibendum. Nullam dictum nec nisl at aliquam. Nullam eu 
                             lectus pretium, semper erat vitae, ullamcorper orci. Nam nec libero 
                             sit amet sem iaculis molestie. Nam non nunc a felis congue placerat non 
                             et orci. In quis dictum ipsum. Nulla congue lectus magna, vel cursus ante 
                             volutpat id. Sed vel felis arcu.`,
                showArticleText: false
            },
            {
                id: 3,
                header: 'Bohemisk (Boho) Stil',
                img: "Bohemisk (Boho) Stil.jpg",
                article: `Lorem ipsum dolor sit amet, consectetur
                            dipiscing elit. Duis scelerisque dolor mauris, vel consectetur 
                            dui tempor bibendum. Nullam dictum nec nisl at aliquam. Nullam eu 
                             lectus pretium, semper erat vitae, ullamcorper orci. Nam nec libero 
                             sit amet sem iaculis molestie. Nam non nunc a felis congue placerat non 
                             et orci. In quis dictum ipsum. Nulla congue lectus magna, vel cursus ante 
                             volutpat id. Sed vel felis arcu.`,
                showArticleText: false
                
            }
        ] 
    }
}