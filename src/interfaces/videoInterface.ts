// Оголошення типів для зображення розмірів зображення
export interface Thumbnail {
    height: number;
    url: string;
    width: number;
}

// Оголошення типів для об'єкта відео
export interface VideoItem {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: {
            default: Thumbnail;
            high: Thumbnail;
            medium: Thumbnail;
        };
        title: string;
    };
}

// Оголошення типів для об'єкта відповіді на запит YouTube
export interface IVideo {
    etag: string;
    items: VideoItem[];
    kind: string;
    nextPageToken: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    };
    regionCode: string;
}
