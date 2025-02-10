import ax from "../../config/axios";

const albumServices = {
    async search(params?: ISearchAlbumsQueryParams): Promise<IApiResponse<IAlbum[]>> {
        try {
            const response = await ax.get<IApiResponse<IAlbum[]>>(`albums`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async get(id: number, params?: IGetAlbumQueryParams): Promise<IAlbum> {
        try {
            const response = await ax.get<IAlbum>(`albums/${id}`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async getLatest(params?: ILatestAlbumsQueryParams): Promise<IApiResponse<IAlbum[]>> {
        try {
            const response = await ax.get<IApiResponse<IAlbum[]>>(`albums/new`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    },

    async getTop(params?: ITopAlbumsQueryParams): Promise<IApiResponse<IAlbum[]>> {
        try {
            const response = await ax.get<IApiResponse<IAlbum[]>>(`albums/top`, { params })
            return response.data
        } catch (error) {
            throw error;
        }
    }

};

export default albumServices;