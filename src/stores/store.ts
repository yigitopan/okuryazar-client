import { defineStore } from 'pinia'
import Article from '../models/article';
import News from '../models/news'
import Author from '../models/author'

export const okuryazarStore = defineStore('okuryazar-api', {
    state: () => ({
      firstOfNews: {} as News,
      news: [] as News[],
      articles:[] as Article[],
      authors:[] as Author[],
      newsByCategory:[] as News[],
      context: {} as News | Article,
      searchResults:[] as (News | Article)[],
      articlesOfAuthor:[] as Article[],
      newsByNewspaper:[] as News[],
      articlesByNewspaper:[] as Article[],
    }),
    getters: {
      getNews: (state) => state.news,
      getArticles: (state) => state.articles,
      getAuthors: (state) => state.authors,
      getFirst: (state) => state.firstOfNews,
      getNewsByCategory: (state) => state.newsByCategory,
      getContext: (state) => state.context,
      getSearchResults: (state) => state.searchResults,
      getArticlesOfAuthor: (state) => state.articlesOfAuthor,
      getNewsByNewspaper: (state) => state.newsByNewspaper,
      getArticlesByNewspaper: (state) => state.articlesByNewspaper,
    },
    actions: {
      async fetchNews() {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/news/all", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.news = result;
            this.firstOfNews = result[0];
          })
          .catch(error => console.log('error', error));
      },

      async fetchArticles() {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/articles/all", requestOptions)
          .then(response => response.json())
          .then(result => this.articles = result)
          .catch(error => console.log('error', error));
      },

      async fetchAuthors() {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/authors", requestOptions)
          .then(response => response.json())
          .then(result => this.authors = result)
          .catch(error => console.log('error', error));
      },

      async fetchNewsByCategory(categoryParam: 'gundem'|'dunya'|'ekonomi'|'spor') {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/category/${categoryParam}`, requestOptions)
          .then(response => response.json())
          .then(result => this.newsByCategory = result)
          .catch(error => console.log('error', error));
      },

      setContext(item: News | Article) {
        this.context = item
      },

      async search(searchParam: String) {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/search/${searchParam}`, requestOptions)
          .then(response => response.json())
          .then(result => this.searchResults = result)
          .catch(error => console.log('error', error));
      },

      async fetchArticlesOfAuthor(authorName: String) {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/articles/author/${authorName}`, requestOptions)
          .then(response => response.json())
          .then(result => this.articlesOfAuthor = result)
          .catch(error => console.log('error', error));
      },

      async fetchByNewspaper(newspaperName: String) {
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/both/${newspaperName}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.newsByNewspaper = result.news;
            this.articlesByNewspaper = result.articles;
          })
          .catch(error => console.log('error', error));
      },
    },
  })