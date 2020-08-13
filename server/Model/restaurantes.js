
class Restaurantes {

    constructor() {
        this.restaurantes = [];
    }

    agregarRestaurante(id, name, kindOfRestaurant, songs) {

        let restaurante = { id, name, kindOfRestaurant, songs};

        this.restaurantes.push(restaurante);

        return this.restaurantes;

    }

    agregarRestaurante(p_restaurante) {

        this.restaurantes.push(p_restaurante);

        return this.restaurantes;

    }

    getRestaurante(p_nombre) {
        let restaurantes = this.restaurantes.filter(rest => rest.name === p_nombre)[0];
        return restaurantes;
    }

    getRestaurantes() {
        return this.restaurantes;
    }

    getRestaurantesPorTipo(p_tipo) {
        let restaurantesPorTipo = this.restaurantes.filter(rest => rest.kindOfRestaurant === p_tipo);
        return restaurantesPorTipo;
    }  
}

module.exports = {
    Restaurantes
}