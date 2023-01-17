import { defineStore } from 'pinia'
import Article from '../models/article';
import News from '../models/news'
import Author from '../models/author'

export const okuryazarStore = defineStore('okuryazar-api', {
    state: () => ({
      loading: true as Boolean,
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
      getLoadingState:(state) => state.loading,
    },
    actions: {
      loadingDone() {
        this.loading = false
      },

      async fetchNews() {
        this.loading = true;
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/news/all", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.news = result;
            this.firstOfNews = result[0];
            ;
          })
          .catch(error => console.log('error', error));
      },

      async fetchArticles() {
        this.loading = true;
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/articles/all", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.articles = result
            ;
          })
          .catch(error => console.log('error', error));
      },

      async fetchAuthors() {
        this.loading = true;
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://inf303.herokuapp.com/okuryazar-api/get/authors", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.authors = result
            
          })
          .catch(error => console.log('error', error));
      },

      async fetchNewsByCategory(categoryParam: 'gundem'|'dunya'|'ekonomi'|'spor') {
        this.loading = true
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/category/${categoryParam}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.newsByCategory = result
          })
          .catch(error => console.log('error', error));
      },

      setContext(item: News | Article) {
        this.context = item
      },

      async search(searchParam: String) {
        this.loading = true;
        console.log("test")
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/search/${searchParam}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            ;
            this.searchResults = result
        console.log("finik")

          })
          .catch(error => console.log('error', error));
      },

      async fetchArticlesOfAuthor(authorName: String) {
        this.loading = true;
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/articles/author/${authorName}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.articlesOfAuthor = result
            this.loading = false;
          })
          .catch(error => console.log('error', error));
      },

      async fetchByNewspaper(newspaperName: String) {
        this.loading = true
        let requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`https://inf303.herokuapp.com/okuryazar-api/get/both/${newspaperName}`, requestOptions)
          .then(response =>  response.json())
          .then(result => {
            this.newsByNewspaper = result.news;
            this.articlesByNewspaper = result.articles;
          })
          .catch(error => console.log('error', error));
      },
    },
  })