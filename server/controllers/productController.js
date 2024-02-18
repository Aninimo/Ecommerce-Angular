
const products = [
    { id: 1, name: 'Pacakes and Mapão Syrup', price: 15.00, image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNhbGFkfGVufDB8fDB8fHww' },
    { id: 2, name: 'Plain toast & Butter or Jam', price: 28.00, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Hashbrows ARA Potato Pancakes', price: 50.00, image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHx8fDA%3D' },
    { id: 4, name: 'Tasted English Muftim', price: 25.00, image: 'https://images.unsplash.com/photo-1604909054103-f9ed51a70caf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNhbGFkfGVufDB8fDB8fHww'}
];

function getProducts(req, res) {
    res.json(products);
}

module.exports = {
    getProducts: getProducts
};
