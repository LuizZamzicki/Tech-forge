abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort();
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item); 
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

const movies = new MoviesFavoriteManager();
movies.addFavorite("Interestelar");
movies.addFavorite("Avatar");
movies.addFavorite("Avatar");
console.log("Filmes:", movies.getFavorites());

const books = new BooksFavoriteManager();
books.addFavorite("O Hobbit");
books.addFavorite("1984");
console.log("Livros:", books.getFavorites());
