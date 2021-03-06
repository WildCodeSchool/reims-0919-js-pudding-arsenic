import React from 'react'
import ShowIngredients from './ShowIngredients'

const product = [
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/400/263/102/4222/front_fr.8.400.jpg",
		generic_name_fr: "Bière Blonde",
		nutriments: {alcohol: 5},
		manufacturing_places: "Allemagne",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/325/622/111/4591/front_fr.16.100.jpg",
		generic_name_fr: "Vodka 70 cl Poliakov", //"product_name"
		nutriments: {alcohol: 37.55},
		manufacturing_places: "Allemagne",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/326/768/135/6827/front_fr.5.400.jpg",
		generic_name_fr: "Vin rouge", //"product_name"
		nutriments: {alcohol: 12},
		manufacturing_places: "France",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/356/470/001/3342/front_fr.19.400.jpg",
		generic_name_fr: "Vinaigre de cidre", //"product_name"
		nutriments: {alcohol: 5},
		manufacturing_places: "france",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/350/211/000/9449/front_fr.56.400.jpg",
		generic_name_fr: "Pur jus d'orange sans pulpe", //"product_name"
		nutriments: {alcohol: 0},
		manufacturing_places: "Australie",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/325/221/039/0014/front_fr.121.400.jpg",
		generic_name_fr: "Lait demi-écrémé", //"product_name"
		nutriments: {alcohol: 0},
		manufacturing_places: "france",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/315/525/034/9793/front_fr.80.400.jpg",
		generic_name_fr: "Crème chantilly ferme et onctueuse", //"product_name"
		nutriments: {alcohol: 0},
		manufacturing_places: "France",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/541/022/824/5674/front_fr.4.400.jpg",
		generic_name_fr: "Bière", //"product_name"
		nutriments: {alcohol: 9},
		manufacturing_places: "Belgique",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/304/370/010/3715/front_fr.11.400.jpg",
		generic_name_fr: "Cordon rouge", //"product_name"
		nutriments: {alcohol: 12},
		manufacturing_places: "France",
	},
	{
		image_front_url:
			"https://static.openfoodfacts.org/images/products/356/007/096/2334/front_fr.23.400.jpg",
		generic_name_fr: "Miel des terres blanches de Champagne", //"product_name"
		nutriments: {alcohol: 0},
		manufacturing_places: "France",
	},
]

function randomIngredientNumber() {
    let numbers = [3, 4, 5, 6, 7]
    let idNumbers = Math.floor(Math.random() * 5)
    return numbers[idNumbers]
}

function ShowIngredientList () {    
    return (
        product
            .splice(0, randomIngredientNumber())
            .map(product => <ShowIngredients {...product} />)
    )        
}

export default ShowIngredientList