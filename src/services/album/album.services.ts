import ax from "../../config/axios";

const albumServices = {
    async searchAlbums(params?: SearchAlbumsQueryParams): Promise<ApiResponse<Album[]>> {
        try {
            const response = await ax.get<ApiResponse<Album[]>>(`albums`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async getAlbum(id: number, params?: getAlbumQueryParams): Promise<Album> {
        try {
            const response = await ax.get<Album>(`albums/${id}`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async getLatestAlbums(params?: getLatestAlbumsQueryParams): Promise<ApiResponse<Album[]>> {
        try {
            const response = await ax.get<ApiResponse<Album[]>>(`albums/new`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async getTopAlbums(params?: getTopAlbumsQueryParams): Promise<ApiResponse<Album[]>> {
        try {
            const response = await ax.get<ApiResponse<Album[]>>(`albums/top`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    }

};

export default albumServices;