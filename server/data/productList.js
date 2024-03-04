const productList = [
    {
        name: 'Nike Slim Shirt',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Adidas Fit Shirt',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Lacoste Free Shirt',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Nike Slim Pant',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Puma Slim Shirt',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Adidas Fit Pant',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 15,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Lacoste Free Pant',
        image: '/images/p7.jpg',
        price: 130,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 20,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Nike Slim Shorts',
        image: '/images/p8.jpg',
        price: 45,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Adidas Fit Shorts',
        image: '/images/p9.jpg',
        price: 85,
        countInStock: 4,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 12,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Lacoste Free Shorts',
        image: '/images/p10.jpg',
        price: 115,
        countInStock: 11,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 18,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
    {
        name: 'Puma Slim Shorts',
        image: '/images/p11.jpg',
        price: 75,
        countInStock: 7,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 6,
        description: 'Explicabo dolor ea saepe dolorem sint ut. Deleniti corporis quo nisi delectus odio tempore. At dolor voluptas expedita debitis amet occaecati et quod vel. Nobis dolores quia magni dolores est rerum eaque. Expedita beatae sit rerum qui asperiores eaque ab. Tempore dolorum sapiente ipsum.Nemo exercitationem officia explicabo. Accusantium ullam veritatis. Omnis quasi repellendus illo sequi reprehenderit ea.Qui deserunt ab deserunt quo. Exercitationem quia ratione quam doloribus ut quod ut minima dolor. Voluptates vel distinctio commodi excepturi non in accusantium. Deleniti mollitia ex repellendus et accusantium distinctio fuga.'
    },
]

export default productList;