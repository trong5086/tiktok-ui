import * as request from '~/utils/httpRequest';
export const getSuggested = async ({ page = 1, perPage = 5 }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_Page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowing = async ({ page = 1 }) => {
    try {
        const res = await request.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
