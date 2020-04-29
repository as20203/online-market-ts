export interface Product {
    id:string,
    imgSrc:string,
    productName:string,
    productPrice:string,
    sellerLocation:string,
    creationDate:string,
    imagesList:string[],
    productDetails:any[],
    productDescription:string[]
    
}

export const productList:Product[] = [
    {   
        id:'2343242343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'grocery',
        productPrice:'Rs. 1,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                    'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Model',value:'N Wgn'},
                        {key:'Year',value:'2016'},
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                            "", "- Website Design and Development", "",
                            "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                            "", "- Complete Digital Marketing", "", "- Email Marketing and PPC adds.", 
                            "", "With 7 years of experience and 100s of Happy Clients, we are here to help you!"]
    },
    {
        id:'2343242333',
        imgSrc:'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'abc',
        productPrice:'Rs. 1,000,000,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Model',value:'N Wgn'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing", "", "- Email Marketing and PPC adds.", 
                        "", "With 7 years of experience and 100s of Happy Clients, we are here to help you!"]
        
    },
    {   
        id:'2341242343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'def',
        productPrice:'Rs. 10,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Year',value:'2016'},
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing", "", "- Email Marketing and PPC adds.", 
                        ""]
    },
    {   
        id:'23d3242343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'ghi',
        productPrice:'Rs. 6,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20', 
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Year',value:'2016'},              
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing"]
    },
    {   
        id:'3443242343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'jkl',
        productPrice:'Rs. 3,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Model',value:'N Wgn'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing"]
    },
    {   id:'23432df343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'mno',
        productPrice:'Rs. 1,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing"]
    },
    {   id:'2df32df343',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'sdk',
        productPrice:'Rs. 2,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing"]
        
    },
    {   
        id:'23432df56',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'sdfkjds',
        productPrice:'Rs. 1,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "- E-Commerce Store", "", "- Facebook Advertising and SEO",
                        "", ]
    },
    {   id:'23432df334',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'sdfkj',
        productPrice:'Rs. 1,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'Model',value:'N Wgn'},
                        {key:'Year',value:'2016'},
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                       "", "- Facebook Advertising and SEO",
                        "", "- Complete Digital Marketing"]
    } ,
    {   id:'23432df3434',
        imgSrc:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        productName:'dfkds',
        productPrice:'Rs. 1,000',
        sellerLocation:'Lahore, PK',
        creationDate:'Mar 20',
        imagesList:['https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'],
        productDetails:[{key:'Make',value:'Honda'},
                        {key:'KMs',value:'62,000 km'},
                        {key:"Condition",value:'used'}],
        productDescription:["Hello Everyone! ZeeshanOnline is again proud to an…Our all services are available on 60% off prices.",
                        "", "- Website Design and Development", "",
                        "", "- Complete Digital Marketing"]
    }
];


export const getProduct = (id:any)=>{
    const product = productList.filter(product=>{
        if(product.id===id){
            return true;
        }else{
            return false;
        }
    })
    return product[0];


}