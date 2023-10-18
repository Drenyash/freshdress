const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const hidden = fs.readFileSync("src/includes/hidden.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "index.html",
		inject: "body",
		title: "Главная FreshDress",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/product-page.html",
		filename: "product-page.html",
		inject: "body",
		title: "Карточка товара",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/catalog.html",
		filename: "catalog.html",
		inject: "body",
		title: "Каталог",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/delivery-info.html",
		filename: "delivery-info.html",
		inject: "body",
		title: "Доставка и оплата",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/return.html",
		filename: "return.html",
		inject: "body",
		title: "Возврат",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/guarantee.html",
		filename: "guarantee.html",
		inject: "body",
		title: "Гарантия",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/static-page-tabs.html",
		filename: "static-page-tabs.html",
		inject: "body",
		title: "Уход",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/cart.html",
		filename: "cart.html",
		inject: "body",
		title: "Корзина",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/favorite.html",
		filename: "favorite.html",
		inject: "body",
		title: "Избранное",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/order.html",
		filename: "order.html",
		inject: "body",
		title: "Оформление заказа",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/about.html",
		filename: "about.html",
		inject: "body",
		title: "О нас",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/news.html",
		filename: "news.html",
		inject: "body",
		title: "Новости",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/news-detail.html",
		filename: "news-detail.html",
		inject: "body",
		title: "Новости - детальная",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
];
